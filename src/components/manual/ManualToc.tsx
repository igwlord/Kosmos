import { MANUAL_SECTIONS } from './manualSections';

interface ManualTocProps {
  activeId: string | null;
}

export function ManualToc({ activeId }: ManualTocProps) {
  return (
    <>
      <aside className="toc" aria-label="Índice del manual">
        <p className="toc-title mini-label">En esta guía</p>
        <nav>
          {MANUAL_SECTIONS.map((section) => (
            <a key={section.id} href={`#${section.id}`} className={activeId === section.id ? 'active' : ''}>
              {section.label}
            </a>
          ))}
        </nav>
      </aside>

      <details className="mobile-toc">
        <summary>Índice del manual</summary>
        <nav>
          {MANUAL_SECTIONS.filter((section) => !section.hideOnMobile).map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.mobileLabel}
            </a>
          ))}
        </nav>
      </details>
    </>
  );
}
