import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "/public/images/logo.svg";
import { navLink, navButton } from "@/lib/constants";

import { Button } from ".";

const Navbar = () => {
  return (
    <nav className="flex justify-between md:justify-start items-center container my-8">
      <Image
        src={logo}
        width={100}
        height={100}
        alt="Shortly Logo"
        className="w-36"
        priority={true}
      />
      <div className="hidden ml-16 md:flex justify-between items-center w-full">
        <div className="flex gap-x-8 items-center">
          {navLink.map((link, index) => (
            <div
              key={index}
              className="text-neutral-grayish-violet duration-200 hover:text-primary-dark-violet cursor-pointer"
            >
              {link}
            </div>
          ))}
        </div>
        <div className="ml-auto">
          {navButton.map((btn, index) => (
            <Button key={index} message={btn.message} type={btn.type} />
          ))}
        </div>
      </div>
      <GiHamburgerMenu className="md:hidden text-neutral-gray cursor-pointer" size={35} />
    </nav>
  );
};

export default Navbar;
