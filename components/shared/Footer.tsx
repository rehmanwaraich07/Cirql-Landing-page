import React from "react";
import Logo from "./Logo";
import { footerLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <footer className="bg-dark text-[#94969C]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 py-10 md:pt-24 md:pb-14 ">
        <div className="flex flex-col md:flex-row lg:justify-between gap-12 pb-16 ">
          <div className="flex flex-col gap-5">
            <Logo footer={true} />
            <nav className="max-md:hidden flex items-start flex-wrap justify-start gap-5">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-semibold text-[#94969C] "
                >
                  <span className="hover:underline transition">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
            {/* Mobile Footer Menu */}
            <div className="md:hidden w-full flex items-start justify-start gap-12">
              <div className="flex flex-col items-start justify-start gap-4 ">
                <Link
                  href="#features"
                  className="font-semibold text-[#94969C] "
                >
                  <span className="hover:underline transition">Features</span>
                </Link>
                <Link href="#pricing" className="font-semibold text-[#94969C] ">
                  <span className="hover:underline transition">Pricing</span>
                </Link>
              </div>
              <div className="flex flex-col items-start justify-start gap-4 ">
                <Link
                  href="#features"
                  className="font-semibold text-[#94969C] "
                >
                  <span className="hover:underline transition">
                    Cookie settings
                  </span>
                </Link>
                <Link href="#pricing" className="font-semibold text-[#94969C] ">
                  <span className="hover:underline transition">
                    Terms of service
                  </span>
                </Link>
                <Link href="#pricing" className="font-semibold text-[#94969C] ">
                  <span className="hover:underline transition">Privacy</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold">Start your free trial</h4>
            <FooterForm />
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col-reverse gap-4 items-start justify-start md:justify-between md:flex-row ">
          <div>© {new Date().getFullYear()} Cirql AI. All rights reserved.</div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <Link href="https://x.com/cirqlai">
              <Image src="/icons/x.svg" alt="x" width={24} height={24} />
            </Link>
            <Link href="https://www.linkedin.com/company/cirql-ai">
              <Image
                src="/icons/linkedin.svg"
                alt="linkedin"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
