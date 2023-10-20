import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';

const ThreeScene = () => {
  const mount = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.9, 5000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // make the background transparent
    mount.current.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 0, 2);
    scene.add(light);

    setTimeout(() => {
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshPhongMaterial({ color: 0x00feee, transparent: true, opacity: 0.3});
      const cube1 = new THREE.Mesh(geometry, material);
      cube1.position.z = -2.5; // move the cube further away from the camera
      scene.add(cube1);

      const animate = function () {
        requestAnimationFrame(animate);
        cube1.rotation.x += 0.01;
        cube1.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    }, 3000);

    const handleResize = function () {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // explicitly remove the second canvas element
    const canvasElements = mount.current.getElementsByTagName("canvas");
    if (canvasElements.length > 1) {
      mount.current.removeChild(canvasElements[1]);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div ref={mount} style={{marginTop: '-6vh'}}/>
  );
}

export default ThreeScene;