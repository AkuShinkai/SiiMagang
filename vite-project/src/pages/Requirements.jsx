import React from 'react'
import { HiCheck } from "react-icons/hi";


    const ReqItem = ({ number, title, description }) => (
        <div className="flex items-center mb-8">
          <div className="flex flex-col items-center ">
            <div className="flex items-center justify-center w-10 h-10 bg-orange-300  text-white rounded-full text-xl ">
              {number}
            </div>
            
          </div>
          <div className="ml-4 bg-white p-4 rounded shadow-md w-full">
            <h3 className="text-lg flex text-orange-400 font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-justify text-gray-600">{description}</p>
            
          </div>
        </div>
      );
      
      const Requirements = () => {
        const timelineData = [
          {
            number: 1,
            title: 'Melengkapi dokumen pendukung',
            description: 'Sebelum mengisi formulir pendaftaran, harap sediakan berkas pendukung dalam format PDF. Dokumen pendukung tersebut meliputi CV, surat rekomendasi, dan portofolio jika diperlukan. Mohon pastikan untuk melengkapi formulir pendukung tersebut sebelum melanjutkan pengisian formulir pendaftaran utama',
            
          },
          {
            number: 2,
            title: 'Mengisi Formulir Pendaftaran',
            description: 'Kirimkan formulir pendaftaran yang telah diisi dengan informasi yang akurat',
          },
          {
            number: 3,
            title: 'Menunggu Konfirmasi',
            description: 'Tunggu konfirmasi dari tim kami mengenai status pendaftaran Anda.',
          },
        ];
  return (
    <div className="bg-gray-100 w-screen h-screen flex  items-center justify-center py-12">
      
      <div className=" max-w-2xl w-full">
        
      <h3 className="text-3xl font-semibold text-orange-400 text-center mb-8">Persyaratan Pendaftaran Program</h3>
        {timelineData.map((item, index) => (
          <ReqItem
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
    // <div >
    //     <div className="grid max-w-lg grid-cols-1 mx-auto sm:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
    //         <div>
    //             <p className='mt-2 text-lg text-gray-600 sm:mt-8'>Persyaratan Pendaftaran Program</p>
    //         </div>
    //         <div className="text-center lg:text-left">
    //         <ul className="list-disc list-outside">
    //         <li>5 cups chopped Porcini mushrooms</li>
    //         <li>5 cups chopped Porcini mushrooms</li>
    //         <li>5 cups chopped Porcini mushrooms</li>
    //         <li>5 cups chopped Porcini mushrooms</li>
    //         </ul>
    //         </div>
    //     </div>
        
    // </div>
  );
};
export default Requirements
