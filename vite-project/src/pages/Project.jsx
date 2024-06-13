import React, { useState, useEffect } from 'react';
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axios-client';

function Project() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [isEditMode, setEditMode] = useState(false);
    const TABLE_HEAD = ["No.", "Project", "Start", "Finish", "Repository", "Action"];
    const TABLE_COLUMN_WIDTHS = ["50px", "100px", "100px", "100px", "150px", "150px"];

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axiosClient.get('/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const handleClick = () => {
        navigate("/AddProject");
    };

    const handleDetailClick = (project) => {
        setCurrentProject(project);
        setModalOpen(true);
        setEditMode(false); // Set edit mode to false when opening modal for detail
    };

    const handleEditClick = (project) => {
        setCurrentProject(project);
        setModalOpen(true);
        setEditMode(true); // Always set edit mode to true when opening modal for edit
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setCurrentProject(null);
        setEditMode(false); // Reset edit mode when modal is closed
    };

    const handleEditSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosClient.put(`/projects/${currentProject.id}`, currentProject);
            fetchProjects();
            handleModalClose();
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentProject(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    async function handleDelete(id) {
        try {
            await axiosClient.delete(`/projects/${id}`);
            setProjects(projects.filter(project => project.id !== id));
            handleModalClose(); // Close modal after delete
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    }

    return (
        <div className='max-sm m-5 rounded-xl flex flex-col shadow-md mb-6 mt-4 bg-white'>
            <div className="flex justify-end my-5 mx-5">
                <button
                    onClick={handleClick}
                    className="flex bg-white border-2 border-blue-400 text-md px-3 py-1 rounded-full justify-center text-blue-400 hover:bg-blue-400 hover:border-none hover:text-white"
                    type="button">
                    <span className='flex items-center'>
                        <HiOutlinePlusCircle className='mr-2' />
                        Add
                    </span>
                </button>
            </div>

            <div className='flex flex-wrap'>
                <h3 className='font-semibold text-lg p-4 m-auto'>PROJECT</h3>
            </div>
            <div className="bg-pink-500 block bg-transparent m-4 p-4">
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
                        {projects.map((project, index) => (
                            <tr key={project.id} className='border-t border-b border-gray-200'>
                                <td className='text-md px-6 py-3 text-center'>{index + 1}</td>
                                <td className='text-md px-6 py-3'>{project.name}</td>
                                <td className='text-md px-6 py-3'>{project.start_date}</td>
                                <td className='text-md px-6 py-3'>{project.end_date}</td>
                                <td className='text-md px-6 py-3'>
                                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>
                                        Repository
                                    </a>
                                </td>
                                <td className='text-md px-6 py-3 text-center'>
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleDetailClick(project)}>
                                        Detail
                                    </button>
                                    <button className="bg-yellow-500 text-white px-2 py-1 rounded ml-2" onClick={() => handleEditClick(project)}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-2/5">
                        <h2 className="text-xl font-bold mb-4">{isEditMode ? 'Edit Project' : 'Project Detail'}</h2>
                        <form onSubmit={handleEditSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="name">Project Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={currentProject.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    disabled={!isEditMode}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={currentProject.description}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    rows="4"
                                    disabled={!isEditMode}
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="start_date">Start Date</label>
                                <input
                                    type="date"
                                    id="start_date"
                                    name="start_date"
                                    value={currentProject.start_date}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    disabled={!isEditMode}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="end_date">End Date</label>
                                <input
                                    type="date"
                                    id="end_date"
                                    name="end_date"
                                    value={currentProject.end_date}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    disabled={!isEditMode}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="repository">Repository</label>
                                <input
                                    type="url"
                                    id="repository"
                                    name="repository"
                                    value={currentProject.repository}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    disabled={!isEditMode}
                                />
                            </div>
                            <div className="flex justify-end">
                                {!isEditMode && (
                                    <button
                                        type="button"
                                        onClick={handleModalClose}
                                        className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                    >
                                        Close
                                    </button>
                                )}
                                {isEditMode && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => setEditMode(false)}
                                            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDelete(currentProject.id)}
                                            className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-blue-500 text-white px-4 py-2 rounded"
                                        >
                                            Save
                                        </button>
                                    </>
                                )}

                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
