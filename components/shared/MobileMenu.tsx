import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { Button } from "../ui/button";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu color="#101828" width={32} height={32} />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="flex flex-col items-start justify-start gap-10">
            <Logo width={100} height={25} />
            <NavLinks />
            <div className="w-full flex gap-4 flex-col ">
              <Link href="https://platform.cirql.ai">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link href="https://platform.cirql.ai/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
