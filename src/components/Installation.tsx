import { useLanguage } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';

export function Installation() {
  const { t } = useLanguage();
  const [ref, isVisible] = useReveal<HTMLDivElement>();

  return (
    <section className="w-full max-w-4xl px-panel-margin py-16 md:py-32 mb-12" id="installation">
      <div
        ref={ref}
        className={`glass-panel rounded-2xl p-6 md:p-10 border border-white/10 relative overflow-hidden transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10 pb-4 md:pb-6 border-b border-white/5">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
            <span className="material-symbols-outlined text-tertiary text-3xl">download_done</span>
          </div>
          <div>
            <h2 className="font-display-lg text-2xl md:text-3xl text-on-surface">{t.installation.heading}</h2>
            <p className="text-on-surface-variant text-sm mt-1">{t.installation.subheading}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-10">
          <div className="flex gap-4 md:gap-6 group">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-primary font-value-mono text-lg glow-primary transition-all group-hover:scale-110">1</div>
            <div className="pt-1">
              <h4 className="font-headline-md text-on-surface mb-2">{t.installation.step1Title}</h4>
              <p className="font-body-base text-on-surface-variant">{t.installation.step1Body}</p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-6 group">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-primary font-value-mono text-lg glow-primary transition-all group-hover:scale-110">2</div>
            <div className="pt-1 flex-grow min-w-0">
              <h4 className="font-headline-md text-on-surface mb-2">{t.installation.step2Title}</h4>
              <p className="font-body-base text-on-surface-variant mb-4">
                {t.installation.step2Body}{' '}
                <span className="font-value-mono text-secondary px-1.5 py-0.5 rounded bg-surface-container-highest border border-white/5">Kosmos.vst3</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="recessed-display p-4 rounded-xl border border-white/5">
                  <p className="font-label-caps text-[10px] text-primary mb-2 opacity-80">{t.installation.windowsLabel}</p>
                  <p className="font-value-mono text-[11px] text-on-surface break-all opacity-90">C:\Program Files\Common Files\VST3</p>
                </div>
                <div className="recessed-display p-4 rounded-xl border border-white/5">
                  <p className="font-label-caps text-[10px] text-primary mb-2 opacity-80">{t.installation.macosLabel}</p>
                  <p className="font-value-mono text-[11px] text-on-surface break-all opacity-90">/Library/Audio/Plug-Ins/VST3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 md:gap-6 group">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-primary font-value-mono text-lg glow-primary transition-all group-hover:scale-110">3</div>
            <div className="pt-1">
              <h4 className="font-headline-md text-on-surface mb-2">{t.installation.step3Title}</h4>
              <p className="font-body-base text-on-surface-variant">{t.installation.step3Body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
