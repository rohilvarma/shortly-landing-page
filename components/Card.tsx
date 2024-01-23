import Image from "next/image";

import { IContent } from "@/lib/interfaces";

const Card = ({ title, description, imageURL, index }: IContent) => {
  const cardPush = () => {
    switch (index) {
      case 1:
        return "mt-8";
      case 2:
        return "mt-16";
      default:
        return "";
    }
  };
  return (
    <div
      className={`bg-white rounded-lg px-6 pb-8 text-center md:txt-start relative ${cardPush()}`}
    >
      {imageURL ? (
        <div className="bg-primary-dark-violet relative right-1/2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 -top-8 rounded-full w-fit p-4">
          <Image
            src={imageURL}
            width={30}
            height={30}
            alt="Icon"
            className=""
          />
        </div>
      ) : (
        ""
      )}
      <h1 className="text-neutral-very-dark-blue font-bold">{title}</h1>
      <p className="text-neutral-grayish-violet text-sm mt-4">{description}</p>
    </div>
  );
};

export default Card;
