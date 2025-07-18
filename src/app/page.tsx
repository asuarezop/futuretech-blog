import HeadlinePostCard from "@/components/headlines/HeadlinePostCard";
import HeadlinePostCardFeat from "@/components/headlines/HeadlinePostCardFeat";
import { headlines } from "../mock-data/headlines";

export default function Home() {
  return (
    <>
      <div className="bg-dark-08 px-4 py-6 xl:flex xl:flex-nowrap xl:items-end xl:px-20 xl:py-14">
        <div>
          <h1 className="font-kumbh text-[28px] font-medium text-white xl:mb-5 xl:pb-0 xl:text-[55px] xl:leading-none">
            Today&apos;s Headlines: Stay
          </h1>
          <div className="xl:flex xl:items-center xl:gap-[60px]">
            <p className="font-kumbh mb-3.5 text-[28px] font-medium text-white xl:pb-0 xl:text-[55px] xl:leading-none">
              Informed
            </p>
            <p className="text-gray-60 font-inter text-[14px] leading-6 font-normal xl:text-[16px]">
              Explore the latest news from around the world. We bring you
              up-to-the-minute updates on the most significant events, trends,
              and stories. Discover the world through our news coverage.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-dark-08 border-dark-15 gap-[30px] border-y-1 px-4 py-10 xl:px-20 xl:py-15">
        <HeadlinePostCardFeat
          image={headlines[0].image}
          title={headlines[0].title}
          description={headlines[0].description}
          category={headlines[0].category}
          date={headlines[0].date}
          author={headlines[0].author}
          likes={headlines[0].likes}
          shares={headlines[0].shares}
          slug={headlines[0].slug}
        />
      </section>
      <section className="bg-dark-08 gap-[30px] px-4 py-10 xl:grid xl:grid-cols-3 xl:px-20 xl:py-15">
        {headlines.map(
          (headline, index) =>
            index !== 0 && (
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
                index={headline.index}
              />
            ),
        )}
      </section>
    </>
  );
}
