import React from 'react'
import dr from "../Images/about_welcome.png"
import dot from "../Images/dot.png"

const About_welcome = () => {
    return (
        <div className='flex sm:flex-row flex-col justify-center gap-10 my-24'>
            <div className='w-[300px] sm:w-[400px] sm:h-[500px] h-[180px] bg-cover sm:mx-0 rounded-md m-auto' style={{ backgroundImage: `url(${dr})`, backgroundPositionX: '40%' }}></div>
            {/* 2nd coloumn */}
            <div className='max-w-[560px] sm:mx-0 mx-3 m-auto'>
                <p className='text-[#159EEC] font-bold text-lg tracking-widest sm:text-left text-center'>Welcome to Hospital name</p>
                <h1 className='sm:text-5xl text-3xl text-[#1F2B6C] font-yeseva sm:text-left text-center' >Best Care for Your <br /> Good Health</h1>
                {/* list by grid */}
                <div className='grid grid-cols-2 sm:text-lg gap-5 my-6 sm:mx-0 '>
                    <div className='flex gap-3 items-baseline'>
                        <img src={dot} alt="" className='w-4 h-4' />
                        A Passion for Healing
                    </div>
                    <div className='flex gap-3 items-baseline'>
                        <img src={dot} alt="" className='w-4 h-4' />
                        5-Star Care
                    </div>
                    <div className='flex gap-3 items-baseline'>
                        <img src={dot} alt="" className='w-4 h-4' />
                        A Legacy of Excellence
                    </div>
                    <div className='flex gap-3 items-baseline'>
                        <img src={dot} alt="" className='w-4 h-4' />
                        All our best
                    </div>
                    <div className='flex gap-3 items-baseline'>
                        <img src={dot} alt="" className='w-4 h-4' />
                        Believe in Us
                    </div>
                    <div className='flex gap-3 items-baseline'>
                        <img src={dot} alt="" className='w-4 h-4' />
                        Always Caring
                    </div>
                </div>

                <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>

            </div>
        </div>
    )
}

export default About_welcome
