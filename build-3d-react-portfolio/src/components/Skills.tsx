import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiHtml5,
  SiPython,
  SiMongodb,
  SiGit,
  SiFigma,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { skills } from "../data/portfolio";
import FloatingIcosahedron from "./three/FloatingIcosahedron";

const ICONS: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "HTML5 / CSS3": SiHtml5,
  Python: SiPython,
  MongoDB: SiMongodb,
  "Git & GitHub": SiGit,
  Figma: SiFigma,
};

const tools = [
  "VS Code",
  "Vite",
  "Postman",
  "Framer Motion",
  "Three.js",
  "Firebase",
  "MySQL",
  "Vercel",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950" />
      <div className="pointer-events-none absolute top-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Language &amp; Code
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Technologies I work with
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A snapshot of the languages, frameworks and tools I use to design,
            build and ship modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {skills.map((skill, index) => {
                const Icon = ICONS[skill.name];
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-violet-400/40"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {Icon && (
                          <span
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-xl"
                            style={{
                              color: skill.color,
                              backgroundColor: `${skill.color}1a`,
                            }}
                          >
                            <Icon />
                          </span>
                        )}
                        <span className="font-semibold text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 lg:col-span-2">
            <div className="h-56 w-56 sm:h-64 sm:w-64">
              <FloatingIcosahedron color="#f472b6" />
            </div>
            <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
                Also familiar with
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
