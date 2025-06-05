import Image from "next/image";
import FutureTechLogo from "../../public/images/Logo.png";
import ArrowUpRight from "../../public/icons/arrow-up-right.svg";

export default function Header() {
  return (
    <header>
      <div className="bg-dark-08 flex justify-center-safe gap-2.5 px-6 pt-10 pb-3.5">
        <h1 className="font-inter text-gray-60 w-[312px] text-[12px]">
          Subscribe to our Newsletter For Blogs and Resources
        </h1>
        <Image src={ArrowUpRight} width={20} height={20} alt="Up arrow icon" />
      </div>

      <div className="bg-dark-10 flex justify-center border-y-1 px-4 py-5">
        <Image
          src={FutureTechLogo}
          width={125}
          height={35}
          alt="FutureTech Blog logo"
        />
      </div>
      <div></div>
    </header>
  );
}
