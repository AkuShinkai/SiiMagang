import { HiCheck,HiOutlineX } from "react-icons/hi";
import Searchbar from '../component/Searchbar' 

function Attend() {
    const TABLE_HEAD = ["no", "Nama", "Tanggal","Pukul","Keterangan","Status", ""];
    const TABLE_DATA = [{ 
        name: "Alieffiea",
        date: "2023-01-01",
        time: "09.00",
        keterangan: "Hadir",
       },
       { 
        name: "Muhammad Fariz",
        date: "2023-01-01",
        time: "10.00",
        keterangan: "Izin",
       },
       { 
        name: "Avilia Indira",
        date: "2023-01-01",
        time: "11.00",
        keterangan: "Sakit",
       }];
       const Label = ({ keterangan }) => {
        let colorClasses;
        
        switch(keterangan) {
          case 'Sakit':
            colorClasses = 'bg-red-100 text-red-800';
            break;
          case 'Izin':
            colorClasses = 'bg-yellow-100 text-yellow-800';
            break;
          case 'Hadir':
            colorClasses = 'bg-green-100 text-green-800';
            break;
          default:
            colorClasses = 'bg-gray-100 text-gray-800';
        }
        
        return (
          <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium ${colorClasses}`}>
            {keterangan}
          </span>
        );
      };
    return (
        <div className='overflow-x-auto'>
            <h5 className="mx-5 text-xl text-left text-gray-500 font-bold tracking-wide">Daftar Kehadiran</h5>
            <div className='max-sm m-5 rounded-xl shadow-md mb-6 bg-white'>
               <div className="pl-5 pt-5">
               <Searchbar />
               </div>
               
               
                <div className="overflow-x-auto bg-transparent m-4 p-4">
                    <table className='w-full text-left '>
                        <thead>
                            <tr className='border border-solid border-l-0 border-r-0'>
                            {TABLE_HEAD.map((head) => (
                                <th className='text-sm uppercase text-gray-400 tracking-wide p-3' key={head}>
                                    {head}
                                </th>
                            ))}
                            </tr>
                        </thead>
                        <tbody>
                        {TABLE_DATA.map(({ name,date,time,keterangan }, index) => {
                            const isLast = index === TABLE_DATA.length - 1;
                            const rows = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                            return (
                            <tr key={index+1} className='border-t text-gray-500 text-sm'>
                                 <td className={rows}>{index+1}</td>   
                                 <td className={rows}>{name}</td>
                                 <td className={rows}>{date}</td>
                                 <td className={rows}>{time}</td>
                                 <td className={rows}>
                                 <Label keterangan={keterangan} /></td>
                                 <td className={rows}>Menunggu Verifikasi</td>
                                 <td className={rows}>
                                    <div className="inline-flex gap-2">
                                        <button>
                                            <HiCheck className="text-green-600"/>
                                        </button>
                                        <button>
                                            <HiOutlineX className="text-red-600"/>
                                        </button>
                                    
                                    </div>
                                 </td>
                            </tr>)
                        })}
                                                         
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Attend;