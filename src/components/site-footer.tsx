import type { ReactNode } from "react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="rounded-[2rem] bg-forest px-6 py-10 text-sage-soft sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:rounded-[2.75rem] lg:px-14 lg:py-14">
      <div className="flex gap-6 sm:gap-8 lg:gap-12">
        <div className="hidden flex-col items-center pt-1 sm:flex">
          <span className="mb-5 h-8 w-px bg-white/25" />
          <div className="flex flex-col items-center gap-4">
            <SocialLink label="Facebook">
              <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13V9c0-.6.4-1 1-1z" />
            </SocialLink>
            <SocialLink label="X">
              <path d="M7 7l10 10M17 7L7 17" />
            </SocialLink>
            <SocialLink label="Instagram">
              <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5z" />
              <circle cx="12" cy="12" r="3.2" />
              <circle cx="17.4" cy="6.6" r="0.7" fill="currentColor" stroke="none" />
            </SocialLink>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex gap-8 sm:gap-10 lg:gap-12">
              <Perk
                label="Fast delivery"
                icon={
                  <>
                    <path d="M3 8h11v7H3z" />
                    <path d="M14 11h3.5L20 14v1h-6v-4z" />
                    <circle cx="6.5" cy="17.5" r="1.4" />
                    <circle cx="16.5" cy="17.5" r="1.4" />
                  </>
                }
              />
              <Perk
                label="24/7 Support"
                icon={
                  <>
                    <path d="M4 9h10a3 3 0 0 1 3 3v4H7l-3 2.5V9z" />
                    <path d="M9 6h9a3 3 0 0 1 3 3v5" />
                  </>
                }
              />
              <Perk
                label="Secure Payment"
                icon={
                  <>
                    <rect x="3" y="6" width="18" height="12" rx="2" />
                    <path d="M3 10h18" />
                    <path d="M7 15h3" />
                  </>
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-12 lg:gap-16">
              <FooterColumn
                title="Products"
                links={[
                  "Creams",
                  "Scrubs",
                  "Cleansing foams",
                  "Oil removers",
                  "Serums",
                ]}
              />
              <FooterColumn
                title="Featured"
                links={["New arrivals", "Top picks", "Last chance"]}
              />
              <div>
                <p className="text-[11px] tracking-[0.22em] text-white/90 uppercase">
                  Contact us
                </p>
                <ul className="mt-4 space-y-2.5 text-[13px] text-white/70">
                  <li>
                    <a href="tel:+19998887654" className="transition hover:text-white">
                      +1 999 888-76-54
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@veyaandme.com"
                      className="transition hover:text-white"
                    >
                      hello@veyaandme.com
                    </a>
                  </li>
                  <li>
                    <Link
                      href="#shop"
                      className="underline underline-offset-4 hover:text-white"
                    >
                      Contact me
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative mt-14 sm:mt-16 lg:mt-20">
            <p className="text-center text-[11px] tracking-wide text-white/45 lg:pr-36">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
            <p className="mt-2 text-center text-[11px] tracking-wide text-white/45 lg:absolute lg:top-0 lg:right-0 lg:mt-0">
              © 2023 — Copyright
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Perk({ label, icon }: { label: string; icon: ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-2.5">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        aria-hidden="true"
      >
        {icon}
      </svg>
      <span className="text-[12px] text-white/80">{label}</span>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-[11px] tracking-[0.22em] text-white/90 uppercase">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5 text-[13px] text-white/70">
        {links.map((link) => (
          <li key={link}>
            <Link href="#shop" className="transition hover:text-white">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <Link
      href="#shop"
      aria-label={label}
      className="text-white/70 transition hover:text-white"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        {children}
      </svg>
    </Link>
  );
}
