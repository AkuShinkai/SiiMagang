import React, { useEffect, useState } from 'react'
import profil from '../assets/nyonyo.jpg'
import { useStateContext } from '../contexts/ContextProvider'
import axiosClient from '../axios-client'

const Dashboard = () => {
    const placeholderImageUrl = 'https://media.istockphoto.com/id/1316947194/vector/messenger-profile-icon-on-white-isolated-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1iQ926GXQTJkopoZAdYXgU17NCDJIRUzx6bhzgLm9ps=';

    const [profileData, setProfileData] = useState({
        profile_picture: "",
        name: ""
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
        <div>
            <div className="flex h-48 m-5 bg-white rounded-xl shadow-md overflow-auto max-sm">
                <div className="md:flex">
                    <div className="md:shrink-0 p-3 hidden md:block">
                        <div style={{ backgroundImage: `url("${profileImageUrl}")` }} alt="profil dashboard" className='md:h-40 md:w-40 rounded-full bg-transparent bg-cover bg-no-repeat bg-center' />
                    </div>

                    <div className="p-5">
                        <a className="block mt-1 text-lg text-left font-thin text-gray-400 hover:underline">Halo,</a>
                        <div className='block text-2xl text-left font-bold'>{profileData.name}</div>
                        <p className="mt-2 font-extralight text-black text-justify">
                            Welcome to the web-based internship activity monitoring application. A system that facilitates each intern at PT OTAK KANAN to take attendance, record daily activities through the website. Start your internship experience easily and may success accompany every step of the way!
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className='shadow-md'>

                </div>

            </div>
        </div>

    )
}

export default Dashboard
