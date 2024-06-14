import React, { useEffect, useState } from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineUser, HiMenu, HiX } from 'react-icons/hi'
import { MdOutlineSettings } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { Menu, Popover, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { Fragment } from 'react'
import Searchbar from './Searchbar';
import Logout from '../pages/Logout'
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axios-client';
import logo from '../assets/SiMagang.png'

import { Link, useLocation } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/constants'

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-[#FF9843] hover:no-underline hover:text-white active:text-white active:bg-[#FF9843] rounded-full text-base'
const Header = () => {
    const [ sidebarOpen, setSidebarOpen] = useState(false);
    
    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
      };
    const handleCloseSidebar= () => {
        setSidebarOpen(false);
    };
    

    const placeholderImageUrl = 'https://media.istockphoto.com/id/1316947194/vector/messenger-profile-icon-on-white-isolated-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1iQ926GXQTJkopoZAdYXgU17NCDJIRUzx6bhzgLm9ps=';

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const [profileData, setProfileData] = useState({
        profile_picture: "",
    });

    const profileImageUrl = profileData.profile_picture ? profileData.profile_picture : placeholderImageUrl;

    useEffect(() => {
        // Ambil data profil pengguna saat komponen dimuat
        fetchProfileData();
    }, []);

    const fetchProfileData = async () => {
        try {
            const response = await axiosClient.get("/profile");
            const data = response.data;
            setProfileData(data);
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    };
    
    

    return (
        <div className='w-full'>
            <div className="bg-white h-16 px-5 flex items-center border-b border-gray-200 justify-between">
                <button className='flex md:hidden' onClick={handleToggleSidebar}>
                    <HiMenu className='text-gray-400 me-4 cursor-pointer h-5 w-5' />
                </button>
                <Searchbar/>
                <div className="flex items-center gap-2 mr-2 md:mr-0">
                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    className={classNames(
                                        open && 'bg-gray-100',
                                        'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                    )}
                                >
                                    <HiOutlineChatAlt fontSize={24} className='text-gray-400' />
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                        <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                            <strong className="text-gray-700 font-medium">Messages</strong>
                                            <div className="mt-2 py-1 text-sm">This is messages panel.</div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    className={classNames(
                                        open && 'bg-gray-100',
                                        'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                    )}
                                >
                                    <HiOutlineBell fontSize={24} className='text-gray-400' />
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                        <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                            <strong className="text-gray-700 font-medium">Notifications</strong>
                                            <div className="mt-2 py-1 text-sm">This is notification panel.</div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                    <Menu as="div" className="relative">
                        <div>
                            <Menu.Button className="ml-2 bg-transparent flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                                <span className="sr-only">Open user menu</span>
                                <div
                                    className="h-10 w-10 rounded-full bg-transparent bg-cover bg-no-repeat bg-center"
                                    style={{ backgroundImage: `url("${profileImageUrl}")` }}
                                >
                                    <span className="sr-only">Marc Backes</span>
                                </div>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm m-auto items-center shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            onClick={() => navigate('/profile')}
                                            className={classNames(
                                                active && 'bg-gray-100',
                                                'active:bg-gray-200 rounded-sm py-2 px-0 text-gray-700 cursor-pointer focus:bg-gray-200'
                                            )}
                                        ><HiOutlineUser className="inline-block mr-14" />
                                            Profile
                                        </div>
                                    )}
                                </Menu.Item>
                                {/* <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            onClick={() => navigate('/setting')}
                                            className={classNames(
                                                active && 'bg-gray-100',
                                                'active:bg-gray-200 rounded-sm py-2 px-0 text-gray-700 cursor-pointer focus:bg-gray-200'
                                            )}
                                        ><MdOutlineSettings className="inline-block mr-14" />
                                            Settings
                                        </div>
                                    )}
                                </Menu.Item> */}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
            {sidebarOpen &&
                <div className="md:hidden">
                <div className="fixed inset-0 bg-gray-500 opacity-25"  ></div>
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                        <div className="flex items-center">
                            <div className="flex items-center gap-2  mr-auto leading-none">
                            <img src={logo} alt="Your Icon"className='h-10  w-10' />
                                <span className="text-gray-600 text-lg font-bold">SiMagang</span>
                            </div>
                            <button  onClick={handleCloseSidebar}>
                                <HiX className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"/>
                            </button>
                        </div>
                        <div className="pt-7 pb-8 flex flex-1 flex-col gap-1">
                        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                            <SidebarLink key={link.key} link={link} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                            <SidebarLink key={link.key} link={link} />
                        ))}
                        <button className={classNames(linkClass, 'cursor-pointer text-red-500')}
                            onClick={() => {
                                setShowModal(true);
                            }}>
                            <span className="text-xl" >
                                <HiOutlineLogout />
                            </span>
                            Log Out
                        </button>
                        {showModal && <Logout setOpen={setShowModal} />}
                    </div>
                    </nav>
                    
                </div>
                
            }
            
        </div>
    )
}
function SidebarLink({ link }) {
    const { pathname } = useLocation()

    return (
        <Link
            to={link.path}
            className={classNames(pathname === link.path ? 'bg-[#FF9843] text-white' : 'text-neutral-400', linkClass)}
        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    )
}

export default Header
