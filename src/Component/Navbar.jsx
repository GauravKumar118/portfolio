import { Link } from "react-router";



export default function Navbar() {


    return (
        <section className=" font-sans fixed top-0 left-0 w-full h-10  px-4 sm:px-6 md:px-8 lg:px-8 text-white bg-black/50 font-semibold z-50 overflow-hidden object-cover">
            <div className=" flex justify-between items-center ">

                {/* Left Side */}
                <Link to="/">
                    <img src="/g.svg" className="w-12 hover:w-12 " />
                </Link>

                {/* Right Side */}
                <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-xs sm:text-sm md:text-base lg:text-lg">
                    <Link to="/About" className="hover:text-gray-500">
                        ABOUT
                    </Link>

                    <Link to="/projects" className="hover:text-gray-500">
                        WORK
                    </Link>

                    <Link to="/contact" className="hover:text-gray-500">
                        CONTACT
                    </Link>
                </div>

            </div>
        </section>
    );
}