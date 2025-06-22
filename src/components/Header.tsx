import Image from "next/image";
import FutureTechLogo from "../../public/images/Logo.svg";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="bg-dark-08 3xl:py-4 flex justify-center gap-2.5 px-6 pt-10 pb-3.5 xl:gap-0 xl:px-6 xl:py-3">
        <p className="font-inter text-gray-60 3xl:text-lg 3xl:w-[458px] w-[312px] text-[12px]">
          Subscribe to our Newsletter For Blogs and Resources
        </p>
        <ArrowUpRightIcon className="fill-yellow-55 3xl:w-6 3xl:h-8 h-5 w-5" />
      </div>

      <div className="bg-dark-10 flex justify-between border-y-1 px-4 py-5 xl:px-20 xl:py-5">
        <Image src={FutureTechLogo} alt="FutureTech Blog logo" />
        <Link href="/contact-us">
          <button className="bg-yellow-55 hover:bg-yellow-70 rounded-[6px] px-2.5 py-2.5 text-[14px] hover:cursor-pointer">
            Contact Us
          </button>
        </Link>
      </div>
    </header>
  );
}
