import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-container-lowest/70 backdrop-blur-md border-t border-white/5 w-full py-12 px-panel-margin">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="font-display-lg text-3xl text-on-surface flex items-center gap-2">
          <img src="/logo-nav.png" alt="Kosmos logo" width={36} height={36} className="w-9 h-9 rounded-full" />
          Kosmos
        </div>
        <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed">
          {t.footer.tagline}
        </p>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-6 border-t border-white/5">
          <p className="font-label-caps text-[10px] text-on-surface-variant opacity-50">
            {t.footer.copyright}
          </p>
          <a
            href="https://neptunestudios.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-neptune font-label-caps text-[10px] tracking-widest opacity-70 hover:opacity-100 hover:scale-[1.03] transition-all w-fit"
          >
            {t.footer.madeBy} Neptune
          </a>
        </div>
      </div>
    </footer>
  );
}
