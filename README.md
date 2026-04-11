# Demo App Store

Demo App Store is a responsive React single-page application for browsing a curated mobile app catalog under the HERO.IO brand. Users can explore trending apps, view detailed app information, install apps, and manage installed items from a dedicated page. The project uses a local JSON dataset, so it runs without any backend setup.

## 🚀 Features

- **Browse featured content** from the home page banner and trending apps section
- **View all available apps** from a static catalog in `public/data.json`
- **Open dynamic app details pages** with downloads, reviews, ratings, and descriptions
- **Install apps** with toast notifications
- **Manage installed apps** from a dedicated page
- **Sort installed apps** by size, title, or rating
- **Persist installed app state** in `localStorage`
- **Handle unknown routes** with a custom 404 page
- **Responsive design** that works on all devices
- **Modern UI** with Tailwind CSS and daisyUI components

## 🛠️ Tech Stack

- React 19
- Vite 8
- React Router
- Tailwind CSS 4
- daisyUI
- React Icons
- React Toastify
- React Spinners

## 🗺️ Routes

| Route | Description |
| --- | --- |
| `/` | Home page with hero banner, stats section, and trending apps |
| `/allapps` | Full app catalog |
| `/appdetails/:id` | Single app details page |
| `/installedapps` | Installed apps management page |

## 📁 Project Structure

```text
src/
  Components/
    AlwaysShow/
    DynamicShow/
    RepeatedCodes/
  Contexts/
  CustomHooks/
  Routes/
  assets/
public/
  data.json
```

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js
- npm

### 📦 Installation

```bash
npm install
```

### 🏃 Run in Development

```bash
npm run dev
```

### 🏗️ Create a Production Build

```bash
npm run build
```

### 👀 Preview the Production Build

```bash
npm run preview
```

### 🔍 Lint the Project

```bash
npm run lint
```

## 💾 Data and State

- App data is loaded from `public/data.json`
- Installed apps are stored in browser `localStorage`
- The saved storage key is `demo-app-store-installed-apps`

## 📝 Notes

- The app uses React 19's `use()` API to read the shared app data promise
- No backend or external database is required for local development
- Updating `public/data.json` changes the catalog content used across the app

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Khalid Sifullah Siam**

- GitHub: [@KhalidSifullahSIam2004](https://github.com/KhalidSifullahSIam2004)
- Project Repository: [Demo-App-Store-siam-12](https://github.com/KhalidSifullahSIam2004/Demo-App-Store-siam-12)
- Live-site: https://demo-app-store-siam-12.netlify.app
