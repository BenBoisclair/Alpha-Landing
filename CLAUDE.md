# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro blog starter template using Astro v5.13.7 with TypeScript support. The project uses pnpm as the package manager and follows Astro's file-based routing system.

## Essential Commands

```bash
# Development
pnpm dev        # Start development server on localhost:4321
pnpm build      # Build for production to ./dist/
pnpm preview    # Preview production build

# Dependency management (use pnpm, not npm)
pnpm install    # Install dependencies
pnpm add <pkg>  # Add new dependency
```

## Architecture Overview

### Content Management System

The blog uses Astro's Content Collections API for type-safe content:

- Blog posts are stored in `/src/content/blog/` as Markdown or MDX files
- Schema defined in `src/content.config.ts` enforces required frontmatter fields
- Dynamic routing handled by `/src/pages/blog/[...slug].astro`

### Key Configuration Points

- **Site URL**: Update in `astro.config.mjs` (currently placeholder)
- **Site Metadata**: Edit `src/consts.ts` for SITE_TITLE and SITE_DESCRIPTION
- **Content Schema**: Modify `src/content.config.ts` to change blog post requirements

### Directory Structure

```
src/
├── assets/         # Images (processed by Astro's image optimization)
├── components/     # Reusable Astro components (.astro files)
├── content/        # Content collections
│   └── blog/       # Blog posts (.md/.mdx files)
├── layouts/        # Page layouts (BlogPost.astro)
├── pages/          # File-based routes
│   ├── index.astro # Homepage
│   ├── about.astro # About page
│   └── blog/       # Blog routes
├── styles/         # Global CSS
└── consts.ts       # Global constants
```

### Important Technical Details

1. **Astro Components**: Use `.astro` file extension, support component-scoped styles
2. **MDX Support**: Enabled via `@astrojs/mdx` integration, allows JSX in Markdown
3. **Image Optimization**: Uses Sharp for image processing, store images in `/src/assets/`
4. **RSS/Sitemap**: Auto-generated at `/rss.xml` and `/sitemap-index.xml`
5. **TypeScript**: Strict mode enabled, extends Astro's base configuration

### Blog Post Frontmatter Schema

```typescript
{
  title: string;          // Required
  description: string;    // Required
  pubDate: Date;         // Required
  updatedDate?: Date;    // Optional
  heroImage?: string;    // Optional
}
```

### Development Workflow

When adding new blog posts:

1. Create a new `.md` or `.mdx` file in `/src/content/blog/`
2. Include required frontmatter fields
3. Images should be placed in `/src/assets/` and referenced relatively

When modifying the site:

1. Components go in `/src/components/`
2. New pages go in `/src/pages/`
3. Global styles are in `/src/styles/global.css`
4. Site-wide constants are in `/src/consts.ts`

No testing framework is currently set up. No linting or formatting tools are configured.
