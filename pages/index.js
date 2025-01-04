import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { createContext, useRef } from "react";

export const ScrollToRefContext = createContext();

export default function Home() {
  const ref = useRef(null);
  return (
    <ScrollToRefContext.Provider value={ref}>
      <Header />
      <Hero />
      <Portfolio ref={ref} />
      <Skills />
      <Contact />
      <Footer />
    </ScrollToRefContext.Provider>
  );
}

