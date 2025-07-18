import Image from "next/image";
import { Article } from "@/types/Article";
import { HeartIcon } from "@heroicons/react/16/solid";
import { ShareIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default async function HeadlinePostCardFeat(props: Article) {
  return (
    <div className="xl:flex xl:items-center xl:gap-10">
      <div className="">
        <Image
          src={props.image}
          alt="post-img"
          width={390}
          height={213}
          className="mb-[1.875rem] rounded-xl xl:mb-0"
        />
      </div>
      <div className="">
        <div className="mb-5">
          <h2 className="mb-2 font-semibold text-white xl:text-[24px]">
            {props.title}
          </h2>
          <p className="text-gray-60 text-base leading-6 font-normal tracking-tight xl:text-[18px]">
            {props.description}
          </p>
        </div>
        <div className="mb-6 flex w-[320px] justify-between text-[14px] xl:w-[360px] xl:text-[16px]">
          <div>
            <h3 className="text-gray-60">Category</h3>
            <p className="text-white">{props.category}</p>
          </div>
          <div>
            <h3 className="text-gray-60">Publication Date</h3>
            <p className="text-white">{props.date}</p>
          </div>
          <div>
            <h3 className="text-gray-60">Author</h3>
            <p className="text-white">{props.author}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex w-40 items-center justify-between">
            <button className="text-gray-60 hover:bg-dark-20 bg-dark-10 font-kumbh outline-dark-15 flex rounded-[100px] px-3.5 py-1.5 text-[14px] font-normal outline-1 hover:cursor-pointer">
              <HeartIcon className="mr-1 h-5 w-5" />
              {props.likes}
            </button>
            <button className="text-gray-60 hover:bg-dark-20 font-kumbh bg-dark-10 outline-dark-15 flex rounded-[100px] px-3.5 py-1.5 text-[14px] font-normal outline-1 hover:cursor-pointer">
              <ShareIcon className="fill-dark-40 mr-1 h-5 w-5" />
              {props.shares}
            </button>
          </div>
          <Link href={`/posts/${props.slug}`}>
            <button className="bg-dark-08 text-gray-60 outline-dark-15 font-inter hover:bg-dark-20 w-[140px] rounded-[8px] px-5 py-3.5 text-[14px] font-normal outline-1 hover:cursor-pointer xl:w-[115px]">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
