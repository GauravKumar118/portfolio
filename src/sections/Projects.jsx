import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer"
export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "3D Portfolio",
            image: "https://static.vecteezy.com/system/resources/previews/025/054/788/non_2x/vibrant-colors-and-messy-brush-strokes-create-abstract-painted-image-generated-by-ai-free-photo.jpg",
            description: "Modern portfolio built with React, Three.js and GSAP.",
            live: "#",
            github: "#",
        },
        {
            id: 2,
            title: "E-Commerce App",
            image: "https://png.pngtree.com/thumb_back/fh260/background/20241007/pngtree-color-wheel-showcasing-the-spectrum-of-hues-essential-for-artists-designers-image_16314134.jpg",
            description: "Full-stack MERN e-commerce application.",
            live: "#",
            github: "#",
        },
        {
            id: 3,
            title: "Task Manager",
            image: "https://tse4.mm.bing.net/th/id/OIP.gUsRCFAxksW3FSd4QSy3qQHaEK?r=0&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",
            description: "Task management app with authentication.",
            live: "#",
            github: "#",
        },

        {
            id: 3,
            title: "E-Commerce App",
            image: "https://png.pngtree.com/thumb_back/fh260/background/20241007/pngtree-color-wheel-showcasing-the-spectrum-of-hues-essential-for-artists-designers-image_16314134.jpg",
            description: "Full-stack MERN e-commerce application.",
            live: "#",
            github: "#",
        },
        {
            id: 5,
            title: "Task Manager",
            image: "https://tse4.mm.bing.net/th/id/OIP.gUsRCFAxksW3FSd4QSy3qQHaEK?r=0&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",
            description: "Task management app with authentication.",
            live: "#",
            github: "#",
        },
    ];
    return (
        <>
            <Navbar />
            <section className="min-h-screen bg-[#020617] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-serif">PROJECTS</h1>

                    <p className="max-w-3xl mx-auto text-gray-400 font-sans">
                        Welcome to my project showcase! Below are some of the best works
                        I've built from frontend interfaces to full-stack applications.
                    </p>
                </div>



                {/* Card */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-[#071225] border border-slate-700 rounded-3xl overflow-hidden shadow-xl flex flex-col"
                        >
                            <div className="p-3">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 sm:h-56 lg:h-60 object-cover rounded-2xl"
                                />
                            </div>

                            <div className="px-6 pb-6 flex flex-col flex-1">
                                <h2 className="text-2xl font-bold text-center mb-4 font-serif">
                                    {project.title}
                                </h2>

                                <p className="text-gray-400 text-center text-sm leading-7 mb-6 ">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-col sm:flex-row justify-center gap-4">
                                    <a
                                        href={project.live}
                                        className=" w-full sm:w-auto text-center bg-[#0f2747] hover:bg-[#15335d] px-6 py-3 rounded-full border border-slate-600"
                                    >
                                        Visit Site
                                    </a>

                                    <a
                                        href={project.github}
                                        className="w-full sm:w-auto text-center bg-[#0f2747] hover:bg-[#15335d] px-6 py-3 rounded-full border border-slate-600"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            <Footer />

        </>

    )
}





