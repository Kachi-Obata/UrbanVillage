import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-night py-16 text-center">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <div className="mx-auto w-fit mb-8">
          <Image
            src="/urban-village-logo.png"
            alt="Urban Village by Terivik logo"
            width={120}
            height={240}
            priority={false}
            className="h-auto w-[92px] lg:w-[110px] object-contain opacity-95"
          />
        </div>
        <p className="font-display text-[18px] tracking-[0.2em] text-cream/80 uppercase">
          Urban Village
        </p>
        <p className="font-sans text-[11px] text-cream/40 mt-3">
          by Terivik
        </p>

        <div className="flex items-center justify-center gap-3 mt-10">
          <a
            href="https://www.instagram.com/urbanvillagebyterivik/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="font-sans text-[12px] text-cream/50 hover:text-cream transition-colors duration-200"
          >
            Instagram
          </a>
          <span className="text-cream/20 text-[12px]">|</span>
          <a
            href="https://maps.google.com/?q=Terivik+Park,+Alvan+Ikoku,+Maitama,+Abuja"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="font-sans text-[12px] text-cream/50 hover:text-cream transition-colors duration-200"
          >
            Google Maps
          </a>
          <span className="text-cream/20 text-[12px]">|</span>
          <a
            href="mailto:terivikparkurbanvillage@gmail.com"
            data-cursor="hover"
            className="font-sans text-[12px] text-cream/50 hover:text-cream transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        <p className="font-sans text-[11px] text-cream/30 mt-10">
          © 2025 Urban Village by Terivik. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
