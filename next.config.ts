import type { NextConfig } from "next";
const nextConfig: NextConfig = {
 experimental: { serverActions: { bodySizeLimit: "6mb" } },
 images: { remotePatterns: [{ protocol: "https", hostname: "nyiamzhitbzfuurgmnca.supabase.co", pathname: "/storage/v1/object/public/cms-public/**", search: "" }] },
};
export default nextConfig;
