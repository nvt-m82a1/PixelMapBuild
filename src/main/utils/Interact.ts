import { MapControls } from "three/examples/jsm/controls/MapControls";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { World } from "../entities/World";

class Interact {
  world: World
  mapControl: MapControls;
  dragControl: DragControls;

  constructor(world: World) {
    this.world = world;
    this.mapControl = new MapControls(this.world.camera, this.world.render.domElement);
    this.mapControl.listenToKeyEvents(window);

    this.dragControl = new DragControls(this.world.objects, this.world.camera, this.world.render.domElement);
    this.dragControl.addEventListener('dragstart', (event) => {
      this.mapControl.enabled = false;
    });

    this.dragControl.addEventListener('drag', function (event) {
      event.object.position.z = 0.25;
    })

    this.dragControl.addEventListener('dragend', (event) => {
      this.mapControl.enabled = true;
    });

  }
}

export { Interact }
