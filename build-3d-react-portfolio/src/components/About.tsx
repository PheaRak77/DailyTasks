import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";
import FloatingIcosahedron from "./three/FloatingIcosahedron";
import { profile, stats } from "../data/portfolio";

const highlights = [
  "Clean, maintainable & scalable code",
  "Responsive design across all devices",
  "Pixel-perfect UI/UX implementation",
  "Fast performance & SEO best practices",
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950" />
      <div className="pointer-events-none absolute top-1/2 left-0 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            About Me
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Get to know me a little better
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 opacity-80">
              <FloatingIcosahedron color="#22d3ee" />
            </div>
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-3 backdrop-blur">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur">
                <p className="text-2xl font-bold text-white">3+ yrs</p>
                <p className="text-xs text-slate-400">Learning &amp; Building</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white">
              I'm {profile.name}, a {profile.role}
            </h3>
            <p className="mt-5 leading-relaxed text-slate-400">{profile.about}</p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <HiBadgeCheck className="mt-0.5 shrink-0 text-violet-400" size={18} />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
                >
                  <p className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-2xl font-extrabold text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
