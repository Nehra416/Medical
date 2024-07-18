import React from 'react';
import Foterdata from './Foterdata';

export const Foter = (props) => {
  return (
    <div className='absolute top-[1702px] left-[187px]  m-auto h-auto w-full sm:px-0 sm:w-[992px] sm:h-[363px] gap-4'>
      <div className='h-[66px] w-[160px] text-center m-auto '>
        <p className='uppercase text-blue-500 text-xl font-sans font-semibold'>Get in Touch</p>
        <h1 className='text-2xl text-black font-bold leading-4 mt-2'>Contact</h1>
      </div>
      <div className=' absolute flex justify-center m-auto sm:w-[992px] sm:h-[363px] w-full top-[130px]'>
        {Foterdata.map((item, index) => (
          <div key={index} className='h-[250px] w-[250px] sm:h-[233px] sm:w-[233px] bg-blue-300 rounded-md flex flex-col   justify-center left-[253px] top-[130px] m-2 p-4 items-start'>
            <img src={item.logo} alt="" className='w-[30px] h-[36px] top-[183px] left-[284px] ' />
            <h1 className='font-bold text-xl text-blue-950 py-2'>{item.h1}</h1>
            <p className="text-blue-950 text-center font-semibold ">{item.p1}</p>
            <p className="text-blue-950 text-center font-semibold">{item.p2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foter;
