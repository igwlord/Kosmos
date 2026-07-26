import { useEffect, useMemo, useRef, useState } from 'react';
import '../components/manual/manual.css';
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
import { useLanguage } from '../i18n/LanguageContext';
import { getManualSections } from '../components/manual/manualSections';
import { getManualCopy } from '../components/manual/manualCopy';
import { EnglishManualContent } from '../components/manual/EnglishManualContent';

const IS_MAC = /Mac|iPhone|iPad/.test(navigator.platform);

export function ManualPage() {
  const { language } = useLanguage();
  const copy = getManualCopy(language);
  const sections = useMemo(() => getManualSections(language), [language]);
  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);
  const searchCopy = useMemo(() => ({ idle: copy.searchIdle, singular: copy.searchSingular, plural: copy.searchPlural }), [copy]);
  const activeId = useActiveSection(sectionIds);
  const progress = useReadingProgress();
  const { query, status, registerSection, handleQueryChange, clearQuery, visibleIds } = useManualSearch(sections, searchCopy);
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
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className="manual-page">
      <a className="skip-link" href="#contenido">{copy.skip}</a>
      <div id="reading-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <section className="hero" aria-labelledby="manual-title">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h1 id="manual-title">
          {copy.titlePrefix} <span className="gradient-text">{copy.titleHighlight}</span>
        </h1>
        <p>{copy.description}</p>
        <div className="quick-keys" aria-label={copy.quickKeysLabel}>
          <span className="key-pill"><kbd>Z</kbd> {copy.octaveDown}</span>
          <span className="key-pill"><kbd>X</kbd> {copy.octaveUp}</span>
          <span className="key-pill"><kbd>Ctrl</kbd> + <kbd>K</kbd> {copy.librarySearch}</span>
        </div>
      </section>

      <div className="manual-tools" role="search">
        <label className="sr-only" htmlFor="manual-search">{copy.searchLabel}</label>
        <div className="search-wrap">
          <input
            ref={searchInputRef}
            id="manual-search"
            type="search"
            autoComplete="off"
            placeholder={copy.searchPlaceholder}
            aria-describedby="search-status"
            value={query}
            onChange={(event) => handleQueryChange(event.target.value)}
          />
          <span className="search-shortcut" aria-hidden="true">{IS_MAC ? 'CMD + K' : 'CTRL + K'}</span>
        </div>
        <p id="search-status" aria-live="polite">{status}</p>
      </div>

      <div className="layout">
        <ManualToc activeId={activeId} sections={sections} visibleIds={visibleIds} title={copy.tocTitle} mobileTitle={copy.mobileTocTitle} />

        <div id="contenido" tabIndex={-1} className="manual-content">
          <p className="table-hint">{copy.tableHint}</p>
          {language === 'en' ? (
            <EnglishManualContent registerSection={registerSection} />
          ) : (
            <>
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
            </>
          )}

          {query && visibleIds.length === 0 && (
            <div className="empty-search" role="status">
              <p>{copy.noResults}</p>
              <button type="button" onClick={clearQuery}>{copy.clearSearch}</button>
            </div>
          )}

          <button type="button" className="back-top" onClick={scrollToTop}>
            {copy.backTop}
          </button>
        </div>
      </div>
    </div>
  );
}
