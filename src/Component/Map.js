import React from 'react';
import image1 from "./map.jpeg";

export const Map = () => {
  return (
    <>
      <div className='h-[450px] w-full max-w-[992px] rounded-[5px] m-auto mt-[210px] relative px-4 sm:px-0'>
        <img src={image1} alt="Map" className='w-full h-full object-cover rounded-[5px]' />    
      </div>
    </>
  )
}

export default Map;
