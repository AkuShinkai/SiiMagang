import React, { useState } from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineUser, HiMenu } from 'react-icons/hi'
import { MdOutlineSettings } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { Menu, Popover, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { Fragment } from 'react'
import Searchbar from './Searchbar';
import Logout from '../pages/Logout'
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='w-full'>
            <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
                <button className='flex sm:hidden' >
                    <HiMenu className='text-gray-400 me-4 cursor-pointer' />
                </button>
                <Searchbar />
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
                                    style={{ backgroundImage: 'url("https://pmb.pnm.ac.id/assets/img/logo/pnm.png")' }}
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
                                <Menu.Item>
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
                                </Menu.Item>

                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Header
