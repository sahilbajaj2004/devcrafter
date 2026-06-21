# soberdev.in

A modern, interactive portfolio website built with cutting-edge web technologies. Showcasing projects, skills, and creative work with smooth animations and immersive 3D experiences.

🌐 **Live Site**: [https://soberdev.vercel.app](https://soberdev.vercel.app)

## ✨ Features

- **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS and Shadcn/ui components
- **Smooth Animations**: Powered by Framer Motion and GSAP for fluid, professional animations
- **3D Graphics**: Three.js integration for immersive visual experiences
- **Smooth Scrolling**: Lenis library for enhanced scroll experience
- **Type-Safe**: Full TypeScript support for robust development
- **Performance Optimized**: Next.js 15 with modern optimization techniques
- **Mobile Responsive**: Works seamlessly across all devices

## 🛠️ Tech Stack

### Core Framework
- **Next.js** 15.4.10 - React framework for production
- **React** 19.1.0 - UI library
- **TypeScript** 5 - Type safety

### Styling & UI
- **Tailwind CSS** 4 - Utility-first CSS framework
- **Shadcn/ui** - High-quality reusable components
- **PostCSS** - CSS preprocessing
- **Tailwind Merge** - Utility class merging
- **Class Variance Authority** - Type-safe component variants

### Animations & Interactions
- **Framer Motion** 12.23.7 - React animation library
- **GSAP** 3.15.0 - Professional animation platform
- **@gsap/react** - GSAP React hooks
- **Lenis** 1.3.23 - Smooth scrolling library

### 3D Graphics
- **Three.js** 0.184.0 - 3D JavaScript library

### Development Tools
- **ESLint** - Code quality and consistency
- **Next.js ESLint Config** - ESLint configuration for Next.js

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/soberdev/soberdev.in.git
   cd soberdev.in
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your site

## 📦 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm build

# Start production server
npm start

# Run ESLint to check code quality
npm run lint
```

## 📁 Project Structure

```
soberdev.in/
├── src/
│   ├── app/              # Next.js app directory (routing, layouts, pages)
│   ├── components/       # Reusable React components
│   └── lib/              # Utility functions and helpers
├── public/               # Static assets (images, fonts, etc.)
├── styles/               # Global styles
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.ts        # Next.js configuration
└── README.md             # This file
```

## 🎨 Customization

### Shadcn/ui Components
To add more Shadcn/ui components:
```bash
npx shadcn@latest add <component-name>
```

### Tailwind Configuration
Edit `tailwind.config.ts` to customize colors, fonts, and other design tokens.

### Environment Variables
Create a `.env.local` file for environment-specific configuration:
```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

## 🚢 Deployment

This project is configured for easy deployment on **Vercel**:

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy on every push to `master`

### Manual Deployment
```bash
npm run build
npm start
```

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Documentation](https://greensock.com/docs)
- [Three.js Documentation](https://threejs.org/docs)
- [Shadcn/ui Components](https://ui.shadcn.com)

## 📄 License

This project is open source. Feel free to fork, modify, and use it for your own purposes.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

For inquiries or collaboration opportunities, feel free to reach out through the contact form on the website.

---

**Made with ❤️ by soberdev**
