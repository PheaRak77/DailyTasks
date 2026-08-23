import { motion } from "framer-motion";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Experience &amp; Education
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            My journey so far
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-violet-500/60 via-white/10 to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col gap-4 pl-12 sm:w-1/2 sm:pl-0 ${
                  index % 2 === 0
                    ? "sm:pr-12 sm:text-right"
                    : "sm:ml-auto sm:pl-12"
                }`}
              >
                <span
                  className={`absolute left-2.5 top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-slate-950 shadow-lg sm:left-auto ${
                    index % 2 === 0 ? "sm:right-[-16px]" : "sm:left-[-16px]"
                  } ${
                    exp.type === "work"
                      ? "bg-violet-500 text-white shadow-violet-500/40"
                      : "bg-cyan-400 text-slate-950 shadow-cyan-400/40"
                  }`}
                >
                  {exp.type === "work" ? (
                    <HiBriefcase size={15} />
                  ) : (
                    <HiAcademicCap size={15} />
                  )}
                </span>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-violet-400/40">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      exp.type === "work"
                        ? "bg-violet-500/15 text-violet-300"
                        : "bg-cyan-400/15 text-cyan-300"
                    }`}
                  >
                    {exp.period}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-white">{exp.title}</h3>
                  <p className="text-sm font-medium text-slate-400">{exp.place}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
