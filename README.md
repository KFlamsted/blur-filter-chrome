# Blur Filter Chrome Extension

A Chrome/Edge extension for applying blur effects to web pages. Extension is built with TypeScript, React, and Vite.

## 🚀 Features

- ✨ Modern tech stack: TypeScript + React + Vite
- 🎨 Beautiful, gradient-themed popup UI
- 🎛️ Adjustable blur intensity (0-20px)
- 💾 Persistent settings using Chrome Storage API
- ⚡ Fast development with Hot Module Replacement (HMR)
- 📦 Optimized production builds with CRXJS

## 🛠️ Tech Stack

- **TypeScript** - Type safety and better developer experience
- **React 18** - Modern UI library for the popup interface
- **Vite** - Lightning-fast build tool and dev server
- **CRXJS Vite Plugin** - Chrome extension support for Vite
- **Chrome Extensions Manifest V3** - Latest extension platform

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Chrome or Microsoft Edge

## 🔧 Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Mode

Run the extension in development mode with hot reload:

```bash
npm run dev
```

This will create a `dist` folder with the development build.

### 3. Load Extension in Chrome/Edge

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right corner)
3. Click "Load unpacked"
4. Select the `dist` folder from this project

> Note: Microsoft Edge (Chromium) supports Chrome extensions. To load the extension in Edge:

1. Open Edge and go to `edge://extensions/`
2. Enable "Developer features" (bottom-left)
3. Click "Load unpacked"
4. Select the `dist` folder from this project

### 4. Development Workflow
- Refresh the extension in Chrome (or reload the page you're testing on)

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

The production-ready extension will be in the `dist` folder.

## 📁 Project Structure

```
blur-filter-chrome/
├── src/
│   ├── popup/              # React popup UI
│   │   ├── Popup.tsx       # Main popup component
│   │   ├── popup.css       # Popup styles
│   │   └── main.tsx        # React entry point
│   └── content/            # Content scripts
│       └── content.ts      # Blur filter logic
├── public/
│   └── icons/              # Extension icons
├── manifest.json           # Extension manifest (Manifest V3)
├── index.html              # Popup HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🔍 How It Works

1. **Popup UI (React)**: User interface for controlling blur settings
   - Toggle blur on/off
   - Adjust blur intensity with a slider
   - Settings persist across browser sessions

2. **Content Script**: Injects into web pages
   - Listens for messages from popup
   - Applies CSS blur filter to the page body
   - Responds to real-time blur intensity changes

3. **Storage**: Chrome Storage Sync API
   - Saves user preferences
   - Syncs settings across devices (if user is signed into Chrome)

## 🚧 Customization Ideas

- Add different blur targets (specific elements, images only, etc.)
- Implement keyboard shortcuts
- Add preset blur levels
- Create a blacklist/whitelist for specific websites
- Add grayscale or other CSS filters
- Background service worker for advanced features

## 📝 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally

## 🐛 Troubleshooting

### TypeScript Errors Before npm install
The red squiggly lines are normal before installing dependencies. Run `npm install` first.

### Extension Not Loading
- Make sure you loaded the `dist` folder, not the root folder
- Check Chrome DevTools for any console errors
- Verify manifest.json is valid

### Changes Not Reflecting
- Run `npm run dev` if not already running
- Reload the extension in `chrome://extensions/`
- Hard refresh the test page (Ctrl+Shift+R)

## 📚 Learn More

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [CRXJS Vite Plugin](https://crxjs.dev/vite-plugin/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## 📄 License

MIT License - feel free to use this as a template for your own extensions!

## 🤝 Contributing

Feel free to contribute to the project!
