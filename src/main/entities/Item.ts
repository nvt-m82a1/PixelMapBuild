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
  constructor(world: World) {
    super(world);

    this.geometry = new THREE.BoxGeometry(10, 10, 0.1);
    // this.material = new THREE.MeshNormalMaterial();
    this.material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }
}

class BoxItem extends Item {
  constructor(world: World) {
    super(world);

    this.geometry = new THREE.BoxGeometry(1, 1, 0.3);
    // this.material = new THREE.MeshNormalMaterial();
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.setZ(0.25);
  }
}

export { Item, BoxItem, MapItem }
