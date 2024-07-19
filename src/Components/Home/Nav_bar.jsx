// NavBar.js
import React from "react";
import search from "../Images/search.png";
import { Link } from "react-router-dom";
import menu from "../Images/menu.png"
 
const Nav_bar = ({nav}) => {
  return (
    <div className="sm:flex block justify-evenly items-center bg-[#1F2B6C] h-[80px] top-[80px] fixed  z-50 w-[1366px]">
      <div>

        <div className="sm:hidden flex justify-between p-5 text-2xl font-yeseva text-white" >
          <Link to="/">MED<span className="text-[#159EEC]">DICAL</span></Link>
          <img src={menu} alt="" className="w-7 h-7" />
        </div>

        <ul className="sm:flex gap-10 text-white text-lg hidden">
          {nav.map((item, index) => {
            return <ul><li className=" sm:block" key={index}><Link to={item.ref}>{item.data}</Link></li></ul>;
          })}
        </ul>

      </div>

      <div className="sm:flex gap-5 items-center cursor-pointer hidden">
        <img src={search} alt="Search" className="w-5 h-5" />
        <button className="bg-[#BFD2F8] rounded-3xl py-3 px-8 font-medium  " >
          <Link to="/ads">Appointment</Link>
        </button>
      </div>

    </div>
  );
};

export default Nav_bar;
