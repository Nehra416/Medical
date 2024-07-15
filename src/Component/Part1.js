import React from 'react';
import data from './Appointmentdata';
import imag2 from "./emergency-phone.svg";

export const Part1 = () => {
  return (
    <div>
      <div className='h-[650px] w-[992px] top-[474px] left-[187px] grid grid-cols-2 m-auto mt-[100px]'>
        <div className='h-[650px] w-[446px]'>
          <div className='h-[141px] w-[491px]'>
            <h1 className='text-4xl text-blue-950 font-sans font-bold text-left '>Book an Appointment</h1>
            <h1 className='w-[491px] h-[88px] font-sans text-left mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in.
            </h1>
          </div>

          <div className='grid grid-cols-1 w-full sm:grid-cols-2 mt-14 h-[445px] p-0'>
            <input className='h-[50px] w-full text-white bg-blue-950 border border-indigo-400 p-2' placeholder="Name" />
            <input className='h-[50px] w-full text-white bg-blue-950 border border-indigo-400 p-2' placeholder="Gender" />
            <input className='h-[50px] w-full text-white bg-blue-950 border border-indigo-400 p-2' placeholder="Email" />
            <input className='h-[50px] w-full text-white bg-blue-950 border border-indigo-400 p-2' placeholder="Phone" />
            <input className='h-[50px] w-full text-white bg-blue-950 border border-indigo-400 p-2' placeholder="Date" />
            <input className='h-[50px] w-full text-white bg-blue-950 border border-indigo-400 p-2' placeholder="Time" />
            <input className='h-[50px] w-full text-white bg-blue-950 border border-indigo-400 p-2' placeholder="Doctor" />
            <input className='h-[50px] w-full text-white bg-blue-950 border border-indigo-400 p-2' placeholder="Department" />
            <textarea className='h-[190px] w-full text-white bg-blue-950 border border-indigo-400 p-2 sm:col-span-2' placeholder="Message"></textarea>
            <button className='h-[50px] w-full bg-blue-400 text-white font-semibold rounded sm:col-span-2 text-indigo-900'>Submit</button>
          </div>
        </div>

        <div className='h-[650px] w-[481px] rounded-[5px] grid grid-row-3 bg-blue-950 p-9'>
          <div className='h-[55px] text-5xl text-indigo-100 font-bold font-sans flex items-center justify-around'>
            Schedule Hours
          </div>

          <div className='h-[325px] w-full grid grid-row-7 overflow-y-auto  '>
            {data.map((item, index) => (
              <div key={index} className='flex justify-between p-2 text-white'>
                <span className=' gap-3'>{item.day}</span>
                <span>{item.sy}</span>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
          <hr></hr>

          <div className='flex items-center mt-4 m-auto'>
            <img src={imag2} alt="Emergency" className='bg-white h-[30px] w-[30px] mr-2' />
            <div className='text-white  '>
              <h1 className='text-xl font-bold'>Emergency</h1>
              <p>(2370) 681-812-255</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
