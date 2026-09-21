import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { normalizePath, seoHead } from './seo';
const root = document.getElementById('root')!;
const app = <StrictMode><App /></StrictMode>;
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  // Development uses the same metadata as the generated production documents.
  document.head.insertAdjacentHTML('beforeend', seoHead(normalizePath(window.location.pathname)));
  createRoot(root).render(app);
}
