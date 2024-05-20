import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/SiMagang.png';
import { HiOutlineX, HiMenu } from "react-icons/hi";


const Navbar = () => {
const[mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
const toggleNavbar =()=> {
    setMobileDrawerOpen(!mobileDrawerOpen);
}
const navigate = useNavigate();
  return (
        <nav className="py-4 px-6 fixed top-0 w-full z-50 bg-white">
            <div className="container px-4 mx-auto relative ">
                <div className='flex justify-between items-center'>
                    <div className='flex flex-shrink-0 items-center'>
                        <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
                        <span className="text-2xl font-bold leading-tight text-gray-600 tracking-tight">SiMagang</span>
                    </div>
                    <div className='hidden lg:flex justify-center space-x-5 items-center'>
                        <button
                            onClick={() => navigate("/register")}
                            className=" items-center border border-orange-400 text-md px-3 py-1 rounded text-orange-400 hover:bg-orange-500 hover:text-white" >
                            <span>register</span>
                        </button>
                        <button
                            onClick={() => navigate("/login")}
                            className="items-center bg-orange-400 text-md px-3 py-1 rounded text-white hover:bg-orange-500" >
                            <span>login</span>
                        </button>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                      <button onClick={toggleNavbar}>
                        {mobileDrawerOpen? <HiOutlineX />: <HiMenu/>}
                      </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-10 bg-gray-200 w-full p-10 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            <li className='py-2 hover:text-orange-500' style={{ width: '200px' }}>
                                <a href="/register">register</a>
                            </li>
                            <li className='py-2 hover:text-orange-500' style={{ width: '200px' }} >
                                <a href="/login">login</a>
                            </li>
                        </ul>

                    </div>
                )}
			</div>
        </nav>
  )
}

export default Navbar;
