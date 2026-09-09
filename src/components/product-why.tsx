"use client";

import { useState } from "react";
import { CoverImage } from "@/components/cover-image";

const TABS = [
  { id: "why", label: "Why it works?" },
  { id: "ingredients", label: "What are the ingredients?" },
] as const;

const WHY_ITEMS = [
  { name: "Birch 🍃", detail: "strengthens barrier" },
  { name: "Avocado 🥑", detail: "calms + reduces redness" },
  { name: "Aloe 🌿", detail: "hydrates + soothes" },
  { name: "Centella 🌱", detail: "repair+ bust collagen" },
];

const INGREDIENT_ITEMS = [
  { name: "Birch extract", detail: "strengthens barrier" },
  { name: "Avocado oil", detail: "calms + reduces redness" },
  { name: "Aloe leaf juice", detail: "hydrates + soothes" },
  { name: "Centella asiatica", detail: "repair + boost collagen" },
];

export function ProductWhy() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("why");
  const items = tab === "why" ? WHY_ITEMS : INGREDIENT_ITEMS;

  return (
    <section className="bg-cream">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-24">
        <div className="max-w-[34rem]">
          <h2 className="text-[2rem] leading-[1.15] font-semibold text-forest sm:text-[2.35rem] lg:text-[2.75rem]">
            Forest Therapy Face Mask
          </h2>

          <div className="mt-7 flex flex-wrap gap-3">
            {TABS.map((item) => {
              const selected = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setTab(item.id)}
                  className={`rounded-full border bg-transparent px-5 py-2 text-[13px] text-forest transition sm:text-sm ${
                    selected ? "border-forest" : "border-sage hover:border-forest"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <p className="mt-8 max-w-[28rem] text-[15px] leading-[1.7] text-forest">
            {tab === "why"
              ? "This mask is crafted from a blend of wild forest botanicals + mineral clays, processed gently to keep their natural power intact."
              : "A short, honest formula — forest botanicals, mineral clays, and skin-identical humectants. No parabens, no sulfates, no synthetic fragrance."}
          </p>

          <ul className="mt-9 space-y-5">
            {items.map((item) => (
              <li key={item.name} className="flex items-center gap-3">
                <span className="inline-flex shrink-0 rounded-full bg-forest px-4 py-1.5 text-[13px] font-medium text-white">
                  {item.name}
                </span>
                <span className="text-[15px] text-forest">— {item.detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-start justify-center gap-4 sm:gap-5 lg:justify-end lg:pr-4">
          <div className="relative h-[280px] w-[190px] overflow-hidden rounded-[2.25rem] sm:h-[340px] sm:w-[230px] lg:h-[360px] lg:w-[240px] lg:rounded-[2.5rem]">
            <CoverImage
              src="/leaf.jpeg"
              alt="Forest leaf with dew"
              objectPosition="center"
              sizes="240px"
            />
          </div>
          <div className="relative mt-16 h-[320px] w-[200px] overflow-hidden rounded-[2.25rem] sm:mt-20 sm:h-[400px] sm:w-[250px] lg:mt-24 lg:h-[430px] lg:w-[260px] lg:rounded-[2.5rem]">
            <CoverImage
              src="/aloe.jpeg"
              alt="Sliced aloe vera"
              objectPosition="center"
              sizes="260px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
