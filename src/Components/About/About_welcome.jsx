import React from 'react'
import dr from "../Images/about_welcome.png"

const About_welcome = () => {
    return (
        <div className='flex justify-center gap-10 my-24'>
            <div className='w-[400px] h-[500px] bg-cover' style={{backgroundImage: `url(${dr})`, backgroundPositionX: '40%'}}></div>
            {/* 2nd coloumn */}
            <div className='max-w-[560px]'>
                <p className='text-[#159EEC] font-bold text-lg tracking-widest'>Welcome to Hospital name</p>
                <h1 className='text-5xl text-[#1F2B6C]' style={{ fontFamily: '"Yeseva One", serif' }}>Best Care for Your <br /> Good Health</h1>
                {/* list by grid */}
                <div className='grid grid-cols-2 text-lg gap-5 my-6'>
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
                    <div className='flex gap-3 items-center'>
                        <div className='bg-[#159EEC] w-4 h-4 rounded-full'></div>
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
