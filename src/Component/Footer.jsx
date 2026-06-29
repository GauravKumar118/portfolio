import { useState } from "react";
// gsap
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    useGSAP(() => {

        const TL = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer",
                start: "top 50%",
                end: "top 50%",
                // markers: true,
                toggleActions: "play none none none",
                scrub: 1,


            }
        });

        TL.fromTo(".footer", {



        }, {
            border: "20px solid black",
            duration: 0.1,
        })




    })




    return (
        <footer className="relative top-0 footer bg-black text-white  overflow-hidden">
            <div className="max-w-7xl mx-auto border border-violet-500/30 rounded-[30px] p-8  relative">

                {/* Top Glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-violet-600/5 blur-3xl pointer-events-none"></div>

                {/* Heading */}
                <div className="text-center relative z-10">
                    <p className="tracking-[8px] text-violet-400 text-sm uppercase">
                        Thanks For Visiting
                    </p>

                    <h1 className="text-4xl md:text-6xl font-serif mt-5">
                        Let's Build Something
                        <br />
                        <span className="text-violet-500">Amazing</span> Together
                    </h1>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        I'm always open to new opportunities, collaborations,
                        and interesting projects.
                    </p>
                </div>

                {/* Social Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-5 mt-6 relative z-10 justify-items-center">

                    <div className="w-22 border border-violet-500/20 rounded-2xl p-1 text-center hover:border-violet-500 ">
                        <a
                            href="https://github.com/gauravsaini13"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-4xl"><i class="fa-brands fa-github"></i>
                            <h2 className="mt-1 text-xl">GitHub</h2>
                        </a>

                    </div>

                    <div className=" w-22  border border-violet-500/20 rounded-2xl p-1 text-center hover:border-violet-500 ">
                        <a
                            href="https://www.linkedin.com/in/gaurav-kumar-a28117289/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-4xl"><i class="fa-brands fa-linkedin-in"></i>
                            <h2 className="mt-1 text-xl">LinkedIn</h2>
                        </a>

                    </div>

                    <div className="w-22  border border-violet-500/20 rounded-2xl p-1 text-center hover:border-violet-500 ">
                        <a
                            href="mailto:gauravsaini.deve@gmail.com"
                            className="text-4xl"><i class="fa-regular fa-envelope"></i>
                            <h2 className="mt-1 text-xl">Email</h2>
                        </a>

                    </div>
                    <div className="w-22  border border-violet-500/20 rounded-2xl p-1 text-center hover:border-violet-500 overflow-hidden">
                        <a
                            href="https://www.instagram.com/gaurav__dev/"
                            className="text-4xl"><i class="fa-brands fa-instagram"></i>
                            <h2 className="mt-1 text-xl">IG</h2>
                        </a>

                    </div>

                    {/* <div className="w-22  border border-violet-500/20 rounded-2xl p-1 text-center hover:border-violet-500 ">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-4xl"
                        >📄<h2 className="mt-1 text-xl">Resume</h2>
                        </a>

                    </div> */}

                </div>

                {/* Divider */}
                <div className="flex items-center gap-5 my-2">
                    <div className="flex-1 h-px bg-violet-500/20"></div>
                    <span className="text-violet-500 text-2xl">&lt;/&gt;</span>
                    <div className="flex-1 h-px bg-violet-500/20"></div>
                </div>

                {/* Bottom Footer */}
                <div className="grid md:grid-cols-3  lg:grid-cols-3  gap-4 text-center lg:text-left">

                    <div>
                        <h3 className="text-[22px] font-semibold font-serif">
                            © 2026 Gaurav Saini
                        </h3>
                        <p className="text-gray-400  ">
                            All Rights Reserved.
                        </p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-[22px] font-semibold  font-serif">
                            Based in India
                        </h3>
                        <p className="text-gray-400 ">
                            Building for the world.
                        </p>
                    </div>

                    <div className="text-center lg:text-right font-serif">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                            }}
                            className="text-violet-500 text-[22px] hover:scale-110 ">
                            <i class="fa-solid fa-arrow-up"></i> Back To Top
                        </button>
                    </div>

                </div>

            </div>
        </footer>
    );
}