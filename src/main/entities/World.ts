import * as THREE from 'three';
import { BoxItem, Item, MapItem } from './Item';
import { Interact } from '../utils/Interact';

class World {
  width: number;
  height: number;
  scene: THREE.Scene;
  container: HTMLElement;
  map: BoxItem;
  objects: THREE.Object3D[];
  camera: THREE.PerspectiveCamera;
  render: THREE.WebGLRenderer;
  interact: Interact;

  constructor(container: HTMLElement) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.scene = new THREE.Scene();
    this.container = container;
    this.map = new MapItem(this);
    this.scene.add(this.map.mesh);
    this.objects = [];

    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    this.camera.position.z = 15;
    this.scene.add(this.camera);

    this.render = new THREE.WebGLRenderer();
    this.render.setPixelRatio(window.devicePixelRatio);
    this.render.setSize(this.width, this.height);
    this.render.shadowMap.enabled = true;
    this.render.shadowMap.type = THREE.PCFShadowMap;

    this.container.appendChild(this.render.domElement);

    this.interact = new Interact(this);
  }

  start() {
    this.animate = this.animate.bind(this);
    this.render.setAnimationLoop(this.animate);
  }

  animate() {
    this.interact.mapControl.update();
    this.render.render(this.scene, this.camera);
  }

  newBox() {
    const item = new BoxItem(this);
    this.addItem(item);
  }

  debuging() {
    const axesHelper = new THREE.AxesHelper(5);
    this.scene.add(axesHelper);

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xaaaaaa, transparent: true, opacity: 0.8 });
    const lineSegments = new THREE.LineSegments(new THREE.WireframeGeometry(this.map.geometry), lineMaterial);
    lineSegments.visible = true;
    this.scene.add(lineSegments);
  }

  addItem(item: Item) {
    this.scene.add(item.mesh);
    this.objects.push(item.mesh);
  }
}

export { World }
