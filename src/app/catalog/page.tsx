import type { Metadata } from "next";
import { CatalogView } from "@/components/catalog-view";
import { SiteClosing } from "@/components/site-closing";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Catalog — Veya",
  description:
    "Shop Veya forest skincare — eye patches, serums, moss essence, and body care.",
};

export default function CatalogPage() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <SiteHeader tone="page" />
      <main>
        <CatalogView />
        <SiteClosing />
      </main>
    </div>
  );
}
