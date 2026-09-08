"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CoverImage } from "@/components/cover-image";

const ITEMS = [
  {
    badge: "Smoothing",
    name: "Pore-refining serum",
    description: "Leaves skin soft, silky, and more even",
    price: "$40.00",
    oldPrice: "$48.00",
    src: "/img1.jpeg",
  },
  {
    badge: "Hydration",
    name: "Restorative Lipid Cream",
    description: "Comfort without the grease",
    price: "$36.00",
    oldPrice: "$46.00",
    src: "/img1.jpeg",
  },
  {
    badge: "Refresh",
    name: "Gentle Facial Toner",
    description: "Minimizes tightness after cleansing",
    price: "$24.00",
    oldPrice: "$36.00",
    src: "/img1.jpeg",
  },
  {
    badge: "Cleansing",
    name: "Cedar-infused cleansing oil",
    description: "Gently melts waterproof makeup",
    price: "$32.00",
    oldPrice: "$46.00",
    src: "/img1.jpeg",
  },
];

const LAST = ITEMS.length - 1;

const CARD_WIDTH =
  "w-[min(280px,78vw)] sm:w-[min(260px,42vw)] lg:w-[260px] xl:w-[280px]";

export function WeeklySaleSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const tickingRef = useRef(false);
  const [peekCount, setPeekCount] = useState(3);

  const displayItems = useMemo(
    () => [
      ...ITEMS,
      ...Array.from({ length: peekCount }, (_, i) => ITEMS[i % ITEMS.length]),
    ],
    [peekCount],
  );

  const getStep = useCallback(() => {
    const el = scrollerRef.current;
    if (!el || el.children.length < 2) return 0;
    return (
      (el.children[1] as HTMLElement).offsetLeft -
      (el.children[0] as HTMLElement).offsetLeft
    );
  }, []);

  const sync = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = getStep();
    if (step <= 0) return;

    const maxScroll = LAST * step;
    const progress = maxScroll <= 0 ? 0 : Math.min(el.scrollLeft / maxScroll, 1);

    if (thumbRef.current) {
      thumbRef.current.style.left = `${progress * 80}%`;
    }

    const first = el.children[0] as HTMLElement;
    if (first) {
      const count = Math.max(
        1,
        Math.ceil((el.clientWidth - first.offsetWidth) / step),
      );
      setPeekCount((prev) => (prev === count ? prev : count));
    }
  }, [getStep]);

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
    <section id="shop" className="bg-cream">
      <div className="bg-forest">
        <div className="mx-auto max-w-[1440px] px-5 py-3.5 sm:px-8 lg:px-12">
          <p className="text-[11px] font-medium tracking-[0.42em] text-white uppercase">
            Week sale
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold text-forest sm:text-4xl lg:text-[2.75rem]">
            Step into the woods
          </h2>
          <p className="mt-3 text-sm text-forest-muted sm:text-[15px]">
            Our Week Sale drops prices so you can stock up on calm, grounding
            skincare.
          </p>
        </div>

        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="mt-10 flex gap-5 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-12 [&::-webkit-scrollbar]:hidden"
        >
          {displayItems.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className={`${CARD_WIDTH} shrink-0`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <CoverImage
                  src={index % ITEMS.length === 0 ? "/img1.jpeg" : item.src}
                  alt={item.name}
                  objectPosition="center"
                  sizes="(max-width: 640px) 78vw, 280px"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/45 px-3 py-1 text-[11px] text-white backdrop-blur-sm">
                  {item.badge}
                </span>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-forest">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-forest-muted">{item.description}</p>
              <p className="mt-2 text-sm">
                <span className="font-medium text-forest">{item.price}</span>
                <span className="ml-2 text-forest-muted line-through">
                  {item.oldPrice}
                </span>
              </p>
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
