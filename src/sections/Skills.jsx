import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function Skill() {
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const scene = new THREE.Scene();

        // 3D Elements Group
        const group = new THREE.Group();
        scene.add(group);

        const skills = [
            "/icon/html.svg",
            "/icon/css.svg",
            "/icon/js.svg",
            "/icon/react.svg",
            "/icon/nodejs.svg",
            "/icon/express.svg",
            "/icon/mongodb.svg",
            "/icon/greensock.svg",
            "/icon/3js.png",
            "/icon/github.svg",



        ];

        const textureLoader = new THREE.TextureLoader();


        // 1000084091.jpg के अनुसार Horizontal Ring का रेडियस
        let radiusX = 8.5;
        let radiusZ = 8.5;
        let cameraZ = 15;

        if (window.innerWidth < 640) {
            radiusX = 5;
            radiusZ = 5;
            cameraZ = 23;
        } else if (window.innerWidth < 768) {
            radiusX = 6;
            radiusZ = 6;
            cameraZ = 18;
        } else if (window.innerWidth <= 1024) {
            radiusX = 7;
            radiusZ = 7;
            cameraZ = 17;
        }

        const planesArray = [];

        skills.forEach((img, index) => {
            // थोड़ा सा रेक्टेंगुलर या स्क्वायर ज्योमेट्री
            const plane = new THREE.Mesh(
                new THREE.PlaneGeometry(1.2, 1.2),
                new THREE.MeshBasicMaterial({
                    map: textureLoader.load(img),
                    transparent: true,
                    side: THREE.DoubleSide,
                })
            );

            // X और Z एक्सिस का उपयोग करके Horizontal Circle/Ellipse बनाना
            const angle = (index / skills.length) * Math.PI * 2;
            plane.position.x = Math.cos(angle) * radiusX;
            plane.position.z = Math.sin(angle) * radiusZ;
            plane.position.y = 0; // सब एक ही हॉरिजॉन्टल लाइन पर रहेंगे

            group.add(plane);
            planesArray.push(plane); // एनीमेशन में एक्सेस करने के लिए स्टोर किया
        });

        // नीचे की चमकती हुई पर्पल लाइन (Glow Ring)
        const ringPositions = [];
        for (let i = 0; i <= 64; i++) {
            const theta = (i / 64) * Math.PI * 2;
            ringPositions.push(new THREE.Vector3(Math.cos(theta) * radiusX, 0, Math.sin(theta) * radiusZ));
        }
        const ringGeometry = new THREE.BufferGeometry().setFromPoints(ringPositions);
        const ringMaterial = new THREE.LineBasicMaterial({
            color: 0x8b5cf6, // Violet / Purple Color
            linewidth: 2
        });
        const baseRing = new THREE.Line(ringGeometry, ringMaterial);
        baseRing.position.y = -0.6; // लोगोज़ के ठीक नीचे सेट करने के लिए
        group.add(baseRing);

        // Group की पोजीशन को थोड़ा नीचे शिफ्ट किया ताकि UI टेक्स्ट के लिए जगह बचे
        group.position.y = -2;

        // Camera - 1000084091.jpg जैसा एंगल्ड व्यू देने के लिए Y को ऊपर बढ़ाया
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, -2, cameraZ); // ऊपर से नीचे देखता हुआ एंगल

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enableZoom = false; // स्क्रोल पर पेज न हिले इसलिए ज़ूम बंद किया है
        controls.enablePan = false;  

        // Resize Handler
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener("resize", handleResize);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            // रिंग को धीरे-धीरे रोटेट करना
            group.rotation.y += 0.005;

            // Billboard Effect: हर लोगो हमेशा कैमरे के सामने सीधा मुँह करके रहेगा
            planesArray.forEach((plane) => {
                plane.lookAt(camera.position);
            });

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            renderer.dispose();
        };
    }, []);

    return (
        <section className="relative top-0 w-full h-screen overflow-hidden bg-black font-sans">
            <canvas ref={canvasRef} />
            <div className="absolute top-10  w-full text-center text-white  ">
                <h1 className="text-violet-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif ">Skills</h1>

                {/* Purple Line Design */}
                <div className="flex items-center justify-center  ">
                    <div className="w-24 h-[2px] bg-gray-300"></div>
                    <div className="mx-3 text-violet-400 text-xl">✦</div>
                    <div className="w-24 h-[2px]  bg-gray-300"></div>
                </div>
                <p className="text-center text-sm sm:text-base md:text-lg ">Building immersive web experiences with<span className="ml-2 text-violet-400">MERN Stack,</span></p>
                <p className="text-center text-sm sm:text-base md:text-lg"><span className="text-violet-400 mr-2">Three.js, GSAP</span>and modern web technologies</p>
            </div>



        </section>
    );
}


