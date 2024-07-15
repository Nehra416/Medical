import React from 'react';
import footdata from './Footdata';

const Footer2 = () => {
  // Repeat the footdata 4 times
  const repeatedFootdata = Array(4).fill(footdata).flat();

  return (
    <div className='h-auto w-full relative top-[230px] m-auto p-4 lg:p-0'>
      <div className='h-[66px] w-full lg:w-[452px] mx-auto text-center'>
        <p className='text-sky-600 uppercase text-xl font-semibold font-mono'>Better Information Health</p>
        <h1 className='text-2xl font-bold'>News</h1>
      </div>

      <div className='h-auto w-full lg:w-[992px] mt-6 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {repeatedFootdata.map((item, index) => (
          <div key={index} className='flex items-start gap-4 p-4 border bg-white rounded-md shadow-md'>
            <img src={item.im} alt='Footer Image' className='w-[100px] h-[100px] object-cover' />
            <div className='flex flex-col items-start'>
              <p className='text-sky-600 font-bold'>{item.p}</p>
              <h2 className='text-left text-black font-bold'>{item.h}</h2>
              <div className='flex gap-2'>
                <p className='text-gray-600'>&#128065; {item.no}</p>
                <p className='text-gray-600'>&#10084; {item.num}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex h-[18px] w-[74px] gap-2 mx-auto mt-12'>
        <div className='bg-sky-600 rounded-full h-5 w-5'></div>
        <div className='bg-sky-950 rounded-full h-5 w-5'></div>
        <div className='bg-sky-600 rounded-full h-5 w-5'></div>
      </div>
    </div>
  );
}

export default Footer2;
