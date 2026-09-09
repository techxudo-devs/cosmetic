"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { CoverImage } from "@/components/cover-image";

const CATEGORIES = [
  { id: "all", label: "Shop All", src: "/img1.jpeg" },
  { id: "bestsellers", label: "Bestsellers", src: "/hero.jpeg" },
  { id: "skincare", label: "Skincare", src: "/img3.jpeg" },
  { id: "body", label: "Body Care", src: "/cream-heart.jpeg" },
  { id: "sets", label: "Care Sets", src: "/aloe.jpeg" },
] as const;

const PRODUCTS = [
  {
    name: "Collagen eye patches",
    description: "Hydration, calm, and natural glow",
    price: "$36.00",
    tag: "Organic",
    src: "/hero.jpeg",
    category: "skincare",
    featured: true,
  },
  {
    name: "Thermal Water Spray",
    description: "A mist of forest minerals",
    price: "$12.00",
    tag: "Refreshing",
    src: "/img1.jpeg",
    category: "skincare",
    featured: true,
  },
  {
    name: "Renewing facial serum",
    description: "Lightweight, fast-absorbing, balancing",
    price: "$60.00",
    tag: "Secret formula",
    src: "/img1.jpeg",
    category: "bestsellers",
    featured: true,
  },
  {
    name: "Pure moss essence",
    description: "Dew-like moisture from moss water",
    price: "$48.00",
    tag: "Moisturizing",
    src: "/img1.jpeg",
    category: "skincare",
    featured: false,
  },
];

const MORE_PRODUCTS = [
  {
    name: "Renewing facial toner",
    tag: "Anti - pigmentation",
    description: "Help tighten pores and calm your skin",
    price: "$34.00",
    src: "/img1.jpeg",
  },
  {
    name: "Anti-aging moisturizing eye emulsion",
    tag: "Anti - aging",
    description: "Made to bring your skin back to life",
    price: "$28.00",
    src: "/hero.jpeg",
  },
  {
    name: "Pure Aloe essence and lifting mask Set",
    tag: "Anti - pigmentation",
    description: "Balance and smooth skin tone",
    price: "$80.00",
    src: "/aloe.jpeg",
  },
  {
    name: "Cooling Water Spray",
    tag: "Cooling",
    description: "Cool the skin and gives it shine",
    price: "$12.00",
    src: "/img3.jpeg",
  },
  {
    name: "Herbal essence",
    tag: "Herbal Formula",
    description: "Help tighten pores and calm your skin",
    price: "$34.00",
    src: "/leaf.jpeg",
  },
  {
    name: "Soothing cream",
    tag: "Soothing",
    description: "Cool the skin and fine lines",
    price: "$42.00",
    src: "/cream-heart.jpeg",
  },
  {
    name: "Calming facial toner",
    tag: "Calming",
    description: "Fast-absorbing and balancing",
    price: "$36.00",
    src: "/moss.jpeg",
  },
  {
    name: "Renewing lip mask",
    tag: "Lips care",
    description: "Make your lips fresh and juicy",
    price: "$20.00",
    src: "/mask-brush.jpeg",
  },
];

const GREEN_TEA_PRODUCTS = [
  {
    name: "Restorative Shower Gel",
    tag: "Refresh",
    description: "Refreshes the skin, reduce daily stress",
    price: "$15.00",
    src: "/img1.jpeg",
  },
  {
    name: "Smoothing Body Scrub",
    tag: "Smoothing",
    description: "Polish the skin and boost its natural glow",
    price: "$22.00",
    src: "/leaf.jpeg",
  },
  {
    name: "Renewing Body Serum",
    tag: "Moisturizing",
    description: "Give a deep moisture without the heaviness",
    price: "$38.00",
    src: "/aloe.jpeg",
  },
  {
    name: "Renewing Cleansing Gel",
    tag: "Cleansing",
    description: "Perfectly prepped for the steps in skincare",
    price: "$28.00",
    src: "/moss.jpeg",
  },
];

const PAGE_SIZE = 4;
const TOTAL_PAGES = 23;

const SALE_TEMPLATES = [
  {
    tag: "Cleansing",
    name: "Cedar cleansing oil",
    description: "Gently melts waterproof makeup",
    price: "$32.00",
    oldPrice: "$46.00",
  },
  {
    tag: "Soothing",
    name: "Serum with niacinamide",
    description: "Calms redness and evens tone",
    price: "$36.00",
    oldPrice: "$44.00",
  },
  {
    tag: "Smoothing",
    name: "Pore-refining serum",
    description: "Leaves skin soft, silky, and more even",
    price: "$40.00",
    oldPrice: "$48.00",
  },
  {
    tag: "Refresh",
    name: "Gentle Facial Toner",
    description: "Minimizes tightness after cleansing",
    price: "$24.00",
    oldPrice: "$36.00",
  },
  {
    tag: "Hydration",
    name: "Restorative Lipid Cream",
    description: "Comfort without the grease",
    price: "$36.00",
    oldPrice: "$46.00",
  },
  {
    tag: "Calming",
    name: "Moss recovery mask",
    description: "Soothes tightness after a long day",
    price: "$42.00",
    oldPrice: "$52.00",
  },
  {
    tag: "Glow",
    name: "Forest dew eye patches",
    description: "Hydration, calm, and natural glow",
    price: "$28.00",
    oldPrice: "$36.00",
  },
  {
    tag: "Repair",
    name: "Centella night balm",
    description: "Overnight barrier repair",
    price: "$38.00",
    oldPrice: "$48.00",
  },
];

const SALE_IMAGES = [
  "/img1.jpeg",
  "/hero.jpeg",
  "/img3.jpeg",
  "/leaf.jpeg",
  "/aloe.jpeg",
  "/moss.jpeg",
  "/cream-heart.jpeg",
  "/mask-brush.jpeg",
];

const SALE_PRODUCTS = Array.from({ length: TOTAL_PAGES * PAGE_SIZE }, (_, index) => {
  const template = SALE_TEMPLATES[index % SALE_TEMPLATES.length];
  return {
    ...template,
    id: index,
    src: SALE_IMAGES[index % SALE_IMAGES.length],
  };
});

const HOTSPOTS = [
  {
    id: 0,
    name: "Collagen eye patches",
    text: "Hydration, calm, and natural glow",
    src: "/hero.jpeg",
    pos: "top-[18%] left-[48%]",
    card: "top-[8%] left-[8%]",
  },
  {
    id: 1,
    name: "Renewing facial serum",
    text: "Lightweight, fast-absorbing, and balancing",
    src: "/img1.jpeg",
    pos: "top-[42%] left-[62%]",
    card: "top-[32%] left-[6%]",
  },
  {
    id: 2,
    name: "Restorative Body Cream",
    text: "Infused with Centella to calm and strengthen",
    src: "/img1.jpeg",
    pos: "top-[68%] left-[22%]",
    card: "top-[52%] left-[8%]",
  },
];

export function CatalogView() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]["id"]>(
    "all",
  );
  const [hotspot, setHotspot] = useState(2);
  const [page, setPage] = useState(1);
  const [loaded, setLoaded] = useState(PAGE_SIZE);
  const [appending, setAppending] = useState(false);
  const saleRef = useRef<HTMLDivElement>(null);

  const items = PRODUCTS.filter((product) => {
    if (category === "all") return true;
    if (category === "bestsellers") return product.featured;
    if (category === "sets") return false;
    return product.category === category;
  });

  const active = HOTSPOTS[hotspot];
  const saleItems = appending
    ? SALE_PRODUCTS.slice(0, loaded)
    : SALE_PRODUCTS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function goToPage(next: number) {
    setAppending(false);
    setPage(next);
    setLoaded(next * PAGE_SIZE);
    saleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function loadMore() {
    if (page >= TOTAL_PAGES) return;
    const next = page + 1;
    setAppending(true);
    setPage(next);
    setLoaded(next * PAGE_SIZE);
  }

  const pageButtons = paginationItems(page, TOTAL_PAGES);

  return (
    <section className="bg-cream px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
      <div className="mx-auto max-w-[1440px]">
        <h1 className="text-center text-2xl font-medium text-forest sm:text-[1.75rem]">
          Catalog
        </h1>
        <div className="mx-auto mt-2 h-px w-20 bg-forest/35" />

        <div className="mx-auto mt-8 flex max-w-4xl justify-center overflow-x-auto sm:mt-10">
          <div className="flex items-center gap-1 rounded-full bg-forest px-2 py-2 sm:gap-2 sm:px-3">
            {CATEGORIES.map((item) => {
              const selected = category === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCategory(item.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-full py-1.5 pr-4 pl-1.5 text-sm text-white transition ${
                    selected ? "bg-[#5c7460]" : "hover:bg-white/10"
                  }`}
                >
                  <span className="relative h-8 w-8 overflow-hidden rounded-full">
                    <CoverImage
                      src={item.src}
                      alt=""
                      sizes="32px"
                      objectPosition="center"
                    />
                  </span>
                  <span className="pr-1 whitespace-nowrap">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid items-stretch gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-10">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
            {items.map((product) => (
              <Link
                key={product.name}
                href="/product"
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-md sm:rounded-[1.85rem]">
                  <CoverImage
                    src={product.src}
                    alt={product.name}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    objectPosition="center"
                    className="transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/75 px-3 py-1 text-[11px] text-forest backdrop-blur-sm">
                    {product.tag}
                  </span>
                </div>
                <h2 className="mt-3 text-[15px] font-semibold text-forest sm:text-base">
                  {product.name}
                </h2>
                <p className="mt-1 text-[12px] text-forest-muted sm:text-[13px]">
                  {product.description}
                </p>
                <p className="mt-2 text-sm font-semibold text-forest">
                  {product.price}
                </p>
              </Link>
            ))}
            {items.length === 0 ? (
              <p className="col-span-2 py-16 text-center text-sm text-forest-muted">
                More care sets are on the way.
              </p>
            ) : null}
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[1.85rem] sm:min-h-[520px] sm:rounded-[2rem] lg:min-h-full">
            <CoverImage
              src="/img2.jpeg"
              alt="Shop the look"
              objectPosition="center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                type="button"
                aria-label={spot.name}
                aria-pressed={hotspot === spot.id}
                onClick={() => setHotspot(spot.id)}
                className={`absolute z-20 flex h-8 w-8 items-center justify-center rounded-full bg-forest text-lg leading-none text-white transition hover:bg-forest-deep ${spot.pos}`}
              >
                {hotspot === spot.id ? "–" : "+"}
              </button>
            ))}

            {active ? (
              <article
                className={`absolute z-30 w-[200px] rounded-2xl bg-white/90 p-3 shadow-lg backdrop-blur-sm sm:w-[220px] ${active.card}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[13px] font-semibold text-forest">
                    {active.name}
                  </h3>
                  <Link
                    href="/product"
                    aria-label={`View ${active.name}`}
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
                  {active.text}
                </p>
                <div className="relative mt-2 h-[84px] overflow-hidden rounded-xl">
                  <CoverImage
                    src={active.src}
                    alt={active.name}
                    objectPosition="center"
                    sizes="220px"
                  />
                </div>
              </article>
            ) : null}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-20 sm:gap-x-6 md:grid-cols-4 lg:mt-24 lg:gap-x-8">
          {MORE_PRODUCTS.map((product) => (
            <Link
              key={product.name}
              href="/product"
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-md sm:rounded-[1.75rem]">
                <CoverImage
                  src={product.src}
                  alt={product.name}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  objectPosition="center"
                  className="transition duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-forest/55 px-3 py-1 text-[11px] text-white backdrop-blur-sm">
                  {product.tag}
                </span>
              </div>
              <h2 className="mt-3 text-[15px] font-semibold text-forest sm:text-base">
                {product.name}
              </h2>
              <p className="mt-1 text-[12px] text-forest-muted sm:text-[13px]">
                {product.description}
              </p>
              <p className="mt-2 text-sm font-semibold text-forest">
                {product.price}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 grid items-stretch gap-8 sm:mt-20 lg:mt-24 lg:grid-cols-2 lg:gap-10">
          <div className="relative min-h-[480px] overflow-hidden rounded-[1.85rem] sm:min-h-[560px] sm:rounded-[2rem] lg:min-h-full">
            <CoverImage
              src="/img1.jpeg"
              alt="Green tea extract line"
              objectPosition="center 40%"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-x-5 top-5 rounded-[1.5rem] bg-white/20 px-5 py-5 backdrop-blur-md sm:inset-x-6 sm:top-6 sm:px-7 sm:py-6">
              <p className="max-w-sm text-xl leading-snug font-medium text-white sm:text-2xl">
                Discover the{" "}
                <span className="font-tan text-[1.35em] font-bold text-[#b7d98c]">
                  power
                </span>{" "}
                of our new green tea{" "}
                <span className="font-tan text-[1.35em] font-bold text-[#b7d98c]">
                  extract
                </span>{" "}
                line{" "}
                <span aria-hidden="true">🍃</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
            {GREEN_TEA_PRODUCTS.map((product) => (
              <Link
                key={product.name}
                href="/product"
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-md sm:rounded-[1.75rem]">
                  <CoverImage
                    src={product.src}
                    alt={product.name}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    objectPosition="center"
                    className="transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/75 px-3 py-1 text-[11px] text-forest backdrop-blur-sm">
                    {product.tag}
                  </span>
                </div>
                <h2 className="mt-3 text-[15px] font-semibold text-forest sm:text-base">
                  {product.name}
                </h2>
                <p className="mt-1 text-[12px] text-forest-muted sm:text-[13px]">
                  {product.description}
                </p>
                <p className="mt-2 text-sm font-semibold text-forest">
                  {product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div ref={saleRef} className="relative mt-16 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 lg:gap-x-8">
            {saleItems.map((product) => (
              <Link
                key={product.id}
                href="/product"
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-md sm:rounded-[1.75rem]">
                  <CoverImage
                    src={product.src}
                    alt={product.name}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    objectPosition="center"
                    className="transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-forest/55 px-3 py-1 text-[11px] text-white backdrop-blur-sm">
                    {product.tag}
                  </span>
                </div>
                <h2 className="mt-3 text-[15px] font-semibold text-forest sm:text-base">
                  {product.name}
                </h2>
                <p className="mt-1 text-[12px] text-forest-muted sm:text-[13px]">
                  {product.description}
                </p>
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-forest">
                    {product.price}
                  </span>
                  <span className="text-[13px] text-forest/40 line-through">
                    {product.oldPrice}
                  </span>
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 sm:mt-14 sm:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {pageButtons.map((item, index) =>
                item === "…" ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-1 text-sm text-forest-muted"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={item}
                    type="button"
                    aria-current={item === page ? "page" : undefined}
                    onClick={() => goToPage(item)}
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm transition ${
                      item === page
                        ? "bg-forest text-white"
                        : "border border-forest/25 text-forest hover:border-forest"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
              <button
                type="button"
                aria-label="Next page"
                disabled={page >= TOTAL_PAGES}
                onClick={() => goToPage(Math.min(page + 1, TOTAL_PAGES))}
                className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-forest transition hover:bg-sage-pale disabled:opacity-30"
              >
                »
              </button>
            </div>

            <button
              type="button"
              disabled={page >= TOTAL_PAGES}
              onClick={loadMore}
              className="rounded-full border border-forest px-10 py-3 text-[11px] font-medium tracking-[0.22em] text-forest uppercase transition hover:bg-forest hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              Load more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function paginationItems(current: number, total: number): (number | "…")[] {
  if (current <= 4) {
    return [1, 2, 3, 4, 5, "…", total];
  }
  if (current >= total - 3) {
    return [1, "…", total - 4, total - 3, total - 2, total - 1, total];
  }
  return [1, "…", current - 1, current, current + 1, "…", total];
}
