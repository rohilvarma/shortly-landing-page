import Image from "next/image";
import { IContent } from "@/lib/interfaces";
import { Button } from ".";

const Hero = ({ title, description, imageURL }: IContent) => {
  return (
    <main className="flex flex-col text-center container md:text-start md:grid grid-cols-2 md:gap-x-2 items-center relative md:py-32">
      <div className="mt-12 md:mt-0 pb-16 lg:pb-0">
        <h1 className="text-primary-dark-violet font-bold text-4xl sm:text-5xl lg:text-6xl lg:leading-[4.5rem]">
          {title}
        </h1>
        <p className="text-neutral-grayish-violet mt-2 mb-8 text-base lg:text-lg">
          {description}
        </p>
        <Button message="Get Started" type="round" />
      </div>
      {imageURL ? (
        <Image
          src={imageURL}
          width={600}
          height={600}
          alt="Hero Image"
          className="order-first md:order-last lg:mt-0 lg:scale-150 lg:translate-x-1/2"
        />
      ) : ""}
    </main>
  );
};

export default Hero;
