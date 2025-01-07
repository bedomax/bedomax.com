# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2025-01-15

### Added
- **File-based blog system** using Markdown
  - Posts stored in `content/blog/` directory
  - YAML frontmatter for metadata (title, date, excerpt, author, tags)
  - Automatic static generation (SSG) for all posts
  - Dynamic routing with `/blog/[slug]`

- **Blog utilities** (`lib/blog.ts`)
  - `getAllPosts()` - Get all published posts sorted by date
  - `getPostBySlug()` - Get individual post with HTML content
  - `getAllPostSlugs()` - Get slugs for static generation
  - `getPostsByTag()` - Filter posts by tag
  - `getAllTags()` - Get all unique tags

- **Markdown processing**
  - gray-matter for frontmatter parsing
  - remark for Markdown to HTML conversion
  - remark-gfm for GitHub Flavored Markdown support

- **SEO enhancements**
  - Dynamic sitemap includes all blog posts
  - Individual post metadata (Open Graph, Twitter Cards)
  - Structured data for blog posts

- **Documentation**
  - `PROJECT_STRUCTURE.md` - Comprehensive project documentation
  - `content/BLOG_GUIDE.md` - Guide for creating blog posts
  - `CHANGELOG.md` - This file

- **Example blog posts**
  - Welcome post demonstrating basic features
  - Tutorial post showing all Markdown syntax

### Changed
- Updated README.md with blog system documentation
- Converted `/blog` page from mock data to filesystem-based
- Updated sitemap.ts to include dynamic blog routes
- All documentation translated to English for consistency

### Technical Details
- Next.js 15 with App Router
- TypeScript 5 for type safety
- Static Site Generation (SSG) for optimal performance
- Posts are read at build time (no runtime overhead)

### Workflow
1. Create `.md` file in `content/blog/`
2. Add frontmatter and content
3. Commit and push to GitHub
4. Vercel automatically deploys
5. New post is live!

---

## [1.0.0] - 2025-01-10

### Initial Release
- Next.js 15 personal website
- 5 main pages: Home, About, Projects, Blog, Contact
- SEO optimization
- PWA configuration
- Responsive design with Tailwind CSS
- Vercel Analytics integration
