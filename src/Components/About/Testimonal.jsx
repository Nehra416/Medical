import React from 'react'
import testimonal_img from "../Images/testimonal_img.png"
import vector from "../Images/vector.png"

const Testimonal = () => {
    return (
        // bgimage can't set accurate
        <div className='h-[440px] overflow-hidden relative mb-20' style={{ background: `linear-gradient(rgba(31,43,108,0.6),rgba(31,43,108,0.6)), url(${testimonal_img}` }}>
            <div className='text-center w-[650px] absolute top-[90px] left-[250px] text-white'>
                <img src={vector} alt="" className='w-[45px] h-[30px] m-auto mb-10' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.</p> <hr className='my-5 mx-36' />
                <p className='text-[22px]'>John Doe</p>

                <div className='flex justify-center gap-2 mt-7'>
                    <div className='w-5 h-5 rounded-full bg-white'></div>
                    <div className='w-5 h-5 rounded-full bg-[#BFD2F8]'></div>
                    <div className='w-5 h-5 rounded-full bg-white'></div>
                </div>
            </div>
        </div>
    )
}

export default Testimonal
