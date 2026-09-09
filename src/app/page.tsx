import type { ReactNode } from "react";
import Link from "next/link";
import { CoverImage } from "@/components/cover-image";
import { FaqSection } from "@/components/faq-section";
import { HydrationSection } from "@/components/hydration-section";
import { NewLineSection } from "@/components/new-line-section";
import { SiteClosing } from "@/components/site-closing";
import { SiteHeader } from "@/components/site-header";
import { SoftRenewalSection } from "@/components/soft-renewal-section";
import { WeeklySaleSection } from "@/components/weekly-sale-section";

const BENEFITS = [
  {
    title: "Hydrate & Refresh",
    text: "Dew-like moisture from moss water and spruce, without a heavy film.",
  },
  {
    title: "Time to go to the forest",
    text: "A daily ritual that slows the pulse and restores skin’s quiet rhythm.",
  },
  {
    title: "Soft skin like after rain",
    text: "Barrier lipids and forest sugars leave skin plush, calm, and luminous.",
  },
  {
    title: "Cleanliness + Freshness",
    text: "Gentle acids and green tea clarify without stripping the microbiome.",
  },
];

const VALUES = [
  "Botanicals sourced from protected forests",
  "Plastic-free, recyclable packaging",
  "Never tested on animals",
  "Formulated without parabens or sulfates",
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <SiteHeader />

      <main>
        <Hero />
        <NewLineSection />
        <Benefits />
        <WideMoment />
        <NaturesCalm />
        <HydrationSection />
        <WeeklySaleSection />
        <SkinBreathe />
        <SoftRenewalSection />
        <Values />
        <FaqSection />
        <SiteClosing />
      </main>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <CoverImage
        src="/hero.jpeg"
        alt="Forest ritual with green eye patches"
        priority
        objectPosition="center top"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-black/15" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col px-5 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-36">
        <h1 className="max-w-xl font-sans text-[2.6rem] font-semibold leading-[1.1] text-white sm:text-6xl lg:text-[4.35rem]">
          Harmony
          <br />
          between{" "}
          <span className="font-tan font-bold text-[#f3e6c4]">
            you
          </span>
          <br />
          and forest
        </h1>

        <div className="mt-auto flex flex-col items-stretch gap-4 pb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-8 sm:pb-20 lg:pb-24">
          <article className="relative flex max-w-xl items-stretch gap-3 rounded-[1.5rem] bg-forest/50 p-3 backdrop-blur-md sm:gap-4 sm:p-3.5">
            <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-2xl sm:h-[112px] sm:w-[112px]">
              <CoverImage alt="Pure Moss Essence" objectPosition="center" />
            </div>
            <div className="min-w-0 flex-1 py-0.5 pr-9">
              <h2 className="text-sm leading-snug font-semibold text-white sm:text-[15px]">
                Try our Natural Pure Moss Essence
              </h2>
              <p className="mt-1.5 text-[11px] leading-relaxed text-white/85 sm:text-xs">
                Our Pure Moss Essence deeply hydrates, restores balance, and
                protects your skin barrier with the power of moss and forest
                extract. For calm and glowing skin.
              </p>
            </div>
            <ArrowLink
              href="#shop"
              label="View Pure Moss Essence"
              className="absolute right-3 bottom-3"
            />
          </article>

          <article className="relative w-full max-w-[210px] self-end rounded-[1.35rem] bg-forest/50 p-3 backdrop-blur-md sm:max-w-[200px] lg:max-w-[220px]">
            <div className="pr-8">
              <h2 className="text-sm leading-snug font-semibold text-white">
                Forest Dew Eye Patches
              </h2>
              <p className="mt-1.5 text-[11px] leading-relaxed text-white/85">
                A soothing eye ritual inspired by the forest. Hydration, calm,
                and natural glow.
              </p>
            </div>
            <ArrowLink
              href="#shop"
              label="View Forest Dew Eye Patches"
              className="absolute top-3 right-3"
            />
            <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-xl">
              <CoverImage alt="Forest Dew Eye Patches" objectPosition="center" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 pb-8 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.4rem] bg-forest px-6 py-7 text-white"
          >
            <h3 className="font-serif text-xl leading-snug">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-sage-soft/90">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WideMoment() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <div className="relative h-[280px] overflow-hidden rounded-[2rem] sm:h-[380px] lg:h-[460px]">
        <CoverImage
          src="/img2.jpeg"
          alt="Applying forest serum"
          objectPosition="center"
          sizes="100vw"
        />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-sage-pale/80 to-transparent" />
      </div>
    </section>
  );
}

function NaturesCalm() {
  return (
    <section className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20">
      <div className="relative aspect-square overflow-hidden rounded-[2rem]">
        <CoverImage
          src="/img3.jpeg"
          alt="Green forest face mask"
          objectPosition="center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="max-w-lg lg:py-4">
        <h2 className="text-3xl font-semibold leading-tight text-forest sm:text-4xl lg:text-[2.75rem]">
          Nature&apos;s Calm, Captured in a Drop
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-forest-muted sm:text-[15px]">
          Deep within untouched forests, every leaf breathes harmony — and
          every drop holds life. Veya Forest Dew Serum blends moss, fern, and
          wild herbal essences to awaken the skin&apos;s natural balance.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-forest-muted sm:text-[15px]">
          Its lightweight texture melts gently, restoring hydration and
          resilience while calming irritation and stress. No synthetics, no
          noise — only the quiet strength of nature, distilled into your daily
          ritual. Let your skin exhale.{" "}
          <span aria-hidden="true">🍃</span>
        </p>
        <Link
          href="#shop"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-forest py-1.5 pr-1.5 pl-6 text-white transition hover:bg-forest-deep"
        >
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase">
            Shop now
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-forest">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                d="M7 17L17 7M10 7h7v7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}

function SkinBreathe() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-forest sm:text-4xl lg:text-[2.6rem]">
              Welcome to Your Forest Escape{" "}
              <span aria-hidden="true">🌿</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-forest-muted sm:text-[15px]">
              Gentle formulas with forest extracts wash away city stress and
              pollution
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-forest-muted lg:justify-self-end lg:pt-2">
            Scrubs, bath foams, and body balms — little rituals that unlock
            your natural self-care. Treat yourself and feel the forest-inspired
            freshness every day
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="relative h-[380px] overflow-hidden rounded-[2rem] sm:h-[480px] lg:h-[560px]">
          <CoverImage
            alt="Veya bottle in soft foam"
            objectPosition="center"
          />
          <div className="absolute top-1/2 right-6 z-10 -translate-y-1/2 sm:right-10 lg:right-16">
            <h3 className="text-3xl font-semibold leading-[1.15] text-forest sm:text-4xl lg:text-5xl">
              Let{" "}
              <span className="font-tan text-[1.35em] font-bold text-white drop-shadow-sm">
                your
              </span>
              <br />
              skin breathe
            </h3>
            <Link
              href="#shop"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-forest py-1.5 pr-1.5 pl-6 text-white transition hover:bg-forest-deep"
            >
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase">
                Shop now
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-forest">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path
                    d="M7 17L17 7M10 7h7v7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] lg:aspect-[4/4.4]">
        <CoverImage
          alt="Hands gathering forest leaves"
          objectPosition="center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="max-w-md">
        <h2 className="font-serif text-4xl leading-tight text-forest sm:text-5xl">
          Pure. Natural. Responsible.
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-forest-muted sm:text-[15px]">
          We take only what the forest can spare, and we give back more shade
          than we harvest. Every bottle is a vote for slower beauty and living
          soil.
        </p>
        <ul className="mt-8 space-y-3">
          {VALUES.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-forest">
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ShopButton className="mt-8">Learn more</ShopButton>
      </div>
    </section>
  );
}

function ArrowLink({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#6b6b6b] transition hover:bg-cream ${className}`}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          d="M7 17L17 7M10 7h7v7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

function ShopButton({
  children,
  href = "#shop",
  className = "",
  variant = "forest",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "forest" | "light";
}) {
  const variants = {
    forest: "bg-forest text-white hover:bg-forest-deep",
    light: "bg-white text-forest hover:bg-cream",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[11px] font-medium tracking-[0.22em] uppercase transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-soft text-forest">
      <svg
        width="11"
        height="11"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 6.2l2.4 2.4L10 3.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
