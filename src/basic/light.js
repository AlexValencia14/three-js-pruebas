
import { AmbientLight, DirectionalLight } from 'three';
const light = new AmbientLight( 0x404040 ); // soft white light
const directionalLight = new DirectionalLight( 0xffffff, 0.5 );
light.add( directionalLight );

export default light;