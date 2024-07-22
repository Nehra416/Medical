import React from 'react';
import data from './Data';

export const Frame3 = () => {
  return (  
    <div className='h-[1124px] w-[991px] m-auto p-4'>
      <div className='grid grid-cols-3 gap-4'>
        {data.map((item, index) => (
          <div key={index} className='relative bg-white p-4 border border-black rounded-sm'>
            <img src={item.image} alt={`Image ${index + 1}`} className="h-[200px] w-full object-cover mb-4" />
            <div className='absolute bottom-[150px] right-[40px] h-[80px] w-[80px] rounded-full bg-blue-950 flex items-center justify-center overflow-hidden'>
              <img src={item.img} alt={`Circle Image ${index + 1}`} className="h-[40px] w-[40px] object-contain rounded-full" />
            </div>
            <h1 className='h-[30px] w-full mt-[10px] text-xl text-blue-950 font-medium'>{item.h1}</h1>
            <p className='h-[88px] w-full mt-2 justify-items-start'>{item.p}</p>
            <h2 className='h-[22px] w-full mt-2 text-sky-500 font-semibold'>{item.h2}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
