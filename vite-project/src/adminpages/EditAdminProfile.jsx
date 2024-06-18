import React, {useRef,useState} from 'react'
import { HiOutlinePencil, HiX  } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
function EditAdminProfil() {
  const [image, setImage] = useState(null)
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
  return (
    <div>
        <div className="md:grid grid-cols-4 grid-rows-2 gap-2 p-5 rounded-xl">
            <div className="lg:col-span-1 rounded-md flex h-auto items-center justify-center shadow-xl bg-white">
              <div className="items-center  justify-center ">
                  <img 
                    src={image?image:"https://res.cloudinary.com/dboafhu31/image/upload/v1625318266/imagen_2021-07-03_091743_vtbkf8.png"} 
                    className="ring-orange-300 rounded-full p-1 ring-2 w-44 h-44 m-auto mb-3" alt=""/>
                  <input ref={img}
                            hidden
                            accept="image/*"
                            type="file"
                            id='profilpic-admin'
                            onChange={handleImageChange}
                          />

                        <button 
                            onClick={()=>img.current.click()}
                            className="inline-flex items-center px-3 py-1 text-sm bg-blue-400 hover:bg-blue-600 text-white rounded-full  cursor-pointer hover:text-white hover:border-none">
                            <span className="items-center text-base leading-normal">Change Photo</span>
                        </button>
              </div>
              
            </div>

            <div className="md:col-span-3 rounded-md shadow-xl p-3 bg-white">

              <div className=' p-3 flex border-b-4 items-center justify-between'>
                <p className='text-left ml-3 font-bold text-gray-600 text-xl'>User Profile</p>

                <div className='flex justify-center gap-3'>
                  <button 
                    onClick={() => window.history.back()}
                    className='justify-center flex items-center text-white hover:bg-red-800 rounded-full py-0.5 px-3 bg-red-600'>
                    <HiX className=" mr-1" />
                  <p className=' pb-1'>cancel</p> 
                  </button>
                  <button 
                    className='inline-flex items-center text-white  hover:bg-green-700 rounded-full py-0.5 px-3 bg-green-500'>
                    <HiOutlinePencil className="mr-1" />
                  <span className=' pb-1'>save</span> 
                  </button>
                </div>
              </div>

              <form action="">
                <div className="text-left flex p-3 text-base  text-gray-500 border-gray-200">
                  <label className="items-start font-semibold p-2 px-4 md:w-1/5 w-3/5" htmlFor="profiladmin-fullname">Name</label>
                  <input 
                    className="cursor-default p-2 bg-gray-100 appearance-none focus:outline-none text-gray-00 w-4/5"
                    type="text"
                    placeholder={adminData.name}
                    id="profil-fullname"
                    name="name"
                    value="alieffiea"
                    maxLength={90}
                    disabled/>
                </div>
                <div className="text-left flex p-3 text-base text-gray-500 border-gray-200">
                  <label className="items-start font-semibold px-4  md:w-1/5 w-3/5" htmlFor="profiladmin-gender">Gender</label>
                  <select
                    id="profiladmin-gender"
                    className="cursor-default p-2 appearance-none w-4/5 focus:outline-none bg-gray-100  active:border-[#FF9843]"
                    name="gender"
                    required>
                    <option value="">Choose Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
                <div className="text-left flex p-3 text-base  text-gray-500 border-gray-200">
                  <label className="items-start font-semibold p-2 px-4 md:w-1/5 w-3/5" htmlFor="profiladmin-birthdate">Birth date</label>
                  <input 
                    className="cursor-default p-2 bg-gray-100 appearance-none focus:outline-none text-gray-00 w-4/5"
                    type="date"
                    id="profiladmin-birthdate"
                    name="name"
                    required/>
                </div>
                <div className="text-left flex p-3 text-base  text-gray-500 border-gray-200">
                  <label className="items-start font-semibold p-2 px-4 md:w-1/5 w-3/5" htmlFor="profiladmin-address">Address</label>
                  <input 
                    className="cursor-default p-2 bg-gray-100 appearance-none focus:outline-none text-gray-00 w-4/5"
                    type="text"
                    id="profiladmin-address"
                    required/>
                </div>
                <div className="text-left flex p-3 text-base  text-gray-500 border-gray-200">
                  <label className="items-start font-semibold p-2 px-4 md:w-1/5 w-3/5" htmlFor="profiladmin-email">Email</label>
                  <input 
                    className="cursor-default p-2 bg-gray-100 appearance-none focus:outline-none text-gray-00 w-4/5"
                    type="email"
                    id="profiladmin-email"
                    required/>
                </div>
                <div className="text-left flex p-3 text-base  text-gray-500 border-gray-200">
                  <label className="items-start font-semibold p-2 px-4 md:w-1/5 w-3/5" htmlFor="profiladmin-phone">Phone Number</label>
                  <input 
                    className="cursor-default p-2 bg-gray-100 appearance-none focus:outline-none text-gray-00 w-4/5"
                    type="number"
                    id="profiladmin-phone"
                    maxLength={20}
                    required/>
                </div>
                <div className="text-left flex p-3 text-base  text-gray-500 border-gray-200">
                  <label className="items-start font-semibold p-2 px-4 md:w-1/5 w-3/5" htmlFor="profiladmin-roles">Roles</label>
                  <input 
                    className="cursor-default p-2 bg-gray-100 appearance-none focus:outline-none text-gray-00 w-4/5"
                    type="text"
                    id="profil-roles"
                    disabled/>
                </div>
              </form>
              
            </div>
          </div>
    </div>
  )
}

export default EditAdminProfil
