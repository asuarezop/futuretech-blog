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
          className="mb-[30px] rounded-xl"
        />
      </div>
      <div>
        <h2 className="mb-2 text-xl font-semibold text-white">{props.title}</h2>
        <p className="text-gray-60 text-base leading-6 font-normal tracking-tight">
          {props.description}
        </p>
      </div>
    </section>
  );
}
