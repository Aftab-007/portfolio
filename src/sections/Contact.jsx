import Button from "../components/Button";
import { motion } from "framer-motion";

const contacts = [
  {
    label: "Email",
    value: "aftab.1professional@gmail.com",
    link: "mailto:aftab.1professional@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aftab007",
    link: "https://www.linkedin.com/in/aftab007",
  },
  {
    label: "GitHub",
    value: "github.com/Aftab-007",
    link: "https://github.com/Aftab-007",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 bg-surface">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Get in Touch</h2>
          <p className="mt-4 text-muted text-lg">
            Open to discussions around networking, infrastructure, and
            security-focused roles.
          </p>
        </div>

        {/* Contact Links */}
        <div className="mt-16 space-y-6 text-lg">
          {contacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <p>
                <span className="text-muted">{item.label}:</span>{" "}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-all duration-300 group-hover:text-teal-400 group-hover:underline"
                >
                  {item.value}
                </a>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button href="/resume.pdf" variant="primary">
            Download Resume
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
