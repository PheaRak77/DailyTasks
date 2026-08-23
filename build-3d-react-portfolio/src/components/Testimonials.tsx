import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../data/portfolio";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            What people say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <FaQuoteLeft className="mb-4 text-2xl text-violet-400/60" />
              <p className="text-sm leading-relaxed text-slate-300">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-bold text-slate-950">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
