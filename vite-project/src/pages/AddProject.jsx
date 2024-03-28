import React from 'react'
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function AddProject()  {
  const navigate = useNavigate()
  return (
    <div className=' w-full flex flex-col shadow-lg mb-6 mt-4 bg-gray-600'>
        <div className="flex justify-between ">
            <button
            onClick={()=> navigate(-1)}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4" >
                back
            </button>
            <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-4"
            type='submit'>
                save
            </button>
        </div>
        <div class="flex flex-col w-full max-w-md p-4 mx-auto my-8 bg-white rounded-lg shadow-md">
            <div class="flex flex-col mb-4">
              <label for="start" class="mb-2 text-sm font-medium">Start Date</label>
              <input type="date" id="start" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>

            <div class="flex flex-col mb-4">
              <label for="finish" class="mb-2 text-sm font-medium">Finish Date</label>
              <input type="date" id="finish" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>

            <div class="flex flex-col mb-4">
              <label for="file" class="mb-2 text-sm font-medium">File</label>
              <input type="file" id="file" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>

            <div class="flex flex-col mb-4">
              <label for="deskripsi" class="mb-2 text-sm font-medium">Notes</label>
              <textarea id="deskripsi" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" rows="4"></textarea>
            </div>

            <button class="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">Upload</button>
          </div>

    </div>

  )

}

export default AddProject
