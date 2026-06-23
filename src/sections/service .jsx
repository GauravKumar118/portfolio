import React from 'react';
import { Layers, Monitor, Box, Code } from 'lucide-react';


const servicesData = [
    {
        id: 1,
        title: "Full Stack Development",
        icon: <Layers size={36} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
        desc: "Crafting scalable, robust, and end-to-end web applications. From designing intuitive database schemas to building high-performance server-side logic and seamless front-end interfaces. I handle the entire development lifecycle.",
        tech: "MongoDB, Express.js, React.js, Node.js",
        glowColor: "rgba(59, 130, 246, 0.6)", // Blue Glow
        borderColor: "border-blue-500/40",
        textColor: "text-blue-400"
    },
    {
        id: 2,
        title: "Frontend & React Development",
        icon: <Monitor size={36} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
        desc: "Building modern, highly interactive, and responsive user interfaces. I focus on creating pixel-perfect layouts, efficient state management, and optimized components that deliver a fast and smooth user experience across all devices.",
        tech: "React.js, Redux Toolkit, Tailwind CSS, HTML5, JavaScript (ES6+)",
        glowColor: "rgba(6, 182, 212, 0.6)", // Cyan Glow
        borderColor: "border-cyan-500/40",
        textColor: "text-cyan-400"
    },
    {
        id: 3,
        title: "Immersive 3D Websites",
        icon: <Box size={36} className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
        desc: "Bringing web experiences to life with stunning 3D graphics and smooth, scroll-driven animations. I design immersive, interactive, and high-performance 3D components that make your website stand out from the crowd.",
        tech: "Three.js, React Three Fiber (R3F), GSAP (ScrollTrigger), WebGL",
        glowColor: "rgba(168, 85, 247, 0.6)", // Purple Glow
        borderColor: "border-purple-500/40",
        textColor: "text-purple-400"
    },
    {
        id: 4,
        title: "API Development & Integration",
        icon: <Code size={36} className="text-green-400 group-hover:scale-110 transition-transform duration-300" />,
        desc: "Designing secure, clean, and efficient RESTful APIs to ensure flawless communication between the frontend and backend. Expert in database optimization, authentications, and third-party service integrations.",
        tech: "Node.js, Express.js, REST APIs, JWT, Postman",
        glowColor: "rgba(34, 197, 94, 0.6)", // Green Glow
        borderColor: "border-green-500/40",
        textColor: "text-green-400"
    }
];

export default function Service() {
    return (
        <div className="w-full min-h-screen bg-[#03030c] text-gray-100 py-20 px-4 flex flex-col items-center justify-center font-serif  relative overflow-hidden">

            {/* Background Ambient Lights */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Header Section */}
            <div className="text-center mb-16 relative z-10">
                <span className=" text-xs sm:text-sm md:text-base lg:text-lg  tracking-[0.3em] text-indigo-400 font-semibold block">
                    SERVICES
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide  drop-shadow-md flex">
                    What I <span className="ml-2 text-violet-500">Do</span>
                </h2>
                <div className="w-16 h-[3px] bg-white/80 mx-auto mt-4 rounded-full" />
            </div>

            {/* Cards Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 max-w-7xl w-full relative z-10 px-2 font-sans">
                {servicesData.map((service) => (
                    <div key={service.id} className="relative group flex flex-col items-center">

                        {/* The Main Glassmorphism Card */}
                        <div
                            className={`w-full min-h-[460px] p-6 rounded-2xl border ${service.borderColor} bg-gradient-to-b from-white/10 to-white/[0.02] backdrop-blur-md flex flex-col justify-between transition-all duration-500 hover:-translate-y-2`}
                            style={{
                                boxShadow: `0 0 25px -5px ${service.glowColor.replace('0.6', '0.15')}, inset 0 1px 1px rgba(255,255,255,0.2)`,
                            }}
                        >
                            <div>
                                {/* Icon & Title */}
                                <div className="flex flex-col items-center text-center mt-2">
                                    <div className="mb-4 p-1 rounded-xl bg-white/[0.03] border border-white/5 shadow-inner">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold tracking-wide min-h-[56px] flex items-center justify-center text-gray-100">
                                        {service.title}
                                    </h3>
                                    {/* Neon Line Divider */}
                                    <div
                                        className="w-12 h-[2px] my-4 rounded-full shadow-[0_0_8px_currentcolor]"
                                        style={{ backgroundColor: service.glowColor }}
                                    />
                                </div>

                                {/* Description */}
                                <p className="text-[14px] leading-relaxed text-gray-400 font-light text-justify px-1 selection:bg-white/20">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Tech Stack Footer */}
                            <div className="mt-6 border-t border-white/5 pt-4">
                                <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${service.textColor}`}>
                                    Tech Stack:
                                </span>
                                <p className="text-[11px] text-gray-400 font-medium leading-tight">
                                    {service.tech}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Glow / Reflection Base */}
                        <div
                            className="w-24 h-[6px] rounded-full blur-[4px] mt-4 opacity-40 group-hover:opacity-80 group-hover:scale-125 transition-all duration-500"
                            style={{
                                backgroundColor: service.glowColor,
                                boxShadow: `0 0 16px 6px ${service.glowColor}`
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}