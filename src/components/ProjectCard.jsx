export default function ProjectCard({ project }) {
  return (
    <div
      className={`rounded-lg border border-muted/20 p-6 bg-bg
        ${project.featured ? "md:col-span-2" : ""}`}
    >
      {/* Title */}
      <h3 className="text-xl font-medium">{project.title}</h3>

      {/* Description */}
      <p className="mt-3 text-muted leading-relaxed">{project.description}</p>

      {/* Highlights */}
      <ul className="mt-4 space-y-2 list-disc list-inside text-muted">
        {project.highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Skills */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.skills.map((skill, index) => (
          <span
            key={index}
            className="text-sm px-3 py-1 rounded-full border border-muted/30 text-muted"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
