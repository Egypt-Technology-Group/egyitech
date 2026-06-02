import { Link } from "@tanstack/react-router";
import { Globe, Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/portfolio", label: t("nav.portfolio") },
    { to: "/collaborations", label: t("nav.collaborations") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-1" : "py-2"}`}
    >

      <div className="glass mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-brand grid h-8 w-8 place-items-center rounded-lg font-bold text-white shadow-lg">
            E
          </div>
          <span className="text-base font-semibold tracking-tight">
            EGY<span className="text-gradient">ITECH</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "text-foreground bg-accent/60" }}
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="hover:bg-accent flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "en" ? "AR" : "EN"}
          </button>
          <button
            onClick={toggle}
            className="hover:bg-accent rounded-lg border border-border p-2 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            className="hover:bg-accent rounded-lg border border-border p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              onClick={() => setOpen(false)}
              className="hover:bg-accent rounded-lg px-3 py-2 text-sm"
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </motion.header>
  );
}
