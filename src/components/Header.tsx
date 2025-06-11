import Image from "next/image";
import FutureTechLogo from "../../public/images/Logo.svg";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function Header() {
  return (
    <header>
      <div className="bg-dark-08 flex justify-center-safe gap-2.5 px-6 pt-10 pb-3.5">
        <h1 className="font-inter text-gray-60 w-[312px] text-[12px]">
          Subscribe to our Newsletter For Blogs and Resources
        </h1>
        <ArrowUpRightIcon className="fill-yellow-55 h-5 w-5" />
      </div>

      <div className="bg-dark-10 flex justify-between border-y-1 px-4 py-5">
        <Image src={FutureTechLogo} alt="FutureTech Blog logo" />
        <button className="bg-yellow-55 rounded-[6px] px-2.5 py-2.5 text-[14px]">
          Contact Us
        </button>
      </div>
    </header>
  );
}
