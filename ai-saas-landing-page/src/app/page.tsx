import Nav from "@/components/nav";
import Hero from "@/components/hero";
import LogoStrip from "@/components/logo-strip";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <Hero />
        <LogoStrip />
        <Features />
        <HowItWorks />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}