Parimah — Frontend Developer Portfolio

Personal frontend developer portfolio focused on React, UI, interaction, and thoughtful frontend engineering.

This portfolio is designed as a digital product rather than a traditional developer résumé. It combines editorial typography, responsive composition, restrained interaction, and interface-focused project presentation to demonstrate both frontend implementation and attention to detail.

Design direction: Editorial × Product × Interface Playground

⸻

✦ Highlights

* Responsive, mobile-first interface
* React + TypeScript architecture
* Component-based UI system
* Editorial typography and layout
* Interactive UI experiments
* Accessible interaction states
* Keyboard-friendly navigation
* Reduced-motion support
* WCAG 2.2 AA accessibility target
* Centralized design tokens
* CSS Modules for scoped component styling
* Responsive layouts across mobile, tablet, and desktop

⸻

🛠 Tech Stack

Core

* React
* TypeScript
* Vite

UI & Styling

* CSS Modules
* Responsive CSS
* Design tokens
* Semantic HTML

Development

* Git
* GitHub
* VS Code

⸻

✦ Design Direction

The visual system is built around three principles.

Editorial Confidence

Strong typography, intentional whitespace, and a warm neutral palette create a distinctive visual identity without relying on generic portfolio patterns.

Frontend Precision

Reusable components, responsive layouts, semantic markup, and explicit interaction states keep the interface technically structured and maintainable.

Restrained Interaction

Motion is used to communicate hierarchy, feedback, and interaction rather than acting as decoration.

⸻

🎨 Design System

The interface uses a warm editorial palette designed to balance clarity with visual character.

Token	Value
Canvas	#F3F1EB
Surface	#E7E4DC
Raised	#F7F5EF
Ink	#171717
Muted	#6F6D67
Accent	#C84B31

Typography

Role	Typeface
Display	Instrument Serif
Interface & Body	Inter
Technical Metadata	IBM Plex Mono

⸻

📁 Project Structure

src/
├── assets/
│   └── hero.png
│
├── components/
│   ├── layout/
│   │   ├── Container/
│   │   ├── Navbar/
│   │   ├── Section/
│   │   └── SectionLabel/
│   │
│   ├── portfolio/
│   │   ├── ProjectCard/
│   │   └── ProjectGrid/
│   │
│   └── ui/
│       ├── Button/
│       ├── IconButton/
│       └── NavLink/
│
├── data/
│   └── projects.ts
│
├── sections/
│   ├── Hero/
│   └── SelectedWork/
│
├── styles/
│   ├── globals.css
│   ├── tokens.css
│   └── typography.css
│
├── App.tsx
└── main.tsx

⸻

🧩 Architecture

The project follows a component-oriented architecture with a clear separation between:

* Reusable UI components
* Layout components
* Portfolio-specific components
* Page sections
* Content and data
* Global design tokens

CSS Modules are used to keep component styles scoped and maintainable.

Design tokens are centralized in tokens.css so visual decisions can be updated consistently across the interface.

⸻

📱 Responsive Design

The portfolio is designed responsively rather than simply scaling down a desktop layout.

Key considerations include:

* Mobile-first content flow
* Touch-friendly controls
* Responsive typography
* Adaptive project layouts
* Desktop grid compositions
* Intentional whitespace
* Reduced visual complexity on smaller screens

Target Breakpoints

390px
480px
768px
1024px
1280px
1440px

⸻

♿ Accessibility

Accessibility is treated as part of the interface architecture rather than an afterthought.

The project targets WCAG 2.2 AA and includes:

* Semantic HTML
* Visible keyboard focus states
* Keyboard-accessible interactions
* Minimum 44px interactive targets
* Meaningful link labels
* Reduced-motion support
* Accessible navigation states
* Responsive touch interactions
* Contrast-aware colour choices

⸻

🚀 Getting Started

Clone the repository

git clone https://github.com/qplmogi/Parimah-Portfolio.git

Move into the project

cd Parimah-Portfolio

Install dependencies

npm install

Start the development server

npm run dev

Build for production

npm run build

Run linting

npm run lint

⸻

🔧 Development

The project uses Vite for local development and production builds.

Before committing changes, run:

npm run build
npm run lint

⸻

📌 Status

Active development

The portfolio is being implemented incrementally, with the design system, foundational components, navigation, hero, and selected-work experience forming the current foundation.

⸻

👤 Author

Parimah Mehrabi

Frontend Developer focused on React, UI, interaction, and thoughtful frontend engineering.

⸻

📄 License

This project is a personal portfolio and is not intended to be used as a reusable template or commercial product.