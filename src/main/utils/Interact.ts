import { MapControls } from "three/examples/jsm/controls/MapControls";
import { World } from "../entities/World";
import { DragControls } from "three/examples/jsm/controls/DragControls";

class Interact {
  world: World
  mapControl: MapControls;
  dragControl: DragControls;

  constructor(world: World) {
    this.world = world;
    this.mapControl = new MapControls(this.world.camera, this.world.render.domElement);
    this.mapControl.listenToKeyEvents(window);

    this.dragControl = new DragControls(this.world.objects, this.world.camera, this.world.render.domElement);
    this.dragControl.addEventListener('dragstart', function (event) {
      this.mapControl.enabled = false;
    });
    this.dragControl.addEventListener('dragend', function (event) {
      this.mapControl.enabled = true;
    });

  }
}

export { Interact }
