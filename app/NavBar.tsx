import { FiArrowRight } from "react-icons/fi";

const NavBar = () => {
    return (
        <section>
            <div className="fixed top-0 right-0 left-0  gbg text-white z-50 shadow-2xl">
                <div className="commonwidth py-4 flex justify-between items-center">
                    <img src="/images/cartex-w.svg" className="h-8" alt="" />
                    <a className="bg-white py-2 cursor-pointer px-5 text-primary rounded-full  flex justify-center items-center">
                        Get Started
                    <FiArrowRight className="text-lg ml-2"/>


                    </a>
                </div>
        </div>
        <div className="h-20"></div>
        </section>
    );
}

export default NavBar;