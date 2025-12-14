export default function Background() {
  return (
    <section id="background" className="scroll-mt-24 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-medium">
            Background & Early Work
          </h2>
          <p className="mt-3 text-muted">
            Earlier academic and exploratory work that formed my technical
            foundation.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 text-muted">
          <div>
            <h3 className="text-lg font-medium text-text">
              Academic & Hardware Projects
            </h3>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>IoT-based Anti-Sewage Blocking System (Hackathon Winner)</li>
              <li>Embedded systems and hardware prototyping</li>
              <li>Water level indicator academic prototype</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-text">
              Early Technical Exploration
            </h3>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Early experimentation with web technologies</li>
              <li>Independent OS and scripting labs</li>
              <li>Self-driven hands-on learning and documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
