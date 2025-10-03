# 🎯 Quick Start Guide - Blur Filter Chrome Extension

## ✅ What's Been Set Up

Your Chrome extension is now fully configured with:
- ✨ **TypeScript** for type safety
- ⚛️ **React 18** for the popup UI  
- ⚡ **Vite** for fast builds and hot reload
- 🔧 **CRXJS** plugin for Chrome extension development
- 📦 **Manifest V3** (latest Chrome extension standard)

## 🚀 Next Steps to Use Your Extension

### 1. Development Server is Running ✓
The dev server is already running! You should see:
```
➜  CRXJS: Load dist as unpacked extension
```

### 2. Load the Extension in Chrome

1. **Open Chrome** and go to: `chrome://extensions/`

2. **Enable Developer Mode**
   - Toggle the switch in the top-right corner

3. **Load Unpacked Extension**
   - Click "Load unpacked" button
   - Navigate to: `c:\Development\blur-filter-chrome\dist`
   - Click "Select Folder"

> Note: Microsoft Edge (Chromium) supports Chrome extensions. To load the extension in Edge:

1. Open Edge and go to `edge://extensions/`
2. Enable "Developer features" (bottom-left)
3. Click "Load unpacked"
4. Select the `dist` folder from this project

4. **Test the Extension**
   - You should see a purple "B" icon in your Chrome toolbar
   - Click it to open the popup
   - Toggle blur on/off
   - Adjust intensity with the slider
   - Visit any website and see the blur effect!

### 3. Development Workflow

While `npm run dev` is running:
- Edit any file in `src/`
- Save your changes
- Extension auto-rebuilds (watch terminal)
- Refresh the test page to see changes

**Hot Tips:**
- Content script changes: Refresh the webpage
- Popup changes: Close and reopen the popup
- Manifest changes: Click reload icon on extension card

## 📂 Project Structure Explained

```
blur-filter-chrome/
├── src/
│   ├── popup/
│   │   ├── Popup.tsx        ← React component (UI logic)
│   │   ├── popup.css        ← Popup styling
│   │   └── main.tsx         ← React entry point
│   └── content/
│       └── content.ts       ← Content script (blur logic)
├── public/
│   └── icons/               ← Extension icons
├── dist/                    ← Built extension (load this in Chrome)
├── manifest.json            ← Extension configuration
├── index.html               ← Popup HTML template
├── vite.config.ts           ← Build configuration
└── package.json             ← Dependencies
```

## 🎨 How It Works

### Popup (React Component)
- Beautiful gradient UI
- Toggle switch for enable/disable
- Slider for blur intensity (0-20px)
- Uses Chrome Storage API to save settings

### Content Script
- Runs on every webpage
- Listens for messages from popup
- Applies CSS blur filter: `filter: blur(Xpx)`
- Persists blur state across page reloads

### Communication Flow
```
Popup (React) → Chrome Message API → Content Script → Page Blur
```

## 🛠️ Common Commands

```bash
# Start development server (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Customization Ideas

### Easy Changes:
1. **Adjust blur range**: Edit `max="20"` in `Popup.tsx`
2. **Change colors**: Edit gradient in `popup.css`
3. **Different filter**: Change `blur()` to `grayscale()` in `content.ts`

### Advanced Features:
- Add keyboard shortcuts (manifest: `commands`)
- Blur specific elements (query selectors)
- Create presets (multiple blur levels)
- Add website whitelist/blacklist
- Background service worker for automation

## 🐛 Troubleshooting

### Extension Won't Load
- Make sure you're loading `dist` folder, not root
- Check for errors in `chrome://extensions/` 
- Verify dev server is running (`npm run dev`)

### Changes Not Showing
- Refresh the webpage you're testing
- Click reload icon on extension card
- Check terminal for build errors

### TypeScript Errors in Editor
- All should be resolved now
- If not, try: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

## 📚 Learning Resources

- **This Project**: Already uses best practices!
- **Chrome Extensions**: https://developer.chrome.com/docs/extensions/
- **CRXJS Docs**: https://crxjs.dev/vite-plugin/
- **React**: https://react.dev/
- **TypeScript**: https://typescriptlang.org/

## 🎉 You're All Set!

Your extension is production-ready and follows industry best practices:
- ✅ Type-safe with TypeScript
- ✅ Modern React architecture
- ✅ Fast development with Vite HMR
- ✅ Optimized production builds
- ✅ Manifest V3 compliant

**Go forth and build amazing extensions!** 🚀

---

Need help? Check the main README.md for detailed documentation.
