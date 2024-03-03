import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ShopProvider } from './context/ShopContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShopProvider>
      <App />
    </ShopProvider>
  </React.StrictMode>,
)
