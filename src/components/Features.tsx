import { useLanguage } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'center' | 'left';
}

function SectionIntro({ eyebrow, title, description, align = 'left' }: SectionIntroProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <span className="font-label-caps text-[11px] tracking-[0.2em] text-primary">{eyebrow}</span>
      <h2 className="font-display-lg text-4xl leading-tight text-on-surface md:text-5xl">{title}</h2>
      <p className="max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">{description}</p>
    </div>
  );
}

export function Features() {
  const { t } = useLanguage();
  const [engineIntroRef, engineIntroVisible] = useReveal<HTMLDivElement>();
  const [voiceRef, voiceVisible] = useReveal<HTMLDivElement>();
  const [fxRef, fxVisible] = useReveal<HTMLDivElement>();
  const [modRef, modVisible] = useReveal<HTMLDivElement>();

  const voiceSpecs = [
    { icon: 'graphic_eq', title: t.features.voice.spec1Title, body: t.features.voice.spec1Body, tone: 'text-primary bg-primary/10 border-primary/20' },
    { icon: 'filter_alt', title: t.features.voice.spec2Title, body: t.features.voice.spec2Body, tone: 'text-secondary-container bg-secondary-container/10 border-secondary-container/20' },
    { icon: 'show_chart', title: t.features.voice.spec3Title, body: t.features.voice.spec3Body, tone: 'text-tertiary bg-tertiary/10 border-tertiary/20' },
  ];

  const effectCards = [
    { number: '01', icon: 'bolt', title: t.features.fx.card1Title, body: t.features.fx.card1Body, tone: 'text-primary bg-primary/10 border-primary/20' },
    { number: '02', icon: 'waves', title: t.features.fx.card2Title, body: t.features.fx.card2Body, tone: 'text-secondary-container bg-secondary-container/10 border-secondary-container/20' },
    { number: '03', icon: 'blur_on', title: t.features.fx.card3Title, body: t.features.fx.card3Body, tone: 'text-tertiary bg-tertiary/10 border-tertiary/20' },
  ];

  return (
    <>
      <section className="w-full border-t border-white/5 py-20 md:py-32">
        <div id="engine" className="mx-auto w-full max-w-7xl px-panel-margin">
          <div
            ref={engineIntroRef}
            className={`transition-all duration-700 ease-out ${engineIntroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            <SectionIntro
              eyebrow={t.features.engineEyebrow}
              title={t.features.heading}
              description={t.features.description}
              align="center"
            />
          </div>

          <div
            ref={voiceRef}
            className={`glass-panel relative mt-12 overflow-hidden rounded-2xl p-6 transition-all duration-700 ease-out md:mt-16 md:p-10 ${voiceVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" aria-hidden="true" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <span className="font-label-caps text-[11px] tracking-[0.2em] text-primary">{t.features.voice.tag}</span>
                <h3 className="mt-2 font-headline-md text-3xl text-on-surface md:text-4xl">{t.features.voice.title}</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-on-surface-variant">{t.features.voice.description}</p>
                <div className="mt-8 flex items-center gap-3 text-xs text-on-surface-variant">
                  <span className="h-px w-12 bg-gradient-to-r from-primary to-transparent" aria-hidden="true" />
                  <span className="font-label-caps tracking-widest">{t.features.voice.signalFlow}</span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {voiceSpecs.map((spec) => (
                  <article key={spec.title} className="rounded-xl border border-white/8 bg-surface-container-lowest/75 p-5">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${spec.tone}`}>
                      <span className="material-symbols-outlined" aria-hidden="true">{spec.icon}</span>
                    </div>
                    <h4 className="mt-5 font-headline-md text-lg text-on-surface">{spec.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{spec.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-y border-secondary-container/10 bg-white/[0.015] py-20 md:py-32">
        <div
          id="effects"
          ref={fxRef}
          className={`mx-auto w-full max-w-7xl px-panel-margin transition-all duration-700 ease-out ${fxVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <SectionIntro eyebrow={t.features.fx.tag} title={t.features.fx.title} description={t.features.fx.description} />

          <div className="mt-8 flex flex-wrap items-center gap-2 font-label-caps text-[10px] tracking-widest text-on-surface-variant md:mt-10">
            <span className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1.5 text-primary">DISTORTION</span>
            <span aria-hidden="true">→</span>
            <span className="rounded-full border border-secondary-container/20 bg-secondary-container/8 px-3 py-1.5 text-secondary-container">CHORUS</span>
            <span aria-hidden="true">→</span>
            <span className="rounded-full border border-secondary-container/20 bg-secondary-container/8 px-3 py-1.5 text-secondary-container">DELAY</span>
            <span aria-hidden="true">→</span>
            <span className="rounded-full border border-tertiary/20 bg-tertiary/8 px-3 py-1.5 text-tertiary">REVERB</span>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {effectCards.map((card) => (
              <article key={card.number} className="glass-panel group relative min-h-72 overflow-hidden rounded-2xl p-6 md:p-8">
                <span className="absolute right-5 top-4 font-value-mono text-5xl text-white/[0.035]" aria-hidden="true">{card.number}</span>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${card.tone}`}>
                  <span className="material-symbols-outlined" aria-hidden="true">{card.icon}</span>
                </div>
                <p className="mt-8 font-label-caps text-[10px] tracking-[0.18em] text-on-surface-variant">{card.number} / 03</p>
                <h3 className="mt-3 font-headline-md text-2xl text-on-surface">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-tertiary/[0.025] py-20 md:py-32">
        <div id="modulation" className="mx-auto w-full max-w-7xl px-panel-margin">
          <div
            ref={modRef}
            className={`glass-panel relative grid min-h-[500px] items-center gap-8 overflow-hidden rounded-2xl p-6 transition-all duration-700 ease-out md:p-10 lg:grid-cols-2 lg:gap-12 ${modVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            <div className="absolute inset-0 rounded-full bg-tertiary/5 blur-[150px]" aria-hidden="true" />
            <div className="relative z-10">
              <SectionIntro eyebrow={t.features.modulation.tag} title={t.features.modulation.title} description={t.features.modulation.description} />
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-lg border border-tertiary/20 bg-tertiary/10 px-4 py-2 font-label-caps text-[10px] text-tertiary">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">settings_input_component</span>
                  {t.features.modulation.sources}
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-secondary/20 bg-secondary/10 px-4 py-2 font-label-caps text-[10px] text-secondary">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">tune</span>
                  {t.features.modulation.destinations}
                </div>
              </div>
            </div>
            <div className="relative z-10 w-full">
              <div className="glow-tertiary relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                <img
                  alt={t.features.modulation.imageAlt}
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7PUerFQnE4PQGuZC_RdK5bNeE67IZqPrHh84xx18-cFmLrIMdjF13rSl37Wb6dBfxhiFzzAaCl4Rs33lfKwuiXd5ph6urWId0R4BvKb52O-mWc0BtGkho-ofmUuCsad-tjnbKRomfJstBLtdzUcKEU46k3eTsR_7zA_ycoQ6rlmi7qX1npgsN9-FAcaom5tdbtsgYh0iHF3tlPntcHQWSrWMlXiX8ooDwPl9l3I9zbnuL9mOjvDiOnDyLb9yOOYukObxqYNVvVww0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
