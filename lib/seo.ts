/**
 * SEO Utilities
 * Helper functions for SEO and structured data
 */

export interface PersonSchema {
  "@context": string
  "@type": string
  name: string
  url: string
  jobTitle?: string
  description?: string
  sameAs?: string[]
  image?: string
}

export interface WebsiteSchema {
  "@context": string
  "@type": string
  name: string
  url: string
  description?: string
  author?: {
    "@type": string
    name: string
  }
}

/**
 * Generate Person structured data (JSON-LD)
 */
export function generatePersonSchema(
  name: string,
  url: string,
  jobTitle?: string,
  description?: string,
  socialLinks?: string[],
  image?: string
): PersonSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url,
    ...(jobTitle && { jobTitle }),
    ...(description && { description }),
    ...(socialLinks && socialLinks.length > 0 && { sameAs: socialLinks }),
    ...(image && { image }),
  }
}

/**
 * Generate Website structured data (JSON-LD)
 */
export function generateWebsiteSchema(
  name: string,
  url: string,
  description?: string,
  authorName?: string
): WebsiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    ...(description && { description }),
    ...(authorName && {
      author: {
        "@type": "Person",
        name: authorName,
      },
    }),
  }
}

/**
 * Generate BreadcrumbList structured data (JSON-LD)
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
