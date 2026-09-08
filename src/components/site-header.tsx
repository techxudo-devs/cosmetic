import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto grid max-w-[1440px] grid-cols-3 items-center px-5 py-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-6 text-[13px] tracking-[0.14em] text-white sm:gap-10">
          <Link href="#catalog" className="transition hover:opacity-70">
            Catalog
          </Link>
          <Link href="#shop" className="transition hover:opacity-70">
            Shop
          </Link>
        </div>

        <Link
          href="/"
          className="justify-self-center font-tan text-5xl leading-none text-white sm:text-6xl lg:text-7xl"
        >
          Veya
        </Link>

        <div className="flex items-center justify-end gap-5 text-[13px] tracking-[0.14em] text-white sm:gap-7">
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
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/70 px-1 text-[10px] leading-none">
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
