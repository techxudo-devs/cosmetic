import { CoverImage } from "@/components/cover-image";

const GROUPS = [
  [
    { label: "Best for:", value: "Oily and stressed skin" },
    { label: "Feels like:", value: "Cool + creamy on application" },
    { label: "Your Result:", value: "Clearer pores, reduced redness" },
  ],
  [
    { label: "Application:", value: "Apply, wait, rinse — done" },
    { label: "How often:", value: "2–3× a week for best results" },
    { label: "Good mix:", value: "Niacinamide, hyaluronic acid" },
    { label: "Not great:", value: "Retinol, AHA/BHA" },
  ],
  [
    {
      label: "FYI:",
      value: "Non-comedogenic, dermatologically tested",
      compact: true,
    },
  ],
];

export function ProductFacts() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        <div className="flex flex-col">
          {GROUPS.map((rows, groupIndex) => (
            <div key={rows[0].label}>
              {groupIndex > 0 ? (
                <div className="my-6 h-px bg-sage sm:my-7" />
              ) : null}
              <dl className="grid grid-cols-[auto_1fr] items-center gap-x-8 gap-y-4 sm:gap-x-12 sm:gap-y-5">
                {rows.map((row) => (
                  <div key={row.label} className="contents">
                    <dt>
                      <span className="inline-flex rounded-full bg-forest px-3.5 py-1.5 text-[13px] font-medium text-white sm:px-4">
                        {row.label}
                      </span>
                    </dt>
                    <dd
                      className={`text-forest ${
                        row.compact
                          ? "max-w-[14rem] text-sm leading-snug"
                          : "text-[15px] leading-snug"
                      }`}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <div className="relative aspect-square overflow-hidden rounded-[2rem] lg:aspect-[4/4.15]">
          <CoverImage
            src="/img3.jpeg"
            alt="Forest Therapy Face Mask on skin"
            objectPosition="center top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
