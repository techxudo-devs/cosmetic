import { CoverImage } from "@/components/cover-image";
import { NewsletterSection } from "@/components/newsletter-section";
import { SiteFooter } from "@/components/site-footer";

export function SiteClosing() {
  return (
    <section className="relative flex min-h-[860px] flex-col justify-between overflow-hidden sm:min-h-[940px] lg:min-h-[1020px]">
      <div className="absolute inset-0">
        <CoverImage
          alt="Veya bottle on forest moss"
          objectPosition="center 58%"
        />
        <div className="absolute inset-x-0 top-0 h-72 bg-linear-to-b from-black/45 via-black/15 to-transparent" />
      </div>
      <NewsletterSection />
      <div className="relative z-20 -mt-24 px-3 pb-3 sm:-mt-32 sm:px-5 sm:pb-5 lg:-mt-40 lg:px-8 lg:pb-7">
        <SiteFooter />
      </div>
    </section>
  );
}
