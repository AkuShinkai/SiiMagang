import { useRef,useState } from 'react';
import { HiPencil } from "react-icons/hi2";
import profil from '../assets/nyonyo.jpg'
import Searchbar from '../component/Searchbar'
const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Active",
      value: "Active",
    },
    {
      label: "Inactive",
      value: "Inactive",
    },
  ];
function DataIntern() {
    const img = useRef()
    const [image, setImage] = useState(null)
    const [activeTab, setActiveTab] = useState(TABS[0].value);
    const TABLE_HEAD = ["no","photo","nama","Education","Position","Mulai","Akhir","Status",""]; //status(active or inactive)
    const TABLE_DATA = [{ 
        profile_picture: {profil},
        name: "Muhammad Fariz",
        school: "Politeknik Negeri Madiun",
        position: "Backend Developer",
        start_date: "2023-01-01",
        end_date: "2023-12-31",
       },
       { 
        profile_picture: {profil},
        name: "Avilia Indira",
        school: "Politeknik Negeri Madiun",
        position: "Frontend Developer",
        start_date: "2024-01-01",
        end_date: "2024-06-31",
       }];
    const getStatus = (start_date, end_date) => {
        const now = new Date();
        const start = new Date(start_date);
        const end = new Date(end_date);
        return (now >= start && now <= end) ? 'active' : 'inactive';
    };
    const filteredData = TABLE_DATA.filter(({ start_date, end_date }) => {
        const status = getStatus(start_date, end_date);
        if (activeTab === 'all') return true;
        return status === activeTab;
    });
    const Label = ({ status }) => {
        const colorClasses = status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
          return (
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colorClasses}`}>
            {status}
          </span>
        )};

    return (
        <div className='overflow-x-auto'>
            <h5 className="mx-5 text-xl text-left text-gray-500 font-bold tracking-wide">Data Intern</h5>
            <div className='max-sm m-5 rounded-xl shadow-md mb-6 mt-4 bg-white'>
                <div className="flex items-center pt-5 justify-between mx-5">
                    <div value="all" className="flex bg-none p-1 rounded-full border border-[#FF9843]">
                        {TABS.map(({ label, value }) => (
                        <button
                            key={value} value={value}
                            className={`px-4 text-sm text-gray-500 py-2 rounded-full cursor-pointer ${activeTab === value ? 'bg-orange-400 text-white' : ''}`}
                            onClick={() => setActiveTab(value)}
                        >
                            {label}
                        </button>
                        ))}
                    </div>
                    <Searchbar/>
                </div>
                <div className=" overflow-x-auto bg-transparent m-4 p-4">
                    <table className='w-full text-left'>
                        <thead >
                            <tr className='border  border-solid border-l-0 border-r-0'>
                            {TABLE_HEAD.map((head) => (
                                <th className='text-sm text-gray-400 tracking-wide uppercase p-3' key={head}>
                                    {head}
                                </th>
                            ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map(({ profile_picture,name, school,position,start_date, end_date}, index) => {
                                const isLast = index === TABLE_DATA.length - 1;
                                const rows = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 ";
                                const status = getStatus(start_date, end_date);
                                return (
                                    <tr key={index+1} className='border-t text-gray-500 text-sm'>
                                        <td className={rows} >{index + 1}</td>
                                        <td className={rows}>
                                            <img 
                                                src={image?image:profil} 
                                                alt={profil} 
                                                className="h-10 w-10 rounded-full bg-transparent bg-cover"/>
                                        </td>
                                        <td className={rows}>{name}</td>
                                        <td className={rows}>{school}</td>
                                        <td className={rows}>{position}</td>
                                        <td className={rows}>{start_date}</td>
                                        <td className={rows}>{end_date}</td>
                                        <td>
                                            <div className="w-max">
                                                <Label status={status}/> 
                                            </div>
                                        </td>
                                        <td>
                                            <div className="inline-flex gap-2">
                                                <button>
                                                    <HiPencil className="text-gray-600"/>
                                                </button>
                                            </div>
                                        </td>
                                </tr>
                                );
                            })}
                                
                        </tbody>
                    </table>
                    
                </div>
            </div>
            
        </div>
    )
}

export default DataIntern;