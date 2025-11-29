import { useState } from "react";
import { motion, useReducedMotion } from "../lib/motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/content";

const categories = ["All", "Next.js", "React", "Mobile App", "E-Commerce"];

const WorkSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="work" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Selected Work
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            Projects & Collaborations
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            A showcase of my recent work in web development, mobile apps, and
            digital solutions.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-8 flex flex-wrap gap-2"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setShowAll(false);
              }}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-accent text-ink"
                  : "bg-white/5 text-muted hover:bg-white/10 hover:text-white"
              }`}>
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Show More */}
        {filteredProjects.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent">
              {showAll
                ? "Show Less"
                : `View All ${filteredProjects.length} Projects`}
              <svg
                className={`h-4 w-4 transition-transform ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
