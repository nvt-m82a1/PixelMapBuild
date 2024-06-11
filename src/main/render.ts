import { World } from './entities/World';

initRender()

function initRender() {
	const world = new World(document.body);
	world.debuging();
	world.newBox();

	world.start();
}
