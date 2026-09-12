import Link from "next/link";
import { Logo } from "@/components/Logo";
import { CookieSettingsButton } from "@/components/CookieSettings";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-chalk/10 bg-anthracite pb-24 pt-16 text-chalk lg:pb-16">
      <div className="container-edge">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-[16rem] text-[0.85rem] leading-relaxed text-chalk/55">
              Aus Fläche wird Atmosphäre.
            </p>
          </div>

          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-chalk/40">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={`/${item.href}`} className="text-[0.88rem] text-chalk/70 transition-colors hover:text-chalk">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-chalk/40">Kontakt</p>
            <address className="mt-4 flex flex-col gap-2 text-[0.88rem] not-italic text-chalk/70">
              <span>{site.legalName}</span>
              <span>
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </span>
              <a href={site.phone.href} className="transition-colors hover:text-chalk">
                {site.phone.display}
              </a>
              <span className="text-chalk/50">Fax {site.fax.display}</span>
              <a href={site.email.href} className="transition-colors hover:text-chalk">
                {site.email.display}
              </a>
            </address>
          </div>

          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-chalk/40">Rechtliches</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {site.legalNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[0.88rem] text-chalk/70 transition-colors hover:text-chalk">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <CookieSettingsButton />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-chalk/10 pt-6 text-[0.75rem] text-chalk/40">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
        </div>
      </div>
    </footer>
  );
}
