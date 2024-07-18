import React from 'react';
import fotter from './tele.png';
import fotterIn from './in.png';
import fotterFb from './fb.png';
import fotterInsta from './insta.png';

export const Footer = () => {
    return (
        <div className='bg-[#1F2B6C] px-[5%] mt-[300px] relative top-[1802px] w-[1366px]'>
            <div className='text-white flex flex-col md:flex-row justify-center gap-8 pt-20 pb-10'>
                <div className='w-full md:w-[250px] text-center md:text-left'>
                    <h1 className='text-[#BFD2F8] text-4xl mb-5' style={{ fontFamily: '"Yeseva One", serif' }}>Meddical</h1>
                    <p>Leading the Way in Medical Excellence, Trusted Care.</p>
                </div>

                <div className='text-center md:text-left'>
                    <h1 className='font-semibold text-lg mb-5'>Important Links</h1>
                    <p>Appointment</p>
                    <p>Doctors</p>
                    <p>Services</p>
                    <p>About Us</p>
                </div>

                <div className='text-center md:text-left'>
                    <h1 className='font-semibold text-lg mb-5'>Contact Us</h1>
                    <p>Call: (237) 681-812-255</p>
                    <p>Email: fildineesoe@gmail.com</p>
                    <p>Address: 0123 Some place</p>
                    <p>Some country</p>
                </div>

                <div className='text-center md:text-left'>
                    <h1 className='font-semibold text-lg mb-5'>Newsletter</h1>
                    <p className='text-[#1F2B6C] bg-[#BFD2F8] flex justify-center md:justify-start gap-3 py-3 px-5 rounded-md'>
                        Enter your email address
                        <img src={fotter} alt="Submit Icon" className='w-[22px] h-[20px]'/>
                    </p>
                </div>
            </div> 
            <hr className='border-gray-400' />

            <div className='flex flex-col md:flex-row justify-between items-center py-10 text-[#FCFEFE]'>
                <p className='text-center md:text-left mb-4 md:mb-0'>© 2021 Hospital’s name. All Rights Reserved by PNTEC-LTD</p>
                <div className='flex gap-3'>
                    <img src={fotterIn} alt="LinkedIn" className='w-[24px]'/>
                    <img src={fotterFb} alt="Facebook" className='w-[24px]'/>
                    <img src={fotterInsta} alt="Instagram" className='w-[24px]'/>
                </div>
            </div>
        </div>
    );
}

 