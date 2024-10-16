import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";

const FAQs = () => {
  return (
    <section className="py-10 md:py-24 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 ">
      <h2 className="h2-bold text-center ">Frequently asked questions </h2>

      {/* Faqs */}
      <div className="mt-12 sm:mt-16 space-y-6 sm:space-y-8  max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <Accordion key={`faq-${index}`} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-dark font-medium text-base sm:text-lg ">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
