# Blog Post Template

Use this template when drafting a daily 143IT blog post.

```mdx
import BlogArticleLayout from "@/components/BlogArticleLayout";

export const metadata = {
  title: "Post Title | 143IT Blog",
  description: "One-sentence summary for search and social previews.",
};

<BlogArticleLayout
  title="Post Title"
  date="YYYY-MM-DD"
  lastReviewed="YYYY-MM-DD"
  readTime="X min read"
  href="/blog/post-slug"
  excerpt="One-sentence summary for cards, search, and RSS."
  author={{
    name: "Rob Loftin",
    bio: "Founder and Principal Cloud Architect at 143IT",
  }}
  tags={["Azure", "Automation"]}
  category="Azure Operations"
>

Opening paragraph that defines the problem clearly.

## Why this matters

Explain cost, reliability, security, compliance, or time impact.

## Practical fix

Give a concrete recommendation, workflow, script, checklist, or architecture.

## 143IT perspective

Connect the topic to Azure VM Manager, automation, cloud operations, or consulting.

## Next step

If this applies to your environment, contact 143IT to review the opportunity or request an Azure VM Manager demo.

</BlogArticleLayout>
```

After creating the MDX file, add the post to `lib/blog-posts.ts`.
