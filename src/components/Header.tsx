import Image from "next/image";
import FutureTechLogo from "../../public/images/Logo.svg";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="bg-dark-08 3xl:py-4 flex justify-center gap-2.5 px-6 pt-10 pb-3.5 xl:gap-0 xl:px-6 xl:py-3">
        <p className="font-inter text-gray-60 text-[12px] xl:mr-2 xl:text-[14px] 2xl:text-[18px]">
          Subscribe to our Newsletter For Blogs and Resources
        </p>
        <ArrowUpRightIcon className="fill-yellow-55 h-5 w-5 2xl:h-8 2xl:w-6" />
      </div>

      <div className="bg-dark-10 flex justify-between border-y-1 px-4 py-5 xl:px-20 xl:py-5 2xl:px-40 2xl:py-6">
        <Image
          src={FutureTechLogo}
          alt="FutureTech Blog logo"
          className="2xl:h-[50px] 2xl:w-[179px]"
        />
        <Link href="/contact-us">
          <button className="bg-yellow-55 hover:bg-yellow-70 rounded-[6px] px-2.5 py-2.5 text-[14px] hover:cursor-pointer 2xl:h-[55px] 2xl:w-[137px] 2xl:text-[18px]">
            Contact Us
          </button>
        </Link>
      </div>
    </header>
  );
}
