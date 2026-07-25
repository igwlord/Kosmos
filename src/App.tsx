/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Installation } from './components/Installation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="text-on-surface font-body-base antialiased min-h-screen flex flex-col pt-[80px]">
        <div className="site-bg" aria-hidden="true" />
        <Navbar />
        <main className="flex-grow flex flex-col items-center">
          <Hero />
          <Features />
          <Installation />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
