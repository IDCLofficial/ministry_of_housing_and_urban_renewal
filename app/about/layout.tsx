import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description: "Mission, vision and core responsibilities of the Imo State Ministry of Housing and Urban Development: affordable housing, policy reform and urban regeneration.",
  path: "/about",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
