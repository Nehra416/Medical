import React, { useState } from "react";
import search from "../Images/search.png";
import { Link } from "react-router-dom";
import menu from "../Images/menu.png"
import cross from "../Images/cross.png"

const Nav_bar = (props) => {
  const [hide, sethide] = useState(true)
  const menuBtn = () => {
    console.log(hide)
    sethide(!hide)
  }

  return (
    <div className="sm:flex block justify-evenly items-center bg-[#1F2B6C] h-[70px] fixed top-[60px] z-50 w-full">
      <div className="relative">

        <div className="sm:hidden flex justify-between p-5 text-2xl font-yeseva text-white" >
          <Link to="/">MED<span className="text-[#159EEC]">DICAL</span></Link>
          <img src={`${hide ? menu : cross}`} alt="" className="w-7 h-7 cursor-pointer" onClick={menuBtn} />
        </div>

        {/* Mobile Navbar */}
        <div className={`sm:hidden bg-white w-full absolute font-semibold text-2xl text-center rounded-md transition-opacity duration-700 ${hide ? 'opacity-0' : 'opacity-100'}`}>
          <div className="p-2">
            <Link to="/">Home</Link>
          </div>
          <div className="p-2">
            <Link to="/About">About Us</Link>
          </div>
          <div className="p-2">
            <Link to="/Service">Services</Link>
          </div>
          <div className="p-2">
            <Link to="/Doctors">Doctors</Link>
          </div>
          <div className="p-2">
            <Link to="/News">News</Link>
          </div>
          <div className="p-2">
            <Link to="/Contact">Contact</Link>
          </div>
          <div className="p-2 pb-10">
            <Link to="/Appointment">Appointment</Link>
          </div>
        </div>

        <ul className="sm:flex gap-10 text-white text-lg hidden">
          {props.nav.map((item, index) => {
            return <ul key={index}><li className=" sm:block"><Link to={item.ref}>{item.data}</Link></li></ul>;
          })}
        </ul>

      </div>

      <div className="sm:flex gap-5 items-center cursor-pointer hidden">
        <img src={search} alt="Search" className="w-5 h-5" />
        <button className="bg-[#BFD2F8] rounded-3xl py-3 px-8 font-medium">
          <Link to="/ads">Appointment</Link>
        </button>
      </div>

    </div>
  );
};

export default Nav_bar;
