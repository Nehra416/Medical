import React from "react";
import welcome from "../Images/welcome.png";
import welcomeBorder from "../Images/welcomeBorder.png";

const Welcome = () => {
  return (
    <div>
      <div className="text-center max-w-[800px] m-auto mt-28 relative">
        <p className="text-[#159EEC] font-bold tracking-widest text-lg">Welcome to Meddical</p>
        <p className="text-[#1F2B6C] text-3xl py-4 font-yeseva" >
          A Great Place to Receive Care
        </p>
        <p className="px-4">
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
        // tailwind config custom css bg-y-30 (background-position-y: 30%)
        className="overflow-hidden h-[250px] relative my-5 mx-[12%] bg-center sm:bg-y-30 "
        style={{
          backgroundImage: `url(${welcome})`,

          backgroundSize: "cover",
        }}
      >
        <img src={welcomeBorder} alt="" className="absolute bottom-0 h-2 w-full" />
      </div>
    </div>
  );
};

export default Welcome;
