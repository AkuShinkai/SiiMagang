import React from 'react'
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function Logbook()  {
  const navigate = useNavigate();
  const TABLE_HEAD = ["No.", "Day", "Date", "Activity", "action" ];
  const TABLE_COLUMN_WIDTHS = ["50px", "100px", "100px", "100px", "100px"];
  return (
    
    <div className=' w-full flex flex-col shadow-lg mb-6 mt-4 bg-gray-600'>
      <div className="flex flex-row justify-end mt-3 mr-4">
          <button
           onClick={handleClick}
            className="bg-blue-500 text-white px-10 py-1 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            type="button">
            <span>
            <HiOutlinePlusCircle />
              add
            </span>
          </button>
      </div>
      
      <div className='flex flex-wrap'>
        <h3 className='font-semibold text-lg p-4 m-auto'>CATATAN AKTIVITAS HARIAN</h3>
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
    navigate("/AddLogbook")
  }
}

export default Logbook