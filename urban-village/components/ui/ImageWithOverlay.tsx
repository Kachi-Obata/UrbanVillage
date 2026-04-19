import Image from "next/image";

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  gradient?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export default function ImageWithOverlay({
  src,
  alt,
  gradient = "linear-gradient(to top, rgba(15,26,14,0.65) 0%, rgba(15,26,14,0.15) 100%)",
  priority = false,
  sizes = "100vw",
  className = "",
}: ImageWithOverlayProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        unoptimized
        className="object-cover"
      />
      <div
        className="absolute inset-0 z-10"
        style={{ background: gradient }}
      />
    </div>
  );
}
