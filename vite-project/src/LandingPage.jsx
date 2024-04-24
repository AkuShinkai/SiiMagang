import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import Navbar from '/./src/component/Navbar.jsx';
import pic from '/./src/assets/lp.jpg';

function LandingPage() {
    const { token } = useStateContext()
    if (token) {
        return <Navigate to="/" />
    }

    return (
        <div className="">
            <Navbar/>
            <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                        <div>
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">PT OTAK KANAN INTERNSHIP PROGRAM </h1>
                                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Join Our Internship Program. Our internship program is designed to offer valuable insights, mentorship, and opportunities for growth</p>
                                <button type="submit" className=" mt-8 sm:mt-10 inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">aapply</button>
                            </div>
                        </div>
                        <div>
                            <img className="w-full" src={pic} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="">
                <Outlet />
                
            </div>
        </div>
    )
}

export default LandingPage;
