import React from 'react'

const Contact = (props) => {
    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-lg text-[#159EEC] tracking-widest'>Get in touch</p>
                <h1 className='text-[#1F2B6C] text-3xl' style={{ fontFamily: '"Yeseva One", serif' }}>Contact</h1>
            </div>

            <div className='flex justify-center my-16 gap-5'>
                {props.Data.map((item) => {
                    return (
                        <>
                            <div className={`w-[230px] h-[230px] bg-[${item.color}] rounded-md py-14 px-5`}>
                                <img src={item.logo} alt="" className='w-[40px] h-[40px]' />
                                <h1 className={`font-bold text-lg text-[${item.text}] py-2`}>{item.h1}</h1>
                                <p className={`text-[${item.text}]`}>{item.p1}</p>
                                <p className={`text-[${item.text}]`}>{item.p2}</p>
                            </div>
                        </>
                    )
                })}

            </div>
        </div>
    )
}

export default Contact
