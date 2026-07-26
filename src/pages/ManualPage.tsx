import { useEffect, useMemo, useRef, useState } from 'react';
import '../components/manual/manual.css';
import { MANUAL_SECTIONS } from '../components/manual/manualSections';
import { ManualToc } from '../components/manual/ManualToc';
import { QuickStartSection } from '../components/manual/sections/QuickStartSection';
import { InterfaceSection } from '../components/manual/sections/InterfaceSection';
import { VoiceSection } from '../components/manual/sections/VoiceSection';
import { EffectsSection } from '../components/manual/sections/EffectsSection';
import { MatrixSection } from '../components/manual/sections/MatrixSection';
import { LibrarySection } from '../components/manual/sections/LibrarySection';
import { AdvancedSection } from '../components/manual/sections/AdvancedSection';
import { KeyboardSection } from '../components/manual/sections/KeyboardSection';
import { WorkflowsSection } from '../components/manual/sections/WorkflowsSection';
import { TroubleshootingSection } from '../components/manual/sections/TroubleshootingSection';
import { useActiveSection } from '../hooks/useActiveSection';
import { useReadingProgress } from '../hooks/useReadingProgress';
import { useManualSearch } from '../hooks/useManualSearch';

const IS_MAC = /Mac|iPhone|iPad/.test(navigator.platform);

export function ManualPage() {
  const sectionIds = useMemo(() => MANUAL_SECTIONS.map((section) => section.id), []);
  const activeId = useActiveSection(sectionIds);
  const progress = useReadingProgress();
  const { query, status, registerSection, handleQueryChange, clearQuery } = useManualSearch(MANUAL_SECTIONS);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
      if (event.key === 'Escape' && document.activeElement === searchInputRef.current) {
        clearQuery();
        searchInputRef.current?.blur();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [clearQuery]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="manual-page">
      <a className="skip-link" href="#contenido">Saltar al manual</a>
      <div id="reading-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <section className="hero" aria-labelledby="manual-title">
        <span className="eyebrow">Guía oficial de Kosmos</span>
        <h1 id="manual-title">
          Todo lo que necesitás para <span className="gradient-text">diseñar tu sonido</span>
        </h1>
        <p>
          Aprendé a usar cada sección, crear modulaciones, organizar tu biblioteca y tocar Kosmos desde el teclado de
          tu computadora.
        </p>
        <div className="quick-keys" aria-label="Atajos destacados">
          <span className="key-pill"><kbd>Z</kbd> bajar una octava</span>
          <span className="key-pill"><kbd>X</kbd> subir una octava</span>
          <span className="key-pill"><kbd>Ctrl</kbd> + <kbd>K</kbd> buscar en Library</span>
        </div>
      </section>

      <div className="manual-tools" role="search">
        <label className="search-wrap">
          <input
            ref={searchInputRef}
            id="manual-search"
            type="search"
            autoComplete="off"
            placeholder="Buscar: osciladores, presets, matriz, atajos…"
            aria-describedby="search-status"
            value={query}
            onChange={(event) => handleQueryChange(event.target.value)}
          />
          <span className="search-shortcut">{IS_MAC ? 'CMD + K' : 'CTRL + K'}</span>
        </label>
        <p id="search-status" aria-live="polite">{status}</p>
      </div>

      <div className="layout">
        <ManualToc activeId={activeId} />

        <main id="contenido">
          <QuickStartSection registerSection={registerSection} />
          <InterfaceSection registerSection={registerSection} />
          <VoiceSection registerSection={registerSection} />
          <EffectsSection registerSection={registerSection} />
          <MatrixSection registerSection={registerSection} />
          <LibrarySection registerSection={registerSection} />
          <AdvancedSection registerSection={registerSection} />
          <KeyboardSection registerSection={registerSection} />
          <WorkflowsSection registerSection={registerSection} />
          <TroubleshootingSection registerSection={registerSection} />

          <button type="button" className="back-top" onClick={scrollToTop}>
            Volver arriba ↑
          </button>
        </main>
      </div>
    </div>
  );
}
