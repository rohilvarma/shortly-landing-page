import Image from "next/image";
import { shortenContent } from "@/lib/constants";
import bgShortenDesktop from "/public/images/bg-shorten-desktop.svg";
import bgShortenMobile from "/public/images/bg-shorten-mobile.svg";
import ActivityButton from "./ActivityButton";
import { ShortenedLinks, URLInput } from ".";

const ShortenForm = () => {
  return (
    <div className="relative -translate-y-1/2 my-24">
      <Image
        src={bgShortenDesktop}
        width={100}
        height={100}
        alt="Shorten Background Shape"
        className="bg-primary-dark-violet hidden md:block w-full"
      />
      <Image
        src={bgShortenMobile}
        width={100}
        height={100}
        alt="Shorten Background Shape"
        className="bg-primary-dark-violet md:hidden w-full"
        priority={true}
      />
      <div className="grid grid-rows-2 md:flex gap-4 px-8 absolute left-0 right-0 top-1/2 -translate-y-1/2">
        <URLInput />
        <ActivityButton message={shortenContent.btnMessage} type={shortenContent.btnType} />
      </div>
    </div>
  );
};

export default ShortenForm;


