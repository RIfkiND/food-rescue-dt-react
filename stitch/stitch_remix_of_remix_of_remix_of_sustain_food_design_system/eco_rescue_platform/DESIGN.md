---
name: Eco-Rescue Platform
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#404943'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#707973'
  outline-variant: '#bfc9c1'
  surface-tint: '#2c694e'
  primary: '#0f5238'
  on-primary: '#ffffff'
  primary-container: '#2d6a4f'
  on-primary-container: '#a8e7c5'
  inverse-primary: '#95d4b3'
  secondary: '#8e4e14'
  on-secondary: '#ffffff'
  secondary-container: '#ffab69'
  on-secondary-container: '#783d01'
  tertiary: '#5a4400'
  on-tertiary: '#ffffff'
  tertiary-container: '#775b06'
  on-tertiary-container: '#fcd579'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b1f0ce'
  primary-fixed-dim: '#95d4b3'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#0e5138'
  secondary-fixed: '#ffdcc4'
  secondary-fixed-dim: '#ffb780'
  on-secondary-fixed: '#2f1400'
  on-secondary-fixed-variant: '#6f3800'
  tertiary-fixed: '#ffdf96'
  tertiary-fixed-dim: '#e7c268'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5a4400'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  h1:
    fontFamily: Epilogue
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
  caption:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  xxxl: 64px
---

## Brand & Style
The design system is rooted in the philosophy of **Warm Minimalism**. It balances the clinical efficiency of a logistics platform with the tactile, human warmth of a neighborhood kitchen. The brand personality is trustworthy and sustainable, aiming to make food rescue feel like a premium yet accessible community service rather than a "waste" management tool.

The visual style utilizes a high-clarity layout with generous whitespace to promote an eco-friendly feeling. Soft transitions, rounded geometry, and a naturalistic color palette evoke an emotional response of optimism and reliability. The UI avoids sharp edges and aggressive contrasts to maintain a friendly, approachable atmosphere for both donors and consumers.

## Colors
The color palette is centered on a "Forest Green" primary to signify sustainability and growth. The "Harvest Orange" secondary provides a warm, appetizing accent that highlights urgency and food-related actions. 

- **Primary Green:** Used for high-priority actions, verification states, and branding.
- **Secondary Orange:** Used for discounts, limited-time offers, and "Food rescued" notifications.
- **Clean White/Cream:** The background uses a slightly off-white `#FDFCFB` to reduce eye strain and feel more "organic" than pure digital white.
- **Muted Earth Tones:** Used for secondary text and borders to maintain a soft, non-confrontational interface.

## Typography
This design system employs a pairing of **Epilogue** for headlines and **Be Vietnam Pro** for body text. 

- **Epilogue** provides a geometric, editorial feel that makes headlines look contemporary and bold.
- **Be Vietnam Pro** is chosen for its exceptional readability and friendly, open letterforms, making long lists of food items and partner descriptions easy to scan.
- Type scales are strictly enforced to create a clear information hierarchy, with larger line heights to ensure a "breathable" and minimal layout.

## Layout & Spacing
The system utilizes a strict **8pt grid** to ensure consistency across all screen sizes. All margins, padding, and component heights must be multiples of 8 (with 4px used only for micro-adjustments like icon-to-label spacing).

- **Mobile:** A 4-column fluid grid with 16px side margins.
- **Web:** A 12-column fixed-width grid (max-width 1200px) centered on the page.
- **Rhythm:** Vertical rhythm is maintained by using 24px or 32px spacing between major sections and 8px/16px for internal component spacing.

## Elevation & Depth
Depth is conveyed through **Ambient Shadows** and **Tonal Layering**. The goal is a tactile, "soft-touch" feel.

- **Level 0 (Flat):** Used for the main background and decorative elements.
- **Level 1 (Soft Shadow):** Used for cards and input fields. Shadow: `0px 4px 20px rgba(29, 53, 87, 0.05)`.
- **Level 2 (Interactive):** Used for hover states and primary buttons. Shadow: `0px 8px 24px rgba(45, 106, 79, 0.15)`.
- **Level 3 (Overlay):** Used for modals and floating action buttons. Shadow: `0px 12px 32px rgba(0, 0, 0, 0.1)`.

Avoid high-contrast borders; instead, use subtle 1px strokes in a light-neutral color (`#E9ECEF`) to define boundaries when shadows are not appropriate.

## Shapes
The design system adopts a **Rounded** aesthetic to reinforce its friendly and approachable brand personality. 

- **Standard Radius:** 0.5rem (8px) for buttons and small components.
- **Large Radius:** 1rem (16px) for cards, containers, and image masks.
- **Extra Large Radius:** 1.5rem (24px) for bottom sheets and top-level containers.
- **Pill:** Fully rounded (999px) for badges, tags, and search bars.

## Components

### Buttons
- **Primary:** Solid Primary Green background, white text. Rounded (8px). 16px vertical padding.
- **Secondary:** Transparent background, Primary Green border (1.5px), Primary Green text.
- **Disabled:** Light Grey background (`#E9ECEF`), Grey text. No shadow.

### Input Fields
- **Text/Phone:** White background, 1px neutral border. Focused state uses a 2px Primary Green border. Phone inputs include a flag/country code prefix.
- **OTP:** Individual 48x56px boxes with centered bold typography and 12px rounded corners.

### Cards
- **Food Card:** 16px rounded corners. Large product image at top, title in H3, subtext in Body-MD. "Save by" time highlighted in Secondary Orange.
- **Partner Card:** Horizontal layout for web, vertical for mobile. Features the logo in a circle, star rating, and distance tag.

### Badges
- **Safe to Eat:** Green background (Primary-100) with Primary-700 text and a small "check" icon.
- **Verified:** Blue tint background with a "verified" icon.
- **Discount:** Secondary Orange background with bold white text.

### Navigation
- **Mobile Bottom Nav:** Blur background (Glassmorphism effect) with 4-5 icons. Active state uses Primary Green with a small dot indicator below the icon.
- **Web Navbar:** Fixed to top, Clean White. Left-aligned logo, center-aligned links, right-aligned "Profile" and "Cart/Order" buttons.