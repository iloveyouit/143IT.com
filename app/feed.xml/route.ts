import { latestBlogPosts } from "@/lib/blog-posts";

const baseUrl = "https://143it.com";

export async function GET() {
  const items = latestBlogPosts
    .map(
      (post) => `<item>
  <title><![CDATA[${post.title}]]></title>
  <link>${baseUrl}${post.href}</link>
  <guid>${baseUrl}${post.href}</guid>
  <description><![CDATA[${post.excerpt}]]></description>
  <category><![CDATA[${post.category}]]></category>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
    )
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>143IT Blog</title>
  <link>${baseUrl}/blog</link>
  <description>Daily practical notes on Azure operations, automation, AI workflows, Microsoft 365, DevOps, security, and cost control.</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
