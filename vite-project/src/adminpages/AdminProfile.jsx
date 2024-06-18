import React from 'react'
import { HiOutlinePencil } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
function AdminProfile() {
  const navigate = useNavigate()
  return (
    <div>
        <div className="md:grid grid-cols-4 grid-rows-2 gap-2 p-5 rounded-xl">
            <div className="lg:col-span-1 rounded-md flex h-auto items-center justify-center shadow-xl bg-white">
              <div className="items-center justify-center ">
                  <img 
                    src="https://res.cloudinary.com/dboafhu31/image/upload/v1625318266/imagen_2021-07-03_091743_vtbkf8.png" 
                    className="w-44 h-44 m-auto" alt=""/>
                  <div className=''>
                    <h1 className='font-bold text-gray-500 uppercase'>Alieffiea</h1>
                    <h2 className='text-gray-400'>Mentor</h2>
                  </div>
                 
              </div>
            </div>

            <div className="md:col-span-3 rounded-md shadow-xl p-3 bg-white">
            
              <div className=' p-3 flex border-b-4 items-center justify-between'>
                <p className='text-left font-bold text-gray-600 text-xl'>User Profile</p>
                <button 
                  onClick={() => navigate('/editadminprofile')}
                  className='inline-flex items-center text-[#FF9843] hover:text-white hover:bg-[#FF9843] rounded-full py-0.5 px-3 bg-transparent border border-[#FF9843]'>
                  <HiOutlinePencil className="mr-2" />
                 <span className='text-center'>edit</span> 
                </button>
                
              </div>
              <div className="text-left flex p-3 text-base border-b text-gray-500 border-gray-200">
                <span className="items-start font-semibold px-4  md:w-1/5 w-3/5">Name</span>
                <span className="cursor-default focus:outline-none w-4/5">Alieffiea</span>
              </div>
              <div className="text-left flex p-3 text-base border-b border-gray-200 text-gray-500">
                <span className="px-4 font-semibold  md:w-1/5 w-3/5">Gender</span>
                <span className="cursor-default focus:outline-none w-4/5">Female</span>
              </div>
              <div className="text-left flex p-3 text-base border-b border-gray-200 text-gray-500">
                <span className="px-4 font-semibold   md:w-1/5 w-3/5">Birthday</span>
                <span className="cursor-default focus:outline-none w-4/5">27/03/03</span>
              </div>
              <div className="flex p-3 text-base text-left border-b border-gray-200 text-gray-500">
                <span className="px-4 font-semibold   md:w-1/5 w-3/5">Address</span>
                <span className="cursor-default focus:outline-none w-4/5">di sana</span>
              </div>
              
              <div className="flex p-3 text-base text-left border-b border-gray-200 text-gray-500">
                <span className="px-4 font-semibold   md:w-1/5 w-3/5">Email</span>
                <span className="cursor-default focus:outline-none w-4/5">testapp@test</span>
              </div>
              <div className="text-left flex p-3 text-base border-b border-gray-200 text-gray-500">
                <span className="px-4 font-semibold   md:w-1/5 w-3/5">Phone Number</span>
                <span className="cursor-default  focus:outline-none w-4/5">827625247</span>
              </div>
              <div className="text-left flex p-3 text-base  border-b border-gray-200 text-gray-500">
                <span className="px-4 font-semibold    md:w-1/5 w-3/5">Roles</span>
                <span className="cursor-default  focus:outline-none w-4/5">mentor</span>
              </div> 

            </div>
          </div>
    </div>
  )
}

export default AdminProfile
