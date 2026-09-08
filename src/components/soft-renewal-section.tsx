"use client";

import { useCallback, useEffect, useRef } from "react";
import { CoverImage } from "@/components/cover-image";

const ITEMS = [
  {
    badge: "Refresh",
    name: "Restorative Shower Gel",
    description: "Refreshes the skin, reduce daily stress",
    price: "$15.00",
  },
  {
    badge: "Smoothing",
    name: "Smoothing Body Scrub",
    description: "Soft polish for calm, even skin",
    price: "$22.00",
  },
  {
    badge: "Moisturizing",
    name: "Renewing Body Serum",
    description: "Light green tea moisture that lasts",
    price: "$38.00",
  },
  {
    badge: "Cleansing",
    name: "Renewing Cleansing Milk",
    description: "Washes away the day, keeps the glow",
    price: "$28.00",
  },
];

export function SoftRenewalSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const tickingRef = useRef(false);

  const sync = useCallback(() => {
    const el = scrollerRef.current;
    if (!el || !thumbRef.current) return;
    const max = el.scrollWidth - el.clientWidth;
    const progress = max <= 0 ? 0 : el.scrollLeft / max;
    thumbRef.current.style.left = `${progress * 80}%`;
  }, []);

  const onScroll = useCallback(() => {
    if (tickingRef.current) return;
    tickingRef.current = true;
    requestAnimationFrame(() => {
      sync();
      tickingRef.current = false;
    });
  }, [sync]);

  useEffect(() => {
    sync();
    const el = scrollerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, [sync]);

  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-medium leading-snug text-forest sm:text-3xl lg:text-[2.1rem]">
          Soft renewal powered by green tea — calm skin, quiet energy{" "}
          <span aria-hidden="true">🍃</span>
        </h2>

        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="mt-12 flex gap-5 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {ITEMS.map((item) => (
            <article
              key={item.name}
              className="w-[78vw] shrink-0 sm:w-[46vw] lg:w-[calc((100%-2.5rem)/3.35)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <CoverImage
                  alt={item.name}
                  objectPosition="center"
                  sizes="(max-width: 1024px) 50vw, 28vw"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/70 px-3 py-1 text-[11px] text-forest backdrop-blur-sm">
                  {item.badge}
                </span>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-forest">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-forest-muted">{item.description}</p>
              <p className="mt-2 text-sm font-medium text-forest">{item.price}</p>
            </article>
          ))}
        </div>

        <div className="relative mt-8 h-[2px] overflow-hidden rounded-full bg-sage-soft/60">
          <div
            ref={thumbRef}
            className="absolute top-0 h-full w-[20%] rounded-full bg-forest"
          />
        </div>
      </div>
    </section>
  );
}
