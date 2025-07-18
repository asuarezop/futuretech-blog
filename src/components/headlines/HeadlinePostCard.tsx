import Image from "next/image";
import { Article } from "@/types/Article";
import { HeartIcon } from "@heroicons/react/16/solid";
import { ShareIcon } from "@heroicons/react/16/solid";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default async function HeadlinePostCard(props: Article) {
  return (
    <>
      <div className={`xl:py-0 ${props.index === 2 ? "py-[30px]" : ""}`}>
        <div className="relative mb-4 h-[185px] w-[358px] xl:mb-5 xl:w-[407px]">
          <Image
            src={props.image}
            alt="post-img"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[10px]"
          />
        </div>

        <div className="w-[358px] xl:w-[407px]">
          <h2 className="mb-1 text-[16px] font-semibold text-white">
            {props.title}
          </h2>
        </div>
        <div className="mb-3 w-[320px]">
          <div>
            <p className="text-gray-60 text-[14px] font-normal xl:text-[16px]">
              {props.category}
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 xl:w-[407px]">
          <div className="flex w-[155px] items-center xl:w-[207px]">
            <button className="text-gray-60 hover:bg-dark-20 bg-dark-10 font-kumbh outline-dark-15 mr-2 flex rounded-[100px] px-3.5 py-1.5 text-[14px] font-normal outline-1 hover:cursor-pointer">
              <HeartIcon className="mr-1 h-5 w-5" />
              {props.likes}
            </button>
            <button className="text-gray-60 hover:bg-dark-20 font-kumbh bg-dark-10 outline-dark-15 flex rounded-[100px] px-3.5 py-1.5 text-[14px] font-normal outline-1 hover:cursor-pointer">
              <ShareIcon className="fill-dark-40 mr-1 h-5 w-5" />
              {props.shares}
            </button>
          </div>
          <Link className="" href={`/posts/${props.slug}`}>
            <button className="bg-dark-08 text-gray-60 outline-dark-15 font-inter hover:bg-dark-20 flex w-[135px] justify-between rounded-[8px] px-5 py-3.5 text-[14px] font-normal outline-1 hover:cursor-pointer xl:w-[201px] xl:px-13">
              Read More
              <ArrowUpRightIcon className="fill-yellow-55 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
