# Braintisa Showcase Site

A modern marketing website for the Braintisa software consultancy featuring animated sections, rich data-driven content, and smooth UX enhancements built with Vite, React, TypeScript, and Tailwind CSS.

## Features

- Responsive single-page layout with hero, services, projects, team, testimonials, and contact sections
- Smooth in-page navigation including animated scroll-to-section actions and a scroll-to-top control
- Dark/light theme toggle powered by `next-themes`
- Animated cards, gradients, and hover states using Tailwind CSS utilities and custom classes
- Interactive contact form with toast notifications and client-side validation powered by `react-hook-form`
- Data-driven content sourced from structured TypeScript modules for easy maintenance

## Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom configuration and shadcn/ui components
- **UI Primitives:** Radix UI + shadcn/ui component library
- **State & Utilities:** TanStack Query (setup for future data fetching), `clsx`, `tailwind-merge`
- **Icons:** lucide-react
- **Routing:** React Router (SPA with landing page + 404)

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or another Node package manager)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Access the local dev server at the URL shown in the terminal (default: http://localhost:5173).

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

| Script          | Description                                     |
|-----------------|-------------------------------------------------|
| `npm run dev`   | Start Vite development server                   |
| `npm run build` | Generate production build                       |
| `npm run preview` | Preview the production build locally          |
| `npm run lint`  | Run ESLint across the project                   |

## Project Structure

```
.
├── public/                      # Static assets served as-is
├── src/
│   ├── App.tsx                  # App providers (theme, query, router, toasts)
│   ├── main.tsx                 # React entry point
│   ├── assets/                  # Local imagery and media
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Team.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ui/                  # shadcn/ui primitives and wrappers
│   ├── data/                    # Structured content modules (company, projects, etc.)
│   ├── hooks/                   # Custom hooks (toast management)
│   ├── lib/                     # Utility helpers
│   ├── pages/                   # Route components (Index, NotFound)
│   └── styles (App.css, index.css)
├── tailwind.config.ts           # Tailwind theme and animation config
├── tsconfig*.json               # TypeScript configuration
├── vite.config.ts               # Vite build configuration
└── package.json                 # Dependencies and scripts
```

## Key Components & Pages

- **Navbar:** Glass-effect fixed header with responsive navigation and theme toggle.
- **Hero:** Animated hero section with smooth scroll buttons (`Get Started` → About, `View Our Work` → Projects).
- **About/Services/Projects/Team/Testimonials:** Section components rendering data-driven cards and grids with staggered animations.
- **Contact:** Two-column layout combining contact details with a validated form and toast confirmation.
- **Footer:** Multi-column footer with social links and an animated scroll-to-top button that appears after scrolling 300px.
- **Pages:** `pages/Index.tsx` orchestrates the landing page sections; `pages/NotFound.tsx` provides a fallback route.

## Data Modules

Located under `src/data/`, each file exports typed content arrays/objects consumed by the UI:

- `companyData.ts`: Company profile, stats, contact info, business hours.
- `servicesData.ts`: Service offerings with feature lists.
- `projectsData.ts`: Portfolio projects with tech stacks and external links.
- `teamData.ts`: Team member bios, skills, and portfolio URLs.
- `testimonialsData.ts`: Client testimonials with ratings and avatars.

The accompanying `README.md` in the data folder documents the structure of each dataset for future updates.

## Styling & Theming

- Tailwind CSS configured in `tailwind.config.ts` with custom colors, gradients, and animation utilities.
- `index.css` and `App.css` define global resets, custom classes (e.g., `glass-effect`, gradient helpers), and keyframe animations.
- `ThemeProvider` wraps the app to persist user-selected light/dark themes using `next-themes`.
- shadcn/ui primitives (e.g., `Button`, `Input`, `Tooltip`) provide consistent styling across the app.

## Animations & Interactions

- Section cards use Tailwind animations (`animate-fade-in-up`, `animate-scale-in`) for entrance effects.
- Buttons include hover transforms for subtle motion.
- Hero CTA buttons trigger smooth scrolling to target sections.
- Footer hosts a scroll-to-top button with fade/slide transitions and hover bounce animation.

## Notifications

- `src/hooks/use-toast.ts` implements a custom toast manager with capped queues and dismiss timers.
- Toasts are surfaced via shadcn/ui `Toaster` and Sonner-based notifications configured in `App.tsx`.

## Testing & Linting

While no automated tests are included by default, ESLint is configured for both React and TypeScript best practices. Extend with `vitest` or other tools as needed.

## Deployment

The project builds to static assets via `npm run build`, producing an optimized bundle suitable for static hosting providers (e.g., Netlify, Vercel) or integration into a larger deployment pipeline.

## License

No explicit license is provided. Add licensing information here if needed before distribution.
