---
name: backend-architecture
description: Backend engineering and architecture decisions for scalable websites. Use when designing APIs, data models, databases, caching, auth, background jobs, integrations, infrastructure, or making any system architecture decision.
---

# Backend & Architecture

Build backends that scale, and document every architecture decision.

## Architecture Decision Discipline

Every significant decision goes in the spec's "Architecture Decisions" section:

```
### AD-1: <Decision title>
- **Context**: what problem forces a choice
- **Decision**: what we chose
- **Alternatives**: what we rejected and why
- **Consequences**: trade-offs we accept
```

Decide deliberately on: rendering strategy, database choice, caching layers, API style, hosting model, and third-party services. Default to boring, proven technology; choose the simplest design that meets requirements plus one order of magnitude of growth.

## API Design

- REST by default: nouns for resources, correct verbs and status codes (200/201/204/400/401/403/404/409/422/500).
- Validate every input at the boundary with a schema (Zod/Valibot/Joi); trust nothing from the client.
- Consistent error shape: `{ "error": { "code": "...", "message": "..." } }` — never leak stack traces or internal details.
- Version public APIs (`/api/v1/`); paginate every list endpoint (cursor-based for large sets).
- Rate-limit public endpoints, especially lead/contact forms (abuse + spam protection).

## Data Modeling

- Normalize by default; denormalize only for measured read bottlenecks.
- Every table: primary key, `created_at`, `updated_at`. Use foreign keys with explicit `ON DELETE` behavior.
- Index for actual query patterns; check with EXPLAIN before and after.
- Migrations are forward-only, reversible when possible, and never edit past migrations.
- Leads are sacred data: never lose a form submission — persist first, then trigger side effects (email/CRM) asynchronously with retries.

## Caching (in order of preference)

1. CDN/edge cache for static and SSG/ISR pages.
2. HTTP caching headers (`Cache-Control`, `ETag`) for APIs.
3. Application cache (Redis) for expensive computed data — always with TTL and explicit invalidation strategy.
4. Never cache personalized or lead-submission responses.

## Reliability & Jobs

- Anything slower than ~500ms or with external dependencies (email, CRM sync, image processing) goes to a background job/queue.
- Jobs are idempotent and retried with exponential backoff; failed jobs land in a dead-letter queue with alerting.
- Webhooks: verify signatures, respond fast (202), process async.

## Security Baseline

- Secrets in environment variables only — never committed, never logged.
- Parameterized queries always; no string-built SQL.
- Auth: proven library/provider (never hand-rolled crypto), httpOnly+secure+sameSite cookies for sessions.
- Security headers: CSP, HSTS, X-Content-Type-Options, Referrer-Policy.
- Sanitize and size-limit all user input, especially file uploads and form fields.

## Scalability Defaults

- Stateless application servers: session and state in the database/cache, so horizontal scaling works.
- Connection pooling for the database; know your pool limits vs serverless concurrency.
- Measure before scaling: add observability (structured logs, error tracking, latency metrics) from day one.

## Backend Review Checklist

- [ ] All inputs validated at the boundary
- [ ] Correct status codes and consistent error shape
- [ ] Indexes match query patterns, no N+1
- [ ] Slow/external work in background jobs
- [ ] Lead submissions persisted before side effects
- [ ] No secrets in code, security headers set
- [ ] Architecture decisions recorded in the spec
