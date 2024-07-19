import React from 'react'

const News = (props) => {
    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-lg tracking-widest text-[#159EEC]'>Better information, Better health</p>
                <h1 className='text-[#1F2B6C] text-3xl font-yeseva'>News</h1>
            </div>
            <div className='flex max-w-[990px] sm:flex-wrap sm:flex-row flex-col justify-center gap-7 sm:m-auto sm:mt-20  mt-10 mx-3'>
                {props.data.map((item, index) => {
                    return (
                        <>
                            <div className={`flex sm:gap-5 gap-2 rounded-md ${item.shadow}`}>
                                <img src={item.logo} alt="" className='max-w-40 max-h-40' />
                                <div className='max-w-[270px] pr-1'>
                                    <p className='text-sm text-[#159EEC]'>{item.p1}</p>
                                    <p className='sm:text-lg text-base'>{item.p2}</p>
                                    <div className='flex items-center gap-2'>
                                        <img src={item.logo2} alt="" className='w-4 h-[11px]' />
                                        <p>{item.l2}</p>
                                        <img src={item.logo3} alt="" className='w-4 h-[15px]' />
                                        <p>{item.l3}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>

            <div className='flex justify-center gap-2 mb-20 mt-10'>
                <div className='w-5 h-5 rounded-full bg-[#BFD2F8]'></div>
                <div className='w-5 h-5 rounded-full bg-[#1F2B6C]'></div>
                <div className='w-5 h-5 rounded-full bg-[#BFD2F8]'></div>
            </div>
        </div>
    )
}

export default News
