"use client";

import { useState } from "react";
import Link from "next/link";
import { CoverImage } from "@/components/cover-image";

const SWATCHES = [
  {
    id: 0,
    name: "Restorative Lipid Cream",
    text: "Infused with Centella to calm and strengthen",
    plus: "light" as const,
    frame:
      "bottom-[6%] left-[4%] h-[150px] w-[230px] rotate-[16deg] sm:h-[180px] sm:w-[280px] lg:left-[10%]",
    plusPos: "bottom-[22%] left-[22%] sm:left-[28%]",
    tipPos: "bottom-[38%] left-[6%] sm:left-[16%]",
  },
  {
    id: 1,
    name: "Moss Water Gel",
    text: "Lightweight hydration with forest dew",
    plus: "dark" as const,
    frame:
      "top-1/2 left-1/2 h-[140px] w-[220px] -translate-x-1/2 -translate-y-[40%] -rotate-[8deg] sm:h-[170px] sm:w-[270px]",
    plusPos: "top-[40%] left-[48%]",
    tipPos: "top-[8%] left-1/2 -translate-x-1/2",
  },
  {
    id: 2,
    name: "Forest Seed Polish",
    text: "Gentle exfoliation with spruce and moss",
    plus: "dark" as const,
    frame:
      "top-[8%] right-[4%] h-[145px] w-[220px] rotate-[12deg] sm:h-[175px] sm:w-[260px] lg:right-[10%]",
    plusPos: "top-[16%] right-[18%] lg:right-[22%]",
    tipPos: "top-[42%] right-[6%] lg:right-[12%]",
  },
];

export function HydrationSection() {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-sage-pale">
      <div className="mx-auto max-w-[1440px] px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <h2 className="mx-auto max-w-3xl text-center text-2xl leading-snug font-medium text-forest sm:text-3xl lg:text-[2.15rem]">
          Dive into deep{" "}
          <span className="font-tan text-[1.35em] font-bold">hydration</span> —
          pure nature and forest energy in three essentials that rescue and
          renew your skin{" "}
          <span aria-hidden="true">🌿</span>
        </h2>

        <div className="relative mx-auto mt-10 h-[420px] w-full max-w-4xl sm:mt-14 sm:h-[500px] lg:h-[560px]">
          {SWATCHES.map((swatch) => {
            const isOpen = openId === swatch.id;
            return (
              <div key={swatch.id}>
                <div
                  className={`absolute overflow-hidden rounded-[2.2rem] shadow-sm ${swatch.frame}`}
                >
                  <CoverImage
                    alt={swatch.name}
                    objectPosition="center"
                    sizes="280px"
                  />
                </div>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-label={swatch.name}
                  onClick={() => setOpenId(isOpen ? null : swatch.id)}
                  className={`absolute z-20 flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none transition ${
                    swatch.plus === "light"
                      ? "bg-white text-forest-muted"
                      : "bg-[#5c5c5c]/80 text-white"
                  } ${swatch.plusPos}`}
                >
                  {isOpen ? "–" : "+"}
                </button>
                <article
                  className={`absolute z-30 w-[200px] rounded-2xl bg-white/90 p-3 shadow-lg backdrop-blur-sm transition duration-300 sm:w-[220px] ${swatch.tipPos} ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-1 opacity-0"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[13px] font-semibold text-forest">
                      {swatch.name}
                    </h3>
                    <Link
                      href="#shop"
                      aria-label={`View ${swatch.name}`}
                      className="mt-0.5 text-forest"
                    >
                      <svg
                        width="12"
                        height="12"
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
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-forest-muted">
                    {swatch.text}
                  </p>
                  <div className="relative mt-2 h-[84px] overflow-hidden rounded-xl">
                    <CoverImage alt={swatch.name} objectPosition="center" />
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative h-28 sm:h-36 lg:h-44">
        <CoverImage alt="Forest moss" objectPosition="bottom" sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-b from-sage-pale via-sage-pale/40 to-transparent" />
      </div>
    </section>
  );
}
