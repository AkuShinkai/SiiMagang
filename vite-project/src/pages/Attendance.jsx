import React from 'react';
//import { PDFDownloadLink, Page, Text, View, Document, Stylesheet } from '@react-pdf/renderer';

function Attendance()  {
  const TABLE_HEAD = ["No.", "Nama", "Asal Sekolah", "Jurusan","Jabatan" ,"action" ];
  const TABLE_COLUMN_WIDTHS = ["50px", "100px","100px", "100px", "100px", "100px"];

  const handleSubmit = () => {
    console.log("klik ges")
  }

  return (
    <div className=' w-full flex flex-col shadow-lg mb-6 mt-4 bg-white'>
      <div className="bg-pink-500 block bg-transparent m-4 p-4">
        {/* Kolom pengisian di atas judul "Attendance" */}
        <div className="flex flex-col">

          <div>
            <label htmlFor="nama" className="text-sm font-medium">Nama</label>
            <input type="text" id="nama" className="border border-gray-300 rounded-md p-2 mb-2 ms-7 md:w-1/3" placeholder="Nama" />
          </div>

          <div>
            <label htmlFor="asal_sekolah" className="text-sm font-medium">Asal</label>
            <input type="text" id="asal_sekolah" className="border border-gray-300 rounded-md p-2 mb-2 ms-9 md:w-1/3" placeholder="Asal Sekolah" />
          </div>

          <div>
            <label htmlFor="jurusan" className="mb-2 text-sm font-medium">Jurusan</label>
            <input type="text" id="jurusan" className="border border-gray-300 rounded-md p-2 mb-2 ms-5 md:w-1/3" placeholder="Jurusan" />
          </div>

          <div>
            <label htmlFor="jabatan" className="mb-2 text-sm font-medium">Jabatan</label>
            <input type="text" id="jabatan" className="border border-gray-300 rounded-md p-2 mb-2 ms-5 md:w-1/3" placeholder="Jabatan" />
          </div>
        </div>

        <div className="flex justify-center ">
            <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            type='submit'>
                Hadir
            </button>
        </div>

        <div className='flex flex-wrap'>
          <h3 className='font-semibold text-lg p-4 m-auto'></h3>
        </div>

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
            {/* Isi tabel */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Attendance;
