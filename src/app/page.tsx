import Hero from "../components/Hero";
import Features from "../components/Features";
import SupportSection from "../components/SupportSection";
import Companies from "../components/Companies";
import FreeTrial from "../components/FreeTrial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <SupportSection />
      <Companies />
      <FreeTrial />
      <Contact />
      <Footer />
    </main>
  );
}
