import type { ReactNode } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { WindowsIcon, AppleIcon } from './icons/PlatformIcons';

function InstallNote({ children }: { children: ReactNode }) {
  return (
    <div className="mt-3 flex items-start gap-2 rounded-lg border border-secondary/20 bg-secondary/5 px-3 py-2.5 text-xs md:text-[13px] text-on-surface-variant leading-relaxed">
      <span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">info</span>
      <span>{children}</span>
    </div>
  );
}

type Accent = 'primary' | 'tertiary';

interface PlatformStepProps {
  icon: ReactNode;
  accent: Accent;
  label: string;
  bodyBefore: string;
  fileName: string;
  bodyAfter: string;
  note: string;
}

function PlatformStep({ icon, accent, label, bodyBefore, fileName, bodyAfter, note }: PlatformStepProps) {
  const accentText = accent === 'primary' ? 'text-primary' : 'text-tertiary';
  const accentBorder = accent === 'primary' ? 'border-primary/20' : 'border-tertiary/20';
  const accentBg = accent === 'primary' ? 'bg-primary/10' : 'bg-tertiary/10';

  return (
    <div className={`recessed-display rounded-xl p-4 md:p-5 border ${accentBorder}`}>
      <div className="flex items-center gap-2.5 mb-3">
        <div className={`w-8 h-8 rounded-lg ${accentBg} border ${accentBorder} flex items-center justify-center ${accentText}`}>
          {icon}
        </div>
        <p className={`font-label-caps text-[11px] tracking-widest ${accentText}`}>{label}</p>
      </div>
      <p className="font-body-base text-sm text-on-surface-variant leading-relaxed">
        {bodyBefore}{' '}
        <span className="font-value-mono text-on-surface px-1.5 py-0.5 rounded bg-surface-container-highest border border-white/5 text-[12px] whitespace-nowrap">
          {fileName}
        </span>{' '}
        {bodyAfter}
      </p>
      <InstallNote>{note}</InstallNote>
    </div>
  );
}

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
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10 flex items-center gap-3 md:gap-4 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-white/5">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
            <span className="material-symbols-outlined text-tertiary text-3xl">download_done</span>
          </div>
          <div>
            <h2 className="font-display-lg text-2xl md:text-3xl text-on-surface">{t.installation.heading}</h2>
            <p className="text-on-surface-variant text-sm mt-1">{t.installation.subheading}</p>
          </div>
        </div>

        <div className="relative z-10 mb-8 md:mb-12 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 via-secondary-container/5 to-tertiary/10 p-4 md:p-5 flex items-center gap-3 md:gap-4 overflow-hidden">
          <span className="material-symbols-outlined text-primary text-2xl md:text-3xl shrink-0">bolt</span>
          <p className="font-headline-md text-base md:text-xl leading-snug bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent font-semibold">
            {t.installation.highlight}
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-8 md:gap-10">
          <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-white/10 to-tertiary/40 hidden md:block" aria-hidden="true"></div>

          <div className="flex gap-4 md:gap-6 group relative z-10">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-primary font-value-mono text-lg glow-primary transition-all group-hover:scale-110">1</div>
            <div className="pt-1 flex-1 min-w-0">
              <h4 className="font-headline-md text-on-surface mb-2">{t.installation.step1.title}</h4>
              <p className="font-body-base text-on-surface-variant">{t.installation.step1.body}</p>
              <InstallNote>{t.installation.step1.note}</InstallNote>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6 group relative z-10">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-primary font-value-mono text-lg glow-primary transition-all group-hover:scale-110">2</div>
            <div className="pt-1 flex-1 min-w-0">
              <h4 className="font-headline-md text-on-surface mb-4">{t.installation.step2.title}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PlatformStep
                  icon={<WindowsIcon className="w-4 h-4" />}
                  accent="primary"
                  label={t.installation.step2.windows.label}
                  bodyBefore={t.installation.step2.windows.bodyBefore}
                  fileName={t.installation.step2.windows.fileName}
                  bodyAfter={t.installation.step2.windows.bodyAfter}
                  note={t.installation.step2.windows.note}
                />
                <PlatformStep
                  icon={<AppleIcon className="w-4 h-4" />}
                  accent="tertiary"
                  label={t.installation.step2.macos.label}
                  bodyBefore={t.installation.step2.macos.bodyBefore}
                  fileName={t.installation.step2.macos.fileName}
                  bodyAfter={t.installation.step2.macos.bodyAfter}
                  note={t.installation.step2.macos.note}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6 group relative z-10">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-primary font-value-mono text-lg glow-primary transition-all group-hover:scale-110">3</div>
            <div className="pt-1 flex-1 min-w-0">
              <h4 className="font-headline-md text-on-surface mb-2">{t.installation.step3.title}</h4>
              <p className="font-body-base text-on-surface-variant mb-4">{t.installation.step3.body}</p>
              <ul className="space-y-3">
                <li className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-label-caps text-[10px] tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-md px-2 py-1 shrink-0">VST3</span>
                  <span className="text-on-surface-variant">
                    <span className="text-on-surface">{t.installation.step3.daw1Name}</span> — {t.installation.step3.daw1Detail}
                  </span>
                </li>
                <li className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-label-caps text-[10px] tracking-wider text-tertiary bg-tertiary/10 border border-tertiary/20 rounded-md px-2 py-1 shrink-0">AU</span>
                  <span className="text-on-surface-variant">
                    <span className="text-on-surface">{t.installation.step3.daw2Name}</span> — {t.installation.step3.daw2Detail}
                  </span>
                </li>
                <li className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-label-caps text-[10px] tracking-wider text-secondary bg-secondary/10 border border-secondary/20 rounded-md px-2 py-1 shrink-0">STANDALONE</span>
                  <span className="text-on-surface-variant">{t.installation.step3.standalone}</span>
                </li>
              </ul>
              <InstallNote>{t.installation.step3.footnote}</InstallNote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
