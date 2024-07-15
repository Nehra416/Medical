import React from "react";
import welcome from "../Images/welcome.png";
import welcomeBorder from "../Images/welcomeBorder.png";

const Welcome = () => {
  return (
    <div>
      <div className="text-center w-[658px] m-auto mt-28 relative">
        <p className="text-[#159EEC] font-bold tracking-widest text-lg">Welcome to Meddical</p>
        <p className="text-[#1F2B6C] text-3xl leading-loose" style={{ fontFamily: '"Yeseva One", serif' }}>
          A Great Place to Receive Care
        </p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
        <button className=" my-8">
          <span className="text-[#159EEC] hover:underline">Learn More</span> &rarr;
        </button>
      </div>

      <div
        className="overflow-hidden h-[250px] m-auto relative my-5 mx-[12%]"
        style={{
          backgroundImage: `url(${welcome})`,
          backgroundPositionY: "30%",
          backgroundSize: "cover",
        }}
      >
        <img src={welcomeBorder} alt="" className="absolute bottom-0 h-2" />
      </div>
    </div>
  );
};

export default Welcome;
