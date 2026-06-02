import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border/60 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-brand grid h-8 w-8 place-items-center rounded-lg font-bold text-white">
                E
              </div>
              <span className="text-base font-semibold">
                EGY<span className="text-gradient">ITECH</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t("footer.tagline")}</p>
            <div className="mt-6 flex gap-2">
              {[
                { i: Linkedin, href: "#" },
                { i: Facebook, href: "#" },
                { i: Github, href: "#" },
                { i: Mail, href: "mailto:hello@egyitech.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="glass hover:bg-accent grid h-9 w-9 place-items-center rounded-lg transition-colors"
                  aria-label="social"
                >
                  <s.i className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {[
            { h: t("footer.about"), to: "/about" },
            { h: t("footer.services"), to: "/services" },
            { h: t("footer.portfolio"), to: "/portfolio" },
            { h: t("footer.collaborations"), to: "/collaborations" },
          ].map((c) => (
            <div key={c.h}>
              <h4 className="text-sm font-semibold">{c.h}</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to={c.to} className="hover:text-foreground">
                    {c.h}
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
