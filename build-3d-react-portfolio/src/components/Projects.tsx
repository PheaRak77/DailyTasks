import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950" />
      <div className="pointer-events-none absolute top-1/3 right-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A few things I've built recently — from full-stack apps to
            interactive 3D experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-all hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-950/70 px-3 py-1 text-xs font-medium text-violet-300 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"
                  >
                    <FiGithub /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
