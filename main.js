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

    const scene = new Three.Scene();
    {
        const color = 0xFFFFFF;
        const intensity = 1;

        // added light
        const light = new THREE.DirectionalLight(color, intensity);

        light.position.set(-1, 2, 4);

        scene.add(light);
    }

    // set up box
    const boxWidth = 0.5;
    const boxHeight = 0.5;
    const boxDepth = 0.5;

    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
}