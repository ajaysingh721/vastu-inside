# Vastu Inside

A modern, responsive, and feature-rich website for Vastu consultation services built with Next.js and PWA support.

## 🌟 Features

- **Modern Next.js Architecture**: Built with Next.js 16, React 19, and TypeScript
- **Progressive Web App (PWA)**: Full offline support and installable on all devices
- **Responsive Design**: Mobile-first design that works beautifully on all screen sizes
- **Tailwind CSS**: Modern, utility-first CSS framework for beautiful UI
- **SEO Optimized**: Metadata and semantic HTML for better search engine visibility
- **Fast Performance**: Optimized for speed and user experience
- **Accessible**: WCAG compliant with proper ARIA labels and semantic markup

## 📱 Pages

- **Home**: Hero section, services overview, testimonials, and call-to-action
- **Services**: Detailed service offerings with pricing packages
- **About**: Company information, team, mission, and process
- **Contact**: Contact form with validation and contact information
- **Blog**: Articles and tips about Vastu Shastra

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ajaysingh721/vastu-inside.git
cd vastu-inside
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PWA**: next-pwa
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 📦 Project Structure

```
vastu-inside/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   └── blog/              # Blog page
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation component
│   └── Footer.tsx        # Footer component
├── public/               # Static assets
│   ├── icons/           # PWA icons
│   └── manifest.json    # PWA manifest
├── tailwind.config.ts   # Tailwind configuration
├── next.config.js       # Next.js configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* Your primary colors */ },
  secondary: { /* Your secondary colors */ }
}
```

### Content

Update the content in respective page files:

- Home content: `app/page.tsx`
- Services: `app/services/page.tsx`
- About: `app/about/page.tsx`
- Contact: `app/contact/page.tsx`
- Blog: `app/blog/page.tsx`

## 📱 PWA Features

- Offline functionality
- Add to home screen
- Push notifications ready
- App-like experience
- Automatic updates

## 🔧 Configuration

### PWA Configuration

PWA settings can be modified in `next.config.js`:

```javascript
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
```

### Manifest

Update PWA manifest in `public/manifest.json` to customize app name, colors, and icons.

## 📄 License

ISC

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email support@vastuinside.com or visit our contact page.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- PWA support by [next-pwa](https://github.com/shadowwalker/next-pwa)
