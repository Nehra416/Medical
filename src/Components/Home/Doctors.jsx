import React from 'react'
import Lin from "../Images/Lin.png"
import fb from "../Images/fb.png"
import insta from "../Images/insta.png"

const Doctors = (props) => {
    return (
        <div>
            <div className='text-center'>
                <p className='text-[#159EEC] text-lg font-bold tracking-widest'>Trusted Care</p>
                <h1 className='text-[#1F2B6C] text-3xl font-yeseva' >Our Doctors</h1>
            </div>

            <div>
                <div className=' flex justify-center gap-10 my-10 sm:flex-row flex-col sm:mx-5'>
                    {props.doctorImg.map((img, index) => {
                        return (
                            // Why flex don't work here
                            <div className='sm:grid-cols-1 sm:mx-0 mx-5 grid grid-cols-2 rounded-md overflow-hidden'>
                                <img src={img} alt="" className='w-full h-full bg-cover bg-center' />
                                <div className='bg-[#BFD2F8] text-[#1F2B6C] text-center rounded-b-lg relative'>
                                    <p className='text-lg pt-5'>Doctor’s Name</p>
                                    <p className='text-lg font-bold tracking-widest'>Neurology</p>
                                    <div className='flex gap-2 justify-center py-5 mb-12'>
                                        <img src={Lin} alt="" className='w-[24px]' />
                                        <img src={fb} alt="" className='w-[24px]' />
                                        <img src={insta} alt="" className='w-[24px]' />
                                    </div>
                                    <div className='text-[#BFD2F8] bg-[#1F2B6C] py-3 absolute bottom-0 w-full'>View Profile</div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='flex justify-center gap-2 mb-20'>
                    <div className='w-5 h-5 rounded-full bg-[#BFD2F8]'></div>
                    <div className='w-5 h-5 rounded-full bg-[#1F2B6C]'></div>
                    <div className='w-5 h-5 rounded-full bg-[#BFD2F8]'></div>
                </div>
            </div>
        </div>
    )
}

export default Doctors
