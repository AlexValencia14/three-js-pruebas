import { BoxGeometry, MeshStandardMaterial, Mesh } from 'three';

const geometry = new BoxGeometry( 1, 1, 1 );
const material = new MeshStandardMaterial( { color: 0x00ff00 } );
const cube = new Mesh( geometry, material );
cube.name="cube";


export default cube;