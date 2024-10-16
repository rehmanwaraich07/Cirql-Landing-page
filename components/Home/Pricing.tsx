import { planFeatures } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-10 md:py-24 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 "
    >
      <div className="flex items-start flex-col justify-start max-w-3xl ">
        <h4 className="font-semibold text-primary">Try it out!</h4>
        <h2 className="h2-bold mt-3 ">
          Pricing as simple as we could make it.
        </h2>
        <p className="text-lg sm:text-xl mt-4 sm:mt-5">
          Simple, transparent pricing that grows with you. Try free for 30 days.
        </p>
      </div>

      <div className="mt-12 sm:mt-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-12 lg:gap-16 ">
          <div className="space-y-8 md:space-y-12 flex-1 max-w-xl">
            <div className="flex items-start justify-start gap-4">
              <div className="p-3 rounded-lg shadow-sm border border-gray-300 flex items-center justify-center ">
                <Image
                  src="/icons/message-chat-circle.svg"
                  alt="message-chat-icon"
                  width={22}
                  height={22}
                />
              </div>
              <div>
                <h4 className="text-dark font-semibold text-lg sm:text-xl ">
                  Share with your team
                </h4>
                <p className="text-base mt-1 ">
                  Purchase multiple inboxes and connect the whole team!
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-4">
              <div className="p-3 rounded-lg shadow-sm border border-gray-300 flex items-center justify-center ">
                <Image
                  src="/icons/feature.svg"
                  alt="access-to-all-features-icon"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <h4 className="text-dark font-semibold text-lg sm:text-xl ">
                  Full access to all features
                </h4>
                <p className="text-base mt-1 ">
                  From day one - you will have full access to all of Cirql’s
                  features.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-4">
              <div className=" p-3 rounded-lg shadow-sm border border-gray-300 flex items-center justify-center ">
                <Image
                  src="/icons/chart-breakout-square.svg"
                  alt="chart-breakout-square-icon"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h4 className="text-dark font-semibold text-lg sm:text-xl ">
                  We’re just getting started!
                </h4>
                <p className="text-base mt-1 ">
                  There are so many awesome things in the roadmap yet to come!
                  Please, join us on this journey!
                </p>
              </div>
            </div>

            <Link
              href="https://platform.cirql.ai/signup"
              className="max-lg:hidden"
            >
              <Button variant="outline" className="w-full mt-12 font-semibold">
                Get started
              </Button>
            </Link>
          </div>

          {/* Basic Plan */}
          <div className="flex-1 border border-gray-300 shadow-sm rounded-xl ">
            <div className=" p-6 sm:p-8 flex flex-col-reverse gap-4 md:flex-col border-b border-gray-300">
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="text-xl sm:text-2xl text-dark font-semibold">
                    Basic plan
                  </h4>{" "}
                  <span className="max-md:hidden font-medium text-sm text-primary bg-primary-light py-1 px-2.5 border border-primary/20 rounded-full">
                    Popular
                  </span>
                </div>
                <p>Our most popular plan for small teams.</p>
              </div>
              <div className="font-medium">
                <span className="text-dark font-semibold text-4xl ">$</span>{" "}
                <span className="text-dark font-semibold text-5xl md:text-6xl ">
                  5.99
                </span>{" "}
                per month, per inbox{" "}
              </div>
            </div>

            <div className="p-6 sm:p-8 border-b border-gray-300">
              <h4 className="uppercase text-dark font-semibold">Features</h4>
              <ul className="mt-6 w-full grid grid-cols-1 sm:grid-cols-2 justify-start items-start gap-4 ">
                {planFeatures.map((feature, index) => (
                  <li
                    key={`planFeature-${index}`}
                    className="w-full flex items-start justify-start gap-3"
                  >
                    <div className="h-7 w-7 rounded-full bg-[#DCFAE6] flex items-center justify-center ">
                      <Image
                        src="/icons/green-check.svg"
                        alt="check"
                        width={15}
                        height={15}
                      />
                    </div>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="p-6 sm:p-8">
              <Link href="https://platform.cirql.ai/signup" className="">
                <Button className=" font-semibold text-base w-full">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
