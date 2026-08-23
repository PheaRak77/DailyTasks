import { FaGithub, FaLinkedin, FaFacebook, FaTelegram, FaInstagram } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { profile } from "../data/portfolio";

const links = [
  { icon: FaGithub, href: profile.socials.github },
  { icon: FaLinkedin, href: profile.socials.linkedin },
  { icon: FaFacebook, href: profile.socials.facebook },
  { icon: FaTelegram, href: profile.socials.telegram },
  { icon: FaInstagram, href: profile.socials.instagram },
];

const sitemap = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/10 bg-slate-950 pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-black text-slate-950">
                DC
              </span>
              Dara<span className="text-violet-400">.dev</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {profile.tagline} Let's create something impactful together.
            </p>
            <div className="mt-5 flex gap-3">
              {links.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-violet-400/50 hover:text-violet-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-300">
              Sitemap
            </h4>
            <ul className="space-y-2">
              {sitemap.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo(s.id)}
                    className="text-sm text-slate-400 transition-colors hover:text-violet-300"
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-300">
              Get in touch
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>{profile.email}</li>
              <li>{profile.phone}</li>
              <li>{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <button
            onClick={() => scrollTo("home")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-violet-400/50 hover:text-violet-300"
            aria-label="Back to top"
          >
            <HiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
