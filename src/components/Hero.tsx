import { useLanguage } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';

export function Hero() {
  const { t } = useLanguage();
  const [textRef, textVisible] = useReveal<HTMLDivElement>();
  const [imageRef, imageVisible] = useReveal<HTMLDivElement>();

  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-7xl px-panel-margin py-24 flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div
          ref={textRef}
          className={`flex-1 flex flex-col gap-8 transition-all duration-700 ease-out ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-caps text-[10px] text-primary tracking-widest">{t.hero.badge}</span>
          </div>
          <h1 className="font-display-lg text-6xl md:text-7xl text-on-surface leading-tight">
            {t.hero.titlePrefix} <span className="text-primary italic">{t.hero.titleHighlight}</span>
          </h1>
          <p className="font-body-base text-lg text-on-surface-variant max-w-xl leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="tactile-btn text-primary font-label-caps px-8 py-4 rounded-xl glow-primary transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3 border border-primary/20 cursor-pointer">
              <span className="material-symbols-outlined text-[18px]">desktop_windows</span>
              {t.hero.windows}
            </button>
            <button className="tactile-btn text-on-surface font-label-caps px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3 border border-outline-variant/30 cursor-pointer">
              <span className="material-symbols-outlined text-[18px]">laptop_mac</span>
              {t.hero.macos}
            </button>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
            <span className="font-label-caps text-[10px] text-tertiary tracking-widest">{t.hero.presets}</span>
            <span className="font-label-caps text-[10px] text-on-surface-variant/60 tracking-widest">{t.hero.oscillators}</span>
            <span className="font-label-caps text-[10px] text-on-surface-variant/60 tracking-widest">{t.hero.matrixStat}</span>
          </div>
        </div>
        <div
          ref={imageRef}
          className={`flex-1 w-full relative transition-all duration-700 ease-out delay-150 ${imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full section-glow-mask"></div>
          <div className="relative z-10 p-2 glass-panel rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <img
              alt={t.hero.imageAlt}
              width={1024}
              height={683}
              className="w-full rounded-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_up5HYGetUoL0pCjPwxxy4emThsAskUq2ZrREMB9iivL0TA1uOcIXYpZA-dwpod0LZI7IytJQrtvNrkD_D_6O0gXE0qGhkiQH3rEBG7BF-4bOvLUVEUf3U6KFOW8feShZDTjKfXVsPdrNp_8RyEDE-7Jw8CJ3pl92F870VgPEtI3RoZUZFC7ceI1e6z_573s85WsBhbi3FmkLUPOCvTwd2xuHXv5cq8x-Mg6Uj5OFi5FarlzgLVRseRMq6G6KHGQTbCyZ9bhwqgTF"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
