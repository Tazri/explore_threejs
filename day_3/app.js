import * as Three from 'three';
import webGl from 'three/examples/jsm/capabilities/WebGL';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

if(webGl.isWebGLAvailable()){
    console.log(">>> WebGl Working as Well :)");
}else{
    console.log(">>> WebGl Not Working as Well :(");
}


// set up renderer
const renderer = new Three.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

// create scene
const scene = new Three.Scene();
const camera = new Three.PerspectiveCamera(15,window.innerWidth/innerHeight,1,400);
camera.position.set(3,2,50);
camera.lookAt(0,0,0);

// add orbit controller
const orbit = new OrbitControls(camera,renderer.domElement);
orbit.update();


// create axis helper
const axisHelper = new Three.AxesHelper(5);
scene.add(axisHelper);


// render the scene and camera
renderer.render(scene,camera);