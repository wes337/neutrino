import Link from "next/link";
import { TbMenu2 } from "react-icons/tb";

export default function TopBar() {
  return (
    <div className="font-sans sticky top-0 left-0 w-full h-[64px] md:h-[90px] p-5 border-b border-black/25 bg-white z-10 text-sm md:text-lg">
      <div className="flex items-center h-full w-full md:max-w-[2000px] md:mx-auto">
        <Link href="/">Neutrino</Link>
        <div className="hidden md:flex md:ml-auto md:gap-4">
          <Link
            className="w-[120px] text-center border-b-2 border-transparent hover:border-green-500"
            href="/about"
          >
            About
          </Link>
          <Link
            className="w-[120px] text-center border-b-2 border-transparent hover:border-green-500"
            href="/ingredients"
          >
            Ingredients
          </Link>
          <Link
            className="w-[120px] text-center border-b-2 border-transparent hover:border-green-500"
            href="/research"
          >
            Research
          </Link>
        </div>
        <div className="flex ml-auto md:ml-4 gap-4">
          <button className="cursor-pointer bg-green-500 rounded-md py-2 px-3 uppercase font-medium hover:bg-teal-900 hover:text-white">
            Get Neutrino
          </button>
          <button className="flex items-center gap-2 uppercase font-medium md:hidden">
            Menu <TbMenu2 />
          </button>
        </div>
      </div>
    </div>
  );
}
