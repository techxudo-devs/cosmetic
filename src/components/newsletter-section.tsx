"use client";

import { FormEvent, useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setJoined(true);
  }

  return (
    <div className="relative z-10 flex flex-col items-center px-5 pt-16 text-center sm:pt-20 lg:pt-24">
      <h2 className="max-w-lg text-[1.65rem] font-semibold leading-snug text-white sm:max-w-xl sm:text-3xl lg:max-w-2xl lg:text-[2.15rem]">
        Join our eco circle. Fresh updates, clean beauty
      </h2>

      {joined ? (
        <p className="mt-8 text-lg text-white/90">
          Welcome to the circle — we will write soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-7 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-2.5"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="flex h-12 w-full max-w-[280px] items-center rounded-full bg-cream px-5 sm:h-[52px] sm:max-w-[300px]">
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="E-mail"
              className="min-w-0 flex-1 bg-transparent text-[15px] text-forest outline-none placeholder:text-forest/35"
            />
            <span className="ml-2 text-forest/45" aria-hidden="true">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  d="M9 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <button
            type="submit"
            className="inline-flex h-12 shrink-0 items-center gap-3 rounded-full bg-forest py-1.5 pr-1.5 pl-6 text-white transition hover:bg-forest-deep sm:h-[52px]"
          >
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase">
              Contact me
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/90">
              <svg
                width="13"
                height="13"
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
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
