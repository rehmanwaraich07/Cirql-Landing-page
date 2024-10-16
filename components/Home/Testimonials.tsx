import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-primary-light  ">
      <div className="py-10 md:py-24 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="flex items-center flex-col justify-center text-center">
          <h2 className="text-dark text-xl sm:text-3xl font-medium">
            I get so many emails - the categorization really helps me, and now
            all those spam emails are gone! Plus, I had someone pay for a
            meeting with me and that covered the cost of this for the whole year
            already.
          </h2>

          <div className="flex items-center justify-center flex-col mt-10">
            <Image
              src="/images/donald-fenton.jpeg"
              alt="avatar"
              width={64}
              height={64}
              priority
              quality={100}
              className="rounded-full"
            />
            <h4 className=" mt-4 font-semibold text-dark text-lg">
              Donald Fenton
            </h4>
            <p className="text-base ">GM, Industrial Manufacturing Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
