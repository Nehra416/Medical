import React from "react";
import { Link } from "react-router-dom";
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
          backgroundPosition: "67%",
        }}
        className="h-[550px] relative overflow-hidden"
      >
        {/* <img src={doctor} alt="" className="absolute h-[750px] w-[1300px] right-[-110px] top-[-80px]" /> */}
        <div className="max-w-[520px] absolute left-[9%] top-[200px]">
          <p className="text-[#159EEC] text-lg font-bold tracking-widest">Caring for Life</p>
          <p className="text-[#1F2B6C] sm:text-5xl text-4xl font-yeseva" >
            Leading the Way in Medical Excellence
          </p>
          <button className="bg-[#BFD2F8] rounded-3xl py-3 px-8 font-medium mt-7">
            <Link to="/Service">Our Service</Link>
          </button>
        </div>
      </div>

      {/* 2nd part Cards */}

      <div className="flex justify-center sm:gap-7 gap-2 absolute sm:top-[630px] top-[615px] sm:left-[10%] left-[3%] sm:text-left text-center sm:text-lg text-sm pr-2">
        <div className="bg-[#1F2B6C] flex sm:flex-row flex-col-reverse items-center text-white sm:p-4 py-2 px-1 sm:gap-5 gap-2 rounded-lg cursor-pointer">
          <p>Book an Appointment</p>
          <img src={calender} alt="" className="w-12" />
        </div>
        <div className="bg-[#BFD2F8] flex sm:flex-row flex-col-reverse items-center sm:p-4 py-2 px-1 sm:gap-5 gap-2 rounded-lg cursor-pointer">
          <p>Book an Appointment</p>
          <img src={people} alt="" className="w-12 h-11" />
        </div>
        <div className="bg-[#159EEC] flex sm:flex-row flex-col-reverse items-center text-white sm:p-4 py-2 px-1  sm:gap-5 gap-2 rounded-lg cursor-pointer">
          <p>Book an Appointment</p>
          <img src={cash} alt="" className="w-12 h-9" />
        </div>
      </div>
    </div>
  );
};

export default Hero_image;
