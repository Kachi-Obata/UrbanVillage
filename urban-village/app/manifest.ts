import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Urban Village by Terivik",
    short_name: "Urban Village",
    description:
      "Abuja's premier outdoor escape. Dine, unwind, and play at Urban Village by Terivik Park.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1a0e",
    theme_color: "#0f1a0e",
    icons: [
      {
        src: "/images/urban-village-logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/urban-village-logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/urban-village-logo.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
