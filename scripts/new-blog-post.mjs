#!/usr/bin/env node

const [, , titleArg] = process.argv;

if (!titleArg) {
  console.error('Usage: npm run blog:new -- "Post Title"');
  process.exit(1);
}

const slug = titleArg
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const today = new Date().toISOString().slice(0, 10);
const route = `/blog/${slug}`;

console.log(`Create: app/blog/${slug}/page.mdx`);
console.log(`Route:  ${route}`);
console.log(`Date:   ${today}`);
console.log("");
console.log("Next steps:");
console.log("1. Copy BLOG_POST_TEMPLATE.md into the new page.mdx.");
console.log("2. Replace the title, excerpt, tags, category, and body.");
console.log("3. Add the post metadata to lib/blog-posts.ts.");
console.log("4. Run npm run build.");
