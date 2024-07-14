import React from 'react'
import bg from "../Images/welcome.png"
import border from "../Images/welcomeBorder.png"

const About_header = () => {
    return (
        <div className='h-[250px] bg-cover mt-32 relative' style={{ backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.3)), url(${bg})`, backgroundPositionY: '28%' }}>
            <img src={border} alt="" className='absolute bottom-0 w-full h-2' />
            <div className='absolute top-[76px] left-[187px]'>
                <p className='text-[#1F2B6C] text-lg'>Home / Services</p>
                <h1 className='text-[#1F2B6C] text-5xl' style={{ fontFamily: '"Yeseva One", serif' }}>About us</h1>
            </div>
        </div>
    )
}

export default About_header
