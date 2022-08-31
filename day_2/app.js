import * as Three from 'three';
import webJs from 'three/examples/jsm/capabilities/WebGL';

if(webJs.isWebGLAvailable()){
    console.log('>>> webGl is available. so going on. :)');
}else{
    console.log(">>> webGl is not available. so is danger. :(");
}

// create the renderer
const renderer = new Three.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

// create scene
const sceneOne = new Three.Scene();
const camera = new Three.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

// create a cube
const cubeStyle= {
    geomatry : new Three.BoxGeometry(1,1,1),
    material : new Three.MeshBasicMaterial({color:0x0f8f0f}),
}
const cube = new Three.Mesh(cubeStyle.geomatry,cubeStyle.material);
sceneOne.add(cube);

camera.position.x = 1;
camera.position.y  = 3;
camera.position.z = 13;

renderer.render(sceneOne,camera);