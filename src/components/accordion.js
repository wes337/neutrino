"use client";

import { Fragment, useState } from "react";
import { TbCheck, TbMinus, TbPlus } from "react-icons/tb";

const ITEMS = [
  {
    header: "Driven by science, backed by research",
    text: (
      <p>
        We&apos;ve built an in-house team of scientists and researchers to stay
        on top of the latest in nutrition and microbiome science. Every upgrade
        to Neutrino is grounded in real research, which includes our own
        clinical trials on the efficacy and impact of Neutrino.
      </p>
    ),
  },
  {
    header: "Certified safe for elite performance",
    text: (
      <p>
        Neutrino is certified by both the Cologne List® and Informed Choice -
        two of the most trusted global testing programmes. These certifications
        mean Neutrino is independently tested for banned substances and meets
        strict standards for quality and safety, making it a reliable choice for
        professional athletes and anyone who wants extra assurance from their
        supplements.
      </p>
    ),
  },
  {
    header: "Tested for what matters",
    text: (
      <>
        <p>
          Neutrino is regularly tested for hundreds of potential contaminants to
          make sure it&apos;s clean, safe, and consistent from batch to batch.
        </p>
        <p>We test for:</p>
        <ul className="pl-2">
          <li>- Heavy metals</li>
          <li>- Pesticides & herbicides</li>
          <li>- Microbial contaminants</li>
          <li>- Allergens</li>
          <li>- Residual solvents</li>
          <li>- Over 250 banned substances</li>
        </ul>
      </>
    ),
  },
  {
    header: "Ingredients your body recognizes",
    text: (
      <p>
        We select ingredients your body can actually absorb. That means potent
        bioavailable, vitamins, minerals and plant compounds, and rigorously
        sourced bacterial strains - all tested for quality, purity, and
        efficacy.
      </p>
    ),
  },
  {
    header: "Great taste, naturally",
    text: (
      <>
        <p>
          Neutrino is made to be part of your daily ritual - and that includes
          taste. Neutrino goes through third-party sensory testing to ensure
          taste and mouthfeel are exactly as expected. Our flavour comes from
          real food sources, never artificial additives, and is compatible with
          every lifestyle.
        </p>
        <p>Neutrino is:</p>
        <ul className="pl-2">
          <li>- Vegan</li>
          <li>- Gluten-free</li>
          <li>- Free from added sugar</li>
          <li>- Free from preservatives, artificial flavours or sweeteners</li>
          <li>- Compatible with a variety of dietary lifestyles</li>
        </ul>
      </>
    ),
  },
];

export default function Accordion() {
  const [currentIndex, setCurrentIndex] = useState(-1);

  return (
    <div className="flex flex-col">
      {ITEMS.map(({ header, text }, index) => {
        return (
          <Fragment key={index}>
            <button
              className="flex items-center py-4 border-t border-black/25 cursor-pointer md:text-lg md:py-6"
              onClick={() =>
                setCurrentIndex((currentIndex) =>
                  currentIndex === index ? -1 : index
                )
              }
            >
              <div className="text-black/50 mr-2">
                <TbCheck />
              </div>
              <div className="font-bold tracking-tight">{header}</div>
              <div className="ml-auto text-green-900">
                {currentIndex === index ? <TbMinus /> : <TbPlus />}
              </div>
            </button>
            <div
              className={`flex flex-col gap-2 transition-[max-height] duration-300 ease-in-out pb-4 ${
                currentIndex === index
                  ? "max-h-[800px]"
                  : "max-h-[0px] absolute overflow-hidden invisible"
              }`}
            >
              {text}
            </div>
            {index === ITEMS.length - 1 && (
              <hr className="border-0 border-t border-black/25" />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
