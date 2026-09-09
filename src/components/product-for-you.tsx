import { CoverImage } from "@/components/cover-image";

const TEXT_PILL =
  "inline-flex h-12 shrink-0 items-center rounded-full border border-sage bg-white px-5 text-sm text-forest transition duration-300 hover:-translate-y-1 hover:shadow-sm";

const IMAGE_PILL =
  "relative h-12 shrink-0 overflow-hidden rounded-full transition duration-300 hover:-translate-y-1 hover:shadow-md";

export function ProductForYou() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:rounded-[2.25rem] lg:max-h-[640px] lg:aspect-[4/5]">
          <CoverImage
            src="/img3.jpeg"
            alt="Forest Therapy Face Mask on skin"
            objectPosition="center top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h2 className="max-w-md text-center text-xl leading-snug text-forest sm:text-2xl lg:text-left">
            This mask is for you, if you have one...
          </h2>

          <div className="mt-10 flex w-full max-w-[520px] flex-col items-center gap-3.5 sm:mt-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ImagePill src="/leaf.jpeg" alt="Leaf" className="w-[7.75rem]" />
              <span className={TEXT_PILL}>oiliness</span>
              <ImagePill src="/aloe.jpeg" alt="Aloe" className="w-[8.5rem]" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:translate-x-4">
              <span className={TEXT_PILL}>uneven texture</span>
              <span className={TEXT_PILL}>pores</span>
              <ImagePill src="/moss.jpeg" alt="Moss" className="w-[7.25rem]" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:-translate-x-3">
              <ImagePill src="/img1.jpeg" alt="Forest" className="w-32" />
              <span className={TEXT_PILL}>comedones</span>
              <span className={TEXT_PILL}>dryness</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:translate-x-2">
              <span className={TEXT_PILL}>irritation</span>
              <span className={TEXT_PILL}>Hyperpigmentation</span>
              <ImagePill src="/leaf.jpeg" alt="Dew" className="w-[7.5rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImagePill({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <div className={`${IMAGE_PILL} ${className}`}>
      <CoverImage src={src} alt={alt} sizes="140px" objectPosition="center" />
    </div>
  );
}
