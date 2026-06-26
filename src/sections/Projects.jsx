import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer"
export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Basque Hospitality Website",
            image: "/project/basque.png",
            description: "A modern and responsive restaurant website featuring online reservations, event booking, interactive navigation and an elegant user experience.",
            live: "https://basquedehradun.com/",

        },
        {
            id: 2,
            title: "Manufacturing Management Dashboard",
            image: "/project/ProFactory.png",
            description: "Interactive manufacturing dashboard with production insights, inventory control, analytics and responsive design for efficient business management.",
            live: "https://manufacturingerp.netlify.app/",

        },
        {
            id: 3,
            title: "Nexa Care Healthcare Website",
            image: "/project/nexa.png",
            description: "A modern and responsive healthcare website featuring medical services, doctor information, appointment sections and a clean user experience.",
            live: "https://nexa-caree.netlify.app/",

        },

        {
            id: 4,
            title: "Restro Takeaway Website",
            image: "/project/restrot.png",
            description: "A modern and responsive restaurant website featuring online food ordering, takeaway services, menu showcase and an intuitive user experience.",
            live: "https://restrotakeaway.netlify.app/",

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
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" w-full sm:w-auto text-center bg-[#0f2747] hover:bg-[#15335d] px-6 py-3 rounded-full border border-slate-600"
                                    >
                                        Visit Site
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





