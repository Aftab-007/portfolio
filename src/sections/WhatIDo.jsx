import { motion } from "framer-motion";

const items = [
  {
    title: "Network Engineering",
    desc: "Design and troubleshooting of IP networks including routing, switching, VLAN segmentation, and traffic flow analysis.",
  },
  {
    title: "Network Security",
    desc: "Firewall policy design, VPN connectivity, and traffic inspection with security treated as an architectural concern.",
  },
  {
    title: "Linux & Automation",
    desc: "Linux system administration and automation using Bash and Python to streamline operational workflows.",
  },
  {
    title: "Forward Direction",
    desc: "Progressing toward cybersecurity roles focused on network security and defensive infrastructure, leveraging modern tooling and AI-assisted workflows.",
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="scroll-mt-24 py-24 bg-surface">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">What I Do</h2>
          <p className="mt-4 text-muted text-lg">
            I focus on building and operating reliable network infrastructure
            with a security-first mindset.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-6 rounded-xl border border-muted/20 transition-all duration-300 hover:border-teal-400/40 hover:bg-bg/40">
                <h3 className="text-xl font-medium group-hover:text-teal-400 transition">
                  {item.title}
                </h3>

                <p className="mt-3 text-muted leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
