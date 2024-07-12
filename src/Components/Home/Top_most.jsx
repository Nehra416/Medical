import React from "react";
import call from "../Images/Top_most_call.png";
import time from "../Images/Top_most_time.png";
import location from "../Images/Top_most_location.png";

const Top_most = () => {
  return (
    <div className="flex justify-evenly items-center h-[60px] fixed top-0 z-50 bg-white w-full">
      <div className="text-4xl" style={{ fontFamily: '"Yeseva One", serif' }}>
        MED<span className="text-[#159EEC]">DICAL</span>
      </div>
      <div className="flex gap-10 font-medium">
        <div className="flex gap-4 items-center">
          <img src={call} alt="" className="w-[40px] h-[38px]" />
          <div>
            <p>Emergency</p>
            <p className="text-[#159EEC]">(237) 681-812-255</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <img src={time} alt="" className="w-[30px] h-[30px]" />
          <div>
            <p>Work Hour</p>
            <p className="text-[#159EEC]">09:00 - 20:00 Everyday</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <img src={location} alt="" className="w-[30px] h-9" />
          <div>
            <p>Location</p>
            <p className="text-[#159EEC]">0123 Some Place</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top_most;
