import React, { useEffect, useState } from 'react';
import profil from '../assets/nyonyo.jpg';
import { useStateContext } from '../contexts/ContextProvider';
import { HiOutlinePencil } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axios-client';

function Profile() {

    const { user, setUser } = useStateContext();
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

    const [educationData, setEducationData] = useState({
        major: "",
        institution: "",
        semester: "",
    });

    useEffect(() => {
        fetchProfileData();
        fetchEducationData();
    }, []);

    const fetchProfileData = async () => {
        try {
            const response = await axiosClient.get("/profile");
            const data = response.data;
            console.log("Fetched Profile Data:", data);
            setProfileData(data);
            setUser(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching profile data:", error);
            setIsLoading(false);
        }
    };

    const fetchEducationData = async () => {
        try {
            const response = await axiosClient.get("/submissions"); // Ganti dengan endpoint yang sesuai
            const data = response.data;
            console.log("Fetched Education Data:", data);
            // Jika terdapat data submission, ambil data pendidikan dari submission pertama
            if (data.length > 0) {
                const submission = data[0];
                const education = {
                    major: submission.major,
                    institution: submission.institution,
                    semester: submission.semester,
                };
                setEducationData(education);
            }
        } catch (error) {
            console.error("Error fetching education data:", error);
        }
    };


    return (
        <div className='max-sm m-5 rounded-xl flex flex-col shadow-md mb-6 mt-4 px-5 py-5 bg-white'>

            {isLoading ? (
                <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
                </div>
            ) : (
                <>
                    <div className="flex items-center gap-5 my-3 mx-20">
                        <img src={profileData.profile_picture ? profileData.profile_picture : profil} alt="PFP" className='object-cover object-center w-32 h-32 rounded-full ring-2 ring-orange-300 p-1' />
                        <div className="text-left">
                            <p className='text-gray-500 text-bold font-medium text-xl uppercase'>{profileData.name}</p>
                            <p className='text-gray-400 '>Backend Developer</p>
                        </div>
                    </div>

                    <div className="my-5 mx-20">
                        <div className='text-left text-gray-800 tracking-wide uppercase font-bold mb-3'>Personal Information</div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/2 mb-6">
                                <label className="tracking-wide block uppercase font-semibold text-left text-gray-500 mb-1 text-sm">
                                    Full Name
                                </label>
                                <p className='text-left'>{profileData.name}</p>
                            </div>

                            <div className="md:w-1/2 md:ml-3 mb-6">
                                <label className="text-left block text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide">
                                    Position
                                </label>
                                <p className='text-left text-gray-600 tracking-wider text-lg'>Backend Developer</p>
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/2 mb-6">
                                <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm">
                                    Email Address
                                </label>
                                <p className='text-left text-gray-600 tracking-wider text-lg'>{user.email}</p> {/* Menggunakan user context untuk email */}
                            </div>

                            <div className="md:w-1/2 md:ml-3 mb-6">
                                <label className="text-left block text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide">
                                    Phone Number
                                </label>
                                <p className='text-left text-gray-600 tracking-wider text-lg'>{profileData.phone}</p>
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/2 mb-6">
                                <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm">
                                    Date of birth
                                </label>
                                <p className='text-left text-gray-600 tracking-wider text-lg'>{profileData.birth_date}</p>
                            </div>

                            <div className="md:w-1/2 md:ml-3 mb-6">
                                <label className="text-left block text-gray-500 font-bold mb-1 uppercase tracking-wide">
                                    Gender
                                </label>
                                <p className='text-left text-gray-600 tracking-wider text-lg'>{profileData.gender}</p>
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/2 mb-6">
                                <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm">
                                    Home Address
                                </label>
                                <p className='text-left text-gray-600 tracking-wider text-lg'>{profileData.address}</p>
                            </div>
                        </div>

                        <div className='text-left text-gray-800 tracking-wide uppercase font-bold mb-3'>Education</div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3 mb-6">
                                <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm">
                                    Major
                                </label>
                                <p className='text-left text-gray-600 tracking-wider text-lg'>{educationData.major}</p>
                            </div>

                            <div className="md:w-1/3 md:ml-3 mb-6">
                                <label className="text-left block text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide">
                                    Institution
                                </label>
                                <p className='text-left text-gray-600 tracking-wider text-lg'>{educationData.institution}</p>
                            </div>
                            <div className="md:w-1/3 md:ml-3 mb-6">
                                <label className="text-left block text-gray-500 font-bold mb-1 uppercase tracking-wide">
                                    Semester
                                </label>
                                <p className='text-left text-gray-600 tracking-wider text-lg'>{educationData.semester}</p>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className="items-center my-5 mx-20">
                <button
                    onClick={handleClick}
                    className="inline-flex items-center bg-[#FF9843] text-md px-3 py-2 rounded-full text-white hover:bg-orange-600">
                    <HiOutlinePencil className="mr-2" />
                    <span>Change</span>
                </button>
            </div>
        </div>
    );

    function handleClick() {
        navigate('/editprofile');
    }
}

export default Profile;
