import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhyInnovationLab from "@/components/WhyInnovationLab";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Social from "@/components/Social";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <WhyInnovationLab />
        <Projects />
        <Team />
        <Social />
      </main>
      <Footer />
      <ScrollAnimator />
    </>
  );
}
