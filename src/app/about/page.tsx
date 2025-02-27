import Backed from "@/components/Backed";
import Details from "@/components/Constants/Details";
import Footer from "@/components/Constants/Footer";
import Navbar from "@/components/Constants/Navbar";
import Timeline from "@/components/Timeline";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="bg-[#fffdfa]">
      <Navbar />
      <div className="relative min-h-[100vh]">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center bottom-10 left-1/2 ">
          <p className="font-semibold text-green-700 text-2xl">Our mission</p>
          <p className="md:text-4xl text-3xl font-semibold w-[400px] md:w-[900px] mt-10">
            We’re making homeownership simpler, faster — and most importantly,
            more accessible for all Americans.
          </p>
        </div>
      </div>
      <div className="container mx-auto md:px-52">
        <div className="mt-32  flex md:flex-row flex-col mx-10 md:mx-0 md:items-center">
          <div className="w-1/2 space-y-5">
            <p className="font-semibold  text-xl md:text-3xl">
              The status quo is broken
            </p>
            <p className=" text-sm text-gray-500 w-[300px] md:w-[400px]">
              The traditional processes around homeownership are opaque and
              stressful. Fees aren’t transparent and some are simply outrageous
              in size. Traditional mortgage lending is rife with unnecessary
              fees and slow, painful processes. It’s a system set up to benefit
              insiders — not you. Better.com CEO, Vishal Garg, set out to change
              that.
            </p>
            <button className="bg-[#017848] hover:bg-[#004733] p-3 text-white rounded-lg text-sm font-medium">
              Read Vishal's story
            </button>
          </div>
          <div className="md:w-1/2 md:mt-0 mt-10 flex justify-center ">
            <Image src={"/video.png"} alt="sad" height={500} width={500} />
          </div>
        </div>
      </div>
      <div className="mt-32 w-full  bg-[#017848]">
        <div className="container md:w-full w-[20rem] mx-auto md:px-52 text-white py-20 space-y-5">
          <p className="text-4xl  font-semibold ">How we’re changing things</p>
          <p className="text-sm">
            Homeownership is a huge part of our economy. Housing overall is a
            $33 trillion business, and mortgages account for $15 trillion. Yet
            home finance operates in the same way it has for decades — through
            opaque systems and expensive intermediaries whose interests are
            misaligned with consumers’.
          </p>
          <p className="text-sm">
            That’s why Better.com is redefining the homeownership process from
            the ground up. We’re using technology to make it faster and more
            efficient, and humans to help make it friendly and enjoyable.
          </p>
        </div>
      </div>
      <Backed />
      <Timeline />
      <div className="container mx-auto md:px-32">
        <Details />
        <Footer />
      </div>
    </section>
  );
};

export default page;
