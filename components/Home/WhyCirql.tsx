import { problems } from "@/constants";
import Image from "next/image";
import React from "react";

const WhyCirql = () => {
  return (
    <section className="bg-secondary  ">
      <div className="py-10 md:py-24 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="flex items-center flex-col justify-center text-center max-w-3xl mx-auto ">
          <h4 className="font-semibold text-primary">But, why?</h4>
          <h2 className="h2-bold mt-3 ">Why did we make Cirql?</h2>
          <p className="text-lg sm:text-xl mt-4 sm:mt-5">
            AI sales and email automations are making it easier and easier for
            teams to send 1,000’s of emails per day. We believe that Salespeople
            shouldn’t be shut out - but rather, given an opportunity to present
            to you, on your terms.
          </p>
        </div>

        {/* Problems */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-start gap-8 md:gap-y-12 ">
          {problems.map((problem, index) => (
            <div
              key={`problem-${index}`}
              className="flex flex-col items-center justify-between text-center"
            >
              {/* Icon */}
              <div
                className={`h-12 w-12 rounded-full  ${
                  problem.label === "We want to help"
                    ? "bg-[#DCFAE6]"
                    : "bg-[#FEE4E2]"
                } flex items-center justify-center`}
              >
                <Image src={problem.icon} alt="icon" width={24} height={24} />
              </div>
              {/* content */}

              <h4 className=" text-dark font-semibold text-lg sm:text-xl mt-4 ">
                {problem.label}
              </h4>
              <p className="mt-1 sm:mt-2 max-w-sm mx-auto ">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCirql;
