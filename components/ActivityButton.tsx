"use client";

import { useState } from "react";
import clipboardCopy from "clipboard-copy";

import { IActivityButton, IResponse } from "@/lib/interfaces";
import { shortenStore, shortLinkStore } from "@/lib/store";
import { getData } from "@/lib/utils";


const ActivityButton = ({ message, type }: IActivityButton) => {
  const { linkName, emptyInput, changeLinkName } = shortenStore();
  const { shortLink } = shortLinkStore();
  const { updateShortLink } = shortLinkStore();
  const [copy, setCopy] = useState(false)

  const handleCopy = () => {
    clipboardCopy(shortLink?.link as string);
    setCopy(prev => !prev)
  };

  const handleSubmit = async () => {
    if (!emptyInput) {
      const response: IResponse = await getData(linkName);
      updateShortLink(response);
      changeLinkName("");
    }
  };
  return (
    <button
      className={`rectangle-btn ${
        type === "copy" ? "w-full md:w-auto mt-4 md:mt-0 focus:bg-primary-dark-violet" : ""
      }`}
      onClick={type === "submit" ? () => handleSubmit() : () => handleCopy()}
    >
      {
        type === 'submit' ? message : copy ? 'Copied!' : message
      }
    </button>
  );
};

export default ActivityButton;
