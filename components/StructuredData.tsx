import type { Metadata } from "next";

interface StructuredDataProps {
  type?: "Organization" | "WebSite" | "Service" | "BlogPosting";
  data?: Record<string, any>;
}

export default function StructuredData({ type = "Organization", data }: StructuredDataProps) {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "143IT",
    url: "https://143it.com",
    logo: "https://143it.com/logo.png", // Update with actual logo URL
    description: "Next-Gen IT Management with Cloud, Automation, and AI at the Core.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-720-292-6098",
      contactType: "Customer Service",
      email: "support@143it.com",
      areaServed: ["US", "CA"],
    },
    sameAs: [
      "https://github.com/iloveyouit",
      "https://www.linkedin.com/in/rob-loftin-143it",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "143IT",
    url: "https://143it.com",
    description: "Automate & Dominate with AI - Next-Gen IT Management Services",
    publisher: {
      "@type": "Organization",
      name: "143IT",
    },
  };

  let structuredData;

  switch (type) {
    case "Organization":
      structuredData = { ...baseOrganization, ...data };
      break;
    case "WebSite":
      structuredData = { ...website, ...data };
      break;
    default:
      structuredData = data || baseOrganization;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  );
}

