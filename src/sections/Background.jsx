import { motion } from "framer-motion";

const items = [
  {
    title: "Academic & Hardware Projects",
    points: [
      "IoT-based Anti-Sewage Blocking System (Hackathon Winner)",
      "Embedded systems and hardware prototyping",
      "Water level indicator academic prototype",
    ],
  },
  {
    title: "Early Technical Exploration",
    points: [
      "Early experimentation with web technologies",
      "Independent OS and scripting labs",
      "Self-driven hands-on learning and documentation",
    ],
  },
];

export default function Background() {
  return (
    <section id="background" className="scroll-mt-24 py-20">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-medium">
            Background & Early Work
          </h2>
          <p className="mt-3 text-muted">
            Earlier academic and exploratory work that formed my technical
            foundation.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-6 rounded-xl border border-muted/20 transition-all duration-300 hover:border-teal-400/40 hover:bg-bg/40">
                <h3 className="text-lg font-medium text-text group-hover:text-teal-400 transition">
                  {item.title}
                </h3>

                <ul className="mt-4 space-y-2 list-disc list-inside text-muted">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
