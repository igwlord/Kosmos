import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Link, scrollToPageSection, useRouter } from '../router/Router';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { path, navigate } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  useEffect(() => {
    if (!menuOpen) return;
    firstMobileLinkRef.current?.focus();
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  const handleSectionClick = (hash: string, closeMenu = false) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (closeMenu) setMenuOpen(false);

    if (path !== '/') {
      navigate(`/${hash}`);
      return;
    }

    window.history.pushState(null, '', hash);
    scrollToPageSection(hash.slice(1));
  };

  const currentPage = (target: string) => (path === target ? 'page' as const : undefined);

  return (
    <nav aria-label={t.nav.primaryLabel} className="nav-glass border-b border-white/5 fixed top-0 w-full z-50 flex justify-between md:grid md:grid-cols-[1fr_auto_1fr] items-center px-3 md:px-6 lg:px-panel-margin py-control-padding h-[72px] md:h-[80px]">
      <Link to="/" aria-label={`Kosmos — ${t.nav.home}`} className="font-brand text-lg md:text-3xl tracking-[0.15em] text-primary flex items-center gap-2 md:gap-4 shrink-0">
        <img src="/logo-nav.png" alt="" aria-hidden="true" width={56} height={56} className="w-9 h-9 md:w-14 md:h-14 rounded-full" />
        <span className="hidden lg:inline">KOSMOS</span>
      </Link>
      <div className="hidden md:flex items-center justify-center gap-3 lg:gap-6 xl:gap-8">
        <a className="text-on-surface-variant font-medium hover:text-tertiary transition-all duration-300 text-sm tracking-wide py-2" href={path === '/' ? '#engine' : '/#engine'} onClick={handleSectionClick('#engine')}>{t.nav.engine}</a>
        <a className="text-on-surface-variant font-medium hover:text-tertiary transition-all duration-300 text-sm tracking-wide py-2" href={path === '/' ? '#effects' : '/#effects'} onClick={handleSectionClick('#effects')}>{t.nav.effects}</a>
        <a className="text-on-surface-variant font-medium hover:text-tertiary transition-all duration-300 text-sm tracking-wide py-2" href={path === '/' ? '#modulation' : '/#modulation'} onClick={handleSectionClick('#modulation')}>{t.nav.matrix}</a>
        <a className="text-on-surface-variant font-medium hover:text-tertiary transition-all duration-300 text-sm tracking-wide py-2" href={path === '/' ? '#installation' : '/#installation'} onClick={handleSectionClick('#installation')}>{t.nav.install}</a>
        <Link to="/manual" aria-current={currentPage('/manual')} className="text-on-surface-variant font-medium hover:text-tertiary transition-all duration-300 text-sm tracking-wide py-2">{t.nav.manual}</Link>
      </div>
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4 shrink-0 md:justify-self-end">
        <div className="flex items-center rounded-lg border border-outline-variant/30 overflow-hidden font-label-caps text-[11px] tracking-widest">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
            aria-label="English"
            className={`min-w-11 h-11 md:min-w-10 md:h-9 px-2 md:px-3 transition-colors cursor-pointer ${language === 'en' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:text-primary'}`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage('es')}
            aria-pressed={language === 'es'}
            aria-label="Español"
            className={`min-w-11 h-11 md:min-w-10 md:h-9 px-2 md:px-3 transition-colors cursor-pointer ${language === 'es' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:text-primary'}`}
          >
            ES
          </button>
        </div>
        <Link
          to="/download"
          aria-current={currentPage('/download')}
          className="bg-primary-container text-on-primary-container font-label-caps min-h-11 md:min-h-9 px-3 md:px-5 py-2 rounded-lg hover:brightness-110 hover:scale-[1.04] active:scale-[0.97] transition-all glow-primary text-[11px] md:text-xs tracking-[0.1em] cursor-pointer whitespace-nowrap flex items-center"
        >
          {t.nav.download}
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          className="md:hidden w-11 h-11 rounded-lg border border-white/10 text-on-surface flex items-center justify-center"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
      <div id="mobile-navigation" hidden={!menuOpen} className="mobile-menu-panel md:hidden absolute top-full inset-x-0 border-b border-white/10 p-3 shadow-2xl">
        <div className="grid gap-1 max-w-xl mx-auto">
          <Link ref={firstMobileLinkRef} to="/" onClick={() => setMenuOpen(false)} aria-current={currentPage('/')} className="min-h-11 px-4 rounded-lg flex items-center text-on-surface-variant hover:bg-white/5 hover:text-tertiary">{t.nav.home}</Link>
          <a className="min-h-11 px-4 rounded-lg flex items-center text-on-surface-variant hover:bg-white/5 hover:text-tertiary" href={path === '/' ? '#engine' : '/#engine'} onClick={handleSectionClick('#engine', true)}>{t.nav.engine}</a>
          <a className="min-h-11 px-4 rounded-lg flex items-center text-on-surface-variant hover:bg-white/5 hover:text-tertiary" href={path === '/' ? '#effects' : '/#effects'} onClick={handleSectionClick('#effects', true)}>{t.nav.effects}</a>
          <a className="min-h-11 px-4 rounded-lg flex items-center text-on-surface-variant hover:bg-white/5 hover:text-tertiary" href={path === '/' ? '#modulation' : '/#modulation'} onClick={handleSectionClick('#modulation', true)}>{t.nav.matrix}</a>
          <a className="min-h-11 px-4 rounded-lg flex items-center text-on-surface-variant hover:bg-white/5 hover:text-tertiary" href={path === '/' ? '#installation' : '/#installation'} onClick={handleSectionClick('#installation', true)}>{t.nav.install}</a>
          <Link to="/manual" onClick={() => setMenuOpen(false)} aria-current={currentPage('/manual')} className="min-h-11 px-4 rounded-lg flex items-center text-on-surface-variant hover:bg-white/5 hover:text-tertiary">{t.nav.manual}</Link>
        </div>
      </div>
    </nav>
  );
}
