# 🚀 Complete Fullstack React & PERN Learning Guide

An in-depth, step-by-step master guide covering **Components**, **Props**, **State**, **React Router**, **Hooks (`useState`, `useEffect`)**, **Styling (Tailwind & Bootstrap)**, **Fullstack PERN Roadmap**, and **Essential Commands**.

---

## 📑 Table of Contents

1. [Core React Fundamentals](#1-core-react-fundamentals)
   - [What is a Component?](#what-is-a-component)
   - [What are Props? (Data In)](#what-are-props-data-in)
   - [What is State? (`useState`)](#what-is-state-usestate)
   - [State vs Props Comparison](#state-vs-props-comparison)
2. [React Hooks Deep Dive](#2-react-hooks-deep-dive)
   - [`useState` (Primitives, Objects, Arrays)](#1-usestate-managing-component-memory)
   - [`useEffect` (Lifecycle, API Fetching & Cleanup)](#2-useeffect-handling-side-effects--apis)
3. [React Router DOM (Complete Guide)](#3-react-router-dom-complete-guide)
   - [SPA Concept](#why-react-router-spa-vs-mpa)
   - [Setup & `<BrowserRouter>`](#step-1-installation--setup)
   - [Route Mapping (`<Routes>`, `<Route>`)](#step-2-defining-routes-in-appjsx)
   - [Layouts & `<Outlet />`](#step-3-nested-routes--shared-layouts-with-outlet)
   - [Dynamic Routes & `useParams()`](#step-4-dynamic-routes-with-useparams)
   - [Navigation: `<Link>`, `<NavLink>`, `useNavigate()`](#step-5-navigation-link-navlink-and-usenavigate)
   - [Query Parameters (`useSearchParams`)](#step-6-query-parameters-with-usesearchparams)
   - [404 Page (Catch-all Route)](#step-7-handling-404-not-found)
4. [Styling Frameworks](#4-styling-frameworks)
   - [Tailwind CSS v4 (Setup & Usage)](#tailwind-css-v4)
   - [Bootstrap 5 (Setup & Usage)](#bootstrap-5)
5. [Fullstack PERN Architecture & Recommendations](#5-fullstack-pern-architecture--roadmap)
   - [What is the PERN Stack?](#what-is-pern)
   - [Connecting React Frontend to Node/Express Backend](#connecting-react-to-express-api)
   - [Next Steps & Recommended Learning Path](#recommended-next-topics-to-learn)
6. [Common React Errors & Solutions](#6-common-react-bugs--how-to-fix-them)
7. [Daily Command Line Cheat Sheet](#7-daily-command-line-cheat-sheet)

---

## 1. Core React Fundamentals

### What is a Component?

A **Component** is a reusable, self-contained building block of the user interface (UI). In modern React, components are JavaScript functions that return JSX (HTML-like syntax).

#### Key Rules for Components:

1. **Name must start with a Capital Letter**: `HeroPage`, `Navbar`, `ProductCard` (lowercase names like `<div />` or `<button />` are treated as built-in HTML tags).
2. **Must return a single root element**: Wrap multiple tags in a `<div>` or a Fragment (`<> ... </>`).
3. **Use `className` instead of `class`**: Because `class` is a reserved keyword in JavaScript.

```jsx
// src/components/Greeting.jsx
function Greeting() {
  return (
    <div className="card">
      <h2>Welcome to My App!</h2>
      <p>This is a reusable functional component.</p>
    </div>
  );
}

export default Greeting;
```

---

### What are Props? (Data In)

**Props** (short for _properties_) are arguments passed from a parent component down to a child component.

- Props allow components to be dynamic and reusable.
- **Props are READ-ONLY (immutable)**: A child component must never modify the props it receives.

#### Passing and Destructuring Props:

```jsx
// 1. Child Component: Destructuring props directly in function parameters
function ProductCard({ title, price, inStock }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">Price: ${price}</p>
      <span className={inStock ? "text-green-600" : "text-red-600"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

// 2. Parent Component: Passing props to the child
function ProductList() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ProductCard title="Wireless Mouse" price={25} inStock={true} />
      <ProductCard title="Mechanical Keyboard" price={85} inStock={false} />
    </div>
  );
}
```

#### Special Prop: `children`

The `children` prop represents everything placed between the opening and closing tag of a component:

```jsx
function Container({ children }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow">{children}</div>
  );
}

// Usage:
<Container>
  <h1>Title Inside Container</h1>
  <p>Paragraph inside container</p>
</Container>;
```

---

### What is State? (`useState`)

**State** is a component's private memory. Unlike regular JavaScript variables, when state changes, **React automatically re-renders the component** to update the UI on screen.

#### Why regular variables don't work for UI:

```javascript
// ❌ WRONG: UI will NOT update on screen
let count = 0;
function handleClick() {
  count++; // count changes in memory, but React has no idea to redraw the screen!
}
```

```jsx
// ✅ CORRECT: React knows to redraw the component
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // [currentValue, updateFunction]

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

---

### State vs Props Comparison

| Feature        | Props                                   | State                                        |
| -------------- | --------------------------------------- | -------------------------------------------- |
| **Definition** | Data passed from parent to child        | Data managed inside the component itself     |
| **Mutability** | **Read-Only** (Immutable)               | **Mutable** via its `setState` function      |
| **Scope**      | Controlled by parent                    | Controlled by local component                |
| **Purpose**    | Configure child components              | Handle dynamic user input, toggles, API data |
| **Re-render**  | Changing props triggers child re-render | Changing state triggers component re-render  |

---

## 2. React Hooks Deep Dive

### 1. `useState`: Managing Component Memory

#### A. Primitive State (Strings, Numbers, Booleans)

```jsx
const [name, setName] = useState("John");
const [isOpen, setIsOpen] = useState(false);

// Toggle boolean
setIsOpen((prev) => !prev);
```

#### B. Object State (The Spread Operator Rule)

> ⚠️ **Golden Rule**: Never mutate state directly (`user.age = 26` is forbidden). Always create a copy using the spread operator (`...`).

```jsx
const [user, setUser] = useState({ name: "Alex", age: 25, city: "Phnom Penh" });

// Update one field while keeping the rest:
function updateAge() {
  setUser((prevUser) => ({
    ...prevUser, // copies name & city
    age: prevUser.age + 1, // overwrites age
  }));
}
```

#### C. Array State (Adding, Removing, Updating items)

```jsx
const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

// 1. Add item:
const addTask = (newTask) => setTasks([...tasks, newTask]);

// 2. Remove item (using filter):
const deleteTask = (indexToRemove) => {
  setTasks(tasks.filter((_, index) => index !== indexToRemove));
};

// 3. Update item (using map):
const updateTask = (indexToUpdate, newText) => {
  setTasks(tasks.map((task, i) => (i === indexToUpdate ? newText : task)));
};
```

---

### 2. `useEffect`: Handling Side Effects & APIs

**Side Effects** are operations that affect things outside the component: fetching data from an API, subscribing to websockets, setting timers, or manually changing DOM title.

#### Anatomy of `useEffect`:

```javascript
useEffect(
  () => {
    // 1. Code to run for side effect

    return () => {
      // 2. Optional: Cleanup function (runs when component unmounts or before re-running)
    };
  },
  [
    /* 3. Dependency Array */
  ],
);
```

#### The 3 Dependency Array Behaviors:

1. **No array (`useEffect(fn)`)**: Runs after **every single render** (rarely desired).
2. **Empty array (`useEffect(fn, [])`)**: Runs **only once** when the component first mounts (ideal for fetching initial data).
3. **With dependencies (`useEffect(fn, [id, search])`)**: Runs on mount AND **whenever any value in the array changes**.

#### Complete API Data Fetching Pattern:

```jsx
import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load user");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]); // Re-fetch whenever `userId` changes!

  if (loading)
    return <div className="p-4 text-blue-500">Loading user data...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">City: {user.address.city}</p>
    </div>
  );
}

export default UserProfile;
```

---

## 3. React Router DOM (Complete Guide)

### Why React Router? (SPA vs MPA)

- **Traditional Multi-Page App (MPA)**: Clicking a link requests a brand-new HTML page from the server. The entire browser refreshes.
- **Single Page Application (SPA)**: React Router intercepts link clicks, swaps components in JavaScript instantly, and updates the URL **without refreshing the page**.

---

### Step 1: Installation & Setup

```bash
npm i react-router-dom
```

Wrap `<App />` inside `<BrowserRouter>` in your root file:

```jsx
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
```

---

### Step 2: Defining Routes in `App.jsx`

```jsx
// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./Navigetions/Header";
import { HeroPage, AboutPage, ContactPage } from "./components";
import Material from "./components/Material";
import MaterailDetails from "./components/MaterailDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      {/* Parent Layout Route */}
      <Route path="/" element={<Header />}>
        {/* Index route matches parent path "/" */}
        <Route index element={<HeroPage />} />

        {/* Static page routes */}
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="product" element={<Material />} />

        {/* Dynamic route with URL parameter :id */}
        <Route path="product/:id" element={<MaterailDetails />} />
      </Route>

      {/* 404 Catch-All Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
```

---

### Step 3: Nested Routes & Shared Layouts with `<Outlet />`

`<Outlet />` acts as a placeholder where child route elements render.

```jsx
// src/Navigetions/Header.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Header() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar is persistent on all pages */}
      <Navbar />

      {/* The active child page (HeroPage, About, Product, etc.) renders here */}
      <main className="flex-grow p-6">
        <Outlet />
      </main>

      {/* Footer is persistent on all pages */}
      <Footer />
    </div>
  );
}

export default Header;
```

---

### Step 4: Dynamic Routes with `useParams()`

Dynamic routes allow you to match patterns like `/product/1`, `/product/99`, `/product/shoes`.

```jsx
// src/components/MaterailDetails.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MaterailDetails() {
  // Extract ":id" parameter from URL
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch details for this specific product ID
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading product #{id}...</p>;

  return (
    <div className="max-w-lg p-6 mx-auto bg-white rounded shadow">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded"
      />
      <h1 className="mt-4 text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2 text-xl font-semibold text-green-600">
        ${product.price}
      </p>

      <Link
        to="/product"
        className="inline-block mt-4 text-blue-500 hover:underline"
      >
        ← Back to all products
      </Link>
    </div>
  );
}

export default MaterailDetails;
```

---

### Step 5: Navigation (`<Link>`, `<NavLink>`, and `useNavigate`)

#### A. `<Link>` (Prevent Full Reload)

```jsx
import { Link } from "react-router-dom";

<Link to="/about" className="text-blue-500">
  Go to About
</Link>;
```

#### B. `<NavLink>` (For Active Menu Tabs)

```jsx
// src/Navigetions/Navbar.jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  const getLinkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-bold border-b-2 border-blue-400 pb-1"
      : "text-gray-300 hover:text-white pb-1";

  return (
    <nav className="flex gap-6 p-4 bg-gray-900 text-white">
      <NavLink to="/" className={getLinkStyle}>
        Home
      </NavLink>
      <NavLink to="/about" className={getLinkStyle}>
        About
      </NavLink>
      <NavLink to="/product" className={getLinkStyle}>
        Products
      </NavLink>
      <NavLink to="/contact" className={getLinkStyle}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
```

#### C. `useNavigate()` (Programmatic Redirection)

Use `useNavigate()` when navigating inside a function (e.g. after form submission or login):

```jsx
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate successful login
    alert("Logged in successfully!");
    navigate("/product"); // Redirect to product catalog
  };

  return (
    <form onSubmit={handleLogin}>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Log In
      </button>
    </form>
  );
}
```

---

### Step 6: Query Parameters with `useSearchParams`

For filtering and search terms in URL like `/product?category=smartphones&sort=asc`:

```jsx
import { useSearchParams } from "react-router-dom";

function ProductFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";

  return (
    <div>
      <p>
        Current Filter: <b>{category}</b>
      </p>
      <button onClick={() => setSearchParams({ category: "electronics" })}>
        Electronics
      </button>
      <button onClick={() => setSearchParams({ category: "clothing" })}>
        Clothing
      </button>
    </div>
  );
}
```

---

### Step 7: Handling 404 (Not Found)

```jsx
// src/components/NotFound.jsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-extrabold text-red-500">404</h1>
      <p className="text-xl mt-2 text-gray-700">Oops! Page not found.</p>
      <Link
        to="/"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;
```

---

## 4. Styling Frameworks

### Tailwind CSS v4

#### Installation

```bash
npm i tailwindcss @tailwindcss/vite
```

#### Setup in `vite.config.js`

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

#### Add to `src/index.css`

```css
@import "tailwindcss";
```

#### Core Utility Classes to Remember:

- **Layout**: `flex`, `grid`, `grid-cols-3`, `hidden`, `block`
- **Flexbox**: `items-center`, `justify-between`, `gap-4`
- **Spacing**: `p-4` (padding), `m-2` (margin), `px-6` (horizontal), `py-3` (vertical)
- **Responsive**: `sm:`, `md:`, `lg:`, `xl:` (e.g. `w-full md:w-1/2`)
- **Hover/Focus**: `hover:bg-blue-700`, `focus:ring-2`

---

### Bootstrap 5

#### Installation

```bash
npm i bootstrap
```

#### Setup in `src/main.jsx`

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // for dropdowns & modals
```

---

## 5. Fullstack PERN Architecture & Roadmap

```
+-------------------------------------------------------------+
|                        PERN STACK                           |
|                                                             |
|   [ PostgreSQL ]  <--->  [ Express / Node.js ]  <--->  [ React (Vite) ]  |
|     (Database)              (REST API Backend)          (Frontend UI)     |
+-------------------------------------------------------------+
```

### What is PERN?

1. **P - PostgreSQL**: Relational SQL Database (stores tables: users, products, orders).
2. **E - Express.js**: Fast, minimalist web framework for Node.js (builds API endpoints).
3. **R - React.js**: Frontend UI library with components, state, and router.
4. **N - Node.js**: JavaScript runtime that executes code on the backend server.

---

### Connecting React to Express API

#### 1. Backend Route in Express (`server.js`):

```javascript
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Allow React app to make requests
app.use(express.json());

app.get("/api/products", async (req, res) => {
  // Query database (e.g. SELECT * FROM products)
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 499 },
  ];
  res.json(products);
});

app.listen(5000, () => console.log("Server running on port 5000"));
```

#### 2. Frontend Request in React (`ProductList.jsx`):

```jsx
import { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error connecting to backend:", err));
  }, []);

  return (
    <div>
      <h2>Products from Backend API</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### Recommended Next Topics to Learn

1. **Forms & Input Handling**:
   - Controlled inputs with `value={text}` and `onChange={(e) => setText(e.target.value)}`.
2. **Global State Management**:
   - `useContext` / React Context API (for theme switching, global authentication tokens).
   - Zustand or Redux Toolkit for large apps.
3. **Node.js & Express REST APIs**:
   - HTTP Methods (`GET`, `POST`, `PUT`, `DELETE`).
   - Middleware and CORS.
4. **PostgreSQL & Database Queries**:
   - SQL queries (`SELECT`, `INSERT`, `UPDATE`, `DELETE`, `JOIN`).
   - Connecting PostgreSQL using `pg` / `pg-pool` or ORMs like **Prisma**.
5. **Authentication**:
   - User signup/login, password hashing with `bcrypt`, JSON Web Tokens (JWT), protected routes.

---

## 6. Common React Bugs & How to Fix Them

| Error Message                                          | Cause                                                                                         | How to Fix                                                                                 |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `Cannot read properties of undefined (reading 'map')`  | State initial value is `null` or `undefined` before API fetch finishes                        | Set initial state to empty array: `useState([])` or use optional chaining `data?.map(...)` |
| `Objects are not valid as a React child`               | Tried rendering an object directly: `{user}`                                                  | Render specific properties: `{user.name}` or `{JSON.stringify(user)}`                      |
| `Too many re-renders. React limits the number...`      | Called function immediately in `onClick` instead of passing callback: `onClick={setCount(1)}` | Change to arrow function: `onClick={() => setCount(1)}`                                    |
| `Each child in a list should have a unique "key" prop` | Missing `key` attribute in array `.map()`                                                     | Add unique key: `<li key={item.id}>{item.name}</li>`                                       |
| `React Hook "useState" is called conditionally`        | Hooks placed inside `if` statements or loops                                                  | Always call Hooks at the top level of your component function                              |

---

## 7. Daily Command Line Cheat Sheet

| Task                            | Command                                             | Description                                         |
| ------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| **Create Project**              | `npm create vite@latest my-app -- --template react` | Generates a new Vite React app                      |
| **Run Dev Server**              | `npm run dev`                                       | Runs local server (usually `http://localhost:5173`) |
| **Install Everything**          | `npm install`                                       | Installs dependencies from `package.json`           |
| **Install React Router**        | `npm i react-router-dom`                            | Navigation library for SPA                          |
| **Install Tailwind CSS v4**     | `npm i tailwindcss @tailwindcss/vite`               | Modern utility-first CSS framework                  |
| **Install Bootstrap 5**         | `npm i bootstrap`                                   | Component & grid CSS library                        |
| **Install Axios (HTTP client)** | `npm i axios`                                       | Promise-based HTTP library for APIs                 |
| **Install Lucide Icons**        | `npm i lucide-react`                                | Clean, modern SVG icon set                          |
| **Build for Production**        | `npm run build`                                     | Compiles production assets into `/dist` folder      |
| **Preview Production Build**    | `npm run preview`                                   | Runs local server testing the `/dist` build         |
| **Git: Commit Changes**         | `git add . && git commit -m "update"`               | Save project history                                |
| **Git: Push to Remote**         | `git push origin main`                              | Sync with GitHub repository                         |

---

## 🎯 Step-by-Step Feature Workflow

When building any new feature in your React app:

1. **Define your State & Data structure**: What information changes? (`useState`)
2. **Build your Component UI**: Create `src/components/MyComponent.jsx`.
3. **Pass Props if reusable**: Break down complex UI into smaller cards/buttons.
4. **Fetch Data if dynamic**: Connect `useEffect` with `fetch` or `axios`.
5. **Add Route in `App.jsx`**: `<Route path="/my-feature" element={<MyComponent />} />`.
6. **Add NavLink in `Navbar.jsx`**: `<NavLink to="/my-feature">My Feature</NavLink>`.
