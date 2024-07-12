import React from 'react'
import spec from "../Images/spec.png"
import booking from "../Images/booking.png"

const Specialties = (props) => {
  return (
    <div>
      {/* First part */}
      <div className='text-center'>
        <p className='text-[#159EEC] text-lg font-bold tracking-widest'>Always Caring</p>
        <h1 className='text-[#1F2B6C] text-3xl' style={{ fontFamily: '"Yeseva One", serif' }}>Our Specialties</h1>
      </div>

      {/* second part */}
      <div className='my-16'>


        <div className="1stRow flex justify-center">
          {props.data1.map((item, index) => {
            return (
              <>
                <div className={`w-[240px] border text-center text-[${item.text}] py-10 bg-[${item.color}]`}>
                  <img src={item.logo} alt="" className='w-[50px] m-auto pb-2' key={index} />
                  <p key={index}>{item.p}</p>
                </div>
              </>
            )
          })}
        </div>

        <div className="2ndRow flex justify-center">
          {props.data2.map((item, index) => {
            return (
              <>
                <div className='w-[240px] border text-center py-10 '>
                  <img src={spec} alt="" className='w-[50px] m-auto pb-2' key={index} />
                  <p key={index}>{item}</p>
                </div>
              </>
            )
          })}
        </div>

        <div className="3rdRow flex justify-center">
          {props.data3.map((item, index) => {
            return (
              <>
                <div className='w-[240px] border text-center py-10 '>
                  <img src={spec} alt="" className='w-[50px] m-auto pb-2' key={index} />
                  <p key={index}>{item}</p>
                </div>
              </>
            )
          })}
        </div>
      </div>

      <div className='h-[570px] my-20 flex justify-center items-center gap-14' style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${booking})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className='w-[410px]'>
          <h1 className='text-[#159EEC] text-3xl pb-5' style={{ fontFamily: '"Yeseva One", serif' }}>Book an Appointment</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
        </div>

        <div className='w-[] bg-[#1F2B6C] rounded-lg overflow-hidden'>
          <div>
            <input type="text" placeholder='Name' className='bg-[#1F2B6C] outline-none px-3 py-4 text-white border-[#BFD2F8] border w-[50%]' />

            <select name="" id="" className='bg-[#1F2B6C] text-gray-400 outline-none w-[50%] py-[18px] px-3 border-[#BFD2F8] border'>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="" selected>Gender</option>
            </select>
          </div>
          <div>
            <input type="email" placeholder='Email' className='bg-[#1F2B6C] px-3 py-4 outline-none text-white border-[#BFD2F8] border w-[50%]' />
            <input type="number" placeholder='Phone' className='bg-[#1F2B6C] px-3 py-4 outline-none text-white border-[#BFD2F8] border w-[50%]' />
          </div>
          <div>
            <input type="date" placeholder='Date' className='text-gray-400 bg-[#1F2B6C] px-3 py-4 outline-none border-[#BFD2F8] border w-[50%]' />
            <input type="time" placeholder='Time' className='text-gray-400 bg-[#1F2B6C] px-3 py-4 outline-none border-[#BFD2F8] border w-[50%]' />
          </div>
          <div>

            <select name="" id="" className='bg-[#1F2B6C] border-[#BFD2F8] border text-gray-400 outline-none w-[50%] py-[18px] px-3'>
              <option value="male">Dr.example</option>
              <option value="female">Dr.example2</option>
              <option value="" selected>Doctor</option>
            </select>

            <select name="" id="" className='bg-[#1F2B6C] border-[#BFD2F8] border text-gray-400 outline-none w-[50%] py-[18px] px-3'>
              <option value="male">A Section</option>
              <option value="female">B Section</option>
              <option value="" selected>Department</option>
            </select>
          </div>
          <div>
            <textarea name="" id="" cols="44" rows="6" className='bg-[#1F2B6C] px-3 py-2 outline-none text-white ' placeholder='Message'></textarea>
            <button className="bg-[#BFD2F8] w-full font-medium py-3">SUBMIT</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Specialties
