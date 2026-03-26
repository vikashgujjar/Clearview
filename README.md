# Clearview Land Survey - Next.js Application

A modern, component-based Next.js application for Clearview Land Survey featuring a professional landing page with sections for services, testimonials, and contact information.

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page composition
├── components/
│   ├── common/
│   │   └── Navbar.tsx      # Navigation bar with scroll effects
│   └── sections/
│       ├── Hero.tsx        # Hero section with carousel
│       ├── TrustBar.tsx    # Trust/credibility bar
│       ├── FeatureStrip.tsx # Feature cards
│       ├── Services.tsx    # Services with modal dialogs
│       ├── WhyUs.tsx       # Why choose us section
│       └── Contact.tsx     # Contact form and info
└── styles/
    └── globals.css        # Global styles and Tailwind setup
```

## 🎨 Design System

### Colors
- **Brand Primary**: #004f80
- **Brand Mid**: #0066a6
- **Brand Light**: #0080cc
- **Sky**: #00aaee
- **Sky Light**: #38c5f5

### Fonts
- **Display**: Syne (400, 600, 700, 800)
- **Body**: DM Sans (300-500)

## ✨ Features

- ✅ Fully responsive design
- ✅ Smooth scroll animations
- ✅ Interactive service modals
- ✅ Image carousel with auto-play
- ✅ Glassmorphic UI effects
- ✅ Gradient text effects
- ✅ Mobile-friendly navigation
- ✅ Contact form integration
- ✅ SEO optimized

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd clearview-next
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📝 Component Overview

### Navbar
- Fixed navigation with scroll-based styling
- Mobile hamburger menu
- Smooth underline hover effects

### Hero
- Dark theme with gradient text
- Auto-playing carousel (5 slides)
- Animated statistics
- Call-to-action buttons

### TrustBar
- Trust indicators with icons
- Company credibility information

### FeatureStrip
- 4 feature cards with images
- Hover animation effects

### Services
- 6 service cards
- Click to open detailed modal
- Categorized by service type

### WhyUs
- 6 reason cards
- Emoji icons
- Reveal animations

### Contact
- Multi-field contact form
- Contact information cards
- Office hours and location

## 🎯 Customization

### Adding New Services
Edit `/src/components/sections/Services.tsx` and add items to the `services` array.

### Updating Colors
Modify the CSS variables in `/src/styles/globals.css` under `:root`.

### Changing Images
Replace image URLs in component files. The app supports external Unsplash images by default.

## 🔗 Dependencies

- **Next.js 14.1.0** - React framework
- **React 18.3.1** - UI library
- **Tailwind CSS 3.4.1** - Utility-first CSS
- **TypeScript 5.3.3** - Type safety

## 📄 License

This project is proprietary to Clearview Land Survey.

## 📞 Support

For updates or changes, contact the development team.
