"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { TbCheck, TbMinus, TbPlus } from "react-icons/tb";

const CUSTOMERS = [
  {
    name: "Harry",
    text: (
      <p>
        "First positive effects: I no longer feel tired during the day and I
        feel focused and concentrated." <sup>2,4</sup>
      </p>
    ),
    image: "/images/customer-1.webp",
  },
  {
    name: "Anne",
    text: (
      <p>
        "I see a change in my energy, my mood, focus, amount of food needed."{" "}
        <sup>2,4,8,7</sup>
      </p>
    ),
    image: "/images/customer-2.webp",
  },
  {
    name: "Lucian",
    text: (
      <p>
        "Seems promising, but it's been only a few days since I am taking it."{" "}
        <sup>2</sup>
      </p>
    ),
    image: "/images/customer-3.webp",
  },
  {
    name: "Mina",
    text: (
      <p>
        "I feel good and feel that I'm starting my day with a better and
        healthier habit." <sup>1,2</sup>
      </p>
    ),
    image: "/images/customer-4.webp",
  },
];

export default function Customers() {
  const [currentCustomerIndex, setCurrentCustomerIndex] = useState(0);

  const currentCustomer = CUSTOMERS[currentCustomerIndex];

  return (
    <>
      <div className="flex flex-col md:hidden">
        <div className="flex justify-evenly flex-nowrap overflow-hidden whitespace-nowrap gap-4 md:hidden">
          {CUSTOMERS.map(({ image }, index) => {
            return (
              <button
                key={index}
                className={`w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] border-b-2 ${
                  currentCustomerIndex == index
                    ? "border-green-700"
                    : "border-transparent"
                }`}
                onClick={() => setCurrentCustomerIndex(index)}
              >
                <Image
                  className="w-full h-[90%] object-cover"
                  src={image}
                  alt=""
                  width={72}
                  height={72}
                />
              </button>
            );
          })}
        </div>
        <div className="flex flex-col p-4 gap-4 md:hidden">
          <Image
            className="w-full h-[300px] object-cover rounded-sm"
            src={currentCustomer.image}
            alt=""
            width={300}
            height={300}
          />
          <div className="text-sm text-black/50">- {currentCustomer.name}</div>
          <div>{currentCustomer.text}</div>
        </div>
        <div className="p-4 py-2 text-xs italic tracking-tight text-black/50">
          Note: Images shown are for illustration purposes only and do not
          depict actual customers.*
        </div>
      </div>
      <div className="hidden md:block md:max-w-[1400px] md:mx-auto">
        <div className="flex items-center justify-between px-4">
          {CUSTOMERS.map(({ name, text, image }) => {
            return (
              <div key={name} className="flex flex-col gap-4 w-[300px]">
                <Image
                  className="w-[300px] h-[300px] object-cover rounded-md"
                  src={image}
                  alt=""
                  width={300}
                  height={300}
                />
                <div className="text-sm text-black/50">
                  - {currentCustomer.name}
                </div>
                <div>{currentCustomer.text}</div>
              </div>
            );
          })}
        </div>
        <div className="p-4 pt-12 text-xs italic tracking-tight text-black/50 font-light">
          Note: Images shown are for illustration purposes only and do not
          depict actual customers.*
        </div>
      </div>
    </>
  );
}
