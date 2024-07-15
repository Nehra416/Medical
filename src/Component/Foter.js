import React from 'react';
import Foterdata from './Foterdata';

export const Foter = (props) => {
  return (
    <div className='h-auto w-full px-4 sm:px-0 sm:w-[992px] m-auto gap-4 relative top-[100px]'>
      <div className='flex flex-col justify-center items-center -mt-3'>
        <p className='uppercase text-blue-500 text-xl font-sans font-semibold'>Get in Touch</p>
        <h1 className='text-2xl text-black font-bold'>Contact</h1>
      </div>
      <div className='m-auto p-1 gap-5 flex  items-center justify-center sm:w-[986px] sm: w-full h-auto rounded-md'>
        {Foterdata.map((item, index) => (
          <div key={index} className=' h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] bg-blue-300 rounded-md flex flex-col items-center justify-center m-2 p-3'>
            <img src={item.logo} alt="" className='w-[40px] h-[40px]' />
            <h1 className='font-bold text-lg text-blue-950 py-2'>{item.h1}</h1>
            <p className="text-blue-950 text-center">{item.p1}</p>
            <p className="text-blue-950 text-center">{item.p2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foter;
