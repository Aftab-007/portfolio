import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
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
            Selected Projects
          </h2>
          <p className="mt-4 text-muted text-lg">
            A focused selection of hands-on projects that reflect my core
            strengths in networking, security, and infrastructure.
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
