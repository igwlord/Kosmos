import { useLanguage } from '../i18n/LanguageContext';
import { Link } from '../router/Router';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-container-lowest/70 backdrop-blur-md border-t border-white/5 w-full py-4 px-panel-margin">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 md:gap-4 min-w-0">
          <p className="font-label-caps text-[9px] md:text-[10px] text-on-surface-variant opacity-50 truncate">
            {t.footer.copyright}
          </p>
          <Link
            to="/manual"
            className="font-label-caps text-[9px] md:text-[10px] text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all shrink-0"
          >
            {t.footer.manual}
          </Link>
        </div>
        <a
          href="https://neptunestudios.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="neon-neptune font-label-caps text-[9px] md:text-[10px] tracking-widest opacity-70 hover:opacity-100 hover:scale-[1.03] transition-all w-fit shrink-0"
        >
          Powered by Neptune
        </a>
      </div>
    </footer>
  );
}
