/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/omaroscript-web" : "",
  assetPrefix: isProd ? "/omaroscript-web/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;