# 📁 Project Structure

This document describes the project organization and best practices to keep it scalable.

## 📂 Folder Structure

```
bedomax.com/
├── app/                          # Next.js App Router (routes & pages)
│   ├── layout.tsx               # Main layout with global metadata
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── manifest.ts              # PWA configuration
│   ├── robots.ts                # Dynamic robots.txt generation
│   ├── sitemap.ts               # Dynamic sitemap.xml generation
│   ├── about/                   # /about route
│   │   └── page.tsx
│   ├── projects/                # /projects route
│   │   └── page.tsx
│   ├── blog/                    # /blog route
│   │   ├── page.tsx            # Posts listing
│   │   └── [slug]/             # Dynamic routes by slug
│   │       └── page.tsx        # Individual post
│   └── contact/                 # /contact route
│       └── page.tsx
│
├── components/                   # Reusable React components
│   ├── header.tsx               # Main navigation
│   ├── footer.tsx               # Footer with social links
│   ├── hero.tsx                 # Hero section
│   └── theme-provider.tsx       # Theme provider
│
├── lib/                          # Utilities and helper functions
│   ├── blog.ts                  # Functions to read posts from filesystem
│   ├── seo.ts                   # SEO and structured data helpers
│   └── utils.ts                 # General utilities (cn, etc.)
│
├── content/                      # Markdown content (filesystem CMS)
│   ├── BLOG_GUIDE.md            # Documentation on how to create posts
│   └── blog/                    # Blog posts
│       ├── ejemplo-post.md      # Example post
│       └── bienvenida.md        # Welcome post
│
├── public/                       # Static files
│   ├── *.png                    # Images (OG, headshots, icons)
│   ├── favicon.ico              # Favicon
│   └── manifest.json            # PWA manifest
│
├── styles/                       # Additional styles (if needed)
│
├── .gitignore                   # Files ignored by git
├── components.json              # shadcn/ui configuration
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── PROJECT_STRUCTURE.md         # This file
└── README.md                    # Main documentation
```

## 🎯 Naming Conventions

### Files
- **React Components**: `kebab-case.tsx` (e.g., `header.tsx`, `blog-card.tsx`)
- **Pages**: `page.tsx` (Next.js App Router convention)
- **Layouts**: `layout.tsx`
- **Utilities**: `kebab-case.ts` (e.g., `blog.ts`, `seo.ts`)
- **Blog posts**: `kebab-case.md` (e.g., `my-first-post.md`)

### Code
- **Components**: `PascalCase` (e.g., `Header`, `BlogCard`)
- **Functions**: `camelCase` (e.g., `getAllPosts`, `getPostBySlug`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_POSTS`, `API_URL`)
- **Interfaces/Types**: `PascalCase` (e.g., `BlogPost`, `UserProfile`)

## 📝 Blog System

### How it works
1. Posts are written in Markdown in `content/blog/`
2. File name becomes the URL slug (e.g., `hello-world.md` → `/blog/hello-world`)
3. Each post has YAML frontmatter with metadata
4. Posts are read from filesystem at build time (SSG)
5. Next.js generates static pages for each post

### Creating a new post
```bash
# 1. Create file in content/blog/
touch content/blog/my-new-post.md

# 2. Add frontmatter and content
# 3. Commit and push to GitHub
git add content/blog/my-new-post.md
git commit -m "feat: add new blog post"
git push

# 4. Vercel automatically deploys
```

### Post structure
```markdown
---
title: "Post title"
date: "2025-01-15"
excerpt: "Brief description"
author: "Bedo"
tags: ["Tag1", "Tag2"]
published: true
---

# Your content here...
```

## 🔄 Workflow

### Local Development
```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Serve production build
npm run lint         # Run linter
```

### Adding Content
1. **Blog post**: Create `.md` file in `content/blog/`
2. **Project**: Edit `app/projects/page.tsx` (future: move to `content/projects/`)
3. **New page**: Create folder in `app/` with `page.tsx`

### Deployment
1. Push to GitHub
2. Vercel automatically detects changes
3. Build and deploy in ~2 minutes
4. New blog posts appear automatically

## 🚀 Scalability

### Ready to Grow
The project is structured for:
- ✅ **Multi-post blog**: Filesystem-based system ready
- ✅ **SEO optimized**: Metadata, sitemap, structured data
- ✅ **Performance**: Static generation (SSG)
- ✅ **Type-safe**: TypeScript throughout the project
- ✅ **Responsive**: Mobile-first design

### Suggested Improvements
1. **Projects system**: Similar to blog, move to `content/projects/`
2. **Search**: Implement blog post search
3. **Categories**: Archive pages by tag
4. **RSS Feed**: Generate RSS for blog
5. **Comments**: Integrate comment system (Giscus, Disqus)
6. **Analytics**: More detailed post analytics
7. **Newsletter**: Subscription system
8. **Dark mode**: Light/dark theme toggle

## 📦 Main Dependencies

### Core
- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript 5**: Type safety

### Styling
- **Tailwind CSS 4**: Utility-first CSS framework
- **Radix UI**: Accessible unstyled components

### Markdown
- **gray-matter**: Frontmatter parser
- **remark**: Markdown processor
- **remark-html**: Convert Markdown to HTML
- **remark-gfm**: GitHub Flavored Markdown

### Others
- **Vercel Analytics**: Web analytics
- **Lucide React**: Icons

## 🎨 Design System

### Colors
```css
--royal-blue: #3B5BDB
--dark-blue: #2B4BC0
--deep-blue: #1E3A8A
--gold-yellow: #F5C542
```

### Typography
- **Font family**: Poppins (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800

### Reusable Components
- `Header`: Navigation with active state
- `Footer`: Footer with social links
- `Hero`: Main hero section

## 📖 Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [Vercel Docs](https://vercel.com/docs)

## 🤝 Contributing

This is a personal project, but if you want to suggest improvements:
1. Open an issue on GitHub
2. Describe the improvement or problem
3. If you want to contribute code, open a PR

---

**Last updated**: 2025-01-15
**Version**: 2.0.0 - Filesystem-based blog system
