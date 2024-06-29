import React, { useEffect, useState } from 'react'
import { HiOutlinePencil } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios-client';

function AdminProfile() {
    const { user, setUser, setRoles, roles } = useStateContext();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [profileData, setProfileData] = useState({
        name: "",
        birth_date: "",
        profile_picture: "",
        gender: "",
        address: "",
        phone: "",
        email: "",
    });

    useEffect(() => {
        if (!roles) {
            navigate('/');
        } else {
            fetchProfileData();
        }
    }, [roles, navigate]);

    const fetchProfileData = async () => {
        try {
            const response = await axiosClient.get("/profile");
            const data = response.data;
            console.log("Fetched Profile Data:", data);
            setProfileData(data);
            setUser(data, roles);  // Make sure to set roles if needed
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching profile data:", error);
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="md:grid grid-cols-4 grid-rows-2 gap-2 p-5 rounded-xl">
                <div className="lg:col-span-1 rounded-md flex h-auto items-center justify-center shadow-xl bg-white">
                    <div className="items-center justify-center">
                        <img src={profileData.profile_picture ? profileData.profile_picture : "https://res.cloudinary.com/dboafhu31/image/upload/v1625318266/imagen_2021-07-03_091743_vtbkf8.png"}
                            className="object-cover object-center w-40 h-40 rounded-full mx-auto ring-2 mb-5 ring-orange-300 p-1" alt="" />
                        <div className=''>
                            <h1 className='font-bold text-gray-500 uppercase'>{profileData.name}</h1>
                            <h2 className='text-gray-400'>{roles}</h2>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-3 rounded-md shadow-xl p-3 bg-white">
                    <div className='p-3 flex border-b-4 items-center justify-between'>
                        <p className='text-left font-bold text-gray-600 text-xl'>User Profile</p>
                        <button
                            onClick={() => navigate('/editadminprofile')}
                            className='inline-flex items-center text-[#FF9843] hover:text-white hover:bg-[#FF9843] rounded-full py-0.5 px-3 bg-transparent border border-[#FF9843]'>
                            <HiOutlinePencil className="mr-2" />
                            <span className='text-center'>edit</span>
                        </button>
                    </div>
                    <div className="text-left flex p-3 text-base border-b text-gray-500 border-gray-200">
                        <span className="items-start font-semibold px-4 md:w-1/5 w-3/5">Name</span>
                        <span className="cursor-default focus:outline-none w-4/5">{profileData.name}</span>
                    </div>
                    <div className="text-left flex p-3 text-base border-b border-gray-200 text-gray-500">
                        <span className="px-4 font-semibold md:w-1/5 w-3/5">Gender</span>
                        <span className="cursor-default focus:outline-none w-4/5">{profileData.gender}</span>
                    </div>
                    <div className="text-left flex p-3 text-base border-b border-gray-200 text-gray-500">
                        <span className="px-4 font-semibold md:w-1/5 w-3/5">Birthday</span>
                        <span className="cursor-default focus:outline-none w-4/5">{profileData.birth_date}</span>
                    </div>
                    <div className="flex p-3 text-base text-left border-b border-gray-200 text-gray-500">
                        <span className="px-4 font-semibold md:w-1/5 w-3/5">Address</span>
                        <span className="cursor-default focus:outline-none w-4/5">{profileData.address}</span>
                    </div>
                    <div className="flex p-3 text-base text-left border-b border-gray-200 text-gray-500">
                        <span className="px-4 font-semibold md:w-1/5 w-3/5">Email</span>
                        <span className="cursor-default focus:outline-none w-4/5">{profileData.email}</span>
                    </div>
                    <div className="text-left flex p-3 text-base border-b border-gray-200 text-gray-500">
                        <span className="px-4 font-semibold md:w-1/5 w-3/5">Phone Number</span>
                        <span className="cursor-default focus:outline-none w-4/5">{profileData.phone}</span>
                    </div>
                    <div className="text-left flex p-3 text-base border-b border-gray-200 text-gray-500">
                        <span className="px-4 font-semibold md:w-1/5 w-3/5">Roles</span>
                        <span className="cursor-default focus:outline-none w-4/5">{roles}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProfile;
