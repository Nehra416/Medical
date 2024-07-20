import React, { useState } from 'react'
import spec from "../Images/spec.png"
import booking from "../Images/booking.png"

const Specialties = (props) => {
  const [viewMore, setviewMore] = useState(false)
  const more = () => {
    console.log(viewMore)
    setviewMore(!viewMore)
  }

  return (
    <div>
      {/* First part */}
      <div className='text-center'>
        <p className='text-[#159EEC] text-lg font-bold tracking-widest'>Always Caring</p>
        <h1 className='text-[#1F2B6C] text-3xl font-yeseva' >Our Specialties</h1>
      </div>

      <div className='my-16 sm:mx-[8%] mx-3 border rounded-lg overflow-hidden'>

        <div className="grid sm:grid-cols-4 justify-center grid-cols-2 sm:text-base text-sm">
          {props.data1.map((item, index) => (
            <div className={`border text-center text-[${item.text}] py-10 bg-[${item.color}]`} key={index}>
              <img src={item.logo} alt="" className='w-[50px] m-auto pb-2' />
              <p>{item.p}</p>
            </div>
          ))}
        </div>

        <button className={`${viewMore ? 'hidden' : 'block'} sm:hidden bg-[#1F2B6C] text-white text-2xl font-semibold p-4 rounded-lg text-center w-full`} onClick={more}>
          View All
        </button>

        <div className={`grid sm:grid-cols-4 justify-center grid-cols-2 sm:text-base text-sm sm:grid ${viewMore ? 'block' : 'hidden'}`}>
          {props.data2.map((item, index) => (
            <div className='border text-center py-10 ' key={index}>
              <img src={spec} alt="" className='w-[50px] m-auto pb-2' />
              <p>{item}</p>
            </div>
          ))}
        </div>

        <button type="button" className={`${viewMore ? 'block' : 'hidden'} sm:hidden bg-[#1F2B6C] text-white text-2xl font-semibold p-4 rounded-lg text-center w-full`} onClick={more}>
          View Less
        </button>

      </div>

      {/* Appointment */}
      <div className='py-20 px-10 my-20 flex sm:flex-row flex-col justify-center items-center gap-14' style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${booking})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className='max-w-[410px] flex-shrink-[4] text-center sm:text-left'>
          <h1 className='text-[#159EEC] text-3xl pb-5' style={{ fontFamily: '"Yeseva One", serif' }}>Book an Appointment</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
        </div>

        <div className='max-w-[510px] bg-[#1F2B6C] rounded-lg overflow-hidden flex-shrink-[2]'>
          <div>
            <input type="text" placeholder='Name' className='bg-[#1F2B6C] outline-none px-3 py-4 text-white border-[#BFD2F8] border sm:w-[50%] w-full' />
            <select name="" id="" className='bg-[#1F2B6C] text-gray-400 outline-none py-[18px] px-3 border-[#BFD2F8] border sm:w-[50%] w-full'>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="" selected>Gender</option>
            </select>
          </div>
          <div>
            <input type="email" placeholder='Email' className='bg-[#1F2B6C] px-3 py-4 outline-none text-white border-[#BFD2F8] border sm:w-[50%] w-full' />
            <input type="number" placeholder='Phone' className='bg-[#1F2B6C] px-3 py-4 outline-none text-white border-[#BFD2F8] border sm:w-[50%] w-full' />
          </div>
          <div>
            <input type="date" placeholder='Date' className='text-gray-400 bg-[#1F2B6C] px-3 py-4 outline-none border-[#BFD2F8] border sm:w-[50%] w-full' />
            <input type="time" placeholder='Time' className='text-gray-400 bg-[#1F2B6C] px-3 py-4 outline-none border-[#BFD2F8] border sm:w-[50%] w-full' />
          </div>
          <div>

            <select name="" id="" className='bg-[#1F2B6C] border-[#BFD2F8] border text-gray-400 outline-none sm:w-[50%] w-full py-[18px] px-3'>
              <option value="male">Dr.example</option>
              <option value="female">Dr.example2</option>
              <option value="" selected>Doctor</option>
            </select>

            <select name="" id="" className='bg-[#1F2B6C] border-[#BFD2F8] border text-gray-400 outline-none sm:w-[50%] w-full py-[18px] px-3'>
              <option value="male">A Section</option>
              <option value="female">B Section</option>
              <option value="" selected>Department</option>
            </select>
          </div>
          <div>
            <textarea
              placeholder='Message'
              className='bg-[#1F2B6C] outline-none px-3 py-2 text-white w-full h-40 '
            />
            <button className="bg-[#BFD2F8] w-full font-medium py-3">SUBMIT</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Specialties
