import React from 'react';
import image1 from "./map.jpeg";

export const Mape = () => {
  return (
    <>
      <div className='h-[450px] w-full max-w-[992px] absolute top-[1188px] left-[187px] rounded-[5px] m-auto   px-4 sm:px-0'>
        <img src={image1} alt="Map" className='w-full h-full object-cover rounded-[5px]' />    
      </div>
    </>
  )
}

export default Map;