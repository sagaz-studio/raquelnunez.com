import Home from '@/pages/Home';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfUse from '@/pages/TermsOfUse';
import Accessibility from '@/pages/Accessibility';
import ServicePage from '@/pages/ServicePage';
import ArticlePage from '@/pages/ArticlePage';
import ResourcesPage from '@/pages/ResourcesPage';
import { normalizePath, pages } from './seo';

// Native links give each page a complete document and its own server-rendered metadata.
export default function App({ path = window.location.pathname }: { path?: string }) {
  const route = normalizePath(path);
  if (route === '/') return <Home />;
  if (route === '/politica-de-privacidad/' || route === '/privacy-policy/') return <PrivacyPolicy />;
  if (route === '/terminos-de-uso/' || route === '/terms-of-use/') return <TermsOfUse />;
  if (route === '/accesibilidad/' || route === '/accessibility/') return <Accessibility />;
  if (route === '/recursos/') return <ResourcesPage />;
  if (route === '/recursos/quiebras/que-deudas-elimina-quiebra-puerto-rico/') return <ArticlePage />;
  if (pages[route]) return <ServicePage path={route} />;
  return <main className="container service-content"><h1>Página no encontrada</h1><p>La dirección solicitada no existe.</p><a href="/">Volver al inicio</a> · <a href="/quiebras/">Orientación sobre quiebras</a></main>;
}
