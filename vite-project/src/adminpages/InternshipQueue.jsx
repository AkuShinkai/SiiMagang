import React, { useState } from 'react'
import { HiCheck,HiOutlineX } from "react-icons/hi";
import Searchbar from '../component/Searchbar'

function InternshipQueue() {
    const TABLE_HEAD = ["no", "Nama", "School", "Major","start date","end date","status","action",""];
    const [applications, setApplications] = useState([{
        id: 1,
        name: "Muhammad Fariz",
        school:"Politeknik Negeri Madiun",
        major:"Teknologi Informasi",
        start_date:"2024-01-01",
        end_date:"2024-06-30",
        status:"pending"
    }]);
    const handleAccept = (id) => {
        const updatedApplications = applications.map(app => {
            if (app.id === id) {
                return { ...app, status: "accepted" };
            }
            return app;
        });
        setApplications(updatedApplications);
    };

    const handleReject = (id) => {
        const updatedApplications = applications.map(app => {
            if (app.id === id) {
                return { ...app, status: "rejected" };
            }
            return app;
        });
        setApplications(updatedApplications);
    };
    const Label = ({ status }) => {
        let colorClasses;
        
        switch(status) {
          case 'Pending':
            colorClasses = 'bg-red-100 text-red-800';
            break;
          case 'Accepted':
            colorClasses = 'bg-yellow-100 text-yellow-800';
            break;
          case 'Rejected':
            colorClasses = 'bg-green-100 text-green-800';
            break;
        }
        
        return (
          <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium ${colorClasses}`}>
            {status}
          </span>
        );
      };
       

    return (
        <div className='overflow-x-auto'>
            <h5 className="mx-5 text-xl text-left text-gray-500 font-bold tracking-wide">Internship Submission List </h5>
            <div className='max-sm m-5 rounded-xl shadow-md mb-6 bg-white'>
                <div className="pl-5 pt-5">
                     <Searchbar />
                 </div>
                <div className="overflow-x-auto bg-transparent m-4 p-4">
                    <table className='w-full text-left'>
                        <thead>
                            <tr className='border border-solid border-l-0 border-r-0'>
                            {TABLE_HEAD.map((head) => (
                                <td className='text-sm text-gray-400 tracking-wide p-3 font-bold uppercase' key={head}>
                                    {head}
                                </td>
                            ))}
                            </tr>
                        </thead>
                        <tbody>
                        {applications.map(({id,name,major,start_date,status,end_date, school}, index) => {
                            const isLast = index === applications.length - 1;
                            const rows = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                            return (
                            <tr key={id} className='border-t text-gray-500 text-sm'>
                                 <td className={rows}>{index+1}</td>
                                 <td className={rows}>{name}</td>
                                 <td className={rows}>{school}</td>
                                 <td className={rows}>{major}</td>
                                 <td className={rows}>{start_date}</td>
                                 <td className={rows}>{end_date}</td>
                                 <td className={rows}>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${status === "pending" ? "bg-yellow-100 text-yellow-800" : (status === "accepted" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800")}`}>
                                        {status}
                                    </span>
                                </td>
                                 <td className={rows}>
                                    <div className="inline-flex gap-3">
                                        <button  onClick={() => handleAccept(id)}>
                                            <HiCheck className="text-green-600"/>
                                        </button>
                                        <button onClick={() => handleReject(id)}>
                                            <HiOutlineX className="text-red-600"/>
                                        </button>
                                    </div>
                                 </td>
                                 {/* <td className={rows}>
                                    <div>
                                        <a href="/detailsubmission" className="underline text-blue-900">detail</a>

                                    </div>
                                 </td>
                                  */}
                            </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default InternshipQueue;