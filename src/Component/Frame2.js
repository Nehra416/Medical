import React from 'react';
import image1 from "./7b7df3a6607f4db7373cb37c61b1a840.jpeg";

export const Frame2 = () => {
  return (
    <div className='relative h-[250px] w-[1366px] m-auto'>
      <div
        className='absolute inset-0 bg-cover bg-center opacity-50'
        style={{ backgroundImage: `url(${image1})`, backgroundPosition: 'center 45%' }}
      ></div>
      <div className='relative z-10 h-full flex flex-col justify-between'>
        <div className='relative h-[76px] w-full'>
          <h1 className='absolute left-[187px] top-[76px] text-violet-950  h-[25px] w-[124px] font-sans text-3xl'>
            Home/About
          </h1>
          <div className=' relative h-[55px] w-[296px] top-[97px] left-[187px]'>
            <h1 className=' absolute mt-9 font-extrabold  font-mono space-x-0 text-violet-950 text-5xl leading-3'>Our Service</h1>
          </div>
        </div>
        <div className='h-[8px] w-full bg-gradient-to-r from-violet-400 via-indigo-800 to-blue-600'></div>
      </div>
    </div>
  );
};
