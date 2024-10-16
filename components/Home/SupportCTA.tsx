import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const SupportCTA = () => {
  return (
    <section className=" max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 ">
      <div className="bg-secondary rounded-2xl py-10 md:py-24 ">
        <div className="max-w-3xl mx-auto flex items-center flex-col justify-center text-center">
          {/* Avatars */}
          <div className="flex w-full items-center justify-center -space-x-4">
            <Image
              src="/images/avatar1.png"
              alt="support-person"
              width={48}
              height={48}
              priority
              quality={100}
            />
            <Image
              src="/images/avatar2.png"
              alt="support-person"
              width={56}
              height={56}
              className="z-10 mb-2 rounded-full border border-white"
              priority
              quality={100}
            />
            <Image
              src="/images/avatar3.png"
              alt="support-person"
              width={48}
              height={48}
              priority
              quality={100}
            />
          </div>

          <h4 className="mt-6 sm:mt-8 text-dark font-semibold text-lg sm:text-xl">
            Still have questions?
          </h4>
          <p className="mt-2 text-base sm:text-lg">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>

          <div className="mt-6 sm:mt-8">
            <Link href="mailto:support@cirql.com">
              <Button className="font-semibold">Get in touch</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportCTA;
