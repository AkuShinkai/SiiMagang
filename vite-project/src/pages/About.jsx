import React from 'react';
import logook from '../assets/logo-ok.png';

function About() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-white'>
      <div className='w-full max-w-lg h-screen grid grid-cols-1 gap-3 sm:max-w-full lg:grid-cols-2'>
        <div className='flex justify-center items-center'>
          <img src={logook} className='w-56 md:w-96' alt="logook" />
        </div>
        <div className='bg-orange-300 text-white text-justify flex justify-center items-center md:p-20 p-10 text-lg md:text-2xl rounded-r-lg'>
          <p>
            Program Magang PT Otak kanan hadir untuk membantu mengembangkan keterampilan profesional yang siap kerja.
            Proses seleksi dan pendaftaran dilakukan secara online. Dalam program ini, peserta akan mendapatkan pengalaman yang relevan dengan bidang studi mereka melalui kegiatan magang.
            Proses magang ini juga dilengkapi dengan dukungan sistem informasi yang memudahkan pendaftaran dan pemantauan progress magang secara online. Peserta akan mendapat mentor yang berpengalaman di industri.
         </p>
        </div>
      </div>
    </div>
  );
}

export default About;
