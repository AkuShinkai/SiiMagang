import React, { useRef, useState } from 'react';
import profil from '../assets/nyonyo.jpg'
import { HiOutlineChevronLeft, HiOutlinePencil } from "react-icons/hi";
import { FaRegSave } from "react-icons/fa";

function EditProfil() {
    const [gender, setGender] = useState();
    const item = [
        {value: "Female", label: "female"},
        {value: "Male", label: "male"},
    ]
    const [value, setValue] = useState('')
    const [image, setImage] = useState(null)
    const img = useRef()
    const options = [
        {label: "Backend Developer", value:1},
        {label: "Frontend Developer", value:2},
        {label: "Developer UI/UX", value:3},
        {label: "System Analyst", value:4},
        {label: "Mobile developer", value:5},
        {label: "Graphic Design", value:6},
        {label: "Social Media Specialist", value:7},
        {label: "Digital Marketing", value:8},
        {label: "Content Creator", value:9},
    ]
    function handleSelect(event){
        setValue(event.target.value)
    }
    

return (
    <div className='max-sm m-5 rounded-xl flex flex-col shadow-md mb-6 mt-4 px-5 py-5 bg-white'>
        <div className="items-center gap-5 my-3 mx-20">
            <img src={image?image:profil} alt={profil} className='w-32 h-32 rounded-full mx-auto ring-2 mb-5 ring-orange-300 p-1'/>
            <button onClick={()=>img.current.click()}
                className="inline-flex items-center  px-4 py-1 text-md bg-white text-gray-400  text-blue rounded-full border-2 hover:bg-green-400 cursor-pointer hover:bg-blue hover:text-white hover:border-none">
                <HiOutlinePencil className="mr-2" />
                <span className="items-center text-base leading-normal">edit</span>
            </button>
        </div>
        <input ref={img}
                    hidden
                    accept='/image/*'
                    type="file" 
                    name="file" id="profil-pic" 
                    onChange={(e)=>{
                        const file = URL.createObjectURL(e.target.files[0]);
                        setImage(file);
                    }}/>
                    
        <form action="" className="my-5 mx-20">
            <div className='text-left text-gray-800 tracking-wide uppercase font-bold mb-3' >Personal Information</div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/2 mb-6">
                    <label className="tracking-wide block uppercase font-semibold text-left text-gray-500 mb-1 text-sm" htmlFor="profil-fullname" >
                        Full Name 
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                        type="text"
                        placeholder='Muhammad Fariz'
                        id="profil-fullname"
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
                        required />
                </div>
            </div>
            <div className="md:flex md:items-center ">
                <div className="md:w-1/2 mb-6">
                    <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="profil-email" >
                        Email Address
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                        type="email"
                        id="profil-email"
                        required />
                </div>
                
                <div className="md:w-1/2 md:ml-3 mb-6">
                    <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="profil-phonenumber">
                        Phone Number
                    </label>
                    <input className="bg-gray-200 appearance-none border-2rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                        type="number"
                        id="profil-phonenumber"
                        required />
                </div>
            </div>
            <div className="flex text-left mb-6 ">
                <div className="w-1/5 flex ">
                    <label htmlFor="profil-gender" className="block uppercase text-sm text-gray-500 font-bold mb-1 md:mb-0" >
                        Gender
                    </label>
                </div>
                <div className="w-4/5 flex form-field radio-buttons gap-5">
                    {item.map(item => (
                            <label className='items-center' key={item.value}>
                            <input className='form-radio text-[#FF9843]'
                            type="radio" 
                            name="gender" 
                            value={item.value} 
                            id={item.value}
                            onChange={e=>setGender(e.target.value)}
                            required/>
                            <label htmlFor={item.value} className='ml-2  text-base text-gray-600 mb-1 '>{item.label}</label>
                        </label>
                        )
                    )}
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/5 flex">
                    <label htmlFor="profil-position" className="block uppercase text-sm text-gray-500 font-bold mb-1 md:mb-0" >
                        Position
                    </label>
                </div>
                <div className="md:w-4/5">
                <select id="profil-position" className="form-select bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]" onChange={handleSelect}>
                        {options.map(option => (
                            <option className='hover:bg-[#FF9843] ' key={option.value} value={option.value}> 
                                {option.label}
                            </option>
                        )
                    )}
                    </select>
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
                            required />
                    </div>
                    
                    <div className="md:w-1/3 md:ml-3 mb-6">
                        <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="profil-school">
                            School/University
                        </label>
                        <input className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                            type="text"
                            id="profil-school"
                            required />
                    </div>
                    <div className="md:w-1/3 md:ml-3 mb-6">
                        <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="profil-semester">
                                semester
                        </label>
                        <input className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                            type="text"
                            id="profil-semester"
                            required />
                    </div>
                </div>
        </form>
        <div className="flex justify-between my-5 mx-20">
            <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center bg-red-400 text-md px-3 py-1 rounded text-white hover:bg-blue-700" >
                <HiOutlineChevronLeft className="mr-2" />
                <span>cancel</span>
            </button>
            <button
                className="inline-flex items-center bg-green-400 text-md px-3 py-1 rounded text-white hover:bg-green-500"
                type='submit'>
                <FaRegSave className="mr-2" />
                <span>save</span>
            </button>
        </div>
    </div>
)
}

export default EditProfil;