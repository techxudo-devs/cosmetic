"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What ingredients are used in Veya products?",
    answer:
      "Every formula is built around forest botanicals — moss extract, spruce needle oil, green tea, and cold-pressed plant butters. We skip parabens, sulfates, and synthetic fragrance so your skin meets only what the woods intended.",
  },
  {
    question: "Are your products suitable for sensitive skin?",
    answer:
      "Yes. Our textures are pH-balanced and dermatologically tested. Start with the Moss Recovery Mask or Pine Dew Toner if your barrier feels tight, and patch-test new products on the inner arm first.",
  },
  {
    question: "How should I use the forest moss line?",
    answer:
      "Cleanse, tone, then press a few drops of spruce serum into damp skin. Seal with Forest Moss Cream in the morning and Cedar Night Balm after dusk. A thin layer is enough — forest actives are concentrated.",
  },
  {
    question: "Do you use eco-friendly packaging?",
    answer:
      "Bottles are glass or PCR plastic, cartons are FSC-certified, and we never include plastic fillers. Return empties to any Veya partner store and we refill or recycle them in-house.",
  },
  {
    question: "Where do you source your botanicals?",
    answer:
      "Moss and spruce are harvested from managed Nordic forests under seasonal quotas. Green tea comes from small-lot gardens. We work only with suppliers who restore more canopy than they take.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-sage-pale">
      <div className="mx-auto max-w-[920px] px-5 py-20 sm:px-8 lg:py-28">
        <h2 className="text-center font-serif text-5xl text-forest sm:text-6xl">
          FAQ
        </h2>
        <ul className="mt-12 divide-y divide-forest/15 border-y border-forest/15">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
                >
                  <span className="font-serif text-lg text-forest sm:text-xl">
                    {item.question}
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center text-2xl font-light leading-none text-forest"
                    aria-hidden="true"
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 max-w-2xl text-sm leading-relaxed text-forest-muted sm:pb-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
