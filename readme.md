# 🚀 Fullstack React Learning Guide & Cheat Sheet

A step-by-step guide covering project setup, styling frameworks, routing, dynamic routes, hooks, and essential commands.

---

## 📑 Table of Contents
1. [Project Initialization (Vite + React)](#1-project-initialization-vite--react)
2. [How to Install & Configure Bootstrap](#2-how-to-install--configure-bootstrap)
3. [How to Install & Configure Tailwind CSS (v4)](#3-how-to-install--configure-tailwind-css-v4)
4. [React Router DOM Setup & Key Concepts](#4-react-router-dom-setup--key-concepts)
   - [Installation](#step-1-installation)
   - [Setup Router in `main.jsx`](#step-2-setup-router-in-mainjsx)
   - [Define Routes in `App.jsx`](#step-3-define-routes-in-appjsx)
   - [Layouts & `<Outlet />`](#step-4-nested-routes--layout-with-outlet)
   - [Dynamic Routes & `useParams`](#step-5-dynamic-routes-with-useparams)
   - [Navigation with `<Link>` & `<NavLink>`](#step-6-navigation-with-link-and-navlink)
5. [React Hooks Essentials (`useState` & `useEffect`)](#5-react-hooks-essentials)
6. [Daily Command Line Cheat Sheet](#6-daily-command-line-cheat-sheet)

---

## 1. Project Initialization (Vite + React)

### 💻 Command Line
```bash
# Create a new Vite React project
npm create vite@latest my-app -- --template react

# Navigate into project directory
cd my-app

# Install dependencies
npm install

# Start local development server
npm run dev
```

### 💡 Key Points to Learn
- **Vite** is a modern build tool that provides fast Hot Module Replacement (HMR).
- `package.json` tracks project dependencies and scripts.

---

## 2. How to Install & Configure Bootstrap

### 💻 Command Line
```bash
npm i bootstrap
```

### ⚙️ Configuration Setup
Import Bootstrap into your entry point (`src/main.jsx` or `src/App.jsx`):

```jsx
// src/main.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional: for modals, dropdowns, etc.
```

### 💡 Key Points to Learn
- **Grid System**: Use `.container`, `.row`, `.col-*` (e.g., `col-md-6`) for responsive layouts.
- **Utility Classes**: Use classes like `d-flex`, `justify-content-between`, `text-center`, `p-3`, `m-2`, `btn btn-primary`.

---

## 3. How to Install & Configure Tailwind CSS (v4)

### 💻 Command Line
```bash
npm i tailwindcss @tailwindcss/vite
```

### ⚙️ Configuration Setup

#### Step 1: Add Vite Plugin in `vite.config.js`
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})
```

#### Step 2: Import Tailwind in `src/index.css`
```css
/* src/index.css */
@import "tailwindcss";
```

#### Step 3: Ensure `index.css` is imported in `src/main.jsx`
```javascript
// src/main.jsx
import './index.css';
```

### 💡 Key Points to Learn
- **Utility-First**: Style directly in JSX using class names like `flex items-center justify-between p-4 bg-slate-900 text-white rounded-lg shadow-md`.
- **Responsive Breakpoints**: `sm:`, `md:`, `lg:`, `xl:`, `2xl:` (e.g., `grid grid-cols-1 md:grid-cols-3`).
- **Hover & Focus States**: `hover:bg-blue-600 focus:outline-none transition-colors`.

---

## 4. React Router DOM Setup & Key Concepts

React Router enables navigation and multi-page routing in Single Page Applications (SPAs) without full page reloads.

### Step 1: Installation
```bash
npm i react-router-dom
```

---

### Step 2: Setup Router in `main.jsx`
Wrap `<App />` with `<BrowserRouter>`:

```jsx
// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

---

### Step 3: Define Routes in `App.jsx`
Use `<Routes>` and `<Route>` to map paths to components:

```jsx
// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Header from './Navigetions/Header'
import { HeroPage, AboutPage, ContactPage } from './components'
import Material from './components/Material'
import MaterailDetails from './components/MaterailDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        {/* Default route */}
        <Route index element={<HeroPage />} />
        
        {/* Static pages */}
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="product" element={<Material />} />
        
        {/* Dynamic route with URL parameter */}
        <Route path="product/:id" element={<MaterailDetails />} />
      </Route>
    </Routes>
  )
}

export default App
```

---

### Step 4: Nested Routes & Layout with `<Outlet />`
When creating shared headers, navbars, and footers across pages:

```jsx
// src/Navigetions/Header.jsx
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Header() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* <Outlet /> renders the active child route component */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Header
```

---

### Step 5: Dynamic Routes with `useParams`
Extract route parameters (like IDs) from the URL:

```jsx
// src/components/MaterailDetails.jsx
import { useParams, Link } from 'react-router-dom'

function MaterailDetails() {
  const { id } = useParams() // Grabs the ":id" from the URL path

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <p className="mt-2 text-gray-600">Viewing details for product ID: <span className="font-mono font-bold text-blue-600">{id}</span></p>
      
      <Link to="/product" className="inline-block mt-4 text-blue-500 hover:underline">
        ← Back to Products
      </Link>
    </div>
  )
}

export default MaterailDetails
```

---

### Step 6: Navigation with `<Link>` and `<NavLink>`

- `<Link>`: Used instead of `<a href="...">` to prevent full browser page reload.
- `<NavLink>`: Has built-in support for `isActive` state for styling active links.

```jsx
// src/Navigetions/Navbar.jsx
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-800 text-white">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold border-b-2 border-blue-400" : "text-gray-300 hover:text-white"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold border-b-2 border-blue-400" : "text-gray-300 hover:text-white"
        }
      >
        About
      </NavLink>

      <NavLink
        to="/product"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold border-b-2 border-blue-400" : "text-gray-300 hover:text-white"
        }
      >
        Products
      </NavLink>
    </nav>
  )
}

export default Navbar
```

---

## 5. React Hooks Essentials

### 1. `useState` (Local Component State)
```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  )
}
```

### 2. `useEffect` (Data Fetching & Side Effects)
```jsx
import { useState, useEffect } from 'react'

function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Runs when component mounts
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, []) // Empty dependency array [] means run once on mount

  if (loading) return <p>Loading...</p>

  return (
    <ul>
      {products.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}
```

---

## 6. Daily Command Line Cheat Sheet

| Task | Command | Description |
|---|---|---|
| **Start Dev Server** | `npm run dev` | Starts Vite dev server with live reload |
| **Install All Dependencies** | `npm install` | Installs everything listed in `package.json` |
| **Install New Package** | `npm i <package_name>` | Installs a library (e.g. `npm i axios`) |
| **Install Dev Dependency** | `npm i -D <package_name>` | Installs dev tools (e.g. linter, build plugin) |
| **Build for Production** | `npm run build` | Compiles optimized code into `/dist` |
| **Preview Production Build** | `npm run preview` | Runs a local server to test the `/dist` build |
| **Git: Stage & Commit** | `git add . && git commit -m "commit message"` | Save changes to git |
| **Git: Push to Remote** | `git push origin <branch>` | Push code to GitHub repository |

---

## 🎯 Summary Checklist for New Pages / Features

1. [ ] Create component in `src/components/YourComponent.jsx`
2. [ ] Add route path in `src/App.jsx` (`<Route path="your-route" element={<YourComponent />} />`)
3. [ ] Add navigation link in `src/Navigetions/Navbar.jsx` (`<NavLink to="/your-route">Label</NavLink>`)
4. [ ] If dynamic, access URL parameter via `const { id } = useParams()`
