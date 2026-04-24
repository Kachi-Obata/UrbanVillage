import type { NextConfig } from "next";
import { networkInterfaces } from "node:os";

const localIPv4s = Object.values(networkInterfaces())
  .flatMap((items) => items ?? [])
  .filter((item) => item.family === "IPv4" && !item.internal)
  .map((item) => item.address);

const allowedDevOrigins = [
  "localhost",
  "127.0.0.1",
  ...localIPv4s,
];

const nextConfig: NextConfig = {
  allowedDevOrigins,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
  },
};

export default nextConfig;
