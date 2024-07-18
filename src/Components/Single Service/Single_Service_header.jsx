import React from 'react'
import bg from "../Images/service1.png"
import border from "../Images/welcomeBorder.png";

const Single_Service_header = () => {
    return (
        <div className='mt-32 h-[250px] relative bg-cover' style={{ backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.3)), url(${bg})`, backgroundPositionY: '80%' }}>
            <img src={border} alt="" className='absolute bottom-0 w-full h-2' />
            <div className='absolute top-[76px] left-[187px]'>
                <p className='text-[#1F2B6C] text-lg'>Home / Services</p>
                <h1 className='text-[#1F2B6C] text-5xl font-yeseva' >Free Checkup</h1>
            </div>
        </div>
    )
}

export default Single_Service_header
