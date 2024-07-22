import React from 'react';
import logo1 from './img/logo1.png';
import logo2 from './img/logo2.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className='main_nav m-[-1] w-[1366px] h-[80px] bg-[#1F2B6C] flex'>
          <div className='pt-[25px] flex ml-[300px] h-[21px]'>
            <div className='hover:text-[#BFD2F8] text-[18px] text-[#FCFEFE] pl-[20px] leading-[21.11px]'>
              <Link to="/">Home</Link>
            </div>
            <div className='hover:text-[#BFD2F8] text-[18px] text-[#FCFEFE] pl-[20px] leading-[21.11px]'>
               <Link to="/About"> About us</Link>
            </div>
            <div className='hover:text-[#BFD2F8] text-[18px] text-[#FCFEFE] pl-[20px] leading-[21.11px]' >
              <Link to="/Service">Services</Link>
            </div>
            <div className='hover:text-[#BFD2F8] text-[#FCFEFE] text-[18px] pl-[20px] leading-[21.11px]'>
               <Link to="/Doctors">Doctors</Link>
            </div>
            <div className='hover:text-[#BFD2F8] text-[18px] text-[#FCFEFE] pl-[20px] leading-[21.11px]'>
              News
            </div>
            <div className='hover:text-[#BFD2F8] text-[18px] text-[#FCFEFE] pl-[20px] leading-[21.11px]'>
              Contact
            </div>
          </div>
          <div className='w-[223px] h-[45px] ml-[250px] flex mt-[13px]'>
            <div className='side_con_logo'>
              <img src={logo1} className='w-[25px] h-[25px] mt-[10px]'/>
            </div>
            <div className='w-[173px] h-[45px] gap-[10px] rounded-[50px] bg-[#BFD2F8] ml-[30px]'>
              <div className='pt-[11px] pl-[40px] w-[103px] h-[19px] text-[16px] font-[500] leading-[18.11px] text-[#1F2B6C]' >
                <Link to="/ads">Appointment</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

