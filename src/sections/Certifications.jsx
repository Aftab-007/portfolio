import { certifications } from "../data/certifications";
import { tools } from "../data/tools";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section className="scroll-mt-24 py-24 bg-surface">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
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
          {/* Certifications */}
          <div>
            <h3 className="text-xl font-medium">Certifications</h3>

            <ul className="mt-6 space-y-4">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`transition ${
                    cert.primary ? "text-text font-semibold" : "text-muted"
                  }`}
                >
                  {cert.name}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-medium">Tooling & Platforms</h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 text-sm rounded-full border border-muted/30 text-muted transition-all duration-300 hover:border-teal-400/50 hover:text-teal-400 hover:scale-105"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
