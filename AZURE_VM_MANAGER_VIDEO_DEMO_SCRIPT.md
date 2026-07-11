# Azure VM Manager Video Demo Script

**Status:** Ready for recording prep  
**Recommended length:** 2–3 minutes for website/social; 5–7 minutes for sales follow-up  
**Audience:** Infrastructure leaders, MSP owners, cloud engineers, and operations teams  
**Primary CTA:** Request a demo  

## Video Goal

Show that Azure VM Manager turns recurring Azure VM operations into a controlled, visible, and auditable workflow. The video should build confidence without overstating current product maturity, support commitments, or production architecture.

## Required Safety Rules

- Use only synthetic demo data.
- Do not show tenant IDs, subscription IDs, real resource group names, VM names, IP addresses, hostnames, user emails, tokens, secrets, webhook URLs, logs with sensitive values, or customer data.
- Do not claim formal product uptime, response targets, service credits, or SLA coverage.
- Distinguish current behavior from planned production architecture if architecture is mentioned.
- If live Azure is shown, use a dedicated demo subscription with non-sensitive resources.

## Recommended Storyline

### 0:00–0:15 — Opening Problem

Narration:

> Azure VM operations often start simple, but as environments grow, requests can get scattered across portal sessions, scripts, tickets, and individual operator knowledge. That makes status, ownership, and audit history harder to track.

Visual:

- Title card: “Azure VM Manager”
- Subtitle: “Controlled Azure VM operations with clear accountability”
- Optional simple diagram: Portal / scripts / tickets → controlled workflow

### 0:15–0:35 — Product Positioning

Narration:

> Azure VM Manager is being built by 143IT to help infrastructure teams and MSPs request, track, and audit recurring virtual machine operations through a clearer workflow.

Visual:

- Show product landing/dashboard screen.
- Use demo tenant label, for example: “Contoso Demo Environment.”

### 0:35–1:05 — Select the Target

Narration:

> The workflow starts by selecting the approved Azure context: subscription, resource group, and the virtual machine or machines involved in the operation.

Visual:

- Show subscription selector.
- Show resource group selector.
- Show VM list with synthetic VM names, such as `vm-demo-app-01` and `vm-demo-db-01`.

On-screen callout:

- “Use approved Azure access”
- “Synthetic demo data”

### 1:05–1:35 — Review the Request

Narration:

> Before work is performed, the request can be reviewed so the target, action, and operational intent are clear.

Visual:

- Show an operation request screen.
- Show action, target, requester, and notes if available.
- Avoid showing any real user or customer details.

On-screen callout:

- “Explicit action”
- “Clear target”
- “Review before execution”

### 1:35–2:05 — Track Status

Narration:

> Once submitted, the team can follow status instead of losing context across handoffs. The goal is to make the operational path easier to understand.

Visual:

- Show status/progress screen.
- Show operation ID only if it is synthetic.
- Show demo statuses such as `Queued`, `Running`, `Completed`, or `Needs Review`.

On-screen callout:

- “Visible status”
- “Operational context”

### 2:05–2:35 — Audit History

Narration:

> After completion, the operation record helps answer who requested the action, what was targeted, and how it completed.

Visual:

- Show audit/history screen.
- Highlight timestamp, action, status, and result.

On-screen callout:

- “Request history”
- “Outcome record”
- “Audit-ready workflow”

### 2:35–2:55 — Launch Boundary and CTA

Narration:

> Azure VM Manager is available through an assisted launch process. Start with a product demo, and qualified organizations with a business email and active Azure subscription can be considered for an assisted trial.

Visual:

- Show product page CTA or demo request form.
- Show “Request a Demo.”

CTA:

> Request a demo at 143it.com.

## Short Website Version

Use this shorter cut for the website hero/demo page:

1. Problem: fragmented Azure VM operations
2. Select target
3. Review request
4. Track status
5. Review audit history
6. Request demo

Target duration: 90–120 seconds.

## Recording Checklist

- [ ] Use dedicated demo environment.
- [ ] Browser zoom set to 100% or 110%.
- [ ] Hide bookmarks, extensions, personal tabs, desktop notifications, and menu bar distractions.
- [ ] Confirm all visible data is synthetic.
- [ ] Record at 1440 × 900 or 1920 × 1080.
- [ ] Capture clean audio separately if possible.
- [ ] Record one full pass without narration, then one pass with narration if needed.
- [ ] Save raw recording before editing.

## Post-Production Checklist

- [ ] Blur or crop any accidental identifiers.
- [ ] Add short title cards and section labels.
- [ ] Add captions.
- [ ] Keep background music low or omit it.
- [ ] Export 1080p MP4 for website use.
- [ ] Export a shorter social clip if needed.
- [ ] Product/security reviewer approves final cut before publishing.

## Website Integration Notes

- Place the final video on `/products/azure-vm-manager/demo`.
- Add a product-page CTA: “Watch Demo.”
- Keep the guided workflow preview as a fallback for visitors who do not want to watch video.
- Track video CTA clicks and demo-page views using the analytics event plan.
