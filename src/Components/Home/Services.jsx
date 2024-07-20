import React from "react";
import serIcon1 from "../Images/serIcon1.png";
import serIcon2 from "../Images/serIcon2.png";
import serIcon3 from "../Images/serIcon3.png";
import serIcon4 from "../Images/serIcon4.png";
import service1 from "../Images/service1.png";
import service2 from "../Images/service2.png";
import border from "../Images/welcomeBorder.png";
import dot from "../Images/dot.png";

const Services = (props) => {
  return (
    <div className="my-14 bg-slate-100 py-10 sm:px-5">
      <div className="text-center">
        <p className="font-bold text-[#159EEC] tracking-widest text-lg">Care you can believe in</p>
        <h1 className="text-[#1F2B6C] text-3xl font-yeseva" >Our Services</h1>
      </div>

      <div className=" flex justify-center sm:flex-row flex-col gap-5 mt-16 items-center ">
        {/* 1st coloumn */}
        <div className="Row1st border flex sm:flex-col sm:px-0 rounded-lg text-center overflow-hidden sm:text-base text-sm sm:mx-0 mx-2 gap-2 shrink-[0]">
          <div className="sm:p-6 py-3 px-1">
            <img src={serIcon1} alt="" className="m-auto pb-2 w-8" />
            <p>Free Checkup</p>
          </div>
          <div className="bg-[#1F2B6C] sm:p-6 py-3 px-1 text-[#BFD2F8]">
            <img src={serIcon2} alt="" className="m-auto pb-2 w-8" />
            <p>Cardiogram</p>
          </div>
          <div className="sm:p-6 py-3 px-1">
            <img src={serIcon3} alt="" className="m-auto pb-2 w-8" />
            <p>Dna Testing</p>
          </div>
          <div className="sm:p-6 py-3 px-1">
            <img src={serIcon4} alt="" className="m-auto pb-2 w-8 h-10" />
            <p>Blood Bank</p>
          </div>
          <div className="bg-[#1F2B6C] sm:p-2 py-3 px-1 text-[#BFD2F8]">View All</div>
        </div>

        {/* 2nd coloumn */}
        <div className="Row2nd max-w-[470px] mx-5 shrink-[0]">
          <h1 className="font-medium text-[26px] my-5">A passion for putting patients first.</h1>
          {/* left side inner col */}
          <div className="flex sm:gap-6 ">
            <div className="flex flex-col sm:text-lg">
              {props.service1.map((item, index) => {
                return (
                  <div className="flex gap-2  items-baseline" key={index}>
                    {/* dot div don't work proper */}
                    <img src={dot} alt="" className="w-3 h-3" />
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
            {/* right side inner col */}
            <div className="flex flex-col sm:text-lg">
              {props.service1.map((item, index) => {
                return (
                  <div className="flex  gap-2  items-baseline" key={index}>
                    <img src={dot} alt="" className="w-3 h-3" />
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>

          </div>

          <div className="mb-10">
            <p className="my-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.
            </p>
          </div>
        </div>

        {/* 3rd coloumn */}
        {/* Why here we can't apply the flex on the phone size screens */}
        <div className="Row3rd overflow-hidden">
          <img src={service1} alt="" className="max-w-[324px] sm:px-0 px-4 rounded-t-md shrink-[2]" />
          <img src={border} alt="" className="max-w-[324px] h-2 mb-7 sm:px-0 px-4 shrink-[2]" />
          <img src={service2} alt="" className="max-w-[324px] sm:px-0 px-4 rounded-t-md shrink-[2]" />
          <img src={border} alt="" className="max-w-[324px] h-2 sm:px-0 px-4 shrink-[2]" />
        </div>
      </div>
    </div>
  );
};

export default Services;
