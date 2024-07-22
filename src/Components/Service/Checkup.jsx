import React from 'react'
import serviceDr from "../Images/serviceDr.png";
import serIcon1 from "../Images/serIcon1.png";
import { Link } from 'react-router-dom';

const Checkup = (props) => {
    return (
        <div className='grid sm:grid-cols-3 grid-cols-1 sm:mx-[12%] mx-[5%] my-[7%] gap-8 '>
            <div className='border-2 rounded-md overflow-hidden sm:block '>
                <div className='relative'>
                    {/* 1000px  for cover all container*/}
                    <img src={serviceDr} alt="" className='w-[1000px]' />
                    <div className='relative'><img src={serIcon1} alt="" className='absolute bg-[rgba(31,43,108,0.5)] p-[40%] bottom-0' /></div>
                </div>
                <div className='p-5'>
                    <h1 className='text-[#1F2B6C] text-[26px] font-medium pt-5'>Free Checkup</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
                    <button className='text-[#159EEC]'><Link to="/Single_service">Learn More &rarr;</Link></button>
                </div>
            </div>

            {props.checkup.map((item, index) => {
                return (
                    <div className='border-2 rounded-md relative' key={index}>
                        <img src={serviceDr} alt="" className='w-[1000px]' />
                        <div className='relative'><img src={serIcon1} alt="" className='bg-[#1F2B6C] rounded-full w-[70px] p-[25px] absolute right-[20px] -bottom-8' /></div>
                        <div className='p-5'>
                            <h1 className='text-[#1F2B6C] text-[26px] font-medium pt-5'>{item.h1}</h1>
                            <p>{item.p}</p>
                            <button className='text-[#159EEC]'><Link to="/Single_service">{item.btn} &rarr;</Link></button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Checkup