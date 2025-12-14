import { certifications } from "../data/certifications";
import { tools } from "../data/tools";

export default function Certifications() {
  return (
    <section className="scroll-mt-24 py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Certifications & Tooling
          </h2>
          <p className="mt-4 text-muted text-lg">
            Credentials and technologies that support my work in networking and
            security-focused infrastructure.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-medium">Certifications</h3>
            <ul className="mt-6 space-y-3">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className={
                    cert.primary ? "text-text font-medium" : "text-muted"
                  }
                >
                  {cert.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">Tooling & Platforms</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full border border-muted/30 text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
