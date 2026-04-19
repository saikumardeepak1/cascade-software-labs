import NavBar from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import IntroSection from "@/components/RTSRevolution";
import ValueCards from "@/components/Advantages";
import ServicesStacking from "@/components/ServicesStacking";
import InteractiveSection from "@/components/InteractiveSection";
import HowWeWork from "@/components/ProductionTimeline";
import FAQ from "@/components/Testimonials";
import FinalCTA from "@/components/RTSDeepDives";
import Footer from "@/components/Footer";
import CascadeLoader from "@/components/CascadeLoader";
import SectionDotNav from "@/components/SectionDotNav";

export default function Home() {
  return (
    <>
      <CascadeLoader />
      <NavBar />
      <SectionDotNav />

      {/* ── Section 1: Hero ── */}
      <section id="hero" data-section="1">
        <HeroSection />
      </section>

      <div className="relative z-[2]">

        {/* ── Section 2: Intro ── */}
        <section id="intro" data-section="2">
          <IntroSection />
        </section>

        {/* ── Section 3: Why Cascade ── */}
        <section id="why-cascade" data-section="3">
          <ValueCards />
        </section>

        {/* ── Section 4: Our Services ── */}
        <section id="services" data-section="4">
          <ServicesStacking />
        </section>

        {/* ── Section 5: Security / Customization / ROI ── */}
        <section id="pillars" data-section="5">
          <InteractiveSection />
        </section>

        {/* ── Section 6: How We Work ── */}
        <section id="how-we-work" data-section="6">
          <HowWeWork />
        </section>

        {/* ── Section 7: FAQ ── */}
        <section id="faq" data-section="7">
          <FAQ />
        </section>

        {/* ── Section 8: Get Started ── */}
        <section id="get-started" data-section="8">
          <FinalCTA />
        </section>

        <Footer />
      </div>

    </>
  );
}
