"use client";
import { ShortLinkCard } from ".";
import { shortLinkStore } from "@/lib/store";

const ShortenedLinks = () => {
  const { shortLink } = shortLinkStore();
  return (
    <main className="">
      {shortLink ? (
        <div className="flex flex-col gap-4 pb-32 -mt-32">
            <ShortLinkCard key={shortLink.id} {...shortLink} />
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default ShortenedLinks;
