import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      year: "2014",
      text: "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
    },
    {
      year: "2015",
      text: "Better.com expands its operations, launching new services to improve the homebuying experience with technology-driven solutions.",
    },
    {
      year: "2016",
      text: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
    },
    {
      year: "2017",
      text: "Better expands into the real estate market with Better Real Estate.",
    },
    {
      year: "2018",
      text: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
    },
    {
      year: "2019",
      text: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
    },
    {
      year: "2020",
      text: "Better acquires Trussle — The UK’s most innovative online mortgage broker.",
    },
    {
      year: "2021",
      text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
    },
    {
      year: "2022",
      text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
    },
    {
      year: "2023",
      text: "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
    },
    {
      year: "2024",
      text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
    },
    {
      year: "Today",
      text: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
    },
  ];

  return (
    <div className="bg-[#fffdfa] py-20 px-6">
      <h2 className="text-center text-3xl font-semibold mb-10">
        Company timeline
      </h2>

      <div className="relative max-w-4xl  mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1 w-1 bg-gray-300 h-full"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center w-full mb-10 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`absolute bg-green-700 text-white text-lg font-semibold px-6 py-2 rounded-full z-10
              ${
                index % 2 === 0
                  ? "right-1/2 translate-x-1/2"
                  : "left-1/2 -translate-x-1/2"
              }`}
            >
              {item.year}
            </div>

            <div
              className={`bg-[#dfe0dc] p-6 rounded-lg shadow-md md:w-96 w-32 text-gray-700 ${
                index % 2 === 0 ? "ml-6" : "mr-6"
              }`}
            >
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
