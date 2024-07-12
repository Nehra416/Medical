import React from "react";
import serIcon1 from "../Images/serIcon1.png";
import serIcon2 from "../Images/serIcon2.png";
import serIcon3 from "../Images/serIcon3.png";
import serIcon4 from "../Images/serIcon4.png";
import service1 from "../Images/service1.png";
import service2 from "../Images/service2.png";
import border from "../Images/welcomeBorder.png";

const Services = (props) => {
  return (
    <div className="my-14 bg-slate-100 py-10">
      <div className="text-center">
        <p className="font-bold text-[#159EEC] tracking-widest text-lg">Care you can believe in</p>
        <h1 className="text-[#1F2B6C] text-3xl" style={{ fontFamily: '"Yeseva One", serif' }}>Our Services</h1>
      </div>

      {/* 1st row */}
      <div className=" flex justify-center gap-5 mt-16">
        <div className="Row1st border rounded-lg text-center overflow-hidden">
          <div className="p-6">
            <img src={serIcon1} alt="" className="m-auto pb-2 w-8" />
            <p>Free Checkup</p>
          </div>
          <div className="bg-[#1F2B6C] p-6 text-[#BFD2F8]">
            <img src={serIcon2} alt="" className="m-auto pb-2 w-8" />
            <p>Cardiogram</p>
          </div>
          <div className="p-6">
            <img src={serIcon3} alt="" className="m-auto pb-2 w-8" />
            <p>Dna Testing</p>
          </div>
          <div className="p-6">
            <img src={serIcon4} alt="" className="m-auto pb-2 w-8 h-10" />
            <p>Blood Bank</p>
          </div>
          <div className="bg-[#1F2B6C] p-2 text-[#BFD2F8]">View All</div>
        </div>

        {/* 2nd Row */}
        <div className="Row2nd w-[470px]">
          <h1 className="font-medium text-[26px] my-5">A passion for putting patients first.</h1>

          <div className="flex gap-6 ">
            <div className="flex flex-col text-lg">
              {props.service1.map((item, index) => {
                return (
                  <>
                    <div className="flex gap-2 items-center">
                      <div className="w-3 h-3 bg-[#159EEC] rounded-full"></div>
                      <p key={index}>{item}</p>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="flex flex-col text-lg">
              {props.service1.map((item, index) => {
                return (
                  <>
                    <div className="flex  gap-2 items-center">
                      <div className="w-3 h-3 bg-[#159EEC] rounded-full"></div>
                      <p key={index}>{item}</p>
                    </div>
                  </>
                );
              })}
            </div>

          </div>

          <div>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.
            </p>
          </div>
        </div>

        {/* 3rd row */}
        <div className="Row3rd">
          <img src={service1} alt="" className="w-[324px]" />
          <img src={border} alt="" className="w-[324px] h-2 mb-7" />
          <img src={service2} alt="" className="w-[324px]" />
          <img src={border} alt="" className="w-[324px] h-2" />
        </div>
      </div>
    </div>
  );
};

export default Services;
