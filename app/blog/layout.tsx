import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata: Metadata = genMeta({
  title: "Blog — Daily IT Operations Insights | 143IT",
  description: "Daily practical notes on Azure operations, automation, AI workflows, Microsoft 365, DevOps, security, and cost control from 143IT.",
  path: "/blog",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
