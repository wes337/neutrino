import Image from "next/image";
import { TbCheck } from "react-icons/tb";

export default function WelcomeKit() {
  return (
    <div className="flex md:max-w-[1400px] md:mx-auto md:w-full md:gap-12 md:py-12">
      <div className="flex flex-col gap-4">
        <h2 className="font-medium tracking-tight text-3xl leading-8 md:text-6xl md:leading-16">
          Get started with your Neutrino Welcome Kit**
        </h2>
        <div className="flex p-4">
          <Image
            className="w-full h-full md:hidden"
            src={`/images/welcome-kit.webp`}
            width={2000}
            height={2000}
            alt=""
          />
        </div>
        <Row
          text="Neutrino Pouch (30 Servings)"
          subtext="2,90€/serving"
          price="87€"
        />
        <hr className="border-0 border-t border-black/10" />
        <div className="font-mono text-black/50 text-xs uppercase tracking-wide">
          First time purchase includes:
        </div>
        <Row
          text="Welcome Kit"
          subtext="Neutrino Shaker, Scoop, and Canister"
          price="Free"
          markdownPrice="28€"
        />
        <Row
          text="Neutrino Travel Packs (10 count)"
          subtext="10 individual servings"
          price="Free"
          markdownPrice="34€"
        />
        <Row
          text="Free Delivery"
          subtext="Free delivery with every purchase"
          price="Free"
        />
        <hr className="border-0 border-t border-black/10" />
        <div className="flex md:text-lg">
          <div className="font-bold">Total</div>
          <div className="flex ml-auto">
            <div className="font-bold">87€</div>
            <div className="font-medium text-black/50 line-through ml-2">
              149€
            </div>
          </div>
        </div>
        <button className="cursor-pointer w-full m-auto bg-green-900 text-white text-lg rounded-full p-3 mt-3 md:p-4 md:mt-6 md:mb-0 hover:bg-green-500">
          Buy Neutrino Now!
        </button>
        <div className="flex flex-col gap-2 md:flex-row md:justify-center md:items-start md:mb-auto">
          <div className="flex items-center justify-center text-center gap-2 text-sm">
            <TbCheck className="text-black/50" />
            Update or cancel anytime
          </div>
          <div className="flex items-center justify-center text-center gap-2 text-sm">
            <TbCheck className="text-black/50" />
            30 days money-back guarantee
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-full md:max-w-[800px] md:ml-12">
        <Image
          className="w-full h-full object-contain"
          src={`/images/welcome-kit.webp`}
          width={2000}
          height={2000}
          alt=""
        />
      </div>
    </div>
  );
}

function Row({ text, subtext, price, markdownPrice }) {
  return (
    <div className="flex">
      <div>
        <h5 className="font-bold tracking-tight md:text-lg">{text}</h5>
        <p className="text-sm text-black/50 md:text-md">{subtext}</p>
      </div>
      <div className="flex ml-auto md:text-lg">
        <div className="font-bold">{price}</div>
        {markdownPrice && (
          <div className="font-medium text-black/50 line-through ml-2">
            {markdownPrice}
          </div>
        )}
      </div>
    </div>
  );
}
