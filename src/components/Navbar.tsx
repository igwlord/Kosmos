import { useLanguage } from '../i18n/LanguageContext';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="nav-glass border-b border-white/5 fixed top-0 w-full z-50 flex justify-between items-center px-panel-margin py-control-padding h-[80px]">
      <div className="font-display-lg text-2xl tracking-tighter text-primary flex items-center gap-3">
        <img src="/logo-nav.png" alt="Kosmos logo" width={44} height={44} className="w-11 h-11 rounded-full" />
        Kosmos
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a className="text-on-surface-variant font-medium hover:text-primary transition-all duration-300 text-sm tracking-wide" href="#main-ui">{t.nav.voice}</a>
        <a className="text-on-surface-variant font-medium hover:text-primary transition-all duration-300 text-sm tracking-wide" href="#modulation">{t.nav.matrix}</a>
        <a className="text-on-surface-variant font-medium hover:text-primary transition-all duration-300 text-sm tracking-wide" href="#effects">{t.nav.effects}</a>
        <a className="text-on-surface-variant font-medium hover:text-primary transition-all duration-300 text-sm tracking-wide" href="#installation">{t.nav.install}</a>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-lg border border-outline-variant/30 overflow-hidden font-label-caps text-[11px] tracking-widest">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
            className={`px-3 py-1.5 transition-colors cursor-pointer ${language === 'en' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:text-primary'}`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage('es')}
            aria-pressed={language === 'es'}
            className={`px-3 py-1.5 transition-colors cursor-pointer ${language === 'es' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:text-primary'}`}
          >
            ES
          </button>
        </div>
        <button className="bg-primary-container text-on-primary-container font-label-caps px-5 py-2 rounded-lg hover:brightness-110 hover:scale-[1.04] active:scale-[0.97] transition-all glow-primary text-[11px] tracking-[0.1em] cursor-pointer">
          {t.nav.download}
        </button>
      </div>
    </nav>
  );
}
