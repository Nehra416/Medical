import React from 'react';
import image4 from "./appointmentim.jpeg";

const Contact = () => {
  return (
    <div>
      <div className='relative h-[250px] w-[1366] m-auto top-[160px] '>
        <div
          className='absolute inset-0 bg-cover bg-center opacity-50'
          style={{ 
            backgroundImage: `url(${image4})`, 
            backgroundPosition: 'center 25%', 
            backgroundSize: 'cover' // Ensure the image covers the div
          }}
        ></div>
        <div className='relative z-10 h-full  flex flex-col justify-between'>
          <div className='relative h-[76px] w-full'>
            <h1 className='absolute left-[10%] md:left-[187px] top-[76px] text-violet-950 h-[25px] w-full md:w-[124px] font-sans text-xl md:text-3xl'>
              Home/Appointment
            </h1>
            <div className='relative h-[55px] w-full md:w-[296px] top-[97px] left-[10%] md:left-[187px]'>
              <h1 className='absolute mt-9 font-extrabold font-mono text-violet-950 text-xl md:text-5xl leading-3'>
                Book an Appointment
              </h1>
            </div>
          </div>
          <div className='h-[8px] w-full bg-gradient-to-r from-violet-400 via-indigo-800 to-blue-600'></div>
        </div>
      </div>  
    </div>
  );
}

export default Contact;
