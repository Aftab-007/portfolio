import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NetworkBackground from "./components/NetworkBackground";
import CursorGlow from "./components/CursorGlow";

import Hero from "./sections/Hero";
import WhatIDo from "./sections/WhatIDo";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Background from "./sections/Background";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-bg text-text min-h-screen font-sans relative overflow-hidden">
      <NetworkBackground />
      <CursorGlow />

      <Navbar />

      <main className="pt-20 relative z-10">
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
