import React, { useRef, useState } from "react";
import login from "../assets/login.jpg"
import { useNavigate } from 'react-router-dom';
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";

function Login() {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null)
    const { setUser, setToken } = useStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault()

        const payload = {

            email: emailRef.current.value,
            password: passwordRef.current.value,

        }
        axiosClient.post('/login', payload)
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
            <div className="bg-white flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div className="md:w-1/2 px-8 md:px-16">
                    <h2 className="font-bold text-2xl text-[#002D74]">SiMagang</h2>
                    <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

                    {errors && <div className="bg-red-600 rounded-lg p-2">
                        {Object.keys(errors).map(key => (
                            <p key={key} className="text-white font-bold px-2 text-xs">{errors[key][0]}</p>
                        ))}
                    </div>
                    }

                    <form action="#" onSubmit={onSubmit} method="POST" className="flex flex-col gap-4">
                        <input
                            className=" form-input p-2 mt-8 border-b border-solid border-gray-300 rounded focus:outline-none focus:border-[#FF9B50] focus:border-l-4"
                            type="email"
                            name="email"
                            ref={emailRef}
                            placeholder="Email" />
                        <div className="relative">
                            <input
                                className="p-2 w-full border-b border-solid border-gray-300 rounded focus:outline-none focus:border-[#FF9B50] focus:border-l-4"
                                type="password"
                                name="password"
                                ref={passwordRef}
                                placeholder="Password" />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <label className="flex text-xs text-slate-500 hover:text-slate-600 cursor-pointer">
                                <input id="remember-me" className="mr-1" type="checkbox" />
                                <span>Remember Me</span>
                            </label>
                            <a className="text-blue-600 text-xs hover:text-blue-700 hover:underline hover:underline-offset-4"
                                href="#">
                                Forgot Password?
                            </a>
                        </div>
                        <button className="bg-[#FF9843] rounded-xl text-white py-2 hover:scale-105 duration-300" title="login" >Login</button>
                    </form>

                    <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                        <p>Don't have an account?</p>
                        <button
                            onClick={handleClick}
                            className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300" >Register</button>
                    </div>
                </div>


                <div className="md:block hidden w-1/2">
                    <img className="rounded-2xl" src={login} />
                </div>
            </div>
        </section>

    )
    function handleClick() {
        navigate("/register")
    }
};

export default Login;
