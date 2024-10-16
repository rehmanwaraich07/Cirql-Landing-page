import {
  Benefits,
  EmailStatsOverview,
  FAQs,
  Hero,
  Pricing,
  Steps,
  SupportCTA,
  Testimonials,
  WhyCirql,
} from "@/components/Home";

export default function Home() {
  return (
    <div className="pb-16 sm:pb-24">
      <Hero />
      <Steps />
      <Benefits />
      <WhyCirql />
      <EmailStatsOverview />
      <Testimonials />
      <Pricing />
      <FAQs />
      <SupportCTA />
    </div>
  );
}
