import { useLanguage } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { Link } from '../router/Router';
import { AppleIcon, WindowsIcon } from './icons/PlatformIcons';

type CalloutColor = 'primary' | 'tertiary' | 'secondary';

interface CalloutProps {
  edge: 'top' | 'bottom';
  align: string;
  color: CalloutColor;
  icon: string;
  title: string;
  sub: string;
}

const calloutColors: Record<CalloutColor, { border: string; glow: string; text: string; line: string; dot: string }> = {
  primary: { border: 'border-primary/20', glow: 'glow-primary', text: 'text-primary', line: 'bg-primary/70', dot: 'bg-primary' },
  tertiary: { border: 'border-tertiary/20', glow: 'glow-tertiary', text: 'text-tertiary', line: 'bg-tertiary/70', dot: 'bg-tertiary' },
  secondary: { border: 'border-secondary-container/20', glow: 'glow-secondary', text: 'text-secondary-container', line: 'bg-secondary-container/70', dot: 'bg-secondary-container' },
};

function Callout({ edge, align, color, icon, title, sub }: CalloutProps) {
  const c = calloutColors[color];
  const chip = (
    <div className={`glass-panel rounded-xl px-4 py-3 border ${c.border} ${c.glow} w-[190px] flex items-center gap-3`}>
      <span className={`material-symbols-outlined ${c.text} text-xl shrink-0`}>{icon}</span>
      <div>
        <p className={`font-label-caps text-[11px] ${c.text} tracking-widest leading-none`}>{title}</p>
        <p className="text-[11px] text-on-surface-variant mt-1 leading-snug">{sub}</p>
      </div>
    </div>
  );
  const line = <div className={`w-[1.5px] h-7 ${c.line}`}></div>;
  const dot = <span className={`w-1.5 h-1.5 rounded-full ${c.dot} ${c.glow}`}></span>;

  return (
    <div
      className={`hidden lg:flex flex-col items-center absolute -translate-x-1/2 z-20 ${edge === 'top' ? 'bottom-full' : 'top-full'}`}
      style={{ left: align }}
    >
      {edge === 'top' ? (
        <>
          {chip}
          {line}
          {dot}
        </>
      ) : (
        <>
          {dot}
          {line}
          {chip}
        </>
      )}
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const [textRef, textVisible] = useReveal<HTMLDivElement>();
  const [imageRef, imageVisible] = useReveal<HTMLDivElement>();

  return (
    <section className="w-full min-h-[92vh] flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-7xl px-panel-margin py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-12 relative z-10">
        <div
          ref={textRef}
          className={`md:w-[42%] flex flex-col gap-6 transition-all duration-700 ease-out ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-caps text-[10px] text-primary tracking-widest">{t.hero.eyebrow}</span>
          </div>
          <h1 className="font-display-lg text-5xl md:text-6xl text-on-surface leading-[1.1]">
            {t.hero.titlePrefix} <span className="text-primary italic">{t.hero.titleHighlight}</span>
          </h1>
          <p className="font-body-base text-lg text-on-surface-variant max-w-xl leading-relaxed">
            {t.hero.description}
          </p>
          <Link
            to="/download"
            className="tactile-btn text-primary font-label-caps px-8 py-4 rounded-xl glow-primary transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 border border-primary/20 cursor-pointer w-full sm:w-fit mt-2"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            {t.hero.cta}
          </Link>
          <div className="flex items-center gap-2.5 text-on-surface-variant/70">
            <WindowsIcon className="w-3.5 h-3.5" />
            <AppleIcon className="w-3.5 h-3.5" />
            <span className="font-label-caps text-[10px] tracking-widest">{t.hero.specLine}</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 pt-6 border-t border-white/5">
            <span className="flex items-center gap-1.5 font-label-caps text-[10px] text-tertiary tracking-widest">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              {t.hero.statPresets}
            </span>
            <span className="flex items-center gap-1.5 font-label-caps text-[10px] text-on-surface-variant/60 tracking-widest">
              <span className="material-symbols-outlined text-[14px]">graphic_eq</span>
              {t.hero.statOsc}
            </span>
            <span className="flex items-center gap-1.5 font-label-caps text-[10px] text-on-surface-variant/60 tracking-widest">
              <span className="material-symbols-outlined text-[14px]">grid_on</span>
              {t.hero.statMatrix}
            </span>
            <span className="flex items-center gap-1.5 font-label-caps text-[10px] text-on-surface-variant/60 tracking-widest">
              <span className="material-symbols-outlined text-[14px]">tune</span>
              {t.hero.statFx}
            </span>
          </div>
        </div>
        <div
          ref={imageRef}
          className={`md:w-[58%] w-full relative transition-all duration-700 ease-out delay-150 ${imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="absolute inset-0 bg-primary/30 blur-[110px] rounded-full section-glow-mask"></div>
          <div className="absolute inset-y-8 right-0 left-16 bg-secondary-container/20 blur-[90px] rounded-full section-glow-mask"></div>
          <div className="relative z-10 p-2 glass-panel rounded-2xl border border-primary/25 shadow-[0_0_90px_rgba(124,58,237,0.5),0_0_40px_rgba(0,241,254,0.2)]">
            <img
              alt={t.hero.imageAlt}
              width={1024}
              height={683}
              className="w-full rounded-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_up5HYGetUoL0pCjPwxxy4emThsAskUq2ZrREMB9iivL0TA1uOcIXYpZA-dwpod0LZI7IytJQrtvNrkD_D_6O0gXE0qGhkiQH3rEBG7BF-4bOvLUVEUf3U6KFOW8feShZDTjKfXVsPdrNp_8RyEDE-7Jw8CJ3pl92F870VgPEtI3RoZUZFC7ceI1e6z_573s85WsBhbi3FmkLUPOCvTwd2xuHXv5cq8x-Mg6Uj5OFi5FarlzgLVRseRMq6G6KHGQTbCyZ9bhwqgTF"
            />
          </div>

          <Callout edge="top" align="16%" color="primary" icon="graphic_eq" title={t.hero.chip1Title} sub={t.hero.chip1Sub} />
          <Callout edge="top" align="76%" color="primary" icon="show_chart" title={t.hero.chip2Title} sub={t.hero.chip2Sub} />
          <Callout edge="bottom" align="50%" color="secondary" icon="piano" title={t.hero.chip3Title} sub={t.hero.chip3Sub} />
        </div>
      </div>
    </section>
  );
}
