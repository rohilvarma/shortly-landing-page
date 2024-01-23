import { navLink, navButton } from "@/lib/constants";
import { Button } from ".";
const MobileNavbar = () => {
  return (
    <nav className="bg-primary-dark-violet divide-y absolute top-16 md:hidden left-0 right-0 z-10 rounded-lg divide-neutral-gray px-4 py-12 text-white text-center font-bold">
      <div className="flex flex-col gap-8">
        {navLink.map((link, index) => (
          <div key={index} className="cursor-pointer">
            {link}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-4 pt-4">
        {navButton.map((btn, index) => (
          <Button key={index} message={btn.message} type={btn.type} />
        ))}
      </div>
    </nav>
  );
};

export default MobileNavbar;
