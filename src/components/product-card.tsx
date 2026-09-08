import { CoverImage } from "@/components/cover-image";

type ProductCardProps = {
  name: string;
  price: string;
  objectPosition?: string;
};

export function ProductCard({
  name,
  price,
  objectPosition,
}: ProductCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem]">
        <CoverImage
          alt={name}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          objectPosition={objectPosition}
          className="transition duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 font-serif text-[1.05rem] leading-snug text-forest">
        {name}
      </h3>
      <p className="mt-1 text-sm tracking-wide text-forest-muted">{price}</p>
    </article>
  );
}
