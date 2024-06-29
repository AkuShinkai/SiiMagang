import React, { useRef, useState, useEffect } from 'react';
import { HiOutlinePencil, HiX } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axios-client';

function EditAdminProfil() {
  const [image, setImage] = useState(null);
  const img = useRef();
  const [adminData, setAdminData] = useState({
    name: "",
    birth_date: "",
    profile_picture: "",
    gender: "",
    phone: "",
    address: "",
    email: "",
  });

  const [notification, setNotification] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      const response = await axiosClient.get("/profile");
      const data = response.data;
      setAdminData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching admin data:", error);
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prevState) => ({
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
      setAdminData((prevState) => ({
        ...prevState,
        profile_picture: reader.result,
      }));
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.put("/profile", adminData);
      setNotification('Profile updated successfully!');
    } catch (error) {
      console.error("Error updating profile data:", error);
      setNotification('Error updating profile data. Please try again.');
    }
  };

  return (
    <div className=''>
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
        <div className="md:grid grid-cols-4 grid-rows-2 gap-2 p-5 rounded-xl">
          <div className="lg:col-span-1 rounded-md flex h-auto items-center justify-center shadow-xl bg-white">
            <div className="items-center justify-center">
              <img
                src={image ? image : adminData.profile_picture}
                className="object-cover object-center w-40 h-40 rounded-full mx-auto ring-2 mb-5 ring-orange-300 p-1"
                alt=""
              />
              <input
                ref={img}
                hidden
                accept="image/*"
                type="file"
                id='profilpic-admin'
                onChange={handleImageChange}
              />
              <button
                onClick={() => img.current.click()}
                className="inline-flex items-center px-3 py-1 text-sm bg-blue-400 hover:bg-blue-600 text-white rounded-full cursor-pointer hover:text-white hover:border-none">
                <span className="items-center text-base leading-normal">Change Photo</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-3 rounded-md shadow-xl p-3 bg-white">
            <div className='p-3 flex border-b-4 items-center justify-between'>
              <p className='text-left ml-3 font-bold text-gray-600 text-xl'>User Profile</p>
              <div className='flex justify-center gap-3'>
                <button
                  onClick={() => window.history.back()}
                  className='justify-center flex items-center text-white hover:bg-red-800 rounded-full py-0.5 px-3 bg-red-600'>
                  <HiX className="mr-1" />
                  <p className='pb-1'>Cancel</p>
                </button>
                <button
                  onClick={handleSubmit}
                  className='inline-flex items-center text-white hover:bg-green-700 rounded-full py-0.5 px-3 bg-green-500'>
                  <HiOutlinePencil className="mr-1" />
                  <span className='pb-1'>Save</span>
                </button>
              </div>
            </div>

            <form>
              <div className="text-left flex p-3 text-base text-gray-500 border-gray-200">
                <label className="items-start font-semibold p-2 px-4 md:w-1/5 w-3/5" htmlFor="profiladmin-fullname">Name</label>
                <input
                  className="cursor-default p-2 bg-gray-100 appearance-none focus:outline-none text-gray-700 w-4/5"
                  type="text"
                  id="profiladmin-fullname"
                  name="name"
                  value={adminData.name}
                  onChange={handleChange}
                  maxLength={90}
                  disabled
                />
              </div>
              <div className="text-left flex p-3 text-base text-gray-500 border-gray-200">
                <label className="items-start font-semibold px-4 md:w-1/5 w-3/5" htmlFor="profiladmin-gender">Gender</label>
                <select
                  id="profiladmin-gender"
                  className="cursor-default p-2 appearance-none w-4/5 focus:outline-none bg-gray-100"
                  name="gender"
                  value={adminData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
              <div className="text-left flex p-3 text-base text-gray-500 border-gray-200">
                <label className="items-start font-semibold p-2 px-4 md:w-1/5 w-3/5" htmlFor="profiladmin-birthdate">Birth date</label>
                <input
                  className="cursor-default p-2 bg-gray-100 appearance-none focus:outline-none text-gray-700 w-4/5"
                  type="date"
                  id="profiladmin-birthdate"
                  name="birth_date"
                  value={adminData.birth_date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-left flex p-3 text-base text-gray-500 border-gray-200">
                <label className="items-start font-semibold p-2 px-4 md:w-1/5 w-3/5" htmlFor="profiladmin-address">Address</label>
                <input
                  className="cursor-default p-2 bg-gray-100 appearance-none focus:outline-none text-gray-700 w-4/5"
                  type="text"
                  id="profiladmin-address"
                  name="address"
                  value={adminData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-left flex p-3 text-base text-gray-500 border-gray-200">
                <label className="items-start font-semibold p-2 px-4 md:w-1/5 w-3/5" htmlFor="profiladmin-email">Email</label>
                <input
                  className="cursor-default p-2 bg-gray-100 appearance-none focus:outline-none text-gray-700 w-4/5"
                  type="email"
                  id="profiladmin-email"
                  name="email"
                  value={adminData.email}
                  onChange={handleChange}
                  disabled
                />
              </div>
              <div className="text-left flex p-3 text-base text-gray-500 border-gray-200">
                <label className="items-start font-semibold p-2 px-4 md:w-1/5 w-3/5" htmlFor="profiladmin-phone">Phone Number</label>
                <input
                  className="cursor-default p-2 bg-gray-100 appearance-none focus:outline-none text-gray-700 w-4/5"
                  type="number"
                  id="profiladmin-phone"
                  name="phone"
                  value={adminData.phone}
                  onChange={handleChange}
                  maxLength={20}
                  required
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditAdminProfil;
