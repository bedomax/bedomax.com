---
name: lead-generation
description: Conversion rate optimization and lead generation strategy for websites. Use when building landing pages, forms, CTAs, pricing pages, or any feature whose goal is converting visitors into leads or customers.
---

# Lead Generation

Every site we build exists to convert visitors into leads. Design and code accordingly.

## The Conversion Equation

Conversion = Motivation × Clarity × Ease − Friction − Anxiety. Every feature should increase one of the first three or reduce one of the last two.

## Landing Page Anatomy (in order)

1. **Hero**: benefit-driven headline (what the visitor gets, not what we do), supporting subheadline, primary CTA, hero visual showing the outcome.
2. **Social proof strip**: client logos, review score, or key metric.
3. **Problem → Solution**: name the visitor's pain, present the offer as the resolution.
4. **Benefits** (3–4, outcome-focused) before features.
5. **Proof**: testimonials with names/photos, case study numbers, certifications.
6. **Objection handling**: FAQ, guarantee, "no commitment" signals.
7. **Final CTA section**: repeat the offer with urgency or a risk reversal.

## CTAs

- One primary CTA per page; repeat it every 1.5–2 screens of scroll.
- Verb + value: "Get my free quote", "Start the audit" — never "Submit" or "Learn more" for primary actions.
- Contrast color reserved exclusively for CTAs.
- Sticky/floating CTA on mobile for long pages.

## Forms (where leads are won or lost)

- Ask the minimum: name + email (+ phone only if sales requires it). Each extra field drops conversion ~5–10%.
- Multi-step forms for complex qualification: start with the easy question, ask contact info last.
- Inline validation, clear error recovery, never wipe input.
- Confirmation page or message that sets expectations ("We'll reply within 2 hours") and offers a secondary action.
- Spam protection that doesn't hurt humans: honeypot + time-trap first, invisible CAPTCHA only if needed.

## Trust Signals

- Real photos, full names, and company names in testimonials.
- Specific numbers beat adjectives: "127 sites launched" > "many happy clients".
- Privacy reassurance next to forms ("We never share your data").
- SSL, recognizable payment/certification badges where relevant.

## Measurement (no tracking = no optimization)

- Track as conversion events: form submissions, CTA clicks, phone/email clicks, scroll depth on key pages.
- Every form submit success fires an analytics event with the source page.
- UTM parameters preserved through navigation and stored with the lead.
- Define the primary conversion metric in the spec before building.

## Speed = Money

- Every second of load time costs ~7% conversion. Core Web Vitals budgets are conversion requirements, not nice-to-haves.

## Lead-Gen Review Checklist

- [ ] Clear value proposition above the fold
- [ ] Primary CTA visible without scrolling and repeated down the page
- [ ] Form is minimal, validated, spam-protected
- [ ] Lead persisted server-side before any side effect
- [ ] Conversion events tracked with source attribution
- [ ] At least two trust signals near the conversion point
