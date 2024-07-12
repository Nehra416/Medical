import React from 'react'

const News = (props) => {
    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-lg tracking-widest text-[#159EEC]'>Better information, Better health</p>
                <h1 className='text-[#1F2B6C] text-3xl' style={{ fontFamily: '"Yeseva One", serif' }}>News</h1>
            </div>
            <div className='flex w-[990px] flex-wrap justify-center gap-7 m-auto mt-20'>
                {props.data.map((item, index) => {
                    return (
                        <>
                            <div className={`flex gap-5 rounded-md ${item.shadow}`}>
                                <img src={item.logo} alt="" className='w-40 h-40' />
                                <div className='w-[270px]'>
                                    <p className='text-sm text-[#159EEC]'>{item.p1}</p>
                                    <p className='text-lg'>{item.p2}</p>
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
