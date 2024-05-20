import React, { useState, useEffect } from 'react';
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axios-client';

function Logbook() {
    const navigate = useNavigate();
    const TABLE_HEAD = ["No.", "Date", "Activity", "Action"];
    const TABLE_COLUMN_WIDTHS = ["50px", "150px", "400px", "100px"];
    const [isLoading, setIsLoading] = useState(true);

    const [logbooks, setLogbooks] = useState([]);

    useEffect(() => {
        retrieveLogbooks();
    }, []);

    const fetchLogbooks = async () => {
        try {
            const response = await axiosClient.get('/logbooks');
            setLogbooks(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    const handleClick = () => {
        navigate('/addlogbook');
    };

    return (
        <div className='max-sm m-5 rounded-xl flex flex-col shadow-md mb-6 mt-4 bg-white'>
            <div className="flex justify-end my-5 mx-5">
                <button
                    onClick={handleClick}
                    className="flex bg-blue-400 text-md px-3 py-1 rounded justify-center text-white hover:bg-blue-700"
                    type="button">
                    <span className='flex items-center'>
                        <HiOutlinePlusCircle className="mr-2" />
                        Add
                    </span>
                </button>
            </div>

            <div className='flex flex-wrap'>
                <h3 className='font-semibold text-lg p-4 m-auto'>CATATAN AKTIVITAS HARIAN</h3>
            </div>
            <div className="bg-pink-500 block bg-transparent m-4 p-4">
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
                    </div>

                ) : (
                    <>
                        <table className='w-full'>
                            <thead>
                                <tr className='border border-solid border-l-0 border-r-0'>
                                    {TABLE_HEAD.map((head, index) => (
                                        <th
                                            key={head}
                                            className='text-md px-6 py-3'
                                            style={{ width: TABLE_COLUMN_WIDTHS[index] }} >
                                            {head}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {logbooks.map((logbook, index) => (
                                    <tr key={logbook.id} className='border-t'>
                                        <td className='text-md px-6 py-3 text-center'>{index + 1}</td>
                                        <td className='text-md px-6 py-3'>{logbook.date}</td>
                                        <td className='text-md px-6 py-3'>{logbook.activity}</td>
                                        <td className='text-md px-6 py-3 text-center'>
                                            {/* Tempatkan aksi lain seperti tombol edit/delete di sini */}
                                            <button className="text-blue-500 hover:text-blue-700">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}

            </div>
        </div>
    );
}

export default Logbook;
