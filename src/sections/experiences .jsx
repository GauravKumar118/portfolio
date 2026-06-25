export default function Experience() {
    return (
        <section className=" relative w-full bg-black justify-items-center   overflow-hidden text-white font-serif">

            <p className=" text-xs sm:text-sm md:text-base lg:text-lg">WHAT I HAVE DONE SO FAR</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">Work <span className="text-violet-500 ">Experience.</span></h1>

            {/* line */}
            <section className="relative py-10 justify-items-center overflow-hidden w-full">
                {/* 1 */}
                <div className=" w-full justify-items-center ">
                    <div className="w-px h-5 bg-black md:bg-white lg:bg-white" />                    
                    <img src="/icon/react.svg" className="w-[40px] h-[40px]  border  border-white rounded-full" />

                    <div className="w-px h-60  bg-black md:bg-white lg:bg-white " />
                    <img src="/full.svg" className="w-[40px] h-[40px]  border  border-white rounded-full " />

                    <div className="w-px h-60 bg-black md:bg-white lg:bg-white" />
                    <img src="/3web.svg" className="w-[40px] h-[40px]  border  border-white rounded-full " />

                    <div className="w-px h-60  bg-black md:bg-white lg:bg-white" />
                </div>

                <div className="absolute top-17 grid grid-cols-1 gap-65  text-sm">
                    <span className="ml-46 " >jul 2021 - jun 2024</span >
                    <span  >jan 2023 - jun 2023</span>
                    <span className="ml-46 " >jun 2026 - present</span>
                </div>
            </section>


            {/* card */}

            <section className="absolute top-40 md:top-43 lg:top-43 grid  justify-items-center gap-12 w-full text-gray-100 font-sans">
                {/* 1 */}
                <div className="w-90 h-58  border-b border-gray-400   bg-violet-500/15  overflow-hidden  md:mr-90 lg:mr-110">
                    <h1 className="px-2 py-3 font-black">React & Frontend Developer(Vite)</h1>
                    <ul className="list-disc  px-6 ">
                        <li className="text-[10px]">Interactive UI Development : Spearheaded the development of highly interactive,responsive user interfaces by integrating React.js with Vite.cutting down local build times significantly.</li>
                        <li className="text-[10px] my-3 ">3D & Animation Integration : Engineered immersive web experiences and smooth, scroll-driven interactive timelines utilizing Three.js React Three Fiber,and GSAP. </li>
                        <li className="text-[10px] ">State & Layoutb Architecture : Managed complex global application states using Redux Toolkit and delivered pixel-perfect,mobile-first designs with Tailwind CSS. </li>

                    </ul>
                </div>

                {/* 2 */}

                <div className="w-90 h-58  border-b border-gray-400   bg-violet-500/15 overflow-hidden  md:ml-90 lg:ml-110 ">
                    <h1 className="px-2 py-3 font-black">Full Stack Developer(MERN)</h1>
                    <ul className=" px-6 list-disc">
                        <li className="text-[10px]">End-to-End Development : Build robust,scalable,and Full-Stack web application from scratch utilizing the MERN ecosystem (MongoDB,Express.js React, Node.js) </li>
                        <li className="text-[10px] my-3">API & Database Architecture : Designed secure, clean RESTful APIS with structured MVC architecture implenting JWt authentication and efficient database schemas.</li>
                        <li className="text-[10px]"> Seamless Integration : Connected complex server-side logic and database operations smoothly with highly dynamic frontend interfaces.</li>
                    </ul>
                </div>


                {/* 3 */}
                <div className="w-90 h-58  border-b border-gray-400   bg-violet-500/15  overflow-hidden  md:mr-90 lg:mr-110">
                    <h1 className="px-2 py-3 font-black">Creative 3D Web Developer </h1>
                    <ul className="px-6 list-disc">
                        <li className="text-[10px]">Immersive 3D EXperiences : Brought websites to life by embedding interactive and performance-optimized 3D graphics using Three.js and React Three Fiber(R3F).</li>
                        <li className=" text-[10px] my-3">Advanced Animations : Implemented smooth, scroll-driven interactive experiences and creative timeline transitions using GSAP (ScrollTrigger) and WebGL.</li>
                        <li className="text-[10px] ">Asset Optimization : Managed and optimized comple 3D models and lighting setups to deliver flawless rendering without compromising on website loading speed.</li>
                    </ul>
                </div>

            </section>





        </section>
    )
}



























