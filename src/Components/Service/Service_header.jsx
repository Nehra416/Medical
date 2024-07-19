import React from 'react'
import bg from "../Images/serviceFront.png";
import effect from "../Images/serviceEffect.png";
import border from "../Images/welcomeBorder.png";

const Service_header = () => {

    return (
        <>
            {/* Header */}
            <div className='h-[250px] bg-center bg-cover mt-32 relative' style={{ backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.3)), url(${bg})` }}>
                <img src={border} alt="" className='absolute bottom-0 w-full h-2' />
                <div className='absolute top-[76px] left-[16%]'>
                    <p className='text-[#1F2B6C] text-lg'>Home / Services</p>
                    <h1 className='text-[#1F2B6C] sm:text-5xl text-4xl font-yeseva' >Our Services</h1>
                </div>
            </div>

        </>
    )
}

export default Service_header
