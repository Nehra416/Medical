import React from 'react';
import logo1 from './img/logo1.png';
import logo2 from './img/logo2.png';
import "./Navbar.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className='main_nav m-[-1]'>
          <div className='main_nav_con'>
            <div className='main_nav_con_1'>
              <Link to="/">Home</Link>
            </div>
            <div className='main_nav_con_1'>
               <Link to="/About"> About us</Link>
            </div>
            <div className='main_nav_con_1' >
              <Link to="/Service">Services</Link>
            </div>
            <div id='Doctorss'>
               <Link to="/Doctors">Doctors</Link>
            </div>
            <div className='main_nav_con_1'>
              News
            </div>
            <div className='main_nav_con_1'>
              Contact
            </div>
          </div>
          <div className='side_con'>
            <div className='side_con_logo'>
              <img src={logo1} id='logo1' />
            </div>
            <div className='side_con_logo1'>
              <div className='side_con_logo11' >
                Appointment
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

