import React from 'react'
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function AddLogbook()  {
  const navigate = useNavigate()
  return (
    <div className=' w-full flex flex-col shadow-lg mb-6 mt-4 bg-gray-600'>
        <div className="flex justify-between ">
            <button 
            onClick={()=> navigate(-1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4" >
                back
            </button>
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            type='submit'>
                save
            </button>
        </div>
        <div class="flex flex-col w-full max-w-md p-4 mx-auto my-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-row mb-4 items-center">
              <label htmlFor="nama" className="mr-2 text-sm font-medium">Nama Lengkap</label>
              <input 
                type="text" 
                id="nama" 
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
              />
          </div>
            <div class="flex flex-col mb-4">
              <label for="nama" class="mb-2 text-sm font-medium">Nama Lengkap</label>
              <input type="text" id="nama" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>

            <div class="flex flex-col mb-4">
              <label for="email" class="mb-2 text-sm font-medium">Alamat Email</label>
              <input type="email" id="email" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>

            <div class="flex flex-col mb-4">
              <label for="topik" class="mb-2 text-sm font-medium">Topik Aktivitas</label>
              <select id="topik" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option value="">Pilih Topik</option>
                <option value="1">Belajar Memasak</option>
                <option value="2">Olahraga</option>
                <option value="3">Membaca Buku</option>
                <option value="4">Menonton Film</option>
              </select>
            </div>

            <div class="flex flex-col mb-4">
              <label for="deskripsi" class="mb-2 text-sm font-medium">Deskripsi Aktivitas</label>
              <textarea id="deskripsi" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" rows="4"></textarea>
            </div>

            <button class="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">Kirim Formulir</button>
          </div>

    </div>
   
  )
  
}

export default AddLogbook