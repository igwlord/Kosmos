import { useLanguage } from '../i18n/LanguageContext';
import { Link } from '../router/Router';
import { AppleIcon, WindowsIcon } from '../components/icons/PlatformIcons';

export function DownloadPage() {
  const { t } = useLanguage();

  return (
    <section className="w-full min-h-[92vh] flex items-center justify-center relative overflow-hidden px-panel-margin py-24">
      <div className="w-full max-w-5xl relative z-10 flex flex-col items-center">
        <Link
          to="/"
          className="font-label-caps text-[11px] text-on-surface-variant hover:text-primary tracking-widest transition-colors mb-10 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_back</span>
          {t.download.back}
        </Link>

        <div className="flex flex-wrap justify-center gap-2 mb-5" aria-label={`${t.download.version} · ${t.download.status}`}>
          <span className="font-label-caps text-xs tracking-widest text-primary border border-primary/20 bg-primary/10 rounded-full px-3 py-1.5">{t.download.version}</span>
          <span className="font-label-caps text-xs tracking-widest text-tertiary border border-tertiary/20 bg-tertiary/10 rounded-full px-3 py-1.5">{t.download.status}</span>
        </div>
        <h1 className="font-display-lg text-4xl md:text-5xl text-on-surface text-center">{t.download.heading}</h1>
        <p className="text-on-surface-variant text-lg mt-4 text-center max-w-xl">{t.download.subheading}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[60px] rounded-full"></div>
            <div className="relative glass-panel rounded-2xl p-10 border border-primary/20 glow-primary flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <WindowsIcon className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-headline-md text-2xl text-on-surface">{t.download.windowsTitle}</h2>
              <p className="font-value-mono text-xs text-on-surface-variant mt-2 tracking-wide">{t.download.windowsSpec}</p>
              <p className="font-label-caps text-xs text-primary/90 mt-3 tracking-wider">{t.download.fileType}</p>
              <a
                href="https://drive.google.com/file/d/1Y7g_ScKbKCiEvBQATEInG0FKrZs80Vgb/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="download-host-note"
                className="tactile-btn text-primary font-label-caps px-8 py-4 rounded-xl glow-primary transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 border border-primary/20 cursor-pointer w-full mt-8"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">download</span>
                {t.download.windowsCta}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-tertiary/20 blur-[60px] rounded-full"></div>
            <div className="relative glass-panel rounded-2xl p-10 border border-tertiary/20 glow-tertiary flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center mb-6">
                <AppleIcon className="w-7 h-7 text-tertiary" />
              </div>
              <h2 className="font-headline-md text-2xl text-on-surface">{t.download.macTitle}</h2>
              <p className="font-value-mono text-xs text-on-surface-variant mt-2 tracking-wide">{t.download.macSpec}</p>
              <p className="font-label-caps text-xs text-tertiary/90 mt-3 tracking-wider">{t.download.fileType}</p>
              <a
                href="https://drive.google.com/file/d/1CvOmVePyntUq-uCGjg7E56i8qo60TpIa/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="download-host-note"
                className="tactile-btn text-tertiary font-label-caps px-8 py-4 rounded-xl glow-tertiary transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 border border-tertiary/20 cursor-pointer w-full mt-8"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">download</span>
                {t.download.macCta}
              </a>
            </div>
          </div>
        </div>
        <p id="download-host-note" className="text-on-surface-variant text-sm text-center mt-7 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-base text-primary" aria-hidden="true">open_in_new</span>
          {t.download.hostedNote}
        </p>
      </div>
    </section>
  );
}
