import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaTelegram } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import HeroScene from "./three/HeroScene";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-slate-950" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for freelance work
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <h2 className="mt-3 text-xl font-semibold text-slate-300 sm:text-2xl">
            {profile.role}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 lg:mx-0">
            {profile.tagline} Based in {profile.location}, crafting delightful
            digital products with modern tools and a love for clean design.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/30 transition-transform hover:scale-105"
            >
              Let's Talk
            </button>
            <a
              href={profile.resumeUrl}
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
            {[
              { icon: FaGithub, href: profile.socials.github },
              { icon: FaLinkedin, href: profile.socials.linkedin },
              { icon: FaFacebook, href: profile.socials.facebook },
              { icon: FaTelegram, href: profile.socials.telegram },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-300 transition-all hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="order-1 h-[340px] sm:h-[420px] lg:order-2 lg:h-[520px]"
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500/10 to-cyan-400/10 blur-2xl" />
            <HeroScene />
            <div className="pointer-events-none absolute inset-x-0 bottom-4 mx-auto w-fit rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
              Drag to explore in 3D ✨
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white"
        aria-label="Scroll down"
      >
        <HiArrowDown size={26} />
      </motion.button>
    </section>
  );
}
