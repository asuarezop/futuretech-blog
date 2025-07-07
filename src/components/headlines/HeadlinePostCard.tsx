import Image from "next/image";
import { Article } from "@/types/article";
import { HeartIcon } from "@heroicons/react/16/solid";
import { ShareIcon } from "@heroicons/react/16/solid";

export default function HeadlinePostCard(props: Article) {
  return (
    <section className="bg-dark-08 px-4 py-10">
      <div>
        <Image
          src={props.image}
          alt="post-img"
          width={390}
          height={213}
          className="mb-[1.875rem] rounded-xl"
        />
      </div>
      <div className="mb-5">
        <h2 className="mb-2 text-xl font-semibold text-white">{props.title}</h2>
        <p className="text-gray-60 text-base leading-6 font-normal tracking-tight">
          {props.description}
        </p>
      </div>
      <div className="mb-6 flex w-[320px] justify-between text-[14px]">
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
          <button className="text-gray-60 bg-dark-10 font-kumbh outline-dark-15 flex rounded-[100px] px-3.5 py-1.5 text-[14px] font-normal outline-1">
            <HeartIcon className="mr-1 h-5 w-5" />
            {props.likes}
          </button>
          <button className="text-gray-60 font-kumbh bg-dark-10 outline-dark-15 flex rounded-[100px] px-3.5 py-1.5 text-[14px] font-normal outline-1">
            <ShareIcon className="fill-dark-40 mr-1 h-5 w-5" />
            {props.shares}
          </button>
        </div>
        <button className="bg-dark-08 text-gray-60 outline-dark-15 font-inter w-[140px] rounded-[8px] px-5 py-3.5 text-[14px] font-normal outline-1">
          Read More
        </button>
      </div>
    </section>
  );
}
