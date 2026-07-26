import type { ReactNode } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { AppleIcon, WindowsIcon } from './icons/PlatformIcons';

function InstallNote({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 flex items-start gap-2 border-t border-white/6 pt-4 text-xs leading-relaxed text-on-surface-variant">
      <span className="material-symbols-outlined mt-0.5 shrink-0 text-base text-secondary" aria-hidden="true">info</span>
      <span>{children}</span>
    </div>
  );
}

interface PlatformRowProps {
  icon: ReactNode;
  label: string;
  bodyBefore: string;
  fileName: string;
  bodyAfter: string;
  note: string;
  tone: 'primary' | 'tertiary';
}

function PlatformRow({ icon, label, bodyBefore, fileName, bodyAfter, note, tone }: PlatformRowProps) {
  const toneClasses = tone === 'primary'
    ? 'border-primary/20 bg-primary/8 text-primary'
    : 'border-tertiary/20 bg-tertiary/8 text-tertiary';

  return (
    <div className="rounded-xl border border-white/8 bg-surface-container-lowest/70 p-4">
      <div className="flex items-center gap-3">
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${toneClasses}`}>{icon}</div>
        <p className="font-label-caps text-[11px] tracking-widest text-on-surface">{label}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
        {bodyBefore}{' '}
        <span className="whitespace-nowrap rounded border border-white/8 bg-surface-container-highest px-1.5 py-0.5 font-value-mono text-[11px] text-on-surface">
          {fileName}
        </span>{' '}
        {bodyAfter}
      </p>
      <p className="mt-3 text-xs leading-relaxed text-on-surface-variant/80">{note}</p>
    </div>
  );
}

function StepHeader({ number, icon, title }: { number: string; icon: string; title: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <span className="font-label-caps text-[10px] tracking-[0.2em] text-primary">{number} / 03</span>
        <h3 className="mt-3 font-headline-md text-2xl text-on-surface">{title}</h3>
      </div>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
        <span className="material-symbols-outlined" aria-hidden="true">{icon}</span>
      </div>
    </div>
  );
}

export function Installation() {
  const { t } = useLanguage();
  const [ref, isVisible] = useReveal<HTMLDivElement>();

  return (
    <section className="w-full border-t border-primary/10 bg-primary/[0.018] py-20 md:py-32">
      <div
        id="installation"
        ref={ref}
        className={`mx-auto w-full max-w-7xl px-panel-margin transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="font-label-caps text-[11px] tracking-[0.2em] text-tertiary">{t.installation.eyebrow}</span>
            <h2 className="mt-4 font-display-lg text-4xl leading-tight text-on-surface md:text-5xl">{t.installation.heading}</h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg lg:justify-self-end">{t.installation.subheading}</p>
        </div>

        <div className="mt-10 flex items-center gap-4 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 via-secondary-container/5 to-tertiary/10 px-5 py-4 md:mt-12 md:px-6">
          <span className="material-symbols-outlined shrink-0 text-2xl text-primary" aria-hidden="true">bolt</span>
          <p className="font-headline-md text-base text-on-surface md:text-lg">{t.installation.highlight}</p>
        </div>

        <div className="mt-8 grid items-start gap-5 lg:grid-cols-3">
          <article className="glass-panel rounded-2xl p-6 md:p-8">
            <StepHeader number="01" icon="download" title={t.installation.step1.title} />
            <p className="mt-6 text-sm leading-relaxed text-on-surface-variant">{t.installation.step1.body}</p>
            <InstallNote>{t.installation.step1.note}</InstallNote>
          </article>

          <article className="glass-panel rounded-2xl p-6 md:p-8">
            <StepHeader number="02" icon="inventory_2" title={t.installation.step2.title} />
            <div className="mt-6 grid gap-3">
              <PlatformRow
                icon={<WindowsIcon className="h-4 w-4" />}
                label={t.installation.step2.windows.label}
                bodyBefore={t.installation.step2.windows.bodyBefore}
                fileName={t.installation.step2.windows.fileName}
                bodyAfter={t.installation.step2.windows.bodyAfter}
                note={t.installation.step2.windows.note}
                tone="primary"
              />
              <PlatformRow
                icon={<AppleIcon className="h-4 w-4" />}
                label={t.installation.step2.macos.label}
                bodyBefore={t.installation.step2.macos.bodyBefore}
                fileName={t.installation.step2.macos.fileName}
                bodyAfter={t.installation.step2.macos.bodyAfter}
                note={t.installation.step2.macos.note}
                tone="tertiary"
              />
            </div>
          </article>

          <article className="glass-panel rounded-2xl p-6 md:p-8">
            <StepHeader number="03" icon="music_note" title={t.installation.step3.title} />
            <p className="mt-6 text-sm leading-relaxed text-on-surface-variant">{t.installation.step3.body}</p>
            <div className="mt-6 grid gap-3">
              <div className="rounded-xl border border-primary/15 bg-primary/5 p-4">
                <span className="font-label-caps text-[10px] tracking-widest text-primary">VST3</span>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant"><span className="text-on-surface">{t.installation.step3.daw1Name}</span> — {t.installation.step3.daw1Detail}</p>
              </div>
              <div className="rounded-xl border border-tertiary/15 bg-tertiary/5 p-4">
                <span className="font-label-caps text-[10px] tracking-widest text-tertiary">AU</span>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant"><span className="text-on-surface">{t.installation.step3.daw2Name}</span> — {t.installation.step3.daw2Detail}</p>
              </div>
              <div className="rounded-xl border border-secondary/15 bg-secondary/5 p-4">
                <span className="font-label-caps text-[10px] tracking-widest text-secondary">STANDALONE</span>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{t.installation.step3.standalone}</p>
              </div>
            </div>
            <InstallNote>{t.installation.step3.footnote}</InstallNote>
          </article>
        </div>
      </div>
    </section>
  );
}
