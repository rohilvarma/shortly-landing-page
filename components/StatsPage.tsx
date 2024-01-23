import { statsContent, cardContent } from "@/lib/constants";
import { Card, ShortenForm, ShortenedLinks } from ".";

const StatsPage = () => {
  return (
    <main className="bg-neutral-gray bg-opacity-20 pb-24">
      <div className="container relative">
        <ShortenForm />
        <ShortenedLinks />
        <div className="text-center lg:w-[540px] mx-auto">
          <h2 className="font-bold text-3xl md:text-4xl text-primary-dark-violet">
            {statsContent.title}
          </h2>
          <p className="text-neutral-grayish-violet mt-4 mb-8 text-base lg:text-lg">
            {statsContent.description}
          </p>
        </div>
        <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-x-4 relative mt-16 md:mt-24 place-items-start">
          <div className="bg-primary-cyan hidden md:block absolute top-1/2 right-0 left-0 h-2 w-full"></div>
          <div className="bg-primary-cyan md:hidden absolute h-full w-2 right-1/2 "></div>
          {cardContent.map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default StatsPage;
