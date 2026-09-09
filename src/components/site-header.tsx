import Link from "next/link";

type SiteHeaderProps = {
  tone?: "photo" | "page";
};

export function SiteHeader({ tone = "photo" }: SiteHeaderProps) {
  const onPhoto = tone === "photo";

  return (
    <header
      className={
        onPhoto
          ? "absolute inset-x-0 top-0 z-30"
          : "relative z-30 bg-cream"
      }
    >
      <nav className="mx-auto grid max-w-[1440px] grid-cols-3 items-center px-5 py-6 sm:px-8 lg:px-12">
        <div
          className={`flex items-center gap-6 text-[13px] tracking-[0.14em] sm:gap-10 ${
            onPhoto ? "text-white" : "text-forest"
          }`}
        >
          <Link href="/catalog" className="transition hover:opacity-70">
            Catalog
          </Link>
          <Link href="/product" className="transition hover:opacity-70">
            Shop
          </Link>
        </div>

        <Link
          href="/"
          className={`justify-self-center font-tan text-5xl leading-none sm:text-6xl lg:text-7xl ${
            onPhoto ? "text-white" : "text-forest"
          }`}
        >
          Veya
        </Link>

        <div
          className={`flex items-center justify-end gap-5 text-[13px] tracking-[0.14em] sm:gap-7 ${
            onPhoto ? "text-white" : "text-forest"
          }`}
        >
          <button
            type="button"
            aria-label="Search"
            className="transition hover:opacity-70"
          >
            <SearchIcon />
          </button>
          <Link
            href="#basket"
            className="flex items-center gap-2 transition hover:opacity-70"
          >
            <span className="hidden sm:inline">Basket</span>
            <span
              className={`flex h-5 min-w-5 items-center justify-center rounded-full border px-1 text-[10px] leading-none ${
                onPhoto ? "border-white/70" : "border-forest/40"
              }`}
            >
              0
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}
