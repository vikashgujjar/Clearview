# 🚀 Quick Start Guide - ClearView Next.js App

## What's Been Created

Your Next.js project has been fully set up with all the styling from your original HTML converted into separate, reusable components.

## 📁 Project Location
```
c:\Users\Lenovo\OneDrive\Desktop\ClearView2\clearview-next\
```

## ✅ Components Created

### Common Components
- **Navbar** - Fixed navigation with scroll effects & mobile menu

### Section Components
1. **Hero** - Dark hero with carousel (5 slides)
2. **TrustBar** - Trust indicators & credibility
3. **FeatureStrip** - 4 feature cards with images
4. **Services** - 6 service cards with modal dialogs
5. **WhyUs** - 6 reason cards
6. **Contact** - Contact form & company info

## 🎨 Styling Features

- ✅ Same color scheme (#004f80 brand colors)
- ✅ Same fonts (Syne display, DM Sans body)
- ✅ All animations (fadeUp, glow, float, etc.)
- ✅ Glassmorphism effects
- ✅ Gradient text effects
- ✅ Responsive design
- ✅ Tailwind CSS + custom CSS

## 📦 Installation Steps

1. **Open Terminal** in VS Code
2. **Navigate to project**:
   ```bash
   cd clearview-next
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   ```
   http://localhost:3000
   ```

## 🔧 File Structure

```
clearview-next/
├── src/
│   ├── app/
│   │   ├── layout.tsx       (Root layout)
│   │   └── page.tsx         (Main page with all sections)
│   ├── components/
│   │   ├── common/
│   │   │   └── Navbar.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── TrustBar.tsx
│   │       ├── FeatureStrip.tsx
│   │       ├── Services.tsx
│   │       ├── WhyUs.tsx
│   │       └── Contact.tsx
│   └── styles/
│       └── globals.css
├── public/               (For images/assets)
├── package.json         (Dependencies)
├── tailwind.config.ts   (Tailwind configuration)
├── tsconfig.json        (TypeScript config)
└── README.md
```

## 🎨 Customization

### Update Colors
Edit `/src/styles/globals.css` - look for `:root` CSS variables

### Add More Services
Edit `/src/components/sections/Services.tsx` - edit the `services` array

### Change Fonts
Edit `tailwind.config.ts` - modify `fontFamily` section

### Update Images
Replace image URLs in component files (Unsplash links shown by default)

## 📚 Key Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **React 18** - Latest React features
- **ESNext** - Modern JavaScript

## 🚀 Production Build

When ready to deploy:

```bash
npm run build
npm start
```

Or deploy to Vercel:
- Push code to GitHub
- Connect to Vercel
- Auto-deploys on push

## 💡 Tips

- All sections are in separate `.tsx` files for easy maintenance
- Scroll animations work with IntersectionObserver (reveal class)
- Modal is built into Services component (no external library needed)
- Carousel in Hero auto-plays and responds to clicks
- Mobile menu toggles on hamburger click

## ❓ Need Help?

- Check `/src/components/sections/` for component examples
- Tailwind docs: https://tailwindcss.com
- Next.js docs: https://nextjs.org
- TypeScript docs: https://www.typescriptlang.org

---

**Ready to go!** 🎉 Run `npm install && npm run dev` to start.
