# 143IT Website - Implementation Details

This document consolidates the technical implementation details for the features added to the 143IT website in November 2025.

## 1. Contact Form Integration

### Overview
The contact form at `/contact` is integrated with n8n via a webhook. It includes robust validation, rate limiting, and error handling.

### Key Components
- **Frontend**: `app/contact/page.tsx` - React form with state management.
- **Backend**: `app/api/contact/route.ts` - API route handling submission.
- **Validation**: Zod schema ensures all fields are present and valid.
- **Rate Limiting**: `lib/rate-limit.ts` - Limits to 5 requests per 15 minutes per IP.

### Configuration
Required environment variable:
```bash
N8N_CONTACT_WEBHOOK=https://your-n8n-instance.com/webhook/contact
```

### Payload Structure
The API sends the following JSON to n8n:
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "company": "Company Name",
  "phone": "555-0123",
  "service": "managed-it",
  "message": "User message...",
  "source": "143it-website-contact",
  "timestamp": "2025-11-29T12:00:00.000Z"
}
```

---

## 2. Newsletter Integration

### Overview
The newsletter signup form (in footer/components) connects to n8n for double opt-in subscription management.

### Key Components
- **Frontend**: `components/Newsletter.tsx` - Optimistic UI with loading states.
- **Backend**: `app/api/newsletter/route.ts` - API route handling subscription.
- **Validation**: Zod schema validates email format.
- **Rate Limiting**: Limits to 3 requests per 15 minutes per IP.

### Configuration
Required environment variable:
```bash
N8N_NEWSLETTER_WEBHOOK=https://your-n8n-instance.com/webhook/newsletter
```

### Payload Structure
The API sends the following JSON to n8n:
```json
{
  "email": "user@example.com",
  "source": "143it-website-newsletter",
  "timestamp": "2025-11-29T12:00:00.000Z"
}
```

---

## 3. Security Enhancements

### Content Security Policy (CSP)
Implemented in `middleware.ts` to prevent XSS attacks.
- **Directives**:
  - `default-src 'self'`
  - `script-src 'self' 'unsafe-eval' 'unsafe-inline'` (Required for Next.js)
  - `style-src 'self' 'unsafe-inline'`
  - `img-src 'self' blob: data:`
  - `connect-src 'self' https://api.openai.com`

### Image Security
Updated `next.config.mjs` to restrict `remotePatterns`.
- **Removed**: Wildcard `**` hostname.
- **Added**: Specific trusted domains (`143it.com`, `www.143it.com`).

### OpenAI API Security
Enhanced `app/api/chat/route.ts`:
- **Rate Limiting**: 10 requests per minute per IP.
- **Validation**: Zod schema validates `messages` array structure and content length.
- **Error Handling**: Graceful handling of OpenAI 401 (Auth) and 429 (Rate Limit) errors.

---

## 4. Blog Content Generation

Generated 5 missing blog articles to resolve broken links and improve SEO.
- **Tech Stack**: MDX with `next-mdx-remote` (implied).
- **Locations**: `app/blog/[slug]/page.mdx`.
- **Articles**:
  1. `terraform-vs-ansible`
  2. `chatgpt-n8n-workflows`
  3. `azure-misconfigurations`
  4. `cicd-security-best-practices`
  5. `m365-automation-graph-api`

---

## 5. Testing & Verification

### Automated Tests
- `npm run build`: Verifies type safety and build integrity.
- `docker-test.sh`: Verifies containerization.

### Manual Verification
- **Browser Testing**: Verified end-to-end flow for forms using actual n8n webhooks.
- **Security Testing**: Verified rate limits and security headers using `curl`.
