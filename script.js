/* Three.js - Background CSS from
https://r105.threejsfundamentals.org/threejs/threejs-background-css.html */


  'use strict';

/* global THREE */

function main() {

  // make canvas
  const canvas = document.querySelector('#c');

  // make [new] renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
  });

  // define camera variables
  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;

  // setup camera
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  // create new scene
  const scene = new THREE.Scene();
  {
    const color = 0x87CEEB;
    const intensity = 150;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-2, 4, 16);
    scene.add(light);
  }

  // set up box geometry
  const boxWidth = 1.0;
  const boxHeight = 1.0;
  const boxDepth = 1.0;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  // build polygon
  function makeInstance(geometry, color, x) {

    const material = new THREE.MeshPhongMaterial({color});

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;

    return cube;
  }

  // make polygon for rendering
  const cubes = [
    makeInstance(geometry, 0x44aa88,  0),
  ];

  // mobile-query breakpoint to current device screen
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

    // render scene with camera
    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

// main driver function callback
main();
