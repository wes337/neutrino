import Image from "next/image";
import { TbArrowRight, TbPlus, TbStarFilled } from "react-icons/tb";
import Reviews from "@/components/reviews";
import CardList from "@/components/card-list";
import HeroQuotes from "@/components/hero-quotes";
import WelcomeKit from "@/components/welcome-kit";
import Accordion from "@/components/accordion";
import Customers from "@/components/customers";

export default function Home() {
  return (
    <div className="font-sans">
      <div className="relative">
        <div className="w-full h-auto">
          <video
            className="md:hidden min-h-[40vh] object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={`/videos/video.mp4`} type="video/mp4" />
          </video>

          <video
            className="hidden md:block md:max-h-[calc(100vh-90px)] md:object-cover md:w-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={`/videos/video-lg.mp4`} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col gap-4 p-5 text-center md:absolute md:top-[50%] md:left-0 md:translate-y-[-50%] md:text-left md:max-w-[75%] lg:left-[50%] lg:translate-x-[-75%] lg:max-w-[40vw] lg:gap-8">
          <h2 className="font-medium font-serif text-2xl md:text-white md:text-6xl md:font-medium lg:text-8xl">
            Your daily nutrient boost
          </h2>
          <p className="md:text-white md:text-xl lg:text-2xl">
            Neutrino&apos;s got everything you need to go all-inº - thanks to
            our science-backed formula packed with vitamins, minerals, and a
            blend of botanicals.
          </p>
          <button className="flex gap-2 w-full items-center justify-center m-auto cursor-pointer bg-green-900 hover:bg-green-500 text-white text-lg rounded-full p-3 md:bg-white md:text-black md:w-auto md:m-0 md:mr-auto md:px-6 lg:py-4 lg:text-xl">
            Start Your Neutrino Today <TbArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5 md:flex-row md:p-8 md:gap-4 md:max-w-[1400px] md:mx-auto">
        <div className="flex items-center justify-center w-full gap-2 text-xs md:flex-col md:text-lg">
          <div className="flex items-center text-green-500">
            <TbStarFilled size={12} />
            <TbStarFilled size={12} />
            <TbStarFilled size={12} />
            <TbStarFilled size={12} />
            <TbStarFilled size={12} />
          </div>
          <span>50,000+ Verified 5-star reviews*</span>
        </div>
        <div className="md:w-full">
          <Reviews />
        </div>
      </div>
      <div className="md:flex lg:max-w-[1400px] p-5 py-8 lg:m-auto md:justify-between">
        <div className="flex flex-col gap-2 md:max-w-2xl md:mx-auto">
          <h2 className="font-medium tracking-tight text-3xl leading-8 md:text-6xl md:leading-16">
            Your day, upgraded - every day
          </h2>
          <p className="text-lg md:pt-4 md:max-w-lg">
            70+ optimized ingredients. 5 new bacterial strains. 4 clinical
            studies. 1 scoop a day for your best possible start - now better
            than ever with our latest upgrade.
          </p>
        </div>
        <div className="pt-8 md:pt-0 md:mx-auto">
          <CardList />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-5 py-8 md:py-12 md:max-w-[1400px] md:mx-auto md:gap-8">
        <h2 className="font-medium tracking-tight text-3xl leading-8 md:text-6xl md:leading-16 md:max-w-2xl">
          Recommended by experts around the world
        </h2>
        <HeroQuotes />
      </div>
      <div className="bg-neutral-100 p-8 md:mt-12">
        <WelcomeKit />
      </div>
      <div className="md:flex items-center">
        <Image
          className="max-h-[50vh] object-cover md:max-h-full md:max-w-[50vw] md:order-2"
          src={`/images/tested.png`}
          width={1450}
          height={1450}
          alt=""
        />
        <div className="w-full md:max-w-[700px] md:ml-auto  md:h-[100vh] md:flex md:flex-col md:justify-center md:pr-12">
          <div className="flex flex-col gap-4 p-5 pt-8 md:pt-5 pb-0 md:pl-0 md:gap-8">
            <h2 className="font-medium tracking-tight text-3xl leading-8 md:text-6xl md:leading-16 md:max-w-2xl">
              Tested for those who test themselves
            </h2>
            <p className="text-justify text-lg">
              We set the bar for quality - and keep raising it. From research
              and formulation to sourcing, manufacturing, and testing, every
              scoop of Neutrino is backed by rigorous protocols to ensure
              it&apos;s safe, effective, and consistently high quality.
            </p>
            <button className="flex gap-2 w-full items-center justify-center m-auto cursor-pointer bg-white border border-green-900 text-green-900 hover:bg-green-500 hover:text-black hover:border-green-500 text-lg md:text-xl rounded-full p-3 md:p-4">
              <TbPlus size={24} /> View Supplement Facts
            </button>
          </div>
          <div className="p-5 md:h-[25vh]">
            <Accordion />
          </div>
        </div>
      </div>
      <div className="md:flex md:max-w-[1400px] md:mx-auto md:py-12">
        <div className="p-8 pb-0 md:order-2 md:max-w-[600px] md:ml-auto">
          <Image
            className="w-full h-full"
            src={`/images/research.webp`}
            width={750}
            height={750}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 p-5 md:max-w-xl md:justify-center">
          <h3 className="font-medium tracking-tight text-xl leading-8 text-green-900 md:text-4xl md:leading-10">
            15 years of research and 4 clinical trials
          </h3>
          <p className="text-lg text-green-900 mb-2">
            In an industry where few put their supplements through scientific
            research, we invest millions in the gold standard - randomized,
            placebo-controlled, double- or triple-blind clinical trials.
          </p>
          <button className="flex gap-2 w-full md:w-[256px] items-center justify-center cursor-pointer m-auto md:m-0 bg-white border border-green-900 text-green-900 hover:bg-green-500 hover:text-black hover:border-green-500 text-md rounded-full p-3">
            Learn More <TbArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="p-5 pb-12 mt-4 bg-gray-100">
        <div className="p-4 flex flex-col gap-4 md:max-w-[1400px] md:mx-auto">
          <h2 className="font-medium tracking-tight text-3xl leading-8 md:text-6xl md:leading-16 md:pt-16">
            Real people, real results: What our customers say*
          </h2>
          <p className="md:text-lg md:pb-6">
            Results from a survey of 527 verified customers who have been taking
            Neutrino for at least 12 days.↡
          </p>
        </div>
        <Customers />
      </div>
      <div className="md:flex md:max-w-[1400px] md:mx-auto md:py-12 md:mt-8 md:gap-12">
        <Image
          className="h-[375px] md:h-full md:max-w-[600px] object-cover rounded-md"
          src={"/images/formula.webp"}
          alt=""
          width={750}
          height={938}
        />
        <div className="p-5 py-8 flex flex-col gap-4">
          <h2 className="font-medium tracking-tight text-3xl leading-8 md:text-6xl md:leading-16 md:pt-16">
            Formulated for your body. Clinically backed.
          </h2>
          <p className="text-lg md:text-xl">
            Our doctors, scientists, and researchers worked with third-party
            experts to study the Neutrino Next Gen formula. Here is what they
            found:
          </p>
          <div className="font-mono text-sm border-b border-black pb-2 leading-4 md:text-lg md:leading-8 md:mt-8">
            IMPROVES KEY NUTRIENT LEVELS WITHIN 3 MONTHS†
          </div>
          <div className="md:flex md:justify-between">
            <div className="flex flex-col gap-4">
              <div className="text-6xl md:text-8xl">70%</div>
              <div className="font-bold tracking-tighter text-md md:text-lg">
                of subjects had an increase in RBC folate level†
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-6xl md:text-8xl">73%</div>
              <div className="font-bold tracking-tighter text-md md:text-lg">
                of subjects saw an increase in vitamin C levels1
              </div>
            </div>
          </div>
          <div className="font-mono text-sm border-b border-black pb-2 leading-4 md:text-lg md:leading-8 md:mt-8">
            CLINICALLY SHOWN TO ENRICH THE GUT MICROBIOME†
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <div className="text-6xl md:text-8xl">10x</div>
            <div className="font-bold tracking-tighter text-md md:text-lg">
              increase in healthy bacteria in the gut†
            </div>
          </div>
          <button className="flex w-full md:w-[164px] text-center justify-center align-center gap-2 cursor-pointer mr-auto md:m-0 bg-white border border-green-900 text-green-900 hover:bg-green-500 hover:text-black hover:border-green-500 text-md rounded-full p-3 md:text-lg">
            See Our Studies
          </button>
          <div className="text-xs italic font-light tracking-tighter text-black/50">
            †Based on clinical studies in healthy adults ages 18-59, evaluating
            nutrient biomarkers, microbiome shifts, and bioavailability. Study
            designs and durations varied. Please see neutrino.com/science for
            additional information.
          </div>
        </div>
      </div>
    </div>
  );
}
