/** @type {import('next').NextConfig} */
// If the site lives under a subpath (e.g. XAMPP http://localhost/nabeen-azan-and-bisharat-wedding-invite/),
// set before build: NEXT_BASE_PATH=/nabeen-azan-and-bisharat-wedding-invite
// Then open that full path (including trailing behavior per Next docs). Omit for http://localhost:3000/
const rawBase = process.env.NEXT_BASE_PATH?.trim() ?? "";
const basePath =
  rawBase.length > 0
    ? rawBase.startsWith("/")
      ? rawBase
      : `/${rawBase}`
    : undefined;

const nextConfig = {
  reactStrictMode: true,
  ...(basePath ? { basePath } : {}),

  // Do not expose source maps in production builds.
  // This makes it harder to inspect original source code in the browser.
  productionBrowserSourceMaps: false,

  images: {
    domains: ["localhost", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;

