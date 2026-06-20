// Ambient declarations so TypeScript resolves side-effect stylesheet imports
// (e.g. `import "./globals.css"`). Next.js handles the actual bundling.
declare module "*.css";
