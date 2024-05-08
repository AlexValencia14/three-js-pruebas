import camera from "./src/basic/camera.js";
import renderer from "./src/basic/renderer.js";
import scene from "./src/basic/scene.js";
import cube from "./src/basic/shape/cube.js";
import light from "./src/basic/light.js";
import grid from "./src/basic/grid.js";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

//import Stats from 'three/addons/libs/stats.module.js';
import Stats from "three/examples/jsm/libs/stats.module.js";

import { Raycaster } from "three";
import { Vector2 } from "three";

//Controla la orbita
const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

//para dar click
const raycaster = new Raycaster();
const pointer = new Vector2();

scene.add(cube);
scene.add(grid);
scene.add( light );

camera.position.set(5,5,5);

camera.lookAt(0,10,10);

controls.update();

let stats = new Stats();

document.body.appendChild(stats.dom)


function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components
	event.preventDefault();

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	// update the picking ray with the camera and pointer position
	raycaster.setFromCamera( pointer, camera );
	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects( scene.children );

	for ( let i = 0; i < intersects.length; i ++ ) {

		intersects[ i ].object.material.color.set( 0xff0000 );

	}

}

function animate() {
    requestAnimationFrame( animate );
	
    controls.update();



	render();

	stats.update();

}


function render() {

	renderer.render( scene, camera );

}
window.addEventListener( 'pointermove', onPointerMove );
animate();

//animate();