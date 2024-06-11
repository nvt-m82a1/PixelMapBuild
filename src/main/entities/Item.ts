import * as THREE from 'three';
import { World } from "./World";

class Item {
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  mesh: THREE.Mesh;
  world: World;
  X: number;
  Y: number;

  constructor(world: World) {
    this.world = world;
  }
}

class MapItem extends Item {
  grid: THREE.GridHelper

  constructor(world: World) {
    super(world);

    this.geometry = new THREE.PlaneGeometry(10, 10);
    this.material = new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide });
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.grid = new THREE.GridHelper(10, 10);
    this.grid.rotation.x = Math.PI / 2;
    this.grid.position.z = 0.01;
  }
}

class BoxItem extends Item {
  constructor(world: World) {
    super(world);

    this.geometry = new THREE.BoxGeometry(1, 1, 0.3);
    // this.material = new THREE.MeshNormalMaterial();
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.z = 0.16;
  }
}

export { Item, BoxItem, MapItem }
