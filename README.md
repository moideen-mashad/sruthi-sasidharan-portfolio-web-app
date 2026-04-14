# Moideen Mashad - Professional Portfolio

A modern, high-performance portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This project implements a **Technical Layering** architecture for maximum maintainability and clarity.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Typography**: Manrope (Google Fonts)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [Lenis](https://lenis.darkroom.engineering/)
- **Interactions**: [Swiper](https://swiperjs.com/), [React Scroll](https://www.npmjs.com/package/react-scroll)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)

## 📁 Project Structure (Technical Layering)

The project follows a **Technical Layering** architecture, where files are organized by their technical role within the application. This ensures a clean separation of concerns and easy navigation.

```bash
├── app/                    # Next.js App Router (Routes & Layouts)
│   ├── layout.tsx         # Root layout with Metadata API
│   ├── page.tsx           # Main Landing Page
│   └── not-found.tsx     # Custom 404 handler
├── components/            # Technical Layered Components
│   ├── layouts/          # Global UI (Navbar, Footer)
│   ├── sections/         # Page sections (About, Career, Projects, etc.)
│   ├── ui/               # Primary UI elements (Buttons, Skeletons, Toggles)
│   └── providers/        # Global context providers
├── data/                  # Static Content (JSON)
│   ├── profile.json       # User biography and roles
│   ├── career.json        # Professional experience timeline
│   └── projects.json      # Portfolio showcase data
├── hooks/                 # Custom React Hooks
├── lib/                   # Project Logic and Config
│   ├── config/           # Site constants and Nav structure
│   └── utils/            # Shared utilities (Data fetching, formatters)
├── types/                 # Global TypeScript Definitions
├── public/                # Static assets (Images, favicon)
└── next.config.js         # Production-grade Next.js configuration
```

### Layer Explanation:
- **`components/sections`**: These are the main "blocks" of the site. Each section (About, Career, Project, etc.) is self-contained and exported for assembly in the main page.
- **`components/ui`**: Atomic, reusable components that provide the visual building blocks for the sections.
- **`lib/utils/data.ts`**: The central data access layer that translates local JSON files into structured TypeScript objects for the UI.
- **`types/`**: All data structures are strictly typed here to ensure end-to-end type safety.

## 🛠️ Development

### Installation
```bash
npm install
```

### Run Locally
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

## 🎨 Key Features

- ⚡ **Next.js 16 Performance**: Optimized image handling, script loading, and hydration.
- 🎨 **Modern Aesthetics**: Premium glassmorphism effects and smooth transitions.
- 📱 **Fully Responsive**: Tailored experiences for Mobile, Tablet, and Desktop.
- 🔍 **SEO Optimized**: Dynamic metadata and structured sitemaps.
- 🧪 **Strict Typing**: Full TypeScript implementation for robust development.

## 📄 License

Private Project - Moideen Mashad
