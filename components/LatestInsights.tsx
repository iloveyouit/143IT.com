import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { latestBlogPosts } from "@/lib/blog-posts";
import { formatDate } from "@/lib/format-date";

export default function LatestInsights() {
  const posts = latestBlogPosts.slice(0, 3);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Latest <span className="gradient-text">IT Operations Insights</span>
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Practical Azure, automation, AI workflow, and security notes.
            Archive content is labeled clearly while the daily publishing
            workflow grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl overflow-hidden hover:border-accent-1/50 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="text-accent-1 text-sm font-semibold mb-3">
                  {post.category}
                </div>

                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-accent-1 transition-colors">
                  <Link href={post.href}>{post.title}</Link>
                </h3>

                <p className="text-text/70 mb-4">{post.excerpt}</p>

                <div className="flex items-center space-x-4 text-sm text-text/60 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link
                  href={post.href}
                  className="inline-flex items-center space-x-2 text-accent-1 hover:text-ctaHover transition-colors font-semibold text-sm"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn-secondary">
            Browse Insights
          </Link>
        </div>
      </div>
    </section>
  );
}
