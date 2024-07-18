import React from 'react'
import fotter from '../Images/fotter.png'
import fotterIn from '../Images/fotterIn.png'
import fotterFb from '../Images/fotterFb.png'
import fotterInsta from '../Images/fotterInsta.png'

const Footer = () => {
    return (
        <div className='bg-[#1F2B6C] px-[5%]'>
            {/* Coloumns of fotter */}
            <div className='text-white flex sm:flex-row sm:justify-center flex-col gap-8 pt-20 pb-10'>
                <div className='sm:w-[250px] text-center sm:text-left'>
                    <h1 className='text-[#BFD2F8] text-4xl mb-5 font-yeseva'>Meddical</h1>
                    <p>Leading the Way in Medical Execellence, Trusted Care.</p>
                </div>

                <div className='flex gap-8 justify-center text-sm sm:text-base '>
                    <div>
                        <h1 className='font-semibold text-lg mb-5'>Important Links</h1>
                        <p>Appointment</p>
                        <p>Doctors</p>
                        <p>Services</p>
                        <p>About Us</p>
                    </div>

                    <div>
                        <h1 className='font-semibold text-lg mb-5'>Contact Us</h1>
                        <p>Call: (237) 681-812-255</p>
                        <p>Email: fildineesoe@gmail.com</p>
                        <p>Address: 0123 Some place</p>
                        <p>Some country</p>
                    </div>
                </div>

                <div>
                    <h1 className='font-semibold text-lg mb-5'>Newsletter</h1>
                    <p className='text-[#1F2B6C] bg-[#BFD2F8] flex gap-3 py-3 px-5 rounded-md'>Enter your email address <img src={fotter} alt="" className='w-[22px] h-[20px]' /></p>
                </div>
            </div> <hr />

            <div className='sm:flex justify-between py-10 text-[#FCFEFE] sm:text-base text-sm'>
                <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
                <div className='flex gap-4 min-w-[85px] mt-3 sm:mt-0 '>
                    <img src={fotterIn} alt="" className='w-[24px] h-[24px]' />
                    <img src={fotterFb} alt="" className='w-[24px]  h-[24px]' />
                    <img src={fotterInsta} alt="" className='w-[24px]  h-[24px]' />
                </div>
            </div>
        </div>
    )
}

export default Footer
