"use client";

import Link from "next/link";
import { useState } from "react";
import { Calendar, Clock, Search, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";
import { formatDate } from "@/lib/format-date";

interface BlogIndexClientProps {
  posts: BlogPost[];
  categories: string[];
  featured: BlogPost;
}

export default function BlogIndexClient({
  posts,
  categories,
  featured,
}: BlogIndexClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Posts" || post.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query.length === 0 ||
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const filtersActive =
    searchQuery.trim().length > 0 || selectedCategory !== "All Posts";

  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-accent-1/30 bg-accent-1/10 px-4 py-2 text-sm text-accent-1 mb-6">
            Daily publishing workflow in progress
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Latest <span className="gradient-text">IT Operations Insights</span>
          </h1>
          <p className="text-xl text-text/80 mb-8">
            Practical notes on Azure, automation, AI workflows, Microsoft 365,
            DevOps, security, and cost control. Older articles are clearly
            marked as archive content while new daily posts are added.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text/50" />
              <input
                type="text"
                placeholder="Search articles, tags, or topics..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-background/50 border border-accent-1/30 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-accent-1 transition-colors"
                aria-label="Search blog articles"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 border-b border-accent-1/20">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedCategory === category
                    ? "bg-accent-1 text-background border-accent-1"
                    : "border-accent-1/30 text-text/80 hover:border-accent-1/50 hover:text-text"
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {!filtersActive && featured && (
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-br from-accent-1/10 to-accent-2/10 border border-accent-1/30 rounded-2xl p-8 md:p-12 card-glow">
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="h-4 w-4 text-accent-1" />
                <span className="text-accent-1 text-sm font-semibold">
                  {featured.status === "archive"
                    ? "Archive Highlight"
                    : "Featured Insight"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-accent-2 text-sm font-semibold mb-3">
                    {featured.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    <Link
                      href={featured.href}
                      className="hover:text-accent-1 transition-colors"
                    >
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="text-text/80 mb-6">{featured.excerpt}</p>
                  <PostMeta post={featured} showYear />
                  <Link href={featured.href} className="btn-primary mt-6 inline-block">
                    Read Article
                  </Link>
                </div>
                <div className="text-8xl md:text-9xl text-center">
                  {featured.image ?? "🛠️"}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8 gap-4">
            <h2 className="text-3xl font-heading font-bold">
              {filtersActive
                ? `Search Results (${filteredPosts.length})`
                : "Latest and Archived Articles"}
            </h2>
            {filtersActive && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Posts");
                }}
                className="text-sm text-accent-1 hover:text-ctaHover transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text/60 text-lg mb-4">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Posts");
                }}
                className="btn-secondary"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.href}
                  className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl overflow-hidden hover:border-accent-1/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="text-accent-1 text-sm font-semibold">
                        {post.category}
                      </div>
                      {post.status === "archive" && (
                        <span className="rounded-full border border-text/20 px-2 py-1 text-xs text-text/60">
                          Archive
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-accent-1 transition-colors">
                      <Link href={post.href}>{post.title}</Link>
                    </h3>
                    <p className="text-text/70 mb-4">{post.excerpt}</p>
                    <PostMeta post={post} />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function PostMeta({
  post,
  showYear = false,
}: {
  post: BlogPost;
  showYear?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-text/60">
      <div className="flex items-center space-x-1">
        <Calendar className="h-4 w-4" />
        <span>
          {formatDate(post.date, {
            month: "short",
            day: "numeric",
            ...(showYear ? { year: "numeric" } : {}),
          })}
        </span>
      </div>
      <div className="flex items-center space-x-1">
        <Clock className="h-4 w-4" />
        <span>{post.readTime}</span>
      </div>
      <span>Reviewed {formatDate(post.lastReviewed)}</span>
    </div>
  );
}
