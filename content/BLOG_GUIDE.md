# 📝 Blog Posts Guide

This guide will help you create and publish blog posts.

## Post Structure

Each post must have YAML frontmatter at the beginning:

```markdown
---
title: "Your post title"
date: "2025-01-15"
excerpt: "Brief description of the post (for SEO and listings)"
author: "Your name"
tags: ["Tag1", "Tag2", "Tag3"]
published: true
---

# Your content here...
```

## Frontmatter Fields

- **title** (required): Post title
- **date** (required): Date in YYYY-MM-DD format
- **excerpt** (required): Brief summary for SEO and cards
- **author** (optional): Author name
- **tags** (optional): Array of tags/categories
- **image** (optional): Featured image URL
- **published** (optional): true/false - Defaults to true

## Supported Markdown Syntax

### Headings
```markdown
# H1
## H2
### H3
```

### Text
```markdown
**bold**
*italic*
`inline code`
```

### Lists
```markdown
- Item 1
- Item 2

1. Item 1
2. Item 2
```

### Code
````markdown
```typescript
const hello = "world"
```
````

### Links and Images
```markdown
[link text](https://url.com)
![alt text](image-url.jpg)
```

### Quotes
```markdown
> This is a quote
```

## Publishing Workflow

1. **Create the file**:
```bash
touch content/blog/my-new-post.md
```

2. **Write your content** with frontmatter

3. **Test locally**:
```bash
npm run dev
# Visit http://localhost:3000/blog
```

4. **Publish**:
```bash
git add content/blog/my-new-post.md
git commit -m "feat: add new blog post - my-new-post"
git push
```

5. **Vercel automatically deploys** ✨

## Tips

- File name becomes the URL (e.g., `hello-world.md` → `/blog/hello-world`)
- Use descriptive names without spaces (use hyphens)
- Posts with `published: false` won't show in production
- You can use HTML inside Markdown if you need more control
- Images can be uploaded to `/public/blog/` and referenced as `/blog/image.jpg`

## Examples

Check the example posts in this folder:
- `ejemplo-post.md` - Shows all Markdown features
- `bienvenida.md` - Simple welcome post
