import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { createContext, useRef } from "react";

export const ScrollToRefContext = createContext();

export default function Home() {
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollables = {
    portfolio: portfolioRef,
    skills: skillsRef,
    contact: contactRef
  }

  return (
    <ScrollToRefContext.Provider value={scrollables}>
      <Header />
      <Hero />
      <Portfolio ref={portfolioRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </ScrollToRefContext.Provider>
  );
}

