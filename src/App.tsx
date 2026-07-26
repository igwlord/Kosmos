/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { RouterProvider, useRouter } from './router/Router';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Installation } from './components/Installation';
import { Footer } from './components/Footer';
import { NotFoundPage } from './pages/NotFoundPage';

const DownloadPage = lazy(() => import('./pages/DownloadPage').then((module) => ({ default: module.DownloadPage })));
const ManualPage = lazy(() => import('./pages/ManualPage').then((module) => ({ default: module.ManualPage })));

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function useRouteMetadata(path: string) {
  const { language, t } = useLanguage();

  useEffect(() => {
    const page = path === '/download' ? 'download' : path === '/manual' ? 'manual' : path === '/' ? 'home' : 'notFound';
    const title = t.metadata[`${page}Title`];
    const description = t.metadata[`${page}Description`];
    const canonicalUrl = `${window.location.origin}${path === '/' ? '/' : path}`;
    const imageUrl = `${window.location.origin}/favicon-512.png`;

    document.title = title;
    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', language === 'es' ? 'es_AR' : 'en_US');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);
    upsertMeta('meta[name="robots"]', 'name', 'robots', page === 'notFound' ? 'noindex, follow' : 'index, follow');

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [language, path, t]);
}

function AppRoutes() {
  const { path } = useRouter();
  useRouteMetadata(path);

  if (path === '/download') {
    return <Suspense fallback={<RouteLoading />}><DownloadPage /></Suspense>;
  }

  if (path === '/manual') {
    return <Suspense fallback={<RouteLoading />}><ManualPage /></Suspense>;
  }

  if (path === '/') return (
    <>
      <Hero />
      <Features />
      <Installation />
    </>
  );

  return <NotFoundPage />;
}

function RouteLoading() {
  const { t } = useLanguage();
  return <div className="min-h-[60vh] flex items-center justify-center text-on-surface-variant" role="status" aria-live="polite">{t.nav.loading}</div>;
}

function SiteLayout() {
  const { t } = useLanguage();

  return (
    <div className="text-on-surface font-body-base antialiased min-h-screen flex flex-col pt-[72px] md:pt-[80px]">
      <a className="site-skip-link" href="#main-content">{t.nav.skipToContent}</a>
      <div className="site-bg" aria-hidden="true" />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col items-center">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <SiteLayout />
      </RouterProvider>
    </LanguageProvider>
  );
}
