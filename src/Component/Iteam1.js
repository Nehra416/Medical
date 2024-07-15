import React from 'react';
import contactData from './Contactdata';

export const Iteam1 = (props) => {
  return (
    <div className='h-auto w-full px-4 sm:px-0 sm:w-[992px] m-auto grid grid-cols-1 sm:grid-cols-2 gap-4 relative top-[100px]'>
      <div className='flex flex-col justify-center items-start -mt-3'>
        <p className='uppercase text-blue-500 text-xl font-sans font-semibold'>Get in Touch</p>
        <h1 className='text-2xl text-black font-bold'>Contact</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full mt-14 p-0'>
          <input className='h-[50px] w-full text-white bg-blue-950 border border-indigo-400 p-2' placeholder="Name" />
          <input className='h-[50px] w-full text-white bg-blue-950 border border-indigo-400 p-2' placeholder="Email" />
          <input className='h-[50px] w-full text-white bg-blue-950 border border-indigo-400 p-2 sm:col-span-2' placeholder="Subject" />
          <textarea className='h-[235px] w-full text-white bg-blue-950 border border-indigo-400 p-2 sm:col-span-2' placeholder="Message"></textarea>
          <button className='h-[50px] w-full bg-blue-400 text-white font-semibold rounded sm:col-span-2'>Submit</button>
        </div>
      </div>
      <div className='p-1 gap-5 grid grid-cols-2 items-center justify-center sm:w-[486px] sm:h-[486px] w-full h-auto rounded-md'>
        {contactData.map((item, index) => (
          <div key={index} className={`w-full h-auto sm:w-[233px] sm:h-[233px] bg-blue-300 rounded-md py-14 px-5`}>
            <img src={item.logo} alt="" className='w-[40px] h-[40px]' />
            <h1 className={`font-bold text-lg text-blue-950 py-2`}>{item.h1}</h1>
            <p className="text-blue-950">{item.p1}</p>
            <p className="text-blue-950">{item.p2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Iteam1;
