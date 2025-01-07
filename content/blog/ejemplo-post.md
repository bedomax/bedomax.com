---
title: "How to structure a blog with Next.js 15"
date: "2025-01-15"
excerpt: "Learn how to create a scalable blog system using Markdown files and Next.js 15 with App Router."
author: "Bedo"
tags: ["Next.js", "React", "Tutorial", "Web Development"]
published: true
---

# Introduction

This is an example post that shows how the blog system works. Posts are written in **Markdown** and can be uploaded directly to GitHub.

## Main Features

- ✅ Posts in Markdown
- ✅ Metadata in frontmatter (YAML)
- ✅ Static generation with SSG
- ✅ SEO optimized
- ✅ Tags and categories
- ✅ Code syntax highlighting

## Code Example

You can include code in your posts:

```typescript
export async function getAllPosts() {
  const posts = await fs.readdir('content/blog')
  return posts.map(post => ({
    slug: post.replace('.md', '')
  }))
}
```

## Lists

### Ordered list
1. First element
2. Second element
3. Third element

### Unordered list
- Element one
- Element two
- Element three

## Quotes

> "Code is poetry" - WordPress

## Links

You can easily add [links to other pages](https://bedomax.com).

## Conclusion

This system is **simple**, **scalable**, and **easy to maintain**. You just need to create a `.md` file in the `content/blog/` folder and push to GitHub.
