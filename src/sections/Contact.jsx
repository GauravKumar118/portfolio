
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function Contact() {
    const canvasRef = useRef();
    useEffect(() => {
        const canvas = canvasRef.current;

        const width = window.innerWidth;
        const height = window.innerHeight;

        // Scene
        const scene = new THREE.Scene();



        const textureloder = new THREE.TextureLoader();
        const texture = textureloder.load("/about.png");
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(3, 1);


        // object
        const geometry = new THREE.SphereGeometry(15, 32, 16);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        sphere.position.x = 20;


        // Camera
        const camera = new THREE.PerspectiveCamera(
            45,
            width / height,
            0.1,
            100
        );
        camera.position.z = 50;

        /**
         * Stars
         */

        const settings = {
            count: 7000,
        };

        const starsGeometry = new THREE.BufferGeometry();

        const starPositions = new Float32Array(
            settings.count * 3
        );

        for (let i = 0; i < settings.count * 3; i++) {
            starPositions[i] = (Math.random() - 0.5) * 150;
        }

        starsGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(starPositions, 3)
        );

        const stars = new THREE.Points(
            starsGeometry,
            new THREE.PointsMaterial({
                color: "#ffffff",
                size: 0.2,
                sizeAttenuation: true,
            })
        );

        scene.add(stars);

        // control
        const controls = new OrbitControls(camera, canvas);
        controls.enableRotate = false;
        controls.enablePan = false;
        controls.enableZoom = false;

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,

        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);

            if (width < 640) {
                sphere.scale.set(0.55, 0.55, 0.55);
                sphere.position.set(0, 0, 0);
                camera.position.z = 45;
            }
            else if (width < 768) {
                sphere.scale.set(0.8, 0.8, 0.8);
                sphere.position.set(13, 0, 0);
                camera.position.z = 55;
            }
            else if (width <= 1024) {
                sphere.scale.set(0.8, 0.8, 0.8);
                sphere.position.set(15, 0, 0);
                camera.position.z = 57;
            }
            else {
                sphere.scale.set(1, 1, 1);
                sphere.position.set(18, 0, 0);
                camera.position.z = 50;
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);






        //animation
        const clock = new THREE.Clock();

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();
            sphere.rotation.y += 0.012;
            sphere.rotation.x += 0.012;
            stars.rotation.y = elapsedTime * 0.20;

            controls.update();

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();



    }, []);



    return (
        <>
            <Navbar />

            <section className="relative min-h-screen overflow-hidden bg-black">

                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                />

                <div className="absolute top-0 w-full z-10 flex min-h-screen items-center px-4 sm:px-6 md:px-10 lg:px-16">

                    <div
                        className="
                    w-full
                    sm:w-[100%]
                    md:w-[400px]
                    lg:w-[500px]                    
                    font-serif
                 
                  

                    rounded-[25px]
                    md:rounded-[30px]

                    p-5
                    sm:p-6
                    md:p-8

                    text-white
                    shadow-2xl
                "
                    >
                        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest ">
                            Get In Touch
                        </p>

                        <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold mb-3">
                            Contact<span>.</span>
                        </h1>

                        <form>
                            <div>
                                <label>Your Name</label>

                                <input
                                    type="text"
                                    placeholder="What's your name?"
                                    className="
                                w-full
                                bg-[#130c35]
                                mt-1
                                mb-2
                                px-4
                                sm:px-6
                                py-3
                                sm:py-4
                                rounded-xl
                                outline-none
                                border border-transparent
                                focus:border-violet-500
                            "
                                />
                            </div>

                            <div>
                                <label>Your Email</label>

                                <input
                                    type="email"
                                    placeholder="What's your email?"
                                    className="
                                w-full
                                bg-[#130c35]
                                mt-1
                                mb-2
                                px-4
                                sm:px-6
                                py-3
                                sm:py-4
                                rounded-xl
                                outline-none
                                border border-transparent
                                focus:border-violet-500
                            "
                                />
                            </div>

                            <div>
                                <label>Your Message</label>

                                <textarea
                                    rows="5"
                                    placeholder="What do you want to say?"
                                    className="
                                w-full
                                bg-[#130c35]
                                mt-1
                                px-4
                                sm:px-6
                                py-3
                                sm:py-4
                                rounded-xl
                                outline-none
                                resize-none
                                border border-transparent
                                focus:border-violet-500
                            "
                                />
                            </div>

                            <button
                                type="submit"
                                className="
                            mt-1
                            bg-[#1b1245]
                            px-6
                            py-3
                            rounded-2xl
                            font-semibold
                            transition-all
                            hover:scale-105
                        "
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
