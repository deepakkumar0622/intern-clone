import { Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#004733]  relative max-h-full bg-cover  flex flex-col justify-center items-center">
      <div className="flex relative  md:absolute flex-col gap-32 top-40 z-10">
        <div className="md:text-9xl text-5xl  text-[#1ee07f] font-medium text-center">
          <h1>
            Mortgages <br /> made simple
          </h1>
        </div>
        <div className="md:relative -mt-24 md:block flex flex-col justify-center items-center md:-ml-24">
          <Link href="/start">
            <button className="bg-[#1ee07f] px-8 text-sm py-4 rounded-[50px] text-black hover:text-white hover:bg-transparent">
              Start my approval
            </button>
          </Link>
          <div className="flex mt-3 text-white text-sm gap-2">
            <p className="flex items-center gap-2">
              <Timer size={20} /> 3 min
            </p>
            |<p>No credit impact</p>
          </div>
          <div>
            <div className="md:absolute hidden md:block space-y-2 md:-right-20 md:-top-5 ">
              <div className="flex gap-3">
                <Image src={"/search.png"} width={25} height={50} alt="" />
                <div className="flex gap-2">
                  <Image src={"/star.png"} width={25} height={5} alt="" />
                  <Image src={"/star.png"} width={25} height={5} alt="" />
                  <Image src={"/star.png"} width={25} height={5} alt="" />
                  <Image src={"/star.png"} width={25} height={5} alt="" />
                  <Image src={"/rating (1).png"} width={25} height={5} alt="" />
                </div>
              </div>
              <p className="text-[12px] text-white">
                4.6 Stars | 3177 Google reviews
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-72 relative mt-52">
        <Image src={"/hero.png"} width={500} height={500} alt="" />
      </div>
      <div>
        <div className="md:hidden absolute bottom-0 left-24 bg-black/50 p-2 rounded-xl space-y-2  ">
          <div className="flex mx-3 gap-3">
            <Image src={"/search.png"} width={25} height={50} alt="" />
            <div className="flex  gap-2">
              <Image src={"/star.png"} width={25} height={5} alt="" />
              <Image src={"/star.png"} width={25} height={5} alt="" />
              <Image src={"/star.png"} width={25} height={5} alt="" />
              <Image src={"/star.png"} width={25} height={5} alt="" />
              <Image src={"/rating (1).png"} width={25} height={5} alt="" />
            </div>
          </div>
          <p className="text-[12px] mx-5 text-white">
            4.6 Stars | 3177 Google reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
