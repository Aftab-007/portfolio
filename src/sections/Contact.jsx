import Button from "../components/Button";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Get in Touch</h2>
          <p className="mt-4 text-muted text-lg">
            Open to discussions around networking, infrastructure, and
            security-focused roles.
          </p>
        </div>

        <div className="mt-16 space-y-4 text-lg">
          <p>
            <span className="text-muted">Email:</span>{" "}
            <a
              href="mailto:aftab.1professional@gmail.com"
              className="text-accent hover:underline"
            >
              aftab.1professional@gmail.com
            </a>
          </p>

          <p>
            <span className="text-muted">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/aftab007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              linkedin.com/in/aftab007
            </a>
          </p>

          <p>
            <span className="text-muted">GitHub:</span>{" "}
            <a
              href="https://github.com/Aftab-007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              github.com/Aftab-007
            </a>
          </p>
        </div>

        <div className="mt-10">
          <Button href="/resume.pdf" variant="primary">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
