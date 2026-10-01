import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Certificates from "@/components/home/Certificates";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Projects />

      <Certificates />

      <Contact />

      <Footer />
    </main>
  );
}
