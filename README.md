# Bedomax.com - Personal Website

Personal website of Bedo - Software Developer, Entrepreneur, and Growth Hacker.

## 🚀 Features

- ✨ Modern and responsive design
- 🔍 SEO optimized with complete metadata
- 📝 **File-based blog system with Markdown**
- 📱 Progressive Web App (PWA) ready
- ⚡ Performance optimized with SSG
- 🎨 Tailwind CSS design
- 🔒 Security headers configured
- 📊 Analytics with Vercel Analytics
- 🚀 Git-based CMS (write posts in Markdown, push to GitHub)

## 📋 Project Structure

```
bedomax.com/
├── app/                     # Next.js App Router
│   ├── layout.tsx          # Main layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── projects/page.tsx   # Projects page
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/page.tsx # Individual blog posts (dynamic)
│   ├── contact/page.tsx    # Contact page
│   ├── robots.ts           # Dynamic robots.txt
│   ├── sitemap.ts          # Dynamic sitemap.xml (includes blog posts)
│   ├── manifest.ts         # Manifest.json for PWA
│   └── globals.css         # Global styles
├── components/
│   ├── header.tsx          # Navigation component
│   ├── footer.tsx          # Footer component
│   ├── hero.tsx            # Hero component
│   └── theme-provider.tsx  # Theme provider
├── lib/
│   ├── blog.ts             # Blog utilities (read posts from filesystem)
│   ├── seo.ts              # SEO helpers
│   └── utils.ts            # General utilities
├── content/
│   └── blog/               # 📝 Blog posts in Markdown
│       ├── README.md       # Documentation on how to create posts
│       ├── ejemplo-post.md # Example post
│       └── *.md            # Your blog posts here
├── public/                 # Static files
├── PROJECT_STRUCTURE.md    # Detailed project documentation
├── next.config.mjs         # Next.js configuration
└── package.json            # Project dependencies
```

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed documentation.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Static typing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **gray-matter** - Frontmatter parser
- **remark** - Markdown processor
- **Vercel Analytics** - Analytics

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SITE_URL=https://bedomax.com
```

### Optional Variables

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form
CONTACT_EMAIL=hello@bedomax.com
RESEND_API_KEY=your-resend-api-key

# Social Media
NEXT_PUBLIC_TWITTER_HANDLE=@bedomax
NEXT_PUBLIC_GITHUB_USERNAME=bedomax
NEXT_PUBLIC_LINKEDIN_USERNAME=bedomax

# Verification Codes
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
NEXT_PUBLIC_YANDEX_VERIFICATION=your-yandex-verification-code
```

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/bedomax/bedomax.com.git
cd bedomax.com
```

2. Install dependencies:
```bash
pnpm install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Production Build

```bash
pnpm build
pnpm start
```

## 🔍 SEO and Configuration

### SEO Metadata

The site includes complete SEO configuration:

- ✅ Complete metadata (title, description, keywords)
- ✅ Open Graph tags for social media
- ✅ Twitter Cards
- ✅ Dynamic robots.txt
- ✅ Dynamic sitemap.xml
- ✅ Canonical URLs
- ✅ Structured Data (JSON-LD) ready

### Security Headers

The site includes security headers configured in `next.config.mjs`:

- ✅ Strict-Transport-Security
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ X-DNS-Prefetch-Control

### Optimizations

- ✅ Compression enabled
- ✅ ETags generated
- ✅ Image optimization (AVIF, WebP)
- ✅ Font optimization (display: swap)
- ✅ Dependency tree shaking
- ✅ Automatic code splitting

## 📱 Progressive Web App (PWA)

The site is configured as a PWA:

- ✅ Manifest.json configured
- ✅ Service Worker (ready to add)
- ✅ Icons for different devices

**Note:** You need to add the following files in `/public`:

- `favicon.ico`
- `icon.svg`
- `apple-icon.png`
- `icon-192x192.png`
- `icon-512x512.png`
- `og-image.png` (1200x630px)

## 📝 Pages

### Home (/)
Main page with hero section and welcome information.

### About (/about)
About me page with personal information, skills, and experience.

### Projects (/projects)
Portfolio of projects with descriptions and links.

### Blog (/blog)
Blog with file-based CMS. Write posts in Markdown in `content/blog/` and push to GitHub.

### Contact (/contact)
Contact form and contact methods.

## 🎨 Customization

### Colors

Main colors are defined in `app/globals.css`:

- Royal Blue: `#3B5BDB`
- Dark Blue: `#2B4BC0`
- Deep Blue: `#1E3A8A`
- Gold Yellow: `#F5C542`

### Fonts

- Poppins (Google Fonts) - Main font

## 📊 Analytics

The site includes Vercel Analytics. To add Google Analytics:

1. Add your Google Analytics ID in `.env.local`
2. Create a Google Analytics component
3. Add it to the main layout

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables
3. Automatic deployment on every push

### Other Providers

The site can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

This project is private and personal.

## 👤 Author

**Bedo**
- Website: [bedomax.com](https://bedomax.com)
- GitHub: [@bedomax](https://github.com/bedomax)

## 📝 How to Add Blog Posts

1. Create a new `.md` file in `content/blog/`:
```bash
touch content/blog/my-new-post.md
```

2. Add frontmatter and content:
```markdown
---
title: "My New Post"
date: "2025-01-15"
excerpt: "Brief description of the post"
author: "Bedo"
tags: ["JavaScript", "Tutorial"]
published: true
---

# Your content here...
```

3. Commit and push to GitHub:
```bash
git add content/blog/my-new-post.md
git commit -m "feat: add new blog post"
git push
```

4. Vercel will automatically deploy and your post will be live!

See [content/blog/README.md](./content/blog/README.md) for detailed documentation.

## 🔄 Future Updates

- [x] File-based blog system with Markdown
- [x] Dynamic blog post pages
- [x] SEO for blog posts
- [ ] Search functionality for blog
- [ ] Blog post categories/archive pages
- [ ] Comments system (Giscus)
- [ ] Newsletter subscription
- [ ] Dark mode toggle
- [ ] Multi-language (i18n)
- [ ] Service Worker for PWA offline
- [ ] RSS feed for blog
- [ ] Contact form integration with Resend

---

Made with ❤️ by Bedo