import { steps } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Steps = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 py-10 md:py-24 border-b border-gray-200 ">
      <div className="flex items-center flex-col justify-center gap-4 sm:gap-5 text-center max-w-3xl mx-auto ">
        <h2 className="h2-bold ">
          You’ve been waiting for this. Now it’s here. Time to take control.
        </h2>
        <p className="text-lg sm:text-xl">
          The biggest improvement to your email platform in three easy steps.
        </p>
      </div>

      {/* Steps bar */}
      <div className="w-full mt-8 sm:mt-6 max-w-xs mx-auto">
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1.5 bg-[#9E77ED] rounded-full transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 w-2/3 h-1.5 bg-[#42307D] rounded-full transform -translate-y-1/2"></div>
          <div className="relative flex justify-between px-1">
            {["Install", "Configure", "Forget about it"].map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 relative rounded-full font-extrabold text-sm ${
                    index < 2 ? "bg-[#9E77ED]" : "bg-[#9E77ED]"
                  } flex items-center justify-center text-white font-bold`}
                >
                  {index + 1}

                  <span className="absolute text-sm text-nowrap -bottom-6 font-medium text-dark">
                    {step}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Link
            href={step.link}
            key={`step-${index}`}
            className="bg-secondary rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col"
          >
            <div className="bg-primary p-2 rounded-lg w-12 h-12 flex items-center justify-center mb-8 sm:mb-12">
              <Image
                src={step.icon}
                alt=""
                width={24}
                height={24}
                className="text-white"
              />
            </div>
            <h4 className="text-dark font-semibold text-lg sm:text-xl mb-1 sm:mb-2">
              {step.label}
            </h4>
            <p className="text-base flex-grow mb-5">{step.description}</p>
            <p className="max-lg:hidden text-primary font-semibold flex items-center cursor-pointer">
              {step.cta} <ArrowRight className="ml-2 h-4 w-4" />
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Steps;
