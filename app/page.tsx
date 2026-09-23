const links = [
  { label: "Resume", href: "/resume.pdf" },
  { label: "GitHub", href: "https://github.com/abhiram2600" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhiram-kasturi/" },
  { label: "Email", href: "mailto:abhiramkasturi10@gmail.com" },
];

export default function Home() {
  return (
    <main className="page">
      <h1>Abhiram Kasturi</h1>
      <p className="role">Software Engineer</p>
      <p className="lead">
        I build AI-native products and ship production systems end to end.
      </p>
      <p className="now">Currently Developer @ Linq, working agent-first.</p>
      <p className="stack">Go · NestJS · React · AWS</p>
      <nav className="links">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </main>
  );
}
