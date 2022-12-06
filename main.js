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
        const color = 0xFFD700;
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

    // build new polygon material
    function makeInstance(geometry, color, x) {

        const material = new THREE.MeshPhongMaterial({color});
    
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
    
        cube.position.x = x;
    
        return cube;
    }

    // render polygon
    const cubes = [
        makeInstance(geometry, 0x44aa88,  0),
    ];

    // set renderer to screen size (current device)
    function resizeRendererToDisplaySize(renderer) {

        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;

        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
    }

    // render in given time
    function render(time) {
        
        time *= 0.001;
    
        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }
    
        cubes.forEach((cube, ndx) => {
          const speed = 1 + ndx * .1;
          const rot = time * speed;
          cube.rotation.x = rot;
          cube.rotation.y = rot;
        });
    
        renderer.render(scene, camera);
    
        requestAnimationFrame(render);
    }
    
      requestAnimationFrame(render);
}