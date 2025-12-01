import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { href: "/", label: "Welcome" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/add-task", label: "Add Task" },
  { href: "/timer", label: "Timer" },
  { href: "/analytics", label: "Analytics" },
  { href: "/streak", label: "Streak" },
  { href: "/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div className="app-root">
      <div className="glow-bg" />
      <header className="app-header">
        <div className="logo">✨ Procrastination Tracker</div>
        <nav className="nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={
              router.pathname === link.href ? "nav-link nav-link-active" : "nav-link"
            }>
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="app-main">
        {children}
      </main>
      <footer className="app-footer">
        <span>Built with Next.js · Glow UI · Focus, don&apos;t scroll ✨</span>
      </footer>
    </div>
  );
}
