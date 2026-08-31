# 143IT Daily Blog Publishing Guide

The blog is moving from a static archive to a daily publishing workflow. Use this guide to keep posts consistent, useful, and maintainable.

## Daily publishing checklist

- Pick one focused topic tied to Azure, automation, AI workflows, Microsoft 365, DevOps, security, or cost control.
- Confirm whether the post is `current` or `archive`.
- Create the MDX article under `app/blog/<slug>/page.mdx`.
- Add the post metadata to `lib/blog-posts.ts`.
- Include a practical CTA to Azure VM Manager, consulting, or contact us for pricing.
- Add source links for technical claims that change over time.
- Include `date` and `lastReviewed`.
- Run `npm run build`.
- Check `/blog`, the article page, `/sitemap.xml`, and `/feed.xml`.
- Commit the post and metadata together.

## Recommended daily article structure

1. Problem: what operational issue is the reader dealing with?
2. Why it matters: cost, reliability, security, compliance, or time impact.
3. Practical fix: specific recommendation, workflow, script, control, or architecture.
4. 143IT perspective: how this connects to Azure VM Manager, automation, or cloud operations.
5. Next step: request a demo, contact support, or start a review.

## Content lanes

- Azure Operations
- Azure VM Manager
- Automation Notes
- Cost Optimization
- Security & Compliance
- Microsoft 365
- DevOps
- AI + n8n Workflows
- Field Notes

## Quality bar

- Avoid unsupported uptime, support, or savings guarantees.
- Do not publish customer-specific details.
- Prefer concrete examples over broad MSP language.
- Label older content as archive material instead of presenting it as current.
- Keep year-specific posts reviewed or retire them into the archive.

## Starter topics for the first two weeks

- What Azure VM sprawl looks like before it becomes expensive
- How to spot idle Azure VMs before the monthly invoice lands
- When to stop a VM versus resize it
- Azure tagging standards that make automation possible
- Service Bus patterns for safe automation execution
- Why API-executed automation needs guardrails
- A practical checklist for Azure subscription readiness
- Where n8n fits in IT operations automation
- Daily Azure cost checks every small team should run
- Common Microsoft 365 admin tasks worth automating
