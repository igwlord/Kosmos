import { useLanguage } from '../i18n/LanguageContext';
import { Link } from '../router/Router';
import { AppleIcon, WindowsIcon } from '../components/icons/PlatformIcons';

function InstructionList({ items }: { items: readonly string[] }) {
  return (
    <ol className="mt-5 grid gap-3 text-left text-sm leading-relaxed text-on-surface-variant">
      {items.map((item, index) => (
        <li key={item} className="flex items-start gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 font-value-mono text-[10px] text-on-surface">
            {index + 1}
          </span>
          <span className="pt-0.5">{item}</span>
        </li>
      ))}
    </ol>
  );
}

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
                href="https://drive.google.com/file/d/1A73ga6Zkd2GQ4QipyWgc3dwOg4fECtQ6/view?usp=drive_link"
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
                href="https://drive.google.com/file/d/1z8Di6682JFfJrEl_7L-lKYAsKeFNT-X3/view?usp=drive_link"
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

        <section className="mt-16 w-full" aria-labelledby="security-guide-title">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-label-caps text-[11px] tracking-[0.2em] text-secondary">{t.download.securityEyebrow}</span>
            <h2 id="security-guide-title" className="mt-4 font-display-lg text-3xl text-on-surface md:text-4xl">
              {t.download.securityTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-on-surface-variant md:text-base">{t.download.securityIntro}</p>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-300/25 bg-amber-300/[0.07] p-5 text-left">
            <span className="material-symbols-outlined mt-0.5 shrink-0 text-amber-300" aria-hidden="true">warning</span>
            <div>
              <h3 className="font-headline-md text-base text-on-surface">{t.download.unsignedTitle}</h3>
              <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">{t.download.unsignedBody}</p>
            </div>
          </div>

          <div className="mt-6 grid items-start gap-6 lg:grid-cols-2">
            <article className="glass-panel rounded-2xl border border-primary/20 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <WindowsIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-label-caps text-[10px] tracking-widest text-primary">{t.download.windowsGuideLabel}</p>
                  <h3 className="mt-1 font-headline-md text-xl text-on-surface">{t.download.windowsGuideTitle}</h3>
                </div>
              </div>
              <InstructionList items={t.download.windowsSteps} />
              <p className="mt-5 border-t border-white/8 pt-4 text-xs leading-relaxed text-on-surface-variant/85">
                {t.download.windowsSafetyNote}
              </p>
            </article>

            <article className="glass-panel rounded-2xl border border-tertiary/20 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-tertiary/20 bg-tertiary/10">
                  <AppleIcon className="h-5 w-5 text-tertiary" />
                </div>
                <div>
                  <p className="font-label-caps text-[10px] tracking-widest text-tertiary">{t.download.macGuideLabel}</p>
                  <h3 className="mt-1 font-headline-md text-xl text-on-surface">{t.download.macGuideTitle}</h3>
                </div>
              </div>

              <InstructionList items={t.download.macSteps} />
              <p className="mt-5 border-t border-white/8 pt-4 text-xs leading-relaxed text-on-surface-variant/85">
                {t.download.macSafetyNote}
              </p>
            </article>
          </div>

          <figure className="glass-panel mx-auto mt-6 grid max-w-3xl gap-6 rounded-2xl border border-tertiary/20 p-4 md:grid-cols-[minmax(0,394px)_1fr] md:items-center md:p-6">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 p-2">
              <img
                src="/macos-security-warning.png"
                alt={t.download.macWarningImageAlt}
                className="mx-auto h-auto w-full max-w-[394px] rounded-lg"
                loading="lazy"
                width="394"
                height="353"
              />
            </div>
            <figcaption className="px-2 pb-2 text-left md:px-0 md:pb-0">
              <span className="font-label-caps text-[10px] tracking-widest text-tertiary">{t.download.macExampleLabel}</span>
              <h3 className="mt-2 font-headline-md text-xl text-on-surface">{t.download.macExampleTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{t.download.macWarningCaption}</p>
              <p className="mt-3 text-xs leading-relaxed text-on-surface-variant/85">
                <a
                  href="https://support.apple.com/es-es/guide/mac-help/mh40617/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary underline decoration-tertiary/40 underline-offset-4 hover:decoration-tertiary"
                >
                  {t.download.appleHelpLink}
                </a>
              </p>
            </figcaption>
          </figure>
        </section>
      </div>
    </section>
  );
}
