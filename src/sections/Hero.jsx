import Button from "../components/Button";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 min-h-[85vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Mohammad Aftab Arab
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-muted">
            Network Engineer
          </p>

          <p className="mt-6 text-lg md:text-xl leading-relaxed">
            Designing, securing, and troubleshooting modern network
            infrastructure with a long-term trajectory into{" "}
            <span className="text-accent font-medium">Cybersecurity</span>.
          </p>

          <p className="mt-4 text-muted max-w-xl">
            Strong hands-on focus on networking, firewalls, Linux systems, and
            automation.
          </p>

          <div className="mt-10 flex gap-4">
            {/* Primary CTA */}
            <Button href="/resume.pdf" variant="primary">
              Download Resume
            </Button>

            {/* Secondary CTA */}
            <Button href="#projects" variant="secondary">
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
