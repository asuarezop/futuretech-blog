import { Article } from "@/types/article";
import Image from "next/image";

export default function HeadlinePostCard(props: Article) {
  return (
    <section className="bg-dark-15 px-4 py-10">
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
      <div className="width-[320px] flex justify-between text-[14px]">
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
    </section>
  );
}
