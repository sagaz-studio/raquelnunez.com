import { renderToString } from 'react-dom/server';
import App from './App';
export { pages, origin, seoHead } from './seo';
export function render(path: string) { return renderToString(<App path={path} />); }
