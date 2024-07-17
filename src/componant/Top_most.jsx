import React from "react";
import phh1 from './img/phhh1.png'
import phh2 from './img/phhh2.png'
import phh3 from './img/phhh3.png'

const Top_most = () => {
  return (
    <>
      <div className="h-[80px] w-[1366px] flex z-[10] bg-[#FCFEFE]">
        <div className="flex ml-[187px] pt-[14px]">
          <div className="text-[36px] text-[#1F2B6C] ">MED</div>
          <div className="text-[36px] text-[#159EEC] ">DICAL</div>
        </div>
       
          <div className="flex flex-col md:flex-row gap-4 font-medium pt-[6px] ml-[275px]">
            <div className="flex gap-2 items-center ">
              <img src={phh1} alt="Call" className="w-[40px] h-[38px]" />
              <div>
                <p className="text-left text-sm md:text-base">Emergency</p>
                <p className="text-[#159EEC] text-sm md:text-base">(237) 681-812-255</p>
              </div>
            </div>
            <div className="flex gap-2 items-center ml-[20px]">
              <img src={phh2} alt="Work Hour" className="w-[30px] h-[30px]" />
              <div>
                <p className="text-left text-sm md:text-base">Work Hour</p>
                <p className="text-[#159EEC] text-sm md:text-base">09:00 - 20:00 Everyday</p>
              </div>
            </div>
            <div className="flex gap-2 items-center ml-[20px]">
              <img src={phh3} alt="Location" className="w-[30px] h-9" />
              <div>
                <p className="text-left text-sm md:text-base">Location</p>
                <p className="text-[#159EEC] text-sm md:text-base">0123 Some Place</p>
              </div>
            </div>
          </div>
        </div>
   
    </>
  );
};

export default Top_most;
