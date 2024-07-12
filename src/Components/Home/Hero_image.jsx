import React from "react";
import HeroImage from "../Images/Hero_image.png";
import effects from "../Images/effects.png";
import blur from "../Images/blur.png";
import doctor from "../Images/only_doctor.png";
import calender from "../Images/calender.png";
import cash from "../Images/cash.png";
import people from "../Images/people.png";

const Hero_image = () => {
  return (
    <div className="mt-32">
      <div
        style={{
          backgroundImage: `url(${effects}), url(${blur}), url(${HeroImage}) `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[550px] relative overflow-hidden"
      >
        <img src={doctor} alt="" className="absolute h-[750px] w-[1300px] right-[-110px] top-[-80px]" />
        <div className="w-[520px] absolute left-[186px] top-[200px]">
          <p className="text-[#159EEC] text-lg font-bold tracking-widest">Caring for Life</p>
          <p className="text-[#1F2B6C] text-5xl " style={{ fontFamily: '"Yeseva One", serif' }}>
            Leading the Way in Medical Excellence
          </p>
          <button className="bg-[#BFD2F8] rounded-3xl py-3 px-8 font-medium mt-7">
            Our Service
          </button>
        </div>
      </div>

      {/* 2nd part Cards */}
      <div className="flex justify-center gap-7 absolute top-[630px] left-[150px]">
        <div className="bg-[#1F2B6C] flex items-center text-white py-6 px-5 gap-5 rounded-lg cursor-pointer">
          <p>Book an Appointment</p>
          <img src={calender} alt="" className="w-12" />
        </div>
        <div className="bg-[#BFD2F8] flex items-center py-2 px-5 gap-5 rounded-lg cursor-pointer">
          <p>Book an Appointment</p>
          <img src={people} alt="" className="w-12 h-11" />
        </div>
        <div className="bg-[#159EEC] flex items-center text-white py-2 px-5 gap-5 rounded-lg cursor-pointer">
          <p>Book an Appointment</p>
          <img src={cash} alt="" className="w-12 h-9" />
        </div>
      </div>
    </div>
  );
};

export default Hero_image;
