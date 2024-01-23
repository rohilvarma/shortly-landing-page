import Image from "next/image";
import { Button } from ".";
import bgBoostDesktop from "/public/images/bg-boost-desktop.svg";
import bgBoostMobile from "/public/images/bg-boost-mobile.svg";
import iconFB from "/public/images/icon-facebook.svg";
import iconIG from "/public/images/icon-instagram.svg";
import iconPI from "/public/images/icon-pinterest.svg";
import iconTW from "/public/images/icon-twitter.svg";
import logo from "/public/images/logo-white.svg";
import { footerContent } from "@/lib/constants";

const Footer = () => {
  const getFooter = () => {
    return footerContent.map((content, index) => {
      const subSection = content.sectionLinks.map((link, index) => (
        <div key={index} className="mb-2 duration-200 hover:text-primary-cyan">
          {link}
        </div>
      ));
      return (
        <div key={index} className="text-white text-center md:text-start font-bold text-base">
          {content.sectionName}
          <div className="text-neutral-grayish-violet font-medium mt-4 text-sm">
            {subSection}
          </div>
        </div>
      );
    });
  };
  return (
    <footer className="">
      <main className="relative">
        <Image
          src={bgBoostDesktop}
          width={45}
          height={45}
          alt="Boost Background Image"
          className="bg-primary-dark-violet hidden md:block w-full"
        />
        <Image
          src={bgBoostMobile}
          width={45}
          height={45}
          alt="Boost Background Image"
          className="bg-primary-dark-violet md:hidden w-full"
        />
        <div className="text-center container text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <h1 className="font-bold text-2xl md:text-4xl mb-4 md:mb-8">
            Boost your links today
          </h1>
          <Button message="Get Started" type="round" />
        </div>
      </main>
      <div className="bg-neutral-very-dark-violet pt-12 pb-16">
        <main className="container flex flex-col items-center md:flex-row md:items-start">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Shortly Logo"
            className="w-32 mb-12 md:mb-0"
          />
          <div className="md:ml-auto md:mr-8 mb-8 md:mb-0 grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-x-12">{getFooter()}</div>
          <div className="flex items-center gap-x-4">
            <Image
              src={iconFB}
              width={25}
              height={25}
              alt="Shortly Logo"
              className="text-red-400"
            />
            <Image
              src={iconTW}
              width={25}
              height={25}
              alt="Shortly Logo"
              className="text-red-400"
            />
            <Image
              src={iconPI}
              width={25}
              height={25}
              alt="Shortly Logo"
              className="text-red-400"
            />
            <Image
              src={iconIG}
              width={25}
              height={25}
              alt="Shortly Logo"
              className="text-red-400"
            />
          </div>
        </main>
      </div>
    </footer>
  );
};

export default Footer;
