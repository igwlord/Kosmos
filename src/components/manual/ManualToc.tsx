import type { ManualSection } from './manualSections';

interface ManualTocProps {
  activeId: string | null;
  sections: ManualSection[];
  visibleIds: string[];
  title: string;
  mobileTitle: string;
}

export function ManualToc({ activeId, sections, visibleIds, title, mobileTitle }: ManualTocProps) {
  const visibleSections = sections.filter((section) => visibleIds.includes(section.id));

  return (
    <>
      <aside className="toc" aria-label="Índice del manual">
        <p className="toc-title mini-label">{title}</p>
        <nav>
          {visibleSections.map((section) => (
            <a key={section.id} href={`#${section.id}`} aria-current={activeId === section.id ? 'location' : undefined} className={activeId === section.id ? 'active' : ''}>
              {section.label}
            </a>
          ))}
        </nav>
      </aside>

      <details className="mobile-toc">
        <summary>{mobileTitle}</summary>
        <nav>
          {visibleSections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.mobileLabel}
            </a>
          ))}
        </nav>
      </details>
    </>
  );
}
