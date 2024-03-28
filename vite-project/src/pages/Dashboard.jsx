import React from 'react'
import profil from '../assets/nyonyo.jpg'

const Dashboard = () => {
  return (
    <div>
    <div className="flex h-48 m-5 bg-white rounded-xl shadow-md overflow-auto max-sm">
        <div className="md:flex">
          <div className="md:shrink-0 p-3 hidden md:block">
          <img src={profil} alt="profil dashboard" className='md:h-40 md:w-40 rounded-full'/>
          </div>
          
          <div className="p-5">
            <a className="block mt-1 text-lg text-left font-thin text-gray-400 hover:underline">Halo,</a>
            <div className='block text-2xl text-left font-bold'>Alieffiea</div>
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