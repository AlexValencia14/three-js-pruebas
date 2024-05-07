import { WebGLRenderer } from 'three';

const renderer= new WebGLRenderer( {alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

export default renderer;
