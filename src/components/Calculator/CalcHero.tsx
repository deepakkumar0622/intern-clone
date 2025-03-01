"use client";
import React, { useState } from "react";

const CalcHero = () => {
  const minValue: number = 100000;
  const maxValue: number = 30000000;

  const [value, setValue] = useState<number>(minValue);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Number(e.target.value);
    if (newValue < minValue) newValue = minValue;
    if (newValue > maxValue) newValue = maxValue;
    setValue(newValue);
  };

  const interestRate = 7; // 7% annual interest
  const loanTerm = 30; // 30 years

  // Mortgage Calculation Formula
  const calculateMortgage = (P: number, r: number, n: number): number => {
    r = r / 100 / 12; // Monthly interest rate
    n = n * 12; // Convert years to months

    return (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
  };

  const monthlyPayment = calculateMortgage(value, interestRate, loanTerm);

  return (
    <div className="relative top-24 container ">
      <div className="bg-[#f0f7f1] min-h-[70vh] pt-20 md:px-32">
        <div>
          <h1 className="text-4xl font-semibold">Mortgage calculator</h1>
          <p className="w-[50%] mt-5 text-[12px] text-gray-500">
            Our mortgage calculator includes key factors like homeowners
            association fees, property taxes, and private mortgage insurance
            (PMI). Get the whole picture and calculate your total monthly
            payment.
          </p>
        </div>
        <div className="mt-10 flex justify-between items-center">
          <div className="flex flex-col gap-2 w-[20%]">
            <label>Home price </label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2  text-5xl">
                $
              </span>
              <input
                type="text"
                min={minValue}
                max={maxValue}
                step={1000}
                value={value.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
                onChange={handleInputChange}
                className="border rounded-lg text-5xl font-medium w-[300px] pl-5 text-center"
              />
            </div>
          </div>
          <div className="">
            <p>Monthly payment</p>
            <p className="text-5xl font-semibold mt-3">
              {" "}
              $
              {monthlyPayment.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
              /mo
            </p>
          </div>
          <button className="bg-[#017848] hover:bg-[#004733] p-3 text-white rounded-lg text-sm font-medium">
            Get pre-approved
          </button>
        </div>
        <div className="px-5">
          <input
            type="range"
            min={minValue}
            max={maxValue}
            step={1000}
            value={value}
            onChange={handleSliderChange}
            className="w-full mt-10 "
          />
        </div>
        <div className="flex justify-between mt-10">
          <input
            type="text"
            className="border rounded-lg text-xl p-2 font-medium w-[300px] pl-5 text-center"
          />
          <input
            type="text"
            className="border rounded-lg text-xl p-2 font-medium w-[300px] pl-5 text-center"
          />
          <input
            type="text"
            className="border rounded-lg text-xl p-2 font-medium w-[300px] pl-5 text-center"
          />
          <input
            type="text"
            className="border rounded-lg text-xl p-2 font-medium w-[300px] pl-5 text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default CalcHero;
