import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="bg-transparent max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 w-full py-5 max-md:py-4 flex items-center justify-between gap-8">
      <Logo />
      <div className="max-md:hidden">
        <NavLinks />
      </div>

      <div className="flex items-center justify-center gap-5 max-md:hidden ">
        <Link href="https://platform.cirql.ai">
          <Button variant="outline" className="font-medium text-lg  ">
            Log in
          </Button>
        </Link>
        <Link href="https://platform.cirql.ai/signup">
          <Button className="font-medium text-lg">Sign up</Button>
        </Link>
      </div>

      <MobileMenu />
    </header>
  );
};

export default Header;
