import { World } from './entities/World';

initRender()

function initRender() {
	const world = new World(document.body);
	world.newBox();
	world.newBox();
	
	world.debuging();
	world.start();
}
