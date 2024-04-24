import React, { useState } from 'react';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { FaRegSave } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import logbookService from '../services/logbookService'; // Pastikan Anda telah mengimpor logbookService
import { useStateContext } from '../contexts/ContextProvider';

function AddLogbook() {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState('');
    const [activity, setActivity] = useState('');

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleActivityChange = (e) => {
        setActivity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            date: selectedDate,
            activity: activity,
        };

        logbookService.create(data)
            .then(response => {
                console.log(response.data);
                navigate('/logbooks');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className='max-sm  m-5 rounded-xl flex flex-col shadow-md mb-6 bg-white mt-4'>
            <div className="flex justify-between my-5 mx-20">
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center bg-blue-400 text-md px-3 py-1 rounded text-white hover:bg-blue-700" >
                    <HiOutlineChevronLeft className="mr-2" />
                    <span>back</span>
                </button>
                <button
                    className="inline-flex items-center bg-green-400 text-md px-3 py-1 rounded text-white hover:bg-green-500"
                    type='submit'
                    onClick={handleSubmit}>
                    <FaRegSave className="mr-2" />
                    <span>save</span>
                </button>
            </div>

            <form action="" className=" my-5 mx-20" onSubmit={handleSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3 flex">
                        <label htmlFor="date" className=" text-gray-500 font-bold mb-1 md:mb-0" >
                            Select Date
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843] "
                            type="date"
                            id="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            required />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3 flex">
                        <label className="text-gray-500 font-bold md:text-center mb-1 md:mb-0" htmlFor="detail_act">
                            Deskripsi Activity
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                            id="detail_act"
                            name="activity" // Tambahkan name attribute
                            value={activity} // Tambahkan value attribute
                            onChange={handleActivityChange} // Tambahkan event handler untuk perubahan
                            required />
                    </div>
                </div>
            </form>


        </div>

    )

}

export default AddLogbook;
