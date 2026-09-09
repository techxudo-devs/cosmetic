"use client";

import { useState } from "react";
import { CoverImage } from "@/components/cover-image";

const GALLERY = [
  {
    src: "/img1.jpeg",
    alt: "Forest Therapy Face Mask tube on moss",
    position: "center 40%",
  },
  {
    src: "/img2.jpeg",
    alt: "Applying Forest Therapy Face Mask",
    position: "center",
  },
  {
    src: "/img3.jpeg",
    alt: "Forest Therapy Face Mask on skin",
    position: "center top",
  },
];

const SIZES = [
  { id: "big", label: "big (100ml)" },
  { id: "small", label: "small (50 ml)" },
] as const;

export function ProductHero() {
  const [active, setActive] = useState(0);
  const [size, setSize] = useState<(typeof SIZES)[number]["id"]>("big");
  const current = GALLERY[active];

  return (
    <section className="relative lg:h-[100svh] lg:min-h-[720px] lg:overflow-hidden">
      <div className="relative h-[100svh] min-h-[640px] overflow-hidden lg:absolute lg:inset-0 lg:h-auto lg:min-h-0">
        <CoverImage
          key={current.src}
          src={current.src}
          alt={current.alt}
          priority={active === 0}
          objectPosition={current.position}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-black/35" />

        <div className="absolute bottom-6 left-5 z-20 flex flex-col gap-2.5 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10">
          {GALLERY.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.src}
                type="button"
                aria-label={`View photo ${index + 1}`}
                aria-pressed={selected}
                onClick={() => setActive(index)}
                className={`relative h-[58px] w-[58px] overflow-hidden rounded-2xl transition sm:h-[68px] sm:w-[68px] lg:h-[74px] lg:w-[74px] ${
                  selected
                    ? "ring-2 ring-white ring-offset-2 ring-offset-transparent"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <CoverImage
                  src={item.src}
                  alt=""
                  sizes="74px"
                  objectPosition={item.position}
                />
              </button>
            );
          })}
        </div>
      </div>

      <aside className="relative z-10 mx-4 -mt-2 mb-6 flex flex-col rounded-[1.75rem] bg-forest px-7 py-8 text-white sm:mx-6 sm:px-9 sm:py-10 lg:absolute lg:top-28 lg:right-8 lg:bottom-8 lg:mx-0 lg:mt-0 lg:mb-0 lg:w-[min(440px,38vw)] lg:rounded-[2rem] lg:border lg:border-white/25 lg:bg-white/20 lg:px-10 lg:py-11 lg:backdrop-blur-[28px] xl:right-12 xl:w-[460px]">
        <h1 className="text-[2rem] leading-[1.15] font-semibold sm:text-[2.35rem] lg:text-[2.6rem]">
          Forest Therapy Face Mask
        </h1>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-white/90">
          <p>Best for: oily, stressed skin</p>
          <p className="flex items-center gap-1.5">
            <span className="flex gap-0.5" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, index) => (
                <StarIcon key={index} />
              ))}
            </span>
            <span className="text-white/80">(1720)</span>
          </p>
        </div>

        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/90">
          A creamy mask inspired by the forest — made with wild herbal extracts
          and mineral-rich clays to deeply purify while keeping skin calm and
          fresh everyday
        </p>

        <p className="mt-8 text-2xl font-semibold tracking-wide">$32.00</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <p className="text-sm text-white/90">Select size:</p>
          {SIZES.map((option) => {
            const selected = size === option.id;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setSize(option.id)}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${
                  selected
                    ? "border-white bg-white/15 text-white"
                    : "border-white/35 text-white/80 hover:border-white/70 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="mt-10 w-full rounded-full bg-white py-4 text-[13px] font-semibold tracking-[0.22em] text-forest uppercase transition hover:bg-cream lg:mt-auto"
        >
          Shop now
        </button>
      </aside>
    </section>
  );
}

function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 3.2l2.35 6.1 6.55.35-5.15 4.15 1.7 6.3L12 16.7 6.55 20.1l1.7-6.3L3.1 9.65l6.55-.35L12 3.2z" />
    </svg>
  );
}
