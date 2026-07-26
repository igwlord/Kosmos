import { useLanguage } from '../i18n/LanguageContext';
import { Link } from '../router/Router';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-container-lowest/70 backdrop-blur-md border-t border-white/5 w-full py-4 px-panel-margin">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 md:gap-4 min-w-0">
          <p className="font-label-caps text-[11px] text-on-surface-variant opacity-75 truncate">
            {t.footer.copyright}
          </p>
          <Link
            to="/manual"
            className="font-label-caps text-[11px] text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-all shrink-0 min-h-6 flex items-center"
          >
            {t.footer.manual}
          </Link>
        </div>
        <a
          href="https://neptunestudios.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.footer.poweredBy} — ${t.footer.externalNote}`}
          className="neon-neptune font-label-caps text-[11px] tracking-widest opacity-80 hover:opacity-100 hover:scale-[1.03] transition-all w-fit shrink-0 min-h-6 flex items-center"
        >
          {t.footer.poweredBy}
        </a>
      </div>
    </footer>
  );
}
