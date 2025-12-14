import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Selected Projects
          </h2>
          <p className="mt-4 text-muted text-lg">
            A focused selection of hands-on projects that reflect my core
            strengths in networking, security, and infrastructure.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
