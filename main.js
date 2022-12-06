'use strict'

function main() {

    // new scene
    const canvas = document.querySelector('nekoruuNyaa');

    const renderer = new Three.WebGLRenderer({
        canvas,
        alpha: true,
    });

    // env setup
    const fov = 75;
    const aspect = 2;  // canvas default size
    const near = 0.1;
    const far = 5;

    // add camera
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.z = 2;

}