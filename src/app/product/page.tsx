import type { Metadata } from "next";
import { ProductFacts } from "@/components/product-facts";
import { ProductForYou } from "@/components/product-for-you";
import { ProductHero } from "@/components/product-hero";
import { ProductIngredients } from "@/components/product-ingredients";
import { ProductPairing } from "@/components/product-pairing";
import { ProductTherapy } from "@/components/product-therapy";
import { ProductWhy } from "@/components/product-why";
import { SiteClosing } from "@/components/site-closing";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Forest Therapy Face Mask — Veya",
  description:
    "A creamy mask inspired by the forest — wild herbal extracts and mineral-rich clays to purify, calm, and freshen oily, stressed skin.",
};

export default function ProductPage() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <SiteHeader />
      <main>
        <ProductHero />
        <ProductFacts />
        <ProductWhy />
        <ProductTherapy />
        <ProductIngredients />
        <ProductForYou />
        <ProductPairing />
        <SiteClosing />
      </main>
    </div>
  );
}
