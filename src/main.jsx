import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Loading spinner
const loader = document.createElement('div');
loader.className = 'page-loader';
loader.innerHTML = '<div class="page-loader-inner"></div>';
document.body.appendChild(loader);
setTimeout(() => { if (loader.parentNode) loader.parentNode.removeChild(loader); }, 2000);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
