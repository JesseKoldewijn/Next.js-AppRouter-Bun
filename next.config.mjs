import NextPWA from "next-pwa";
// @ts-ignore
import runtimeCaching from "next-pwa/cache.js";

const withPWA = NextPWA({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: false,
  runtimeCaching,
});

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  experimental: {
    appDir: true,
    serverActions: true,
  },
};

export default withPWA(config);
