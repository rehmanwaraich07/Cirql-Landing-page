import { navigationLinks } from "@/constants";
import React from "react";

const NavLinks = () => {
  return (
    <nav className=" flex max-md:flex-col items-center max-md:items-start justify-start max-md:gap-4 gap-8">
      {navigationLinks.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="font-medium text-base hover:text-body/80"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
