import { useLanguage } from '../i18n/LanguageContext';
import { Link } from '../router/Router';

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <section className="w-full min-h-[72vh] flex items-center justify-center px-panel-margin py-20">
      <div className="glass-panel w-full max-w-2xl rounded-2xl border border-primary/20 p-8 md:p-12 text-center">
        <p className="font-label-caps text-xs tracking-[0.2em] text-tertiary">{t.notFound.eyebrow}</p>
        <h1 className="font-display-lg text-4xl md:text-5xl text-on-surface mt-4">{t.notFound.heading}</h1>
        <p className="text-on-surface-variant text-lg mt-4">{t.notFound.body}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
          <Link to="/" className="tactile-btn min-h-11 px-6 py-3 rounded-xl text-primary font-label-caps text-xs flex items-center justify-center">
            {t.notFound.homeCta}
          </Link>
          <Link to="/manual" className="min-h-11 px-6 py-3 rounded-xl border border-white/10 text-on-surface-variant hover:text-tertiary font-label-caps text-xs flex items-center justify-center transition-colors">
            {t.notFound.manualCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
