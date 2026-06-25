import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { Link } from "react-router";
import About from "./About"


export default function Hero() {
    const canvasRef = useRef(null);


    useEffect(() => {
        const canvas = canvasRef.current;

        /**
         * Scene
         */
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#000000");

        /**
         * Galaxy Settings
         */
        const settings = {
            count: 100000,
            size: 0.01,
            radius: 5,
            branch: 4,
            spin: 1,
            randomnes: 0.2,
            power: 3,
            inside: "#380078",
            outside: "#888888",
        };

        let galaxyGeometry = null;
        let galaxyMaterial = null;
        let galaxyPoints = null;

        const generateGalaxy = () => {
            if (galaxyPoints) {
                galaxyGeometry.dispose();
                galaxyMaterial.dispose();
                scene.remove(galaxyPoints);
            }

            galaxyGeometry = new THREE.BufferGeometry();

            const positions = new Float32Array(settings.count * 3);
            const colors = new Float32Array(settings.count * 3);

            const insideColor = new THREE.Color(settings.inside);
            const outsideColor = new THREE.Color(settings.outside);

            for (let i = 0; i < settings.count; i++) {
                const i3 = i * 3;

                const radius = Math.random() * settings.radius;
                const branchAngle =
                    ((i % settings.branch) / settings.branch) * Math.PI * 2;

                const spinAngle = radius * settings.spin;

                const randomX =
                    Math.pow(Math.random(), settings.power) *
                    (Math.random() < 0.5 ? 1 : -1) *
                    settings.randomnes *
                    radius;

                const randomY =
                    Math.pow(Math.random(), settings.power) *
                    (Math.random() < 0.5 ? 1 : -1) *
                    settings.randomnes *
                    radius;

                const randomZ =
                    Math.pow(Math.random(), settings.power) *
                    (Math.random() < 0.5 ? 1 : -1) *
                    settings.randomnes *
                    radius;

                positions[i3] =
                    Math.cos(branchAngle + spinAngle) * radius + randomX;

                positions[i3 + 1] = randomY;

                positions[i3 + 2] =
                    Math.sin(branchAngle + spinAngle) * radius + randomZ;

                const mixedColor = insideColor.clone();
                mixedColor.lerp(outsideColor, radius / settings.radius);

                colors[i3] = mixedColor.r;
                colors[i3 + 1] = mixedColor.g;
                colors[i3 + 2] = mixedColor.b;
            }

            galaxyGeometry.setAttribute(
                "position",
                new THREE.BufferAttribute(positions, 3)
            );

            galaxyGeometry.setAttribute(
                "color",
                new THREE.BufferAttribute(colors, 3)
            );

            galaxyMaterial = new THREE.PointsMaterial({
                size: settings.size,
                sizeAttenuation: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
                vertexColors: true,
            });

            galaxyPoints = new THREE.Points(
                galaxyGeometry,
                galaxyMaterial
            );

            scene.add(galaxyPoints);
        };

        generateGalaxy();
        /**
 * GUI
 */
        const gui = new GUI();
        gui.close(); // default closed

        gui.add(settings, "count")
            .min(100)
            .max(1000000)
            .step(100)
            .onFinishChange(generateGalaxy);

        gui.add(settings, "size")
            .min(0.0001)
            .max(1)
            .step(0.0001)
            .onFinishChange(generateGalaxy);

        gui.add(settings, "radius")
            .min(0.1)
            .max(20)
            .step(0.01)
            .onFinishChange(generateGalaxy);

        gui.add(settings, "branch")
            .min(2)
            .max(12)
            .step(1)
            .onFinishChange(generateGalaxy);

        gui.add(settings, "power")
            .min(1)
            .max(10)
            .step(1)
            .onFinishChange(generateGalaxy);

        gui.add(settings, "spin")
            .min(-5)
            .max(5)
            .step(0.001)
            .onFinishChange(generateGalaxy);

        gui.add(settings, "randomnes")
            .min(0)
            .max(2)
            .step(0.001)
            .onFinishChange(generateGalaxy);

        gui.addColor(settings, "inside")
            .onFinishChange(generateGalaxy);

        gui.addColor(settings, "outside")
            .onFinishChange(generateGalaxy);

        /**
         * Sizes
         */
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        /**
         * Camera
         */
        const camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            0.1,
            100
        );

        camera.position.set(3, 3, 3);
        scene.add(camera);

        /**
         * Stars
         */
        const starsGeometry = new THREE.BufferGeometry();

        const starPositions = new Float32Array(
            settings.count * 3
        );

        for (let i = 0; i < settings.count * 3; i++) {
            starPositions[i] = (Math.random() - 0.5) * 250;
        }

        starsGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(starPositions, 3)
        );

        const stars = new THREE.Points(
            starsGeometry,
            new THREE.PointsMaterial({
                color: "#ffffff",
                size: 0.02,
                sizeAttenuation: true,
            })
        );

        scene.add(stars);




        /**
         * Controls
         */
        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true,
        });

        renderer.setSize(
            sizes.width,
            sizes.height
        );

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        );

        /**
         * Resize
         */
        const handleResize = () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            camera.aspect =
                sizes.width / sizes.height;

            camera.updateProjectionMatrix();

            renderer.setSize(
                sizes.width,
                sizes.height
            );
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        /**
         * Animation
         */
        const clock = new THREE.Clock();

        const animate = () => {
            const elapsedTime =
                clock.getElapsedTime();

            stars.rotation.y = elapsedTime * 0.10;

            galaxyPoints.rotation.y = elapsedTime * 0.4;

            controls.update();

            renderer.render(scene, camera);

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            gui.destroy();

            window.removeEventListener(
                "resize",
                handleResize
            );

            controls.dispose();
            renderer.dispose();

            galaxyGeometry?.dispose();
            galaxyMaterial?.dispose();
            starsGeometry.dispose();
            window.removeEventListener(
                "resize",
                handleResize
            );

            controls.dispose();
            renderer.dispose();

            galaxyGeometry?.dispose();
            galaxyMaterial?.dispose();
            starsGeometry.dispose();
        };
    }, []);

    return (
        <section className=" relative  w-full h-screen  text-gray-400   justify-items-center  overflow-hidden  ">
            <canvas ref={canvasRef} />

            <div className="absolute top-10 sm-top-0  md:top-0 lg:top-0    pointer-events-none  overflow-hidden justify-items-center ">
                <h1 className="text-4xl lg:text-6xl font-serif ">GAURAV <span className="text-violet-600/80">SAINI</span></h1>
                <p>Creative Full Stack & 3D Web Developer</p>


            </div>

            <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 ">
                <Link to='/About' className=" border-b border-t border-violet-600/70 px-3 py-2  backdrop-blur-[3px]  rounded-full pointer-events-auto  ">View Portfolio <i class="fa-solid fa-arrow-right text-violet-600/70  "></i> </Link>
            </div>



        </section >
    );
}