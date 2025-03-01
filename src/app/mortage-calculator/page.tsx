import CalcHero from "@/components/Calculator/CalcHero";
import Navbar from "@/components/Constants/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <CalcHero />
      <div className="bg-[#fffdfa] container md:mx-auto md:px-32"></div>
    </div>
  );
};

export default page;
