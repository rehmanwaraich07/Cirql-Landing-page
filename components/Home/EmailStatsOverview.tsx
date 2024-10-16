import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const EmailStatsOverview = () => {
  return (
    <section className="py-10 md:py-24 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 ">
      <div className="flex items-center flex-col justify-center text-center max-w-3xl mx-auto ">
        <div className="bg-primary-light h-[56px] w-[56px] rounded-full flex items-center justify-center ">
          <Image
            src="/icons/arrow-circle-broken-up-right.svg"
            alt="arrow-rign-icon"
            width={28}
            height={28}
          />
        </div>
        <h2 className="h2-bold mt-4 sm:mt-6 ">The Numbers Don’t Lie</h2>
        <p className="text-lg sm:text-xl max-w-3xl mt-4 sm:mt-5">
          Here’s a breakdown of what the average executive receives on a daily
          basis. How do you compare?
        </p>
      </div>

      {/* Numbers */}
      <div className="mt-12 sm:mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-center max-w-3xl mx-auto ">
        <div className="space-y-3">
          <h3 className="font-bold text-5xl lg:text-6xl text-primary">130+</h3>
          <p className="text-dark font-semibold text-lg ">Emails Daily</p>
        </div>
        <div className="space-y-3 md:border-x-2 md:border-gray-200 md:p-4">
          <h3 className="font-bold text-5xl lg:text-6xl text-primary">
            20-30%
          </h3>
          <p className="text-dark font-semibold text-lg ">Are Cold Emails</p>
        </div>
        <div className="space-y-3">
          <h3 className="font-bold text-5xl lg:text-6xl text-primary">
            30+ <span className="text-2xl -ml-3 ">Min</span>
          </h3>
          <p className="text-dark font-semibold text-lg ">Lost Daily</p>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="https://platform.cirql.ai/signup"
        className="flex items-center justify-center"
      >
        <Button className="mt-12 sm:mt-16  max-sm:w-full w-[368px] font-semibold text-base ">
          Get started
        </Button>
      </Link>
    </section>
  );
};

export default EmailStatsOverview;
