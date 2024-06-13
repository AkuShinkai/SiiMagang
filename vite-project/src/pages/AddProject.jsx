import React, { useState } from 'react';
import { HiOutlinePlusCircle, HiOutlineChevronLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axios-client';

function AddProject() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        start_date: '',
        end_date: '',
        repository: '',
    });
    const [notification, setNotification] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            await axiosClient.post('/projects', formData);
            setNotification('Project created successfully.');
        } catch (error) {
            console.error('Error adding project:', error);
        }
    };

    return (
        <div className='w-full flex flex-col shadow-lg mb-6 mt-4'>
            <div className="flex justify-between ">
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center bg-blue-400 text-md px-3 py-1 rounded text-white hover:bg-blue-700"
                >
                    <HiOutlineChevronLeft className="mr-2" />
                    <span>Back</span>
                </button>
            </div>

            <div className="flex flex-col w-full max-w-md p-4 mx-auto my-8 bg-white rounded-lg shadow-md">
                {notification && (
                    <div className="m-4 p-4 bg-green-100 text-green-700 rounded">{notification}</div>
                )}
                <div className="flex flex-col mb-4">
                    <label htmlFor="name" className="mb-2 text-sm font-medium">Project Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="description" className="mb-2 text-sm font-medium">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        rows="4"
                    ></textarea>
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="start_date" className="mb-2 text-sm font-medium">Start Date</label>
                    <input
                        type="date"
                        id="start_date"
                        name="start_date"
                        value={formData.start_date}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="end_date" className="mb-2 text-sm font-medium">End Date</label>
                    <input
                        type="date"
                        id="end_date"
                        name="end_date"
                        value={formData.end_date}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="repository" className="mb-2 text-sm font-medium">Repository</label>
                    <input
                        type="url"
                        id="repository"
                        name="repository"
                        value={formData.repository}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                    Upload
                </button>
            </div>
        </div>
    );
}

export default AddProject;
