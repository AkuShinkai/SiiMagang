import React from 'react'
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function Project()  {
  const navigate = useNavigate();
  const TABLE_HEAD = ["No.", "Start", "Finish", "Notes","File" ,"action" ];
  const TABLE_COLUMN_WIDTHS = ["50px", "100px","100px", "100px", "100px", "100px"];
  return (

    <div className=' max-sm m-5 rounded-xl flex flex-col shadow-md mb-6 mt-4 bg-white'>
      <div className="flex justify-end my-5 mx-5">
          <button
           onClick={handleClick}
            className="flex bg-blue-400 text-md px-3 py-1 rounded justify-center text-white hover:bg-blue-700"
            type="button">
            <span className='flex items-center'>
            <HiOutlinePlusCircle className='mr-2' />
              add
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
              style={{width: TABLE_COLUMN_WIDTHS[index]}} >
              {head}
            </th>

          ))}
        </tr>
        </thead>
        <tbody>

        </tbody>

      </table>
      </div>
    </div>
  )
  function handleClick() {
    navigate("/AddProject")
  }
}

export default Project
