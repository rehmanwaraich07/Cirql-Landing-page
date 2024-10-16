import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <section
      id="features"
      className="py-10 md:py-24 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 "
    >
      <div className="flex items-center flex-col justify-center text-center max-w-3xl mx-auto ">
        <h4 className="font-semibold text-primary">Benefits</h4>
        <h2 className="h2-bold mt-3 ">Three core benefits within Cirql</h2>
        <p className="text-lg sm:text-xl mt-4 sm:mt-5">
          Driving insane amounts of value to you - to make this as easy as
          possible!
        </p>
      </div>

      {/* Benefits */}
      <div className="py-10 md:py-12 ">
        {/* Benefit 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 py-10 md:py-12  ">
          {/* Benefit content */}
          <div className="max-w-xl flex-1">
            {/* Icon */}
            <Image
              src="/icons/accurate.svg"
              alt="accuracy"
              width={48}
              height={48}
            />
            <div className="space-y-4 mt-5">
              <h3 className="text-dark font-bold text-2xl sm:text-3xl">
                100% Accurate Cold Email Capture!
              </h3>
              <p className="text-base sm:text-lg">
                Cirql blocks, and sends an automated message to the salespeople
                wanting to spend time with you. You never see the cold emails,
                but are always providing a healthy way for potential vendors to
                meet you.
              </p>
            </div>
            {/* List of benefits */}
            <ul className="mt-8 ml-2 lg:ml-4 space-y-4 lg:space-y-5">
              <li className="flex items-start gap-3 text-base sm:text-lg">
                <Image
                  src="/icons/check.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                />{" "}
                Only see the emails that matter.
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg sm:font-bold">
                <Image
                  src="/icons/check.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                />{" "}
                Monetize your time spent with potential vendors.
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg">
                <Image
                  src="/icons/check.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                />{" "}
                Only take the meetings that will make a difference.
              </li>
            </ul>
          </div>
          {/* Benefit Image */}
          <div className="flex-1 flex items-end justify-end">
            <Image
              src="/images/monetization.png"
              alt="Email Monetization Dashboard"
              width={560}
              height={512}
              priority
              quality={100}
              className="border-4 lg:border-r-0 border-dark rounded-xl lg:rounded-r-none lg:rounded-l-xl"
            />
          </div>
        </div>
        {/* Benefit 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 py-10 md:py-12  ">
          {/* Benefit Image */}
          <div className="flex-1 flex items-start justify-start">
            <Image
              src="/images/categorization.png"
              alt="Email Categorization Dashboard"
              width={560}
              height={512}
              priority
              quality={100}
              className="border-4 lg:border-l-0 border-dark rounded-xl lg:rounded-l-none lg:rounded-r-xl"
            />
          </div>

          {/* Benefit content */}
          <div className="max-w-xl flex-1">
            {/* Icon */}
            <Image
              src="/icons/productive.svg"
              alt="productive"
              width={48}
              height={48}
            />
            <div className="space-y-4 mt-5">
              <h3 className="text-dark font-bold text-2xl sm:text-3xl">
                You’ll Be More Productive!
              </h3>
              <p className="text-base sm:text-lg">
                This is like have a virtual assistant manage your emails 24/7.
                Cirql analyzes each email that enters your inbox, and helps you
                by categorizing them, based on your role, industry, and goals.
              </p>
            </div>
            {/* List of benefits */}
            <ul className="mt-8 ml-2 lg:ml-4 space-y-4 lg:space-y-5">
              <li className="flex items-start gap-3 text-base sm:text-lg">
                <Image
                  src="/icons/check.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                />{" "}
                Prioritize your day around your email.
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg">
                <Image
                  src="/icons/check.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                />{" "}
                Only work on what you need to do, when you need to do it.
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg">
                <Image
                  src="/icons/check.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                />{" "}
                Stay organized with you emails placed neatly into folders for
                you.
              </li>
            </ul>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 py-10 md:py-12  ">
          {/* Benefit content */}
          <div className="max-w-xl flex-1">
            {/* Icon */}
            <Image
              src="/icons/insights.svg"
              alt="accuracy"
              width={48}
              height={48}
            />
            <div className="space-y-4 mt-5">
              <h3 className="text-dark font-bold text-2xl sm:text-3xl">
                Super Valuable Insights!
              </h3>
              <p className="text-base sm:text-lg">
                Unlock valuable insights into your email traffic with detailed
                analytics. Track tasks, invoices, POs, and quotes at both
                individual and organizational levels to stay ahead.
              </p>
            </div>
            {/* List of benefits */}
            <ul className="mt-8 ml-2 lg:ml-4 space-y-4 lg:space-y-5">
              <li className="flex items-start gap-3 text-base sm:text-lg">
                <Image
                  src="/icons/check.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                />{" "}
                See breakdowns of the types of emails your business receives
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg ">
                <Image
                  src="/icons/check.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                />{" "}
                Understand workloads of individuals or teams
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg">
                <Image
                  src="/icons/check.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                />{" "}
                Know when to make adjustments
              </li>
            </ul>
          </div>
          {/* Benefit Image */}
          <div className="flex-1 flex items-end justify-end">
            <Image
              src="/images/analytics.png"
              alt="Email Analytics Dashboard"
              width={560}
              height={512}
              priority
              quality={100}
              className="border-4 lg:border-r-0 border-dark rounded-xl lg:rounded-r-none lg:rounded-l-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
