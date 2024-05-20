import React from 'react'

 function Submission() {
    return (
        <div className='max-sm m-5 rounded-xl flex flex-col shadow-md mx-32 my-14'>
            <div className="bg-[#FF9843] p-3 rounded-t-xl"> 
                <span  className="text-white tracking-wide uppercase font-bold mb-3">Apply Internship</span>
            </div>
                <form action="" className="px-5 py-5 bg-white">
                    <div className='md:flex mb-4'>
                        {/* personal information */}
                        <div className='md:w-1/4 text-left text-gray-800 tracking-wide uppercase font-bold '>Group Members</div>
                        <div className='md:w-3/4'>
                            <div className="md:flex md:items-center ">
                                <div className="md:w-1/2 md:ml-3 mb-2">
                                    <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="submission-name">Full Name</label>
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                        type="text"
                                        id="submission-name"
                                        required />
                                </div>
                                <div className="md:w-1/2 md:ml-3 mb-2">
                                    <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="submission-gender">Gender</label>
                                    <select
                                        id="submission-gender"
                                        className="form-select bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                                        name="gender"
                                        required
                                    >
                                        <option value="">Choose Gender</option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                    </select>
                                </div>
                            </div>

                            <div className="md:flex md:items-center ">
                                <div className="md:w-1/2 md:ml-3 mb-2">
                                    <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="submission-email">Email</label>
                                    <input className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                        type="email"
                                        id="submission-email"
                                        required/>
                                </div>
                                <div className="md:w-1/2 md:ml-3 mb-2">
                                    <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="submission-phone">Phone Number </label>
                                    <input className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                        type="number"
                                        id="submission-phone"
                                        required/>
                                </div>
                            </div>

                            <div className="md:flex md:items-center ">
                                <div className="md:w-1/2 md:ml-3 mb-2">
                                    <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="submission-cv">CV</label>
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                        type="file"
                                        id="submission-cv"
                                        required />
                                </div>
                            </div>
                         </div>
                    </div>
                    {/* edu */}
                    <div className='md:flex mb-4'>
                        <div className='md:w-1/4 text-left text-gray-800 tracking-wide uppercase font-bold mb-3'>Education</div>
                        <div className='md:w-3/4'>
                            <div className="md:flex md:items-center ">
                                <div className="md:w-1/3 md:ml-3 mb-2">
                                    <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="submission-sch">College</label>
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                        type="text"
                                        id="submission-sch"
                                        required />
                                </div>

                                <div className="md:w-1/3 md:ml-3 mb-2">
                                    <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="submission-major">Major</label>
                                    <input className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                        type="text"
                                        id="submission-major"
                                        required />
                                </div>

                                <div className="md:w-1/3 md:ml-3 mb-2">
                                    <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="submission-semester">Semester</label>
                                    <input className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                        type="text"
                                        id="submission-semester"
                                        required />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* duration intern */}
                    <div className='md:flex mb-4'>
                        <div className='md:w-1/4 text-left text-gray-800 tracking-wide uppercase font-bold mb-3'>Duration of Internship</div>
                        <div className='md:w-3/4'>
                            <div className="md:flex md:items-center ">
                                <div className="md:w-1/2 md:ml-3 mb-2">
                                    <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="submission-startdate" >Start Date</label>
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                        type="date"
                                        id="submission-startdate"
                                        required />
                                </div>

                                <div className="md:w-1/2 md:ml-3 mb-2">
                                    <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="submission-enddate">End Date</label>
                                    <input className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                        type="date"
                                        id="submission-enddate"
                                        required />
                                </div>

                            </div>
                        </div>
                    </div>   

                    <div className='md:flex mb-4'>
                        <div className='md:w-1/4 text-left text-gray-800 tracking-wide uppercase font-bold mb-3'>File</div>
                        <div className='md:w-3/4'>
                            <div className="md:flex md:items-center ">
                                <div className="md:w-1/2 md:ml-3 mb-2">
                                    <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="submission-sp">
                                      Surat Pengantar  
                                    </label>
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                        type="file"
                                        id="submission-sp"
                                        required />
                                </div>
                                <div className="md:w-1/2 md:ml-3 mb-2">
                                    <label className="text-left block  text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="submission-prop">
                                        Proposal
                                    </label>
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                                        type="file"
                                        id="submission-prop"
                                        required />
                                </div>
                            </div>
                                
                            
                        </div>
                    </div>
                    
                    

                <div className="flex justify-end gap-2 my-5">
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center bg-none border-2 border-gray-500 text-md px-5 py-2 rounded-full text-gray-500 hover:text-white  hover:bg-red-600" >
                        <span className=''>Cancel</span>
                    </button>
                    <button
                        className="inline-flex items-center bg-[#FF9843] text-md px-5 py-2 rounded-full text-white hover:bg-orange-300"
                        type='submit'>
                        <span>Submit</span>
                    </button>
                </div>    
                </form>
        </div>
    )
}
export default Submission;

