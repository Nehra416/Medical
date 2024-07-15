import React from 'react'
import serviceDr from "../Images/serviceDr.png";
import serIcon1 from "../Images/serIcon1.png";
import { Link } from 'react-router-dom';

const Checkup = (props) => {
    return (
        <div className='grid grid-cols-3 mx-[12%] my-[7%] gap-8 '>
            <div className='border-2 rounded-md overflow-hidden '>
                <div className='relative'>
                    <img src={serviceDr} alt="" className='h-[300px] w-[330px]' />
                    <img src={serIcon1} alt="" className='absolute bg-[rgba(31,43,108,0.5)] p-[110px] w-full h-full top-0' />
                </div>
                <div className='p-5'>
                    <h1 className='text-[#1F2B6C] text-[26px] font-medium pt-5'>Free Checkup</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
                    <button className='text-[#159EEC]'>Learn More &rarr;</button>
                </div>
            </div>

            {props.checkup.map((item, index) => {
                return (
                    <>
                        <div className='border-2 rounded-md relative'>
                            <img src={serviceDr} alt="" className='h-[300px] w-[330px]' />
                            <img src={serIcon1} alt="" className='bg-[#1F2B6C] rounded-full w-[70px] p-[25px] absolute right-[20px] top-[260px]' />
                            <div className='p-5'>
                                <h1 className='text-[#1F2B6C] text-[26px] font-medium pt-5'>{item.h1}</h1>
                                <p>{item.p}</p>
                                <button className='text-[#159EEC]'><Link to="/Single_service">{item.btn} &rarr;</Link></button>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>

    )
}

export default Checkup
