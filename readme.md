1./ How to install Bbootstrap

COMMAND LINE

> npm i bootstrap

# copy to main.jsx

> import 'bootstrap/dist/css/bootstrap.min.css'
> import 'bootstrap/dist/js/bootstrap.bundle.min.js' optional, for JS components

2./ How to install Tailwidcss

COMMAND LINE

> npm i tailwindcss @tailwindcss/vite

Add the Tailwind plugin to your Vite config:

# vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({plugins: [react(), tailwindcss()],})

# Then import Tailwind in your main CSS file (usually src/index.css), replacing whatever's there:

@import "tailwindcss";

# Make sure that CSS file is imported in main.jsx:

import './index.css'

3./ How to install react router Dom

COMMAND LINE

> npm i react-router-dom
