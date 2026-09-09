"use client";

import { useState } from "react";
import Link from "next/link";
import { CoverImage } from "@/components/cover-image";

export function ProductPairing() {
  const [open, setOpen] = useState(true);

  return (
    <section className="bg-cream">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-24">
        <div>
          <h2 className="text-center text-xl leading-snug text-forest sm:text-2xl">
            Try perfectly pair with our
            <br />
            Renewing serum! <span aria-hidden="true">✨</span>
          </h2>

          <div className="relative mx-auto mt-10 max-w-xl sm:mt-14">
            <div className="relative h-[220px] sm:h-[280px] lg:h-[300px]">
              <CoverImage
                src="/serum-smear.jpeg"
                alt="Renewing serum texture"
                objectPosition="center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <button
              type="button"
              aria-expanded={open}
              aria-label="Renewing facial serum"
              onClick={() => setOpen((value) => !value)}
              className="absolute top-1/2 left-[28%] z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl leading-none text-forest shadow-sm transition hover:bg-cream sm:left-[32%]"
            >
              {open ? "–" : "+"}
            </button>

            <article
              className={`absolute top-[18%] right-0 z-10 w-[min(100%,240px)] rounded-[1.4rem] bg-sage-pale p-4 shadow-sm transition duration-300 sm:w-[250px] sm:p-5 ${
                open
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[15px] font-semibold text-forest">
                  Renewing facial serum
                </h3>
                <Link
                  href="/product"
                  aria-label="View Renewing facial serum"
                  className="mt-0.5 shrink-0 text-forest"
                >
                  <ArrowIcon />
                </Link>
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-forest-muted">
                Lightweight, fast-absorbing, and balancing, pine juniper help
                tighten pores, calm skin.
              </p>
              <div className="relative mt-3 h-[88px] overflow-hidden rounded-xl">
                <CoverImage
                  src="/img1.jpeg"
                  alt="Renewing facial serum bottle"
                  objectPosition="center"
                  sizes="250px"
                />
              </div>
            </article>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:rounded-[2.25rem] lg:aspect-[4/4.6]">
          <CoverImage
            src="/cream-heart.jpeg"
            alt="Heart-shaped cream on hand"
            objectPosition="center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <span
            aria-hidden="true"
            className="absolute top-[42%] left-[28%] flex h-8 w-8 items-center justify-center rounded-full bg-sage/80 text-lg leading-none text-white backdrop-blur-sm"
          >
            +
          </span>
          <Link
            href="/product"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/80 px-7 py-2.5 text-[11px] font-medium tracking-[0.22em] text-white uppercase backdrop-blur-[2px] transition hover:bg-white/15"
          >
            My order
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
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
  );
}
