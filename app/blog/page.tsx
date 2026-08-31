import BlogIndexClient from "@/components/BlogIndexClient";
import {
  blogCategories,
  featuredBlogPost,
  latestBlogPosts,
} from "@/lib/blog-posts";

export default function BlogPage() {
  return (
    <BlogIndexClient
      posts={latestBlogPosts}
      categories={blogCategories}
      featured={featuredBlogPost}
    />
  );
}
