import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface RelatedPost {
  title: string;
  excerpt: string;
  href: string;
  date: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div>
      <h2 className="text-3xl font-heading font-bold mb-8">
        Related <span className="gradient-text">Articles</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={post.href}
            className="group bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-6 hover:border-accent-1/50 transition-all duration-300"
          >
            <h3 className="text-lg font-heading font-bold mb-3 group-hover:text-accent-1 transition-colors">
              {post.title}
            </h3>
            <p className="text-text/70 text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-text/60">
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-1 text-accent-1 group-hover:text-ctaHover transition-colors">
                <span>Read more</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
