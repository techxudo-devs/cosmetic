"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CoverImage } from "@/components/cover-image";

const ITEMS = [
  {
    badge: "Organic",
    name: "Collagen eye patches",
    description: "Hydration, calm, and natural glow",
    price: "$36.00",
  },
  {
    badge: "Moisturizing",
    name: "Pure moss essence",
    description: "Made to bring your skin back to life",
    price: "$48.00",
  },
  {
    badge: "Secret formula",
    name: "Renewing facial serum",
    description: "Infused with forest calm for a dewy glow",
    price: "$60.00",
  },
  {
    badge: "Daily care",
    name: "Forest moss cream",
    description: "Soft barrier repair for morning and night",
    price: "$42.00",
  },
  {
    badge: "Hydrating",
    name: "Spruce extract mist",
    description: "A cool forest veil for tired skin",
    price: "$32.00",
  },
];

const LAST = ITEMS.length - 1;

const CARD_WIDTH =
  "w-[min(280px,78vw)] sm:w-[min(260px,42vw)] lg:w-[260px] xl:w-[280px]";

export function NewLineSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const tickingRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
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
      const width = 20;
      thumbRef.current.style.left = `${progress * (100 - width)}%`;
    }

    const current = activeRef.current;
    const pos = el.scrollLeft / step;
    let next = current;
    if (pos > current + 0.55) next = Math.min(LAST, current + 1);
    else if (pos < current - 0.55) next = Math.max(0, current - 1);

    if (next !== current) {
      activeRef.current = next;
      setActiveIndex(next);
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
    <section id="catalog" className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="max-w-xl text-3xl font-semibold leading-tight text-forest sm:text-4xl lg:text-[2.6rem]">
            Try the new skin care line with forest moss and spruce extract
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-forest-muted lg:pt-1 lg:text-right">
            Let nature touch your skin. Our products are made with pure moss
            essence, crafted to restore your skin&apos;s natural balance and
            calm your senses.
          </p>
        </div>

        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="mt-10 flex gap-5 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-12 [&::-webkit-scrollbar]:hidden"
        >
          {displayItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                key={`${item.name}-${index}`}
                className={`${CARD_WIDTH} relative h-[430px] shrink-0 sm:h-[460px]`}
              >
                <div className="absolute inset-0 overflow-hidden rounded-[1.6rem]">
                  <CoverImage
                    alt={item.name}
                    objectPosition="center"
                    sizes="(max-width: 640px) 78vw, 280px"
                  />
                  <span
                    className={`absolute top-4 left-4 rounded-full bg-white/40 px-3 py-1 text-[11px] text-white backdrop-blur-sm transition-opacity duration-300 ease-out ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <div
                    className={`absolute bottom-4 left-4 transition-opacity duration-300 ease-out ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/25 px-3 py-1.5 text-[11px] text-white backdrop-blur-sm">
                      <LeafIcon />
                      Nature in every drop
                    </span>
                  </div>
                </div>

                <div
                  className={`absolute inset-x-0 bottom-0 bg-cream pt-4 transition-opacity duration-300 ease-out ${
                    isActive ? "pointer-events-none opacity-0" : "opacity-100"
                  }`}
                >
                  <h3 className="text-[15px] font-semibold text-forest">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-forest-muted">
                    {item.description}
                  </p>
                  <p className="mt-2 text-sm font-medium text-forest">
                    {item.price}
                  </p>
                </div>
              </article>
            );
          })}
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

function LeafIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17 8C8 10 5.5 16.5 6 21c5.5.5 11-3 13-10-2 1-4.5 1.2-6.5.7C16 10.2 17 8 17 8z" />
    </svg>
  );
}
