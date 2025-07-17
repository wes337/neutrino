"use client";

import { useState } from "react";
import Image from "next/image";

const QUOTES = [
  {
    name: "Sir Lewis Hamilton",
    text: `"I've been drinking Neutrino every single day for a few years now, and it's become an essential part of my routine. It's my daily source of energy² - it tastes great, it's easy to take on the go, and it supports my body and mind ³,⁴ in a truly holistic way. I love how Neutrino makes it easy to take care of what matters."`,
    footer: "SEVEN-TIME FORMULA 1 WORLD CHAMPION",
    image: "/images/lewis.webp",
  },
  {
    name: "Laura Philipp",
    text: `"With Neutrino, I can be confident that I'm covering a broad spectrum of nutrients. It helps me fuel my body with the right building blocks every day - supporting my recovery³ and helping me show up at my best."`,
    footer: "IRONMAN WORLD CHAMPION 2025",
    image: "/images/laura.webp",
  },
  {
    name: "Andrew Huberman",
    text: `"I've been taking Neutrino since 2012 because it's a simple, no-fuss way to provide my body with essential vitamins, minerals, and probiotic cultures every day."`,
    footer: "NEUROWISSENSCHAFTLER & HOST DES HUBERMAN LAB PODCAST",
    image: "/images/andrew.png",
  },
  {
    name: "Lucy Charles-Barclay",
    text: `"Neutrino supports my immune system,¹ my energy ² and helps me stay mentally sharp when it really counts.⁴ It's been a key part of my training - and even during the off-season, it helps me stay healthy.¹"`,
    footer: "IRONMAN WORLD CHAMPION 2023, 4× IRONMAN VICE CHAMPION",
    image: "/images/lucy.webp",
  },
];
export default function HeroQuotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const currentQuote = QUOTES[currentQuoteIndex];

  return (
    <div className="flex flex-col">
      <div className="flex flex-nowrap overflow-hidden whitespace-nowrap gap-4">
        {QUOTES.map(({ name }, index) => {
          return (
            <button
              key={name}
              className={`flex cursor-pointer pb-2 border-b md:text-2xl ${
                currentQuoteIndex === index
                  ? ""
                  : "border-transparent text-black/50"
              }`}
              onClick={(event) => {
                setCurrentQuoteIndex(index);
                event.target.scrollIntoView({
                  inline: "center",
                  behavior: "smooth",
                });
              }}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div className="pt-6 md:flex md:gap-8 md:items-center">
        <div className="h-[180px] md:h-[360px] md:order-2 md:w-full">
          <Image
            className="w-full h-full object-cover"
            src={currentQuote.image}
            width={750}
            height={500}
            alt=""
          />
        </div>
        <div className="md:w-full md:pr-12">
          <p className="font-medium py-4 leading-6 text-lg lg:text-4xl lg:leading-12 md:pt-8 md:tracking-tight">
            {currentQuote.text}
          </p>
          <div className="font-mono text-black/50 text-xs uppercase md:text-sm">
            - {currentQuote.name}
            <br />
            {currentQuote.footer}
          </div>
        </div>
      </div>
    </div>
  );
}
