// NavBar.js
import React from "react";
import search from "../Images/search.png";
import { Link } from "react-router-dom";

const Nav_bar = ({ nav }) => {
  console.log("navbar data in navbar component", nav);

  return (
    <div className="flex justify-evenly items-center bg-[#1F2B6C] h-[70px] fixed top-[60px] z-50 w-full">
      <ul className="flex gap-10 text-white text-lg">
        {nav.map((item) => (
          <li key={item.ref}>
            <Link to={item.ref}>{item.data}</Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-5 items-center cursor-pointer">
        <img src={search} alt="Search" className="w-5 h-5" />
        <button className="bg-[#BFD2F8] rounded-3xl py-3 px-8 font-medium">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Nav_bar;
