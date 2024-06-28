import React from "react";
import pic from '/./src/assets/lp.jpg';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-white min-h-screen flex items-center justify-center ">
            <div className="relative w-screen">
            <div className="absolute md:top-50 left-24 lg:left-12 w-96 h-96 md:w-48 md:h-48 bg-orange-500 rounded-full md:mix-blend-multiply mix-blend-hue filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -top-24 md:top-0 md:-right-4 -right-10 w-72 h-72 md:w-72 md:h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute md:hidden top-60 md:top-0 left-10 w-24 h-24 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute md:hidden bottom-60 md:top-0 right-10 w-24 h-24 md:w-72 md:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 md:-bottom-32 -left-32 lg:left-96 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <section >
                <div className="px-4 mx-auto flex justify-center h-full max-w-7xl sm:px-6 lg:px-8 ">
                    <div className="grid  max-w-lg grid-cols-1 mx-auto sm:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                       <div className="text-center z-10 lg:text-left">
                            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl ">PT OTAK KANAN INTERNSHIP PROGRAM </h1>
                            <p className="mt-2 text-lg text-gray-600 sm:mt-8">Join Our Internship Program. Our internship program is designed to offer valuable insights, mentorship, and opportunities for growth</p>
                            <button  onClick={handleClick} type="submit" className=" mt-8 sm:mt-10 inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 hover:bg-gray-600">Apply Now!</button>
                        </div>
                        
                        <div>
                            <img className="w-full" src={pic} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
        
    );
    function handleClick () {
        navigate('/Submission');
    };
}

export default Welcome
