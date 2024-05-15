import React, { useEffect, useState } from 'react';
import profil from '../assets/nyonyo.jpg'
import { useStateContext } from '../contexts/ContextProvider'
import { HiOutlinePencil } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axios-client';

function Profile() {

    const [profileData, setProfileData] = useState({
        name: "",
        birth_date: "",
        profile_picture: "",
        gender: "",
        address:"",
        phone: "",
        roles: "apprentice", // Secara default adalah apprentice
    });

    useEffect(() => {
        // Ambil data profil pengguna saat komponen dimuat
        fetchProfileData();
    }, []);

    const fetchProfileData = async () => {
        try {
            const response = await axiosClient.get("/profile"); // Sesuaikan dengan endpoint yang sesuai
            const data = response.data;
            setProfileData(data);
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.put("/profile", profileData); // Sesuaikan dengan endpoint yang sesuai
            console.log("Profile data updated successfully:", response.data);
            setEditMode(false);
        } catch (error) {
            console.error("Error updating profile data:", error);
        }
    };

    const handleCancelEdit = () => {
        setEditMode(false);
    };

    const navigate = useNavigate();
    const { user } = useStateContext()

    return (
        <div className='max-sm m-5 rounded-xl flex flex-col shadow-md mb-6 mt-4 px-5 py-5 bg-white'>
            <div className="flex items-center gap-5 my-3 mx-20">
                <img src={profileData.profile_picture ? profileData.profile_picture : profil} alt="PFP" className='w-24 h-24 rounded-full  ring-2 ring-orange-300 p-1' />
                <div className="text-left">
                    <p className='text-gray-500 text-bold font-medium text-xl uppercase'>{profileData.name}</p>
                    <p className='text-gray-400 '>Backend Developer</p>
                </div>
            </div>

            <div action="" className="my-5 mx-20">
                <div className='text-left text-gray-800 tracking-wide uppercase font-bold mb-3' >Personal Information</div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/2 mb-6">
                        <label className="tracking-wide block uppercase font-semibold text-left text-gray-500 mb-1 text-sm" >
                            Full Name
                        </label>
                        <p className='text-left'>{profileData.name}</p>
                    </div>

                    <div className="md:w-1/2 md:ml-3 mb-6">
                        <label className="text-left block text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="profil-datebirth">
                            Position
                        </label>
                        <p className='text-left text-gray-600 tracking-wider text-lg'>Backend Developer</p>
                    </div>
                </div>
                <div className="md:flex md:items-center ">
                    <div className="md:w-1/2 mb-6">
                        <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="profil-email" >
                            Email Address
                        </label>
                        <p className='text-left text-gray-600 tracking-wider text-lg'>fallen666@gmail.com</p>
                    </div>

                    <div className="md:w-1/2 md:ml-3 mb-6">
                        <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="profil-phonenumber">
                            Phone Number
                        </label>
                        <p className='text-left text-gray-600 tracking-wider text-lg'>{profileData.phone}</p>
                    </div>
                </div>
                <div className="md:flex md:items-center ">
                    <div className="md:w-1/2 mb-6">
                        <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="profil-email" >
                            Date of birth
                        </label>
                        <p className='text-left text-gray-600 tracking-wider text-lg'>{profileData.birth_date}</p>
                    </div>

                    <div className="md:w-1/2 md:ml-3 mb-6 text-">
                        <label className="text-left block text-gray-500 font-bold mb-1 uppercase tracking-wide" htmlFor="profil-phonenumber">
                            Gender
                        </label>
                        <p className='text-left text-gray-600 tracking-wider text-lg'>{profileData.gender}</p>
                    </div>
                </div>
                <div className="md:flex md:items-center ">
                    <div className="md:w-1/2 mb-6">
                        <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="profil-email" >
                            Home Address
                        </label>
                        <p className='text-left text-gray-600 tracking-wider text-lg'>{profileData.address}</p>
                    </div>
                </div>


                <div className='text-left text-gray-800 tracking-wide uppercase font-bold mb-3'>Education</div>
                <div className="md:flex md:items-center ">
                    <div className="md:w-1/3 mb-6">
                        <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="profil-degree" >
                            Degree
                        </label>
                        <p className='text-left text-gray-600 tracking-wider text-lg'>Teknologi Informasi</p>
                    </div>

                    <div className="md:w-1/3 md:ml-3 mb-6">
                        <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="profil-school">
                            School/University
                        </label>
                        <p className='text-left text-gray-600 tracking-wider text-lg'>Politeknik Negeri Madiun</p>
                    </div>
                    <div className="md:w-1/3 md:ml-3 mb-6">
                        <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="profil-semester">
                            semester
                        </label>
                        <p className='text-left text-gray-600 tracking-wider text-lg'>4</p>
                    </div>
                </div>
            </div>
            <div className="items-center my-5 mx-20">
                <button
                    onClick={handleClick}
                    className="inline-flex items-center bg-[#FF9843] text-md px-3 py-2 rounded-full text-white hover:bg-orange-600" >
                    <HiOutlinePencil className="mr-2" />
                    <span>Change</span>
                </button>

            </div>
        </div>
    )
    function handleClick() {
        navigate('/EditProfile');
    };
}

export default Profile;
