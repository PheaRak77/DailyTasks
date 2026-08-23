import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
} from "react-icons/hi";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950" />
      <div className="pointer-events-none absolute top-0 right-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Let's build something great together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 lg:col-span-2"
          >
            {[
              { icon: HiMail, label: "Email", value: profile.email },
              { icon: HiPhone, label: "Phone", value: profile.phone },
              { icon: HiLocationMarker, label: "Location", value: profile.location },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-lg text-slate-950">
                  <item.icon />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {item.label}
                  </p>
                  <p className="font-semibold text-white">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 to-cyan-400/10 p-6">
              <p className="text-sm leading-relaxed text-slate-300">
                I typically respond within 24 hours. Looking forward to
                hearing about your project!
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Smith"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-violet-400/60"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-violet-400/60"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-violet-400/60"
              />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/30 transition-transform hover:scale-[1.02] disabled:opacity-70 sm:w-auto"
            >
              {status === "idle" && (
                <>
                  Send Message <HiPaperAirplane className="rotate-90" />
                </>
              )}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent! ✓"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
