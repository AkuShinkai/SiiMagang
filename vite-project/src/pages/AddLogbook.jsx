import React, { useState } from 'react';
import axiosClient from '../axios-client';

function AddLogbook() {
    const [logbookData, setLogbookData] = useState({
        date: '',
        activity: '',
    });

    const [notification, setNotification] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogbookData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post('/logbooks/add', logbookData);
            console.log("Logbook data added successfully:", response.data);
            setNotification('Logbook data added successfully!');
            setLogbookData({ date: '', activity: '' }); // Mengosongkan kembali isian form
        } catch (error) {
            console.error("Error adding logbook data:", error);
            setNotification('Error adding logbook data. Please try again.');
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        window.history.back();
    };

    return (
        <div className='max-sm m-5 rounded-xl flex flex-col shadow-md mb-6 bg-white mt-4'>

            {notification && (
                <div className="m-4 p-4 bg-green-100 text-green-700 rounded">
                    {notification}
                </div>
            )}

            <form onSubmit={handleSubmit} className="my-5 mx-20">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3 flex">
                        <label htmlFor="date" className="text-gray-500 font-bold mb-1 md:mb-0">
                            Select Date
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                            type="date"
                            id="date"
                            name="date"
                            value={logbookData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3 flex">
                        <label className="text-gray-500 font-bold md:text-center mb-1 md:mb-0" htmlFor="detail_act">
                            Deskripsi Activity
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <textarea
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF9843]"
                            id="detail_act"
                            name="activity"
                            value={logbookData.activity}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="flex justify-between my-5 mx-20">
                    <button
                        onClick={handleCancel}
                        className="inline-flex items-center bg-red-400 text-md px-3 py-1 rounded text-white hover:bg-blue-700">
                        <span>Cancel</span>
                    </button>
                    <button
                        className="inline-flex items-center bg-green-400 text-md px-3 py-1 rounded text-white hover:bg-green-500"
                        type='submit'>
                        <span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddLogbook;
