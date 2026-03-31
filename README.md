# DesktopDraw 🎨

A powerful, lightweight desktop application bringing the popular **Excalidraw** drawing library to your desktop. No more relying on Windows Paint or complex Linux tools—run Excalidraw natively on your computer with full desktop integration.

## 🌟 What is DesktopDraw?

DesktopDraw is an open-source desktop application that packages the Excalidraw drawing library using:
- **React** - Modern UI framework
- **Electron** - Desktop application framework
- **Vite** - Lightning-fast build tool

If you're tired of switching between web browsers and limited desktop tools, DesktopDraw brings you a native desktop experience with all the power of Excalidraw.

## ✨ Features

- 🎨 **Full Excalidraw Capabilities** - All drawing tools, shapes, and features
- 💻 **Native Desktop Experience** - Runs locally without browser dependencies
- ⚡️ **Fast & Responsive** - Optimized performance with Vite
- 🔄 **Real-time Updates** - Hot Module Replacement during development
- 🔒 **Open Source** - Built on trusted, open-source libraries
- 📦 **Lightweight** - Minimal resource footprint
- 🖥️ **Cross-Platform** - Windows, macOS, and Linux support

## 📋 Requirements

- **Node.js** v18 or higher
- **npm** v9 or higher
- **Windows, macOS, or Linux**

## 📦 Tech Stack & Versions

| Technology | Version |
|-----------|---------|
| Node.js | 18+ |
| React | 19.2.4 |
| React Router | 7.13.2 |
| Electron | 41.1.0 |
| Excalidraw | 0.18.0 |
| Vite | Latest |
| TypeScript | Latest |

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/desktopdraw.git
cd desktopdraw
```

2. Install dependencies:
```bash
npm install
```

3. Start development:
```bash
npm run dev:desktop
```

## 🚀 Commands

### Development
```bash
npm run dev:desktop
```
Starts the app with hot reload. Perfect for development - changes appear instantly.

### Build for Production
```bash
npm run build
```
Compiles the project to optimized output in the `build/` folder.

### Run Production Build
```bash
npm run start
```
Runs the built application. Make sure to run `npm run build` first.

### Type Checking
```bash
npm run typecheck
```
Validates TypeScript and generates types.

## 📁 Project Structure

```
desktopdraw/
├── app/                      # React application
│   ├── app.css              # Global styles
│   ├── root.tsx             # Root component
│   ├── routes.ts            # Route configuration
│   ├── excalidraw/          # Excalidraw integration
│   │   └── excalidraw.tsx   # Excalidraw component
│   └── routes/              # Route components
│       └── home.tsx         # Home page
├── electron/                # Electron main process
│   └── main.cjs             # Electron entry point
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
└── react-router.config.ts   # React Router configuration
```

## 🔧 Configuration

- **TypeScript** - Strict type checking enabled by default
- **Vite** - See `vite.config.ts` for build optimization
- **React Router** - See `react-router.config.ts` for routing setup

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 or 3000 is already in use:

```bash
# On Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# On macOS/Linux
lsof -i :5173
kill -9 <PID>
```

### Electron Won't Start

Ensure the development server is running before starting Electron:

```bash
# Terminal 1
npm run dev:renderer

# Terminal 2 (wait a few seconds)
npm run dev:electron
```

### Build Errors

Clear cache and reinstall dependencies:

```bash
npm run clean
npm install
npm run build
```

## 📦 Building Executables for Multiple Platforms

DesktopDraw can be packaged as standalone executables for Windows, macOS, and Linux using **Electron Builder**.

### Prerequisites

Before building executables, install dependencies (including electron-builder):

```bash
npm install
```

### Build for Windows

Generates both NSIS installer and portable executable:

```bash
npm run build:win
```

**Output files in `dist/` folder:**
- `DesktopDraw Setup X.X.X.exe` - NSIS Installer
- `DesktopDraw X.X.X.exe` - Portable executable (no installation needed)

**Requirements:**
- Windows 7 or higher
- No additional tools needed

### Build for macOS

Generates DMG installer and ZIP archive:

```bash
npm run build:mac
```

**Output files in `dist/` folder:**
- `DesktopDraw-X.X.X.dmg` - DMG installer
- `DesktopDraw-X.X.X.zip` - Compressed archive

**Requirements:**
- macOS 10.13 or higher
- Must be built on macOS

### Build for Linux

Generates AppImage and DEB package:

```bash
npm run build:linux
```

**Output files in `dist/` folder:**
- `DesktopDraw-X.X.X.AppImage` - AppImage (no installation needed)
- `DesktopDraw_X.X.X_amd64.deb` - DEB package (for Debian/Ubuntu)

**Requirements:**
- Linux with glibc support
- For DEB: `sudo apt install ./DesktopDraw_X.X.X_amd64.deb`
- For AppImage: `chmod +x DesktopDraw-X.X.X.AppImage && ./DesktopDraw-X.X.X.AppImage`

### Build for All Platforms

Build executables for all platforms at once (Windows, macOS, Linux):

```bash
npm run build:all
```

**Note:** Cross-platform builds have limitations:
- For macOS and Linux, must be built on those respective platforms
- Use CI/CD (GitHub Actions, etc.) to automate multi-platform builds

### Build Output

All executables are placed in the `dist/` directory. This folder is automatically created during the build process.

### Customizing Build Configuration

Edit the `build` section in [`package.json`](package.json ) to customize:
- Application name and ID
- Icons and assets
- Installer options
- Code signing certificates
- Auto-update settings

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📚 Resources

- [Excalidraw Documentation](https://excalidraw.com)
- [React Documentation](https://react.dev)
- [Electron Documentation](https://www.electronjs.org/docs)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ for developers who love drawing and efficiency.

---

**Enjoy drawing with DesktopDraw!** 🎨

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
