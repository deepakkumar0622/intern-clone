"use client";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Answer = () => {
  const [button, setButton] = useState<number>(0);

  const butt_value: string[] = ["Our products", "Calculators", "Guides & FAQs"];

  type Product = {
    title: string;
    img: string;
    desc?: string;
  };

  const productsData: Product[] = [
    {
      title: "Buying your first home with Better",
      img: "/first-home.png",
    },
    {
      title: "One Day Mortgage",
      desc: "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.1",
      img: "/one-day-mortgage.png",
    },
    {
      title: "Better HELOC",
      desc: "Introducing One Day HELOC™-your express lane to getting cash from your home with our Home Equity Line of Credit2. Access up to 90% of your home equity as cash in as little as 7 days.3",
      img: "/better-heloc.png",
    },
    {
      title: "Insurance",
      img: "/insurance.png",
    },
  ];
  const calcData: Product[] = [
    {
      title: "Mortgage calculator",
      img: "/calc-1.png",
    },
    {
      title: "Affordability calculator",
      desc: "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.",
      img: "/calc-2.png",
    },
    {
      title: "HELOC calculator",
      desc: "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
      img: "/calc-3.png",
    },
    {
      title: "Fixed-rate loan comparison calculator",
      img: "/calc-4.png",
    },
  ];
  const faqData: Product[] = [
    {
      title: "What is a good debt-to- income ratio for a home loan?",
      img: "/faq-1.png",
    },
    {
      title: "Buying a house without realtor",
      desc: "Thinking about buying a house without a real estate agent? Read this first.",
      img: "/faq-2.png",
    },
    {
      title: "Timeline for homebuying process",
      desc: "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
      img: "/faq-3.png",
    },
    {
      title: "Conventional loan requirements",
      img: "/faq-4.png",
    },
  ];

  console.log(productsData[0].title);

  return (
    <div className="my-14 md:mx-0 mx-3">
      <div>
        <div className="flex md:flex-row flex-col  justify-between  items-center">
          <h1 className="text-5xl  font-medium">
            Got questions?
            <br /> We've got answers
          </h1>
          <div className="flex gap-5">
            {butt_value.map((v, i) => (
              <button
                key={i}
                className={`${button === i ? "active" : " "} button`}
                onClick={() => setButton(i)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="p-10 space-y-10">
            <div className="flex flex-col md:flex-row gap-5">
              {button == 1 && calcData[0] ? (
                <Link href={"/mortage-calculator"}>
                  <div className="bg-[#f0f7f1] p-10 space-y-5  rounded-lg">
                    <h2 className="text-xl font-medium ">
                      {calcData[0].title}
                    </h2>
                    <ArrowRight
                      size={40}
                      className="border text-[#004733] p-2  border-gray-300 rounded-full"
                    />
                    <Image
                      src={calcData[0].img}
                      alt="asd"
                      width={350}
                      height={100}
                      className="rounded-xl"
                    />
                  </div>
                </Link>
              ) : (
                <div className="bg-[#f0f7f1] p-10 space-y-5  rounded-lg">
                  <h2 className="text-xl font-medium ">
                    {button === 0
                      ? productsData[0].title
                      : button === 1
                      ? calcData[0].title
                      : faqData[0].title}
                  </h2>
                  <ArrowRight
                    size={40}
                    className="border text-[#004733] p-2  border-gray-300 rounded-full"
                  />
                  <Image
                    src={
                      button === 0
                        ? productsData[0].img
                        : button === 1
                        ? calcData[0].img
                        : faqData[0].img
                    }
                    alt="asd"
                    width={350}
                    height={100}
                    className="rounded-xl"
                  />
                </div>
              )}
              <div className="bg-[#f0f7f1] flex gap-3 md:flex-row flex-col justify-between p-10 w-full  md:w-[70%] rounded-lg">
                <div className="space-y-5 w-full md:w-[70%]">
                  <h2 className="text-xl font-medium ">
                    {button === 0
                      ? productsData[1].title
                      : button === 1
                      ? calcData[1].title
                      : faqData[1].title}
                  </h2>
                  <p className="text-xs md:block hidden font-light">
                    {button === 0
                      ? productsData[1].desc
                      : button === 1
                      ? calcData[1].desc
                      : faqData[1].desc}
                  </p>
                  <ArrowRight
                    size={40}
                    className="border text-[#004733] p-2  border-gray-300 rounded-full"
                  />
                </div>
                <div>
                  <Image
                    src={
                      button === 0
                        ? productsData[1].img
                        : button === 1
                        ? calcData[1].img
                        : faqData[1].img
                    }
                    alt="asd"
                    width={250}
                    height={200}
                    className="rounded-xl h-full md:h-[250px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-5">
              <div className="bg-[#f0f7f1] flex flex-col md:flex-row gap-5 justify-between p-10  w-full md:w-[70%] rounded-lg">
                <div>
                  <Image
                    src={
                      button === 0
                        ? productsData[2].img
                        : button === 1
                        ? calcData[2].img
                        : faqData[2].img
                    }
                    alt="asd"
                    width={250}
                    height={200}
                    className="rounded-xl  h-full md:h-[250px]"
                  />
                </div>
                <div className="space-y-5 w-[70%]">
                  <h2 className="text-xl font-medium ">
                    {button === 0
                      ? productsData[2].title
                      : button === 1
                      ? calcData[2].title
                      : faqData[2].title}
                  </h2>
                  <p className="text-xs md:block hidden font-light">
                    {button === 0
                      ? productsData[2].desc
                      : button === 1
                      ? calcData[2].desc
                      : faqData[2].desc}
                  </p>
                  <ArrowRight
                    size={40}
                    className="border text-[#004733] p-2  border-gray-300 rounded-full"
                  />
                </div>
              </div>
              <div className="bg-[#f0f7f1] p-10 space-y-5  rounded-lg">
                <h2 className="text-xl font-medium ">
                  {button === 0
                    ? productsData[3].title
                    : button === 1
                    ? calcData[3].title
                    : faqData[3].title}
                </h2>
                <ArrowRight
                  size={40}
                  className="border text-[#004733] p-2  border-gray-300 rounded-full"
                />
                <Image
                  src={
                    button === 0
                      ? productsData[3].img
                      : button === 1
                      ? calcData[3].img
                      : faqData[3].img
                  }
                  alt="asd"
                  width={350}
                  height={100}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
