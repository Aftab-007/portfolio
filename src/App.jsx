import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import WhatIDo from "./sections/WhatIDo";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Background from "./sections/Background";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-bg text-text min-h-screen font-sans">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <WhatIDo />
        <Projects />
        <Certifications />
        <Background />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
