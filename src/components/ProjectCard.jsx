import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable
      glareMaxOpacity={0.2}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        className={`rounded-xl border border-muted/20 p-6 bg-bg backdrop-blur-md transition-all duration-300 hover:border-teal-400/40 hover:shadow-lg
        ${project.featured ? "md:col-span-2" : ""}`}
      >
        <h3 className="text-xl font-medium">{project.title}</h3>

        <p className="mt-3 text-muted leading-relaxed">{project.description}</p>

        <ul className="mt-4 space-y-2 list-disc list-inside text-muted">
          {project.highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="text-sm px-3 py-1 rounded-full border border-muted/30 text-muted hover:border-teal-400/50 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
}
