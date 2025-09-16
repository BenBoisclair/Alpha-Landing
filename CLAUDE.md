# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Alpha Bear Consulting is a multilingual (English/Thai) business website for an AI consulting company, built with Astro v5.13.7, TypeScript, and Tailwind CSS v4. The project uses server-side rendering via Vercel for optimal performance and SEO.

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

### Key Technologies

- **Astro SSR**: Server-side rendering enabled with Vercel adapter
- **Internationalization**: Thai (default) and English support
- **Styling**: Tailwind CSS v4 via Vite plugin
- **Email**: Resend API for contact forms
- **Analytics**: Umami privacy-focused analytics

### Project Structure

```
src/
├── i18n/              # Translation files (en.json, th.json)
├── lib/               # Utilities (cn() for className merging)
├── types/             # TypeScript definitions
├── components/        # Business components (HeroSection, OfferingSection, etc.)
├── pages/
│   ├── api/contact.ts # Email handler using Resend
│   ├── en/           # English language routes
│   └── blog/         # Blog system (currently showing maintenance)
└── content/          # Content collections for blog posts
```

### Important Configuration

**astro.config.mjs:**
- Site: `https://alphabearconsulting.com`
- i18n: Thai default, English available, no prefix for default locale
- Path alias: `@` maps to `/src`
- SSR enabled with Vercel adapter (30s max function duration)

**Environment Variables:**
```bash
RESEND_API_KEY         # Required for email functionality
RESEND_VERIFIED_DOMAIN # Determines production vs test mode
```

### Contact Form System

Email handling in `/api/contact.ts`:
- Test mode: Emails sent to `ben.b.boisclair@gmail.com`
- Production: Emails sent to `hello@alphabearconsulting.com`
- Auto-detects environment based on `RESEND_VERIFIED_DOMAIN`

### Translation System

All text content comes from JSON translation files:
- `/src/i18n/en.json` - English translations
- `/src/i18n/th.json` - Thai translations (default)
- Font switching: Roboto (English) vs Noto Sans Thai Variable

### Blog System

Content Collections API for type-safe blog posts:
- Posts stored in `/src/content/blog/` as Markdown/MDX
- Schema in `src/content.config.ts`
- Dynamic routing via `/src/pages/blog/[...slug].astro`
- Currently showing maintenance page

### Component Architecture

Business-focused components:
- **HeroSection**: Features Typed.js animation
- **OfferingSection**: AI services showcase
- **WhyUsSection**: Benefits display
- **CTASection**: Call-to-action
- **ContactForm**: Integrated with Resend API
- **Maintenance**: Tailwind-styled maintenance screen

### Development Workflow

1. **For new pages**: Add to `/src/pages/`, create English version in `/src/pages/en/`
2. **For translations**: Update both `/src/i18n/en.json` and `/src/i18n/th.json`
3. **For components**: Use `.astro` format, follow existing component patterns
4. **For styling**: Use Tailwind CSS v4 classes, custom gradients available
5. **For images**: Store in `/src/assets/` for Astro's optimization

### Special Integrations

- **Typed.js**: Animated typing effects on hero
- **Umami Analytics**: Script loaded in Layout.astro
- **Custom gradient utilities**: Text gradients for visual effects
- **Vercel deployment**: Build artifacts in `.vercel/output/`

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.