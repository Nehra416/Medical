import React from 'react'
import Lin from "../Images/Lin.png"
import fb from "../Images/fb.png"
import insta from "../Images/insta.png"

const Doctors = (props) => {
    return (
        <div>
            <div className='text-center'>
                <p className='text-[#159EEC] text-lg font-bold tracking-widest'>Trusted Care</p>
                <h1 className='text-[#1F2B6C] text-3xl' style={{ fontFamily: '"Yeseva One", serif' }}>Our Doctors</h1>
            </div>

            <div>
                <div className=' flex justify-center gap-10 my-10'>
                    {props.doctorImg.map((img, index) => {
                        return (
                            <div>
                                <img src={img} alt="" className='h-[350px] w-full bg-cover bg-center' />
                                <div className='bg-[#BFD2F8] text-[#1F2B6C] text-center rounded-b-lg overflow-hidden'>
                                    <p className='text-lg pt-5'>Doctor’s Name</p>
                                    <p className='text-lg font-bold tracking-widest'>Neurology</p>
                                    <div className='flex gap-2 justify-center py-5'>
                                        <img src={Lin} alt="" className='w-[24px]'/>
                                        <img src={fb} alt="" className='w-[24px]'/>
                                        <img src={insta} alt="" className='w-[24px]'/>
                                    </div>
                                    <div className='text-[#BFD2F8] bg-[#1F2B6C] py-3'>View Profile</div>
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
