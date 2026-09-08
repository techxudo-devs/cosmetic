import Image from "next/image";

type CoverImageProps = {
  alt: string;
  src?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
};

export function CoverImage({
  alt,
  src = "/img1.jpeg",
  className = "",
  priority,
  sizes = "100vw",
  objectPosition,
}: CoverImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${className}`}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );
}
