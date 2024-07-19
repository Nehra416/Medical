import React from 'react'
import single1 from "../Images/Single1.png"
import single2 from "../Images/single2.png"
import serIcon3 from "../Images/serIcon3.png"
import serIcon4 from "../Images/serIcon4.png"
import service1 from "../Images/service1.png"

const Single_checkup = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-center gap-10 my-16'>
            <div className='sm:w-[240px] sm:h-[480px] border-2 rounded-lg overflow-hidden flex sm:flex-col flex-row sm:gap-0'>
                <div className='flex sm:flex-row flex-col justify-center items-center gap-3 bg-[#1F2B6C] text-[#BFD2F8] text-center h-20'>
                    <img src={single1} alt="" className='w-8' />
                    <p>Free Checkup</p>
                </div>
                <div className='flex sm:flex-row flex-col justify-center items-center gap-3 text-center sm:h-20'>
                    <img src={single2} alt="" className='w-8' />
                    <p>Cardiogram</p>
                </div>
                <div className='flex sm:flex-row flex-col justify-center items-center gap-3 text-center sm:h-20'>
                    <img src={serIcon3} alt="" className='w-8' />
                    <p>Dna Testing</p>
                </div>
                <div className='flex sm:flex-row flex-col justify-center items-center gap-3 text-center sm:h-20'>
                    <img src={serIcon4} alt="" className='w-8' />
                    <p>Blood Bank</p>
                </div>
                <div className='sm:flex hidden sm:flex-row flex-col justify-center items-center gap-3 text-center sm:h-20'>
                    <img src={serIcon3} alt="" className='w-8' />
                    <p>Dermalogy</p>
                </div>
                <div className='sm:flex hidden sm:flex-row flex-col justify-center items-center gap-3 text-center sm:h-20'>
                    <img src={serIcon3} alt="" className='w-8' />
                    <p>Orthopedic</p>
                </div>
            </div>
            {/* 2nd coloumn */}
            <div className='max-w-[730px]'>
                {/* <img src={service1} alt="" className='max-h-[450px] max-w-[730px]' /> */}
                <h1 className='text-[#1F2B6C] text-3xl py-4 font-yeseva' >A passion for putting patients first</h1>
                <div className='grid grid-cols-3 text-lg gap-5'>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-[#159EEC] w-4 h-4 rounded-full'></div>
                        A Passion for Healing
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-[#159EEC] w-4 h-4 rounded-full'></div>
                        5-Star Care
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-[#159EEC] w-4 h-4 rounded-full'></div>
                        A Legacy of Excellence
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-[#159EEC] w-4 h-4 rounded-full'></div>
                        All our best
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-[#159EEC] w-4 h-4 rounded-full'></div>
                        Believe in Us
                    </div>
                    <div className='flex gap-3 items-center '>
                        <div className='bg-[#159EEC] w-4 h-4 rounded-full'></div>
                        Always Caring
                    </div>
                </div>
                <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
            </div>
        </div>
    )
}

export default Single_checkup
