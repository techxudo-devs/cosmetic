"use client";

import { useEffect, useRef, useState } from "react";
import { CoverImage } from "@/components/cover-image";

const INGREDIENTS = [
  {
    name: "Centella",
    src: "/leaf.jpeg",
    cell: "col-start-1 row-start-1",
    clip: "[clip-path:circle(100%_at_100%_100%)]",
    origin: "origin-bottom-right",
    hit: "top-0 left-0",
    plus: "top-[38%] left-[38%]",
    tip: "right-[102%] top-[22%]",
  },
  {
    name: "Aloe",
    src: "/aloe.jpeg",
    cell: "col-start-2 row-start-1",
    clip: "[clip-path:circle(100%_at_0_100%)]",
    origin: "origin-bottom-left",
    hit: "top-0 left-1/2",
    plus: "top-[38%] right-[38%]",
    tip: "left-[102%] top-[22%]",
  },
  {
    name: "Moss",
    src: "/moss.jpeg",
    cell: "col-start-1 row-start-2",
    clip: "[clip-path:circle(100%_at_100%_0)]",
    origin: "origin-top-right",
    hit: "top-1/2 left-0",
    plus: "bottom-[38%] left-[38%]",
    tip: "right-[102%] bottom-[22%]",
  },
  {
    name: "Avocado",
    src: "/avocado.jpeg",
    cell: "col-start-2 row-start-2",
    clip: "[clip-path:circle(100%_at_0_0)]",
    origin: "origin-top-left",
    hit: "top-1/2 left-1/2",
    plus: "bottom-[38%] right-[38%]",
    tip: "left-[102%] bottom-[22%]",
  },
] as const;

export function ProductIngredients() {
  const sectionRef = useRef<HTMLElement>(null);
  const playedRef = useRef(false);
  const [spun, setSpun] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || playedRef.current) return;
        playedRef.current = true;
        window.setTimeout(() => setSpun(true), 550);
      },
      { threshold: 0.55, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const rotation = spun ? -180 : 0;

  return (
    <section ref={sectionRef} className="bg-cream">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="relative mx-auto aspect-square w-full max-w-[560px] sm:max-w-[620px]">
          <div
            className="absolute inset-0 will-change-transform [transition:transform_3.2s_cubic-bezier(0.22,0.8,0.28,1)]"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div className="grid size-full grid-cols-2 grid-rows-2 gap-2 sm:gap-2.5">
              {INGREDIENTS.map((item) => {
                const isOpen = hovered === item.name;
                return (
                  <div
                    key={item.name}
                    className={`relative overflow-hidden ${item.cell} ${item.clip} ${item.origin} transition-transform duration-500 ease-out ${
                      isOpen ? "z-20 scale-[1.08]" : "z-0 scale-100"
                    }`}
                  >
                    <CoverImage
                      src={item.src}
                      alt={item.name}
                      sizes="310px"
                      objectPosition="center"
                      className={`transition-transform duration-500 ease-out ${
                        isOpen ? "scale-110" : "scale-100"
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {INGREDIENTS.map((item) => {
              const isOpen = hovered === item.name;
              return (
                <div
                  key={`${item.name}-ui`}
                  className={`absolute z-30 h-1/2 w-1/2 ${item.hit}`}
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <button
                    type="button"
                    aria-label={item.name}
                    onFocus={() => setHovered(item.name)}
                    onBlur={() => setHovered(null)}
                    className={`absolute flex h-8 w-8 items-center justify-center rounded-full bg-sage/80 text-lg leading-none text-white backdrop-blur-sm [transition:transform_3.2s_cubic-bezier(0.22,0.8,0.28,1),background-color_0.2s] hover:bg-forest sm:h-9 sm:w-9 ${item.plus}`}
                    style={{ transform: `rotate(${-rotation}deg)` }}
                  >
                    +
                  </button>
                  <div
                    className={`pointer-events-none absolute z-30 rounded-2xl bg-[#7d9a78]/90 px-4 py-2.5 text-sm font-medium whitespace-nowrap text-white shadow-sm backdrop-blur-md ${item.tip} ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transform: `rotate(${-rotation}deg)`,
                      transition: `transform 3.2s cubic-bezier(0.22, 0.8, 0.28, 1), opacity 0.2s ease`,
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 flex h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream">
            <p
              className={`max-w-[7.5rem] origin-center text-center text-lg leading-tight font-semibold text-forest sm:max-w-[9rem] sm:text-2xl ${
                spun
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-3 scale-50 opacity-0"
              }`}
              style={{
                transition:
                  "opacity 1.8s cubic-bezier(0.22, 0.8, 0.28, 1), transform 1.8s cubic-bezier(0.22, 0.8, 0.28, 1)",
              }}
            >
              Active ingredients
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-forest py-1.5 pr-1.5 pl-6 text-white transition hover:bg-forest-deep sm:mt-12"
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
        </button>
      </div>
    </section>
  );
}
