import camera from "./src/basic/camera.js";
import renderer from "./src/basic/renderer.js";
import scene from "./src/basic/scene.js";
import cube from "./src/basic/shape/cube.js";
import light from "./src/basic/light.js";
import grid from "./src/basic/grid.js";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

scene.add(cube);
scene.add(grid);
scene.add( light );

camera.position.set(5,5,5);

camera.lookAt(cube.position);

controls.update();

function animate() {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );

}
animate();