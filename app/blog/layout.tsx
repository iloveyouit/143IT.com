import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata: Metadata = genMeta({
  title: "Blog — Insights That Make IT Simpler | 143IT",
  description: "Thought leadership in IT, automation, and AI integration. Explore articles on DevOps, cloud infrastructure, and modern IT operations.",
  path: "/blog",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

