import * as THREE from 'three';
import WebGl from 'three/examples/jsm/capabilities/WebGL';

// check is webgl support or not
if (WebGl.isWebGLAvailable()){
    console.log("WEBGL ALL OK");
}else{
    console.log("There is no webgl");
}

// create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);


// creating scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, /** field of view */
    window.innerWidth/window.innerHeight, /** aspect ratio */
    0.1, /** near */
    1000
)

// render the camera and scene
renderer.render(scene,camera); /** render the stuff */