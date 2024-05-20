import React, { useState, useEffect, useRef } from 'react';
import axiosClient from '../axios-client';
import profil from '../assets/nyonyo.jpg';

function EditProfil() {

    const [isLoading, setIsLoading] = useState(true);

    const [profileData, setProfileData] = useState({
        name: "",
        birth_date: "",
        profile_picture: "",
        gender: "",
        phone: "",
        address: "",
        roles: "apprentice",
        email: "",
        degree: "",
        school: "",
        semester: ""
    });

    const [notification, setNotification] = useState('');
    const [image, setImage] = useState(null);
    const img = useRef();

    useEffect(() => {
        fetchProfileData();
    }, []);

    const fetchProfileData = async () => {
        try {
            const response = await axiosClient.get("/profile");
            const data = response.data;
            setProfileData(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching profile data:", error);
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
            setProfileData((prevState) => ({
                ...prevState,
                profile_picture: reader.result,
            }));
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.put("/profile", profileData);
            console.log("Profile data updated successfully:", response.data);
            setNotification('Profile updated successfully!');
        } catch (error) {
            console.error("Error updating profile data:", error);
            setNotification('Error updating profile data. Please try again.');
        }
    };

    return (
        <div className='max-sm m-5 rounded-xl flex flex-col shadow-md mb-6 mt-4 px-5 py-5 bg-white'>

            {notification && (
                <div className="m-4 p-4 bg-green-100 text-green-700 rounded">
                    {notification}
                </div>
            )}

            {isLoading ? (
                <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
                </div>
            ) : (
                <>
                    <div className="items-center gap-5 my-3 mx-20">
                        <img
                            src={profileData.profile_picture ? profileData.profile_picture : profil}
                            alt="Profile"
                            className='object-cover object-center w-32 h-32 rounded-full mx-auto ring-2 mb-5 ring-orange-300 p-1'
                        />
                        <input ref={img}
                            hidden
                            accept="image/*"
                            type="file"
                            onChange={handleImageChange} />
                        <button onClick={() => img.current.click()}
                            className="inline-flex items-center  px-4 py-1 text-md bg-white text-gray-400  text-blue rounded-full border-2 hover:bg-green-400 cursor-pointer hover:bg-blue hover:text-white hover:border-none">
                            <span className="items-center text-base leading-normal">Change Photo</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="my-5 mx-20">
                        <div className='text-left text-gray-800 tracking-wide uppercase font-bold mb-3' >Personal Information</div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/2 mb-6">
                                <label className="tracking-wide block uppercase font-semibold text-left text-gray-500 mb-1 text-sm" htmlFor="profil-fullname" >
                                    Full Name
                                </label>
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                    type="text"
                                    placeholder={profileData.name}
                                    id="profil-fullname"
                                    name="name"
                                    value={profileData.name}
                                    onChange={handleChange}
                                    maxLength={90}
                                    required
                                />
                            </div>

                            <div className="md:w-1/2 md:ml-3 mb-6">
                                <label className="text-left block text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="profil-datebirth">
                                    Date of Birth
                                </label>
                                <input className="bg-gray-200 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                                    type="date"
                                    id="profil-datebirth"
                                    name="birth_date"
                                    value={profileData.birth_date}
                                    onChange={handleChange}
                                    required />
                            </div>
                        </div>
                        <div className="md:flex md:items-center ">
                            <div className="md:w-1/2 mb-6">
                                <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="profil-gender">
                                    Gender
                                </label>
                                <select
                                    id="profil-gender"
                                    className="form-select bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                                    onChange={handleChange}
                                    value={profileData.gender}
                                    name="gender"
                                    required
                                >
                                    <option value="">Choose Gender</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                            </div>

                            <div className="md:w-1/2 md:ml-3 mb-6">
                                <label className="text-left block text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="profil-position">
                                    Position
                                </label>
                                <select id="profil-position" className="form-select bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]" onChange={handleChange} value={profileData.roles} name="roles">
                                    <option value="1">Backend Developer</option>
                                    <option value="2">Frontend Developer</option>
                                    <option value="3">Developer UI/UX</option>
                                    <option value="4">System Analyst</option>
                                    <option value="5">Mobile developer</option>
                                    <option value="6">Graphic Design</option>
                                    <option value="7">Social Media Specialist</option>
                                    <option value="8">Digital Marketing</option>
                                    <option value="9">Content Creator</option>
                                </select>
                            </div>
                        </div>

                        <div className="md:flex md:items-center">
                            <div className="md:w-1/2 mb-6">
                                <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="profil-email" >
                                    Email Address
                                </label>
                                <input className="bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                                    type="email"
                                    id="profil-email"
                                    name="email"
                                    value={profileData.email}
                                    onChange={handleChange}
                                    disabled
                                />
                            </div>

                            <div className="md:w-1/2 md:ml-3 mb-6">
                                <label className="text-left block text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="profil-phonenumber">
                                    Phone Number
                                </label>
                                <input className="bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                                    id="profil-phonenumber"
                                    name="phone"
                                    value={profileData.phone}
                                    onChange={handleChange}
                                    maxLength={15}
                                    required />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/2 mb-6">
                                <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="profil-address" >
                                    Home Address
                                </label>
                                <input className="bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                                    id="profil-address"
                                    name="address"
                                    value={profileData.address}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className='text-left text-gray-800 tracking-wide uppercase font-bold mb-3'>Education</div>
                        <div className="md:flex md:items-center ">
                            <div className="md:w-1/3 mb-6">
                                <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="profil-degree" >
                                    Degree
                                </label>
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                    type="text"
                                    id="profil-degree"
                                    name="degree"
                                    value={profileData.degree}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="md:w-1/3 md:ml-3 mb-6">
                                <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="profil-school">
                                    School/University
                                </label>
                                <input className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                    type="text"
                                    id="profil-school"
                                    name="school"
                                    value={profileData.school}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="md:w-1/3 md:ml-3 mb-6">
                                <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="profil-semester">
                                    Semester
                                </label>
                                <input className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                    type="text"
                                    id="profil-semester"
                                    name="semester"
                                    value={profileData.semester}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between my-5 mx-20">
                            <button
                                onClick={() => window.history.back()}
                                className="inline-flex items-center bg-red-400 text-md px-3 py-1 rounded text-white hover:bg-blue-700" >
                                <span>Cancel</span>
                            </button>
                            <button
                                className="inline-flex items-center bg-green-400 text-md px-3 py-1 rounded text-white hover:bg-green-500"
                                type='submit'>
                                <span>Save</span>
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
}

export default EditProfil;
