import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function HeroSection() {
    const canvasContainerRef = useRef(null);

    useEffect(() => {
        if (!canvasContainerRef.current) return;

        // === Three.js Logic Start ===

        const container = canvasContainerRef.current;
        const scene = new THREE.Scene();
        scene.background = null;

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, -10);
        camera.rotation.y = Math.PI; // 3.14

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            /*premultipliedAlpha: false*/
        });
        renderer.shadowMap.enabled = true;
        /*renderer.shadowMap.type = THREE.PCFSoftShadowMap;*/
        renderer.setSize(window.innerWidth, window.innerHeight);
        /*renderer.toneMapping = THREE.ACESFilmicToneMapping;*/
        renderer.toneMappingExposure = 0.5;
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        container.appendChild(renderer.domElement);

        // Lights
        const ambient = new THREE.AmbientLight(0xffffff, 0.5);
        ambient.position.set(0, 0, -5);
        scene.add(ambient);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
        directionalLight.position.set(0, 0, -10);
        /*directionalLight.castShadow = true;*/
        /*directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;*/
        /*directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 50;*/
        scene.add(directionalLight);

        // Load GLB model
        let doorObject;
        const loader = new GLTFLoader();
        loader.load('/assets/newnew_door.glb', (gltf) => {
            const model = gltf.scene;
            model.scale.set(2, 2, 2);
            scene.add(model);
            model.position.set(0, 0, 0);

            // Set up shadows for the model
            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            doorObject = model.getObjectByName('door');
            const textObject = model.getObjectByName('Text');

            if (textObject) {
                textObject.rotation.set(Math.PI / 2, 0, Math.PI);
            }
        });

        // Scroll handling variables
        let targetRotation = 0;
        let currentRotation = 0;
        const zoomStart = -10;
        const zoomEnd = -1;
        let targetZoom = zoomStart;
        let currentZoom = zoomStart;
        const maxScroll = 3500;

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            let progress = Math.min(1, scrollTop / maxScroll); // Обмежуємо прогрес до 1

            // Door rotation
            let cycleProgress = progress % 1;
            targetRotation = -cycleProgress * (Math.PI / 1.5);

            // Camera zoom
            targetZoom = zoomStart + (zoomEnd - zoomStart) * progress;
        };

        window.addEventListener('scroll', handleScroll);

        // Render loop
        const animate = () => {
            requestAnimationFrame(animate);

            if (doorObject) {
                currentRotation = THREE.MathUtils.lerp(currentRotation, targetRotation, 0.1);
                doorObject.rotation.y = currentRotation;
            }

            currentZoom = THREE.MathUtils.lerp(currentZoom, targetZoom, 0.1);
            camera.position.z = currentZoom;

            renderer.render(scene, camera);
        };
        animate();

        // Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function (важливо для React)
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
        };

        // === Three.js Logic End ===

    }, []); // Порожній масив означає, що ефект запускається лише один раз при монтуванні

    return (
        <section id="welcome_sect">
            <div className="space"></div>
            <div className="welcome_text text1">
                <p className="welcome_head">Your journey begins here.</p>
                <p className="welcome_article">Find unique places, local secrets, and must-see sights in over 50 capital cities.</p>
            </div>
            <div className="welcome_text text2">
                <p className="welcome_head">Discover the <br /> hidden gems of<br /> the world's <br />capitals.</p>
            </div>
            <div className="welcome_text text3">
                <p className="welcome_article">Every city has<br /> a story. Let us help you<br /> find yours.</p>
            </div>
            <div className="welcome_text text4">
                <p className="welcome_article">Scroll to see more...</p>
            </div>
            <div className="container">
                <div id="canvas-container" ref={canvasContainerRef}></div> {/* Використовуємо ref */}
            </div>
        </section>
    );
}

export default HeroSection;