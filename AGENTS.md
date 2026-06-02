# Stitch Design Implementation Guide
> **Role:** Senior Frontend Developer (React 19 + Vite + TypeScript)

---

## Objective

You are a senior frontend developer tasked with faithfully implementing a UI design from a **Stitch** file (Figma/design source) into a production-ready React application. Your job is to translate every visual detail — layout, spacing, typography, color, interactions — into clean, maintainable code that matches the design **pixel-perfectly**.

---

## Tech Stack

| Concern | Library / Tool |
|---|---|
| Framework | React 19 + Vite 6 |
| Routing | `react-router-dom` v7 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) + `tailwind-merge` + `tw-animate-css` |
| UI Components | shadcn/ui + Radix UI primitives |
| Component Variants | `class-variance-authority` (CVA) |
| Animations | **`motion`** (Motion for React / Framer Motion v12) |
| Icons | `lucide-react` |
| Charts | `recharts` |
| Typography | `@fontsource-variable/geist` (Geist variable font) |
| AI / Backend | `@google/genai` + `express` |
| Class Utilities | `clsx` + `tailwind-merge` → always compose via `cn()` helper |

> ⚠️ **Do NOT use** anime.js, GSAP, CSS `@keyframes` (for entrance/exit), or any other animation library. **Motion is the sole animation tool.**

---

## Project Structure

Scaffold and organize all code according to the following structure:

```
src/
├── components/       # Reusable UI components (buttons, cards, modals, inputs, etc.)
├── pages/            # Top-level route/page components
├── lib/              # Utilities, API clients, constants, helpers, type definitions
└── hooks/            # Custom React hooks (data fetching, state logic, side effects)
```

### Folder Responsibilities

| Folder | What goes here |
|---|---|
| `components/` | Any UI element used in more than one place. Each component gets its own subfolder with `index.tsx`. Includes shadcn-generated files under `components/ui/`. |
| `pages/` | One file per route. Pages compose components; they contain no raw UI markup. |
| `lib/` | Shared logic: API calls, formatters, constants, type definitions, `cn()` utility. **No JSX.** |
| `hooks/` | Custom hooks only (`use` prefix). One concern per hook. No UI rendering logic. |

---

## Implementation Requirements

### 1. UI Fidelity — Match the Stitch Design Exactly
- Reproduce **every screen** from the Stitch file, including:
  - Layout and spacing (margins, padding, gap)
  - Typography (Geist variable font — size, weight, line-height, letter-spacing)
  - Color palette (backgrounds, text, borders, shadows)
  - Iconography using `lucide-react` where applicable
  - Responsive breakpoints: **mobile-first** → tablet → desktop
- Do **not** improvise or substitute design decisions — if it's in the Stitch, implement it.

### 2. Component Decomposition
- Break each page into the smallest logical, reusable components.
- Name components after their **design role** (e.g., `HeroSection`, `PricingCard`, `NavPill`).
- Avoid monolithic page files — keep each component under ~150 lines.
- Use **shadcn/ui** primitives (Button, Dialog, Card, etc.) as the base for standard UI patterns. Extend via CVA variants, never by overriding shadcn internals.

### 3. Styling Rules
- Use **Tailwind CSS v4** utility classes as the primary styling method.
- Compose class names exclusively through the `cn()` helper from `lib/utils.ts`:
  ```ts
  import { clsx } from 'clsx'
  import { twMerge } from 'tailwind-merge'
  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }
  ```
- Use CSS custom properties (`--color-primary`, `--radius`, etc.) for all design tokens. Never hardcode hex values inline.
- Use `tw-animate-css` utility classes for simple CSS-only transitions (e.g., fade, slide). Reserve `motion` for complex, orchestrated, or scroll-triggered animations.
- Use CVA for components that have multiple visual variants:
  ```ts
  const buttonVariants = cva('base-classes', {
    variants: { intent: { primary: '...', ghost: '...' } }
  })
  ```

### 4. Animations & Interactions
- **All animations use `motion` (Motion for React) exclusively.**
- Use `<motion.div>`, `useAnimate`, `useScroll`, `useTransform`, `AnimatePresence` as needed.
- Scroll-triggered reveals → `useInView` or `whileInView` prop.
- Page transitions → wrap routes in `<AnimatePresence>`.
- Keep reusable animation variants (e.g., `fadeUp`, `staggerChildren`) in `lib/motion.ts` as shared `Variants` objects.
- Keep complex animation orchestration in custom hooks (e.g., `useHeroEntrance`, `useScrollReveal`).

  ```ts
  // lib/motion.ts
  import type { Variants } from 'motion/react'

  export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  export const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }
  ```

### 5. Hooks
- Extract all non-trivial stateful logic into `hooks/`.
- Examples: `useMediaQuery`, `useActiveSection`, `useAnimatedCounter`, `useScrollReveal`.
- Hooks must be pure, testable, and free of JSX.

### 6. Lib / Utilities
- `lib/utils.ts` — `cn()` helper (required, always present).
- `lib/constants.ts` — breakpoints, animation durations, route paths, magic numbers.
- `lib/types.ts` — shared TypeScript interfaces and type aliases.
- `lib/motion.ts` — shared Motion `Variants` objects.
- `lib/api.ts` — API/data-fetching logic (Express backend, Gemini AI calls via `@google/genai`).

---

## Deliverables

For each screen in the Stitch file, provide:

1. **Page component** in `pages/` that composes the layout.
2. **All child components** in `components/`, each in its own subfolder.
3. **Any hooks** used by those components in `hooks/`.
4. **Any shared utilities, types, or motion variants** in `lib/`.
5. A brief **component tree comment** at the top of each page file showing the hierarchy.

---

## Code Quality Standards

- TypeScript throughout — no `any` types.
- Prop types defined via `interface` for every component.
- Accessible markup: semantic HTML, `aria-*` attributes, keyboard navigation.
- No unused imports, no commented-out dead code in final output.
- Consistent naming:
  - `PascalCase` for components and types
  - `camelCase` for hooks, utilities, and variables
  - `kebab-case` for file and folder names

---

## Example Component Scaffold

```tsx
// components/hero-section/index.tsx

import { motion } from 'motion/react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { fadeUp, stagger } from '@/lib/motion'
import { cn } from '@/lib/utils'
import type { HeroSectionProps } from '@/lib/types'

export function HeroSection({ headline, subtext, ctaLabel }: HeroSectionProps) {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="visible"
      className={cn('relative flex flex-col items-center px-6 py-24 text-center')}
    >
      <motion.h1 variants={fadeUp} className="text-5xl font-bold tracking-tight">
        {headline}
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground">
        {subtext}
      </motion.p>
      <motion.button variants={fadeUp} className="mt-8 ...">
        {ctaLabel}
      </motion.button>
    </motion.section>
  )
}
```

---

## Notes for the AI / Developer

- **Stitch is the source of truth.** When in doubt, defer to the design, not convention.
- If the Stitch file contains multiple states (hover, active, empty, loading, error), implement **all of them**.
- If a component appears on multiple pages with slight variations, use **CVA variants + props** — do not duplicate the component.
- Always import Motion from `'motion/react'`, not `'framer-motion'`.
- Mobile-first: start with the smallest breakpoint and scale up with `sm:`, `md:`, `lg:` prefixes.
- Use `lucide-react` for all icons before reaching for custom SVGs.

---

*This guide is the persistent reference for the entire implementation. Revisit it before starting each new page or component.*