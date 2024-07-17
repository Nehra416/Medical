 // Top_most.js
import React from "react";
import call from "../Images/Top_most_call.png";
import time from "../Images/Top_most_time.png";
import location from "../Images/Top_most_location.png";
import { Link } from "react-router-dom";

const Top_most = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-[60px] fixed top-0 z-50 bg-white w-full px-4">
      <div className="text-4xl mb-2 md:mb-0" style={{ fontFamily: '"Yeseva One", serif' }}>
        <Link to="/">MED<span className="text-[#159EEC]">DICAL</span></Link>
      </div>
      <div className="flex flex-col md:flex-row gap-4 font-medium">
        <div className="flex gap-2 items-center">
          <img src={call} alt="Call" className="w-[40px] h-[38px]" />
          <div>
            <p className="text-sm md:text-base">Emergency</p>
            <p className="text-[#159EEC] text-sm md:text-base">(237) 681-812-255</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img src={time} alt="Work Hour" className="w-[30px] h-[30px]" />
          <div>
            <p className="text-sm md:text-base">Work Hour</p>
            <p className="text-[#159EEC] text-sm md:text-base">09:00 - 20:00 Everyday</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img src={location} alt="Location" className="w-[30px] h-9" />
          <div>
            <p className="text-sm md:text-base">Location</p>
            <p className="text-[#159EEC] text-sm md:text-base">0123 Some Place</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top_most;
