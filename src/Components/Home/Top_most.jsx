import React from "react";
import call from "../Images/Top_most_call.png";
import time from "../Images/Top_most_time.png";
import location from "../Images/Top_most_location.png";
import { Link } from "react-router-dom";

const Top_most = () => {
  return (
    <div className="flex justify-evenly items-center h-[60px] fixed top-0 z-50 bg-white w-full">
      <div className="sm:block hidden text-4xl font-yeseva" >
        <Link to="/">MED<span className="text-[#159EEC]">DICAL</span></Link>
      </div>
      <div className="flex gap-8 font-medium">
        <div className="flex sm:gap-4 gap-1 items-center sm:text-base text-sm">
          <img src={call} alt="" className="sm:w-[40px] w-[30px] sm:h-[38px] h-[28px]" />
          <div>
            <p>Emergency</p>
            <p className="text-[#159EEC] text-xs sm:text-base">(237) 681-812-255</p>
          </div>
        </div>
        <div className="flex sm:gap-4 gap-1 items-center">
          <img src={time} alt="" className="sm:w-[30px] w-[20px] sm:h-[30px] h-[20px]" />
          <div>
            <p>Work Hour</p>
            <p className="text-[#159EEC] text-xs sm:text-base">09:00-20:00 Perday</p>
          </div>
        </div>
        <div className="flex sm:gap-4 gap-1 items-center">
          <img src={location} alt="" className="sm:w-[30px] w-6 sm:h-9 h-7" />
          <div>
            <p>Location</p>
            <p className="text-[#159EEC] text-xs sm:text-base">0123 Some Place</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top_most;
