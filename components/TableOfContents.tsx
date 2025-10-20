"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Get all headings from the article
    const elements = Array.from(document.querySelectorAll("article h2, article h3"));
    const headingData = elements.map((element) => ({
      id: element.id,
      text: element.textContent || "",
      level: parseInt(element.tagName.charAt(1)),
    }));
    setHeadings(headingData);

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <List className="h-5 w-5 text-accent-1" />
        <h3 className="font-heading font-bold">Table of Contents</h3>
      </div>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id} style={{ paddingLeft: `${(heading.level - 2) * 0.75}rem` }}>
            <a
              href={`#${heading.id}`}
              className={`text-sm hover:text-accent-1 transition-colors block ${
                activeId === heading.id
                  ? "text-accent-1 font-semibold"
                  : "text-text/70"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
