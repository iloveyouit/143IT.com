import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About 143IT — Cloud, Automation, AI, and Azure VM Manager",
  description:
    "Learn about 143IT, a remote cloud and automation company serving the United States and Canada, and the team behind Azure VM Manager.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About 143IT",
    description:
      "Cloud, automation, AI-enabled infrastructure services, and the team behind Azure VM Manager.",
    type: "website",
    url: "https://143it.com/about",
    siteName: "143IT",
    images: [
      {
        url: "https://143it.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "About 143IT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About 143IT",
    description:
      "Cloud, automation, AI-enabled infrastructure services, and the team behind Azure VM Manager.",
    images: ["https://143it.com/og-image.svg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
