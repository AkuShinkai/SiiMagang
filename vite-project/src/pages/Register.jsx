import React, { useRef, useState } from "react";
import login from "../assets/login.jpg"
import { Link } from 'react-router-dom';
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

const Register = () => {

//    const nameRef = useRef();
   const emailRef = useRef();
   const passwordRef = useRef();
   const passwordConfirmationRef = useRef();
   const [errors, setErrors] = useState(null)
   const { setUser, setToken } = useStateContext()

   const onSubmit = (ev) => {
       ev.preventDefault()

       const payload = {
        //    name: nameRef.current.value,
           email: emailRef.current.value,
           password: passwordRef.current.value,
           password_confirmation: passwordConfirmationRef.current.value,
       }
       axiosClient.post('/register', payload)
           .then(({ data }) => {
               setUser(data.user)
               setToken(data.token)
           })
           .catch(err => {
               const response = err.response;
               if (response && response.status === 422) {
                   setErrors(response.data.errors)
               }
           })
   }

   return (
       <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="absolute md:top-50 left-24 lg:left-12 w-96 h-96 md:w-48 md:h-48 bg-orange-500 rounded-full md:mix-blend-multiply mix-blend-hue filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -top-24 md:top-0 md:-right-4 -right-10 w-72 h-72 md:w-72 md:h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute md:hidden top-60 md:top-0 left-10 w-24 h-24 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute md:hidden bottom-60 md:top-0 right-10 w-24 h-24 md:w-72 md:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 md:-bottom-32 -left-32 lg:left-96 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
           <div className="bg-white flex rounded-2xl shadow-lg max-w-3xl p-5 items-center z-40">
               <div className="md:w-1/2 px-8 md:px-16">
                   <h2 className="font-bold text-2xl text-[#002D74]">SiMagang</h2>
                   <p className="text-xs mt-4 text-[#002D74] pb-3">Register and create your account</p>

                   {errors && <div className="bg-red-600 rounded-lg p-2">
                       {Object.keys(errors).map(key => (
                           <p key={key} className="text-white font-bold px-2 text-xs">{errors[key][0]}</p>
                       ))}
                   </div>
                   }
                   <form action="#" onSubmit={onSubmit} className="flex flex-col gap-4">
                       {/* <input
                           className=" form-input p-2 mt-8 border-b border-solid border-gray-300 rounded focus:outline-none focus:border-[#FF9B50] focus:border-l-4"
                           type="text"
                           name="name"
                           ref={nameRef}
                           placeholder="name" /> */}
                       <div className="relative">
                           <input
                               className="p-2 w-full mt-4 border-b border-solid border-gray-300 rounded focus:outline-none focus:border-[#FF9B50] focus:border-l-4"
                               type="email"
                               name="email"
                               ref={emailRef}
                               placeholder="email" />
                       </div>
                       <div className="relative">
                           <input
                               className="p-2 w-full border-b border-solid border-gray-300 rounded focus:outline-none focus:border-[#FF9B50] focus:border-l-4"
                               type="password"
                               name="password"
                               ref={passwordRef}
                               placeholder="password" />
                       </div>
                       <div className="relative">
                           <input
                               className="p-2 w-full border-b border-solid border-gray-300 rounded focus:outline-none focus:border-[#FF9B50] focus:border-l-4"
                               type="password"
                               name="password_Confirmation"
                               ref={passwordConfirmationRef}
                               placeholder="confirm password" />
                       </div>
                       <button className="bg-[#FF9843] rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
                   </form>

                   <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                      <p>Already Have an Account</p>
                       <Link className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300" to="/login" title="Register a new account" >Login</Link>
                   </div>
               </div>


               <div className="md:block hidden w-1/2">
                   <img className="rounded-2xl" src={login} />
               </div>
           </div>
       </section>

   );
};

export default Register;
