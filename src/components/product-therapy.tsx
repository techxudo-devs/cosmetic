import { CoverImage } from "@/components/cover-image";

export function ProductTherapy() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:rounded-[2.25rem] lg:aspect-[4/4.6]">
          <CoverImage
            src="/mask-brush.jpeg"
            alt="Applying Forest Therapy Face Mask"
            objectPosition="center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="text-base text-forest-muted sm:text-lg">
            Therapy that restores and rejuvenates
          </p>
          <h2 className="mt-4 text-[2.75rem] leading-[1.12] font-semibold tracking-tight sm:text-5xl lg:text-[3.6rem]">
            <span className="block text-[#0A3D2E]">hydrates</span>
            <span className="block text-[#4E6B4E]">refurbish</span>
            <span className="block text-sage">moisturizes</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
