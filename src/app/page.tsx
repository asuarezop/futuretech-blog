import HeadlinePostCard from "@/components/headlines/HeadlinePostCard";
import { headlines } from "../mock-data/headlines";

export default function Home() {
  return (
    <>
      <div className="bg-dark-08 px-4 py-6">
        <h1 className="font-kumbh pb-3.5 text-[28px] font-medium text-white">
          Today&apos;s Headlines: Stay Informed
        </h1>
        <p className="text-gray-60 font-inter text-[14px] leading-6 font-normal">
          Explore the latest news from around the world. We bring you
          up-to-the-minute updates on the most significant events, trends, and
          stories. Discover the world through our news coverage.
        </p>
      </div>
      {headlines.map((headline) => (
        <HeadlinePostCard
          key={headline.title}
          image={headline.image}
          title={headline.title}
          description={headline.description}
          category={headline.category}
          date={headline.date}
          author={headline.author}
          likes={headline.likes}
          shares={headline.shares}
          slug={headline.slug}
          isFeatured={headline.isFeatured}
        />
      ))}
    </>
  );
}
