import React, { useState } from 'react';
import axiosClient from '../axios-client';
import { HiArrowLeft } from "react-icons/hi";
function Submission() {
    const [members, setMembers] = useState([
        { id: 1, name: '', gender: '', email: '', phone: '' }
    ]);
    const [institution, setInstitution] = useState('');
    const [major, setMajor] = useState('');
    const [semester, setSemester] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [file, setFile] = useState('');
    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState(null); // State untuk menyimpan status pengiriman

    const addMember = () => {
        setMembers([...members, { id: members.length + 1, name: '', gender: '', email: '', phone: '' }]);
    };

    const removeMember = (id) => {
        setMembers(members.filter(member => member.id !== id));
    };

    const handleInputChange = (id, event) => {
        const { name, value } = event.target || {};
        if (name) {
            setMembers(members.map(member => member.id === id ? { ...member, [name]: value } : member));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const submissionData = {
            institution,
            major,
            semester,
            start_date: startDate,
            end_date: endDate,
            file_link: file,
            members: members.map(({ id, ...rest }) => rest), // Exclude id field
        };

        axiosClient.post('/submissions', submissionData)
            .then(response => {
                console.log(response.data);
                setSubmissionStatus('success'); // Set status pengiriman berhasil
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    setErrors(error.response.data.errors);
                }
                setSubmissionStatus('error'); // Set status pengiriman gagal
                console.error(error);
            });
    };


    return (
        <div className='w-auto m-5 mt-28 rounded-xl flex flex-col shadow-md mx-32 my-20'>
            <div className="absolute md:top-50 left-24 lg:left-12 w-96 h-96 md:w-48 md:h-48 bg-orange-500 rounded-full md:mix-blend-multiply mix-blend-hue filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -top-24 md:top-0 md:-right-4 -right-10 w-72 h-72 md:w-72 md:h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute md:hidden top-60 md:top-0 left-10 w-24 h-24 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute md:hidden bottom-60 md:top-0 right-10 w-24 h-24 md:w-72 md:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 md:-bottom-32 -left-32 lg:left-96 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="bg-[#FF9843] p-3 flex justify-between items-center gap-3 rounded-t-xl z-40">
                <button onClick={() => window.history.back()} className='ml-3 flex z-50 items-center'>

                <HiArrowLeft className='text-white'/>
                </button>
                <span className="text-white flex-grow  tracking-wide uppercase font-bold">Apply Internship</span>
            </div>

            {submissionStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline"> Data submitted successfully.</span>
                </div>
            )}
            {submissionStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline"> Failed to submit data.</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="px-5 py-5 bg-white z-40">
                <div className='md:flex mb-4'>
                    <div className='md:w-1/4 text-left text-gray-800 tracking-wide uppercase font-bold '>Group Members</div>
                    <div className='md:w-3/4'>
                        {members && members.map((member, index) => (
                            <div key={member.id} className="mb-4 border-b-2 pb-4">
                                <div className="md:flex md:items-center mb-2">
                                    <div className="md:w-1/2 md:ml-3 mb-2">
                                        <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor={`submission-name-${member.id}`}>Full Name</label>
                                        <input
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                                            type="text"
                                            id={`submission-name-${member.id}`}
                                            name="name"
                                            value={member.name}
                                            onChange={(e) => handleInputChange(member.id, e)}
                                            required
                                        />
                                        {errors[`members.${index}.name`] && (
                                            <span className="text-red-500 text-sm">{errors[`members.${index}.name`]}</span>
                                        )}
                                    </div>
                                    <div className="md:w-1/2 md:ml-3 mb-2">
                                        <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor={`submission-gender-${member.id}`}>Gender</label>
                                        <select
                                            id={`submission-gender-${member.id}`}
                                            className="form-select bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                                            name="gender"
                                            value={member.gender}
                                            onChange={(e) => handleInputChange(member.id, e)}
                                            required
                                        >
                                            <option value="">Choose Gender</option>
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                        </select>
                                        {errors[`members.${index}.gender`] && (
                                            <span className="text-red-500 text-sm">{errors[`members.${index}.gender`]}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-2">
                                    <div className="md:w-1/2 md:ml-3 mb-2">
                                        <label className="text-left block text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor={`submission-email-${member.id}`}>Email</label>
                                        <input
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                                            type="email"
                                            id={`submission-email-${member.id}`}
                                            name="email"
                                            value={member.email}
                                            onChange={(e) => handleInputChange(member.id, e)}
                                            required
                                        />
                                        {errors[`members.${index}.email`] && (
                                            <span className="text-red-500 text-sm">{errors[`members.${index}.email`]}</span>
                                        )}
                                    </div>
                                    <div className="md:w-1/2 md:ml-3 mb-2">
                                        <label className="text-left block text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor={`submission-phone-${member.id}`}>Phone Number</label>
                                        <input
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] no-spinner"
                                            type="number"
                                            id={`submission-phone-${member.id}`}
                                            name="phone"
                                            value={member.phone}
                                            onChange={(e) => handleInputChange(member.id, e)}
                                            required
                                        />
                                        {errors[`members.${index}.phone`] && (
                                            <span className="text-red-500 text-sm">{errors[`members.${index}.phone`]}</span>
                                        )}
                                    </div>
                                </div>
                                {members.length > 1 && (
                                    <button
                                        type="button"
                                        className="bg-red-500 text-white py-1 px-3 rounded-full"
                                        onClick={() => removeMember(member.id)}
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            className="bg-green-500 text-white py-2 px-4 rounded-full"
                            onClick={addMember}
                        >
                            Add Member
                        </button>
                    </div>
                </div>

                {/* Education */}
                <div className='md:flex mb-4'>
                    <div className='md:w-1/4 text-left text-gray-800 tracking-wide uppercase font-bold mb-3'>Education</div>
                    <div className='md:w-3/4'>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3 md:ml-3 mb-2">
                                <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="submission-sch">institution</label>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                                    type="text"
                                    id="submission-sch"
                                    value={institution}
                                    onChange={(e) => setInstitution(e.target.value)}
                                    required
                                />
                                {errors.institution && (
                                    <span className="text-red-500 text-sm">{errors.institution}</span>
                                )}
                            </div>
                            <div className="md:w-1/3 md:ml-3 mb-2">
                                <label className="text-left block text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="submission-major">Major</label>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                                    type="text"
                                    id="submission-major"
                                    value={major}
                                    onChange={(e) => setMajor(e.target.value)}
                                    required
                                />
                                {errors.major && (
                                    <span className="text-red-500 text-sm">{errors.major}</span>
                                )}
                            </div>
                            <div className="md:w-1/3 md:ml-3 mb-2">
                                <label className="text-left block text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="submission-semester">Semester</label>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] no-spinner"
                                    type="number"
                                    id="submission-semester"
                                    value={semester}
                                    onChange={(e) => setSemester(e.target.value)}
                                    required
                                />
                                {errors.semester && (
                                    <span className="text-red-500 text-sm">{errors.semester}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Duration of Internship */}
                <div className='md:flex mb-4'>
                    <div className='md:w-1/4 text-left text-gray-800 tracking-wide uppercase font-bold mb-3'>Duration of Internship</div>
                    <div className='md:w-3/4'>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/2 md:ml-3 mb-2">
                                <label className="tracking-wide block uppercase font-bold text-left text-gray-500 mb-1 text-sm" htmlFor="submission-startdate">Start Date</label>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                                    type="date"
                                    id="submission-startdate"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    required
                                />
                                {errors.start_date && (
                                    <span className="text-red-500 text-sm">{errors.start_date}</span>
                                )}
                            </div>
                            <div className="md:w-1/2 md:ml-3 mb-2">
                                <label className="text-left block text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="submission-enddate">End Date</label>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                                    type="date"
                                    id="submission-enddate"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    required
                                />
                                {errors.end_date && (
                                    <span className="text-red-500 text-sm">{errors.end_date}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* File */}
                <div className='md:flex mb-4'>
                    <div className='md:w-1/4 text-left text-gray-800 tracking-wide uppercase font-bold mb-3'>Files</div>
                    <div className='md:w-3/4'>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/2 md:ml-3 mb-2">
                                <label className="text-left block text-gray-500 font-bold mb-1 uppercase text-sm tracking-wide" htmlFor="submission-sp">File Pendukung (Google Drive Link)</label>
                                <p className="text-sm text-left text-gray-600 mb-2">CV, Surat Pengantar, Proposal</p>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                                    type="url"
                                    id="submission-sp"
                                    value={file}
                                    onChange={(e) => setFile(e.target.value)}
                                    required
                                />
                                {errors.file_link && (
                                    <span className="text-red-500 text-sm">{errors.file_link}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-2 my-5">
                    <a
                        href="#"
                        onClick={() => window.history.back()}
                        className="inline-flex items-center bg-none border-2 border-gray-500 text-md px-5 py-2 rounded-full text-gray-500 hover:text-white  hover:bg-red-600"
                    >
                        <span>Cancel</span>
                    </a>
                    <button
                        className="inline-flex items-center bg-[#FF9843] text-md px-5 py-2 rounded-full text-white hover:bg-orange-300"
                        type='submit'
                    >
                        <span>Submit</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Submission;

