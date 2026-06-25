import Navbar from "../Component/Navbar"
import Service from "./service "
import Experience from "./experiences "
import Skill from "./Skills"
import Contact from "./Contact"
import Footer from "../Component/Footer"


import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


export default function About() {

    const modelRef = useRef(null);
    const targetRotation = useRef(0);

    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;

        const width = window.innerWidth;
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        const height = window.innerHeight;

        // Scene
        const scene = new THREE.Scene();




        let mixer;
        let model;
        const loader = new GLTFLoader();
        loader.load("/computer_and_laptop.glb", (gltf) => {
            model = gltf.scene;
            modelRef.current = model;
            scene.add(model);

            const updateModel = () => {
                if (window.innerWidth < 640) {
                    model.scale.set(0.5, 0.5, 0.5);
                    model.position.set(0, -25, 0);
                    camera.position.z = 77;
                }
                else if (window.innerWidth < 768) {
                    model.scale.set(0.7, 0.7, 0.7);
                    model.position.set(0, -25, 0);
                    camera.position.z = 80;
                }
                else if (window.innerWidth <= 1024) {
                    model.scale.set(0.7, 0.7, 0.7);
                    model.position.set(0, -25, 0);
                    camera.position.z = 80;
                }
                else {
                    model.scale.set(1, 1, 1);
                    model.position.set(0, -25, 0);
                    camera.position.z = 90;
                }
            };

            updateModel();

            window.addEventListener("resize", updateModel);
        });


        // Camera
        const camera = new THREE.PerspectiveCamera(
            45,
            width / height,
            0.1,
            100
        );
        camera.position.z = 75.5;




        // Soft base light
        const light = new THREE.AmbientLight(0xffffff, 2);
        scene.add(light);

        // Main light (front + upar se)
        const dirLight = new THREE.DirectionalLight(0xffffff, -1);
        dirLight.position.set(5, 5, 5); // balanced angle
        scene.add(dirLight);

        // Extra fill light (dusri side se, taaki model gayab na ho)
        const fillLight = new THREE.DirectionalLight(0xffffff, 1);
        fillLight.position.set(-10, -30, 50);
        scene.add(fillLight);

        // control
        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.enableRotate = false; // mouse se rotate band
        controls.enableZoom = false;   // zoom band
        controls.enablePan = false;    // move band


        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 10)
        );
        renderer.outputColorSpace =
            THREE.SRGBColorSpace;

        renderer.toneMapping =
            THREE.ACESFilmicToneMapping;

        renderer.toneMappingExposure = 1.5;


        //animation
        const clock = new THREE.Clock();

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();
            if (
                modelRef.current &&
                modelRef.current.userData.rotate
            ) {
                modelRef.current.rotation.y += 0.01;

            }

            controls.update();
            if (modelRef.current) {
                modelRef.current.rotation.y +=
                    (targetRotation.current - modelRef.current.rotation.y) * 0.05;
            }

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            renderer.setSize(
                sizes.width,
                sizes.height
            );

            renderer.setPixelRatio(
                Math.min(window.devicePixelRatio, 2)
            );
        };

        window.addEventListener("resize", handleResize);


        return () => {
            window.removeEventListener("resize", handleResize);
        };




    }, []);


    return (
        <>

            <section className="relative top-0 w-full bg-cover bg-center bg-no-repeat  font-serif  overflow-hidden text-gray-400 "
                style={{
                    backgroundImage: "url('/about.png')",
                }}>
                <Navbar />
                <canvas ref={canvasRef} />

                <div className="absolute top-20 left-5    w-[85%] sm:w-[80%] md:w-[70%] lg:w-[70%]   overflow-hidden ">
                    <p className="text-5xl   md:text-5xl lg:text-7xl">Hi I'm<span className=" ml-1 text-violet-500"><b>Gaurav Saini</b></span> </p>
                    <p className=" text-sm md:text-base lg:text-lg  font-sans ">I build fast, responsive, and visually engaging web applications.From powerful MERN Stack backends to interactive Three.js scenes and smooth GSAP animations, I love turning ideas into digital experiences.</p>

                </div>
                <button
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[9999]
               w-8 h-8 rounded-full bg-violet-200 animate-pulse
               shadow-[0_0_20px_#8b5cf6]"
                    onMouseEnter={() => {
                        targetRotation.current = Math.PI / 0.50; // side view
                    }}
                    onMouseLeave={() => {
                        targetRotation.current = 0; // original position
                    }}
                />


            </section>
            
            <Service />
            <Experience />
            {/* < Skill /> */}
            <Footer />





        </>
    )
} 