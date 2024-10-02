import { ThemeProvider } from '@/context/theme-provider.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
)
