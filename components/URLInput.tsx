'use client'
import { shortenContent } from "@/lib/constants";
import { shortenStore } from "@/lib/store";

const URLInput = () => {
  const {linkName, changeLinkName} = shortenStore()

  return (
    <input
      type="text"
      className="grow rounded-lg pl-3 lg:pl-6 text-base lg:text-lg text-neutral-very-dark-blue placeholder-neutral-gray"
      placeholder={shortenContent.placeholderMessage}
      value={linkName}
      onChange={(e) => changeLinkName(e.target.value)}
    />
  );
};

export default URLInput;
