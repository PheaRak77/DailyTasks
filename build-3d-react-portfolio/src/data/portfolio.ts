export const profile = {
  name: "Dara Chan",
  role: "Frontend Developer & UI/UX Enthusiast",
  tagline: "I build fast, accessible, and beautiful web experiences.",
  location: "Phnom Penh, Cambodia",
  email: "dara.chan.dev@gmail.com",
  phone: "+855 12 345 678",
  avatar: "/images/avatar.png",
  resumeUrl: "#",
  about:
    "I'm a passionate final-year Management Information Systems student and self-taught web developer. I love turning ideas into interactive, pixel-perfect products using React, TypeScript and modern tooling. Always curious, always shipping.",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
    telegram: "https://t.me/",
    instagram: "https://instagram.com/",
  },
};

export const stats = [
  { label: "Years Learning", value: "3+" },
  { label: "Projects Built", value: "20+" },
  { label: "Happy Clients", value: "8+" },
  { label: "Cups of Coffee", value: "999+" },
];

export type Experience = {
  id: number;
  type: "work" | "education";
  title: string;
  place: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    type: "work",
    title: "Freelance Frontend Developer",
    place: "Self-Employed",
    period: "2024 — Present",
    description:
      "Design and build responsive websites and web apps for small businesses using React, Tailwind CSS and modern animation libraries.",
  },
  {
    id: 2,
    type: "work",
    title: "Web Development Intern",
    place: "Local Tech Startup",
    period: "2023 — 2024",
    description:
      "Collaborated with a small team to develop internal dashboards, improved UI performance and implemented responsive layouts.",
  },
  {
    id: 3,
    type: "education",
    title: "Bachelor of Management Information Systems",
    place: "National University of Management",
    period: "2021 — 2025",
    description:
      "Focused on software development, database systems, and information management. Active member of the university coding club.",
  },
  {
    id: 4,
    type: "education",
    title: "Full-Stack Web Development Program",
    place: "Online Bootcamp",
    period: "2022 — 2023",
    description:
      "Completed an intensive program covering HTML, CSS, JavaScript, React, Node.js and databases through hands-on projects.",
  },
];

export type Skill = {
  name: string;
  level: number; // 0-100
  color: string;
};

export const skills: Skill[] = [
  { name: "JavaScript", level: 90, color: "#f7df1e" },
  { name: "TypeScript", level: 80, color: "#3178c6" },
  { name: "React", level: 88, color: "#61dafb" },
  { name: "Tailwind CSS", level: 92, color: "#38bdf8" },
  { name: "Node.js", level: 70, color: "#3c873a" },
  { name: "HTML5 / CSS3", level: 95, color: "#e34c26" },
  { name: "Python", level: 65, color: "#3572A5" },
  { name: "MongoDB", level: 68, color: "#4DB33D" },
  { name: "Git & GitHub", level: 85, color: "#f34f29" },
  { name: "Figma", level: 75, color: "#a259ff" },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Storefront",
    description:
      "A full-featured shopping experience with cart, checkout flow, and animated product previews built with React and Tailwind CSS.",
    tags: ["React", "Tailwind", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Kanban-style productivity app with drag & drop, real-time sync and dark mode, built for small remote teams.",
    tags: ["React", "TypeScript", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "3D Portfolio Landing",
    description:
      "Interactive 3D landing page experiments using Three.js and React Three Fiber with smooth scroll animations.",
    tags: ["Three.js", "R3F", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    title: "Restaurant Booking System",
    description:
      "A reservation platform with an admin dashboard for managing tables, menus and customer orders in real time.",
    tags: ["Next.js", "MongoDB", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
];

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophea Kim",
    role: "Product Manager, StartupXYZ",
    quote:
      "Dara delivered our landing page redesign ahead of schedule with amazing attention to detail. Communication was smooth the whole way through.",
  },
  {
    id: 2,
    name: "Michael Reyes",
    role: "Founder, ShopLocal",
    quote:
      "Working with Dara was a pleasure. The final product was fast, responsive and exactly matched our brand vision.",
  },
  {
    id: 3,
    name: "Lina Tan",
    role: "Marketing Lead, BrightApps",
    quote:
      "Great eye for design and clean code. Our conversion rate improved significantly after the site relaunch.",
  },
];
