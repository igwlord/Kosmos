import { useCallback, useRef, useState } from 'react';
import type { ManualSection } from '../components/manual/manualSections';

const IDLE_STATUS = 'Escribí para filtrar las secciones del manual.';

const DIACRITICS_PATTERN = new RegExp('[\\u0300-\\u036f]', 'g');

function normalize(value: string): string {
  return value.normalize('NFD').replace(DIACRITICS_PATTERN, '').toLowerCase();
}

interface UseManualSearchResult {
  query: string;
  status: string;
  registerSection: (id: string) => (node: HTMLElement | null) => void;
  handleQueryChange: (value: string) => void;
  clearQuery: () => void;
}

export function useManualSearch(sections: ManualSection[]): UseManualSearchResult {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(IDLE_STATUS);
  const nodesRef = useRef(new Map<string, HTMLElement>());

  const registerSection = useCallback(
    (id: string) => (node: HTMLElement | null) => {
      if (node) nodesRef.current.set(id, node);
      else nodesRef.current.delete(id);
    },
    [],
  );

  const applyFilter = useCallback(
    (rawQuery: string) => {
      const normalizedQuery = normalize(rawQuery.trim());
      let visible = 0;
      sections.forEach((section) => {
        const node = nodesRef.current.get(section.id);
        if (!node) return;
        const haystack = normalize(`${section.keywords} ${node.textContent ?? ''}`);
        const match = !normalizedQuery || haystack.includes(normalizedQuery);
        node.hidden = !match;
        if (match) visible += 1;
      });
      setStatus(
        normalizedQuery ? `${visible} ${visible === 1 ? 'sección encontrada' : 'secciones encontradas'}.` : IDLE_STATUS,
      );
    },
    [sections],
  );

  const handleQueryChange = useCallback(
    (value: string) => {
      setQuery(value);
      applyFilter(value);
    },
    [applyFilter],
  );

  const clearQuery = useCallback(() => {
    setQuery('');
    applyFilter('');
  }, [applyFilter]);

  return { query, status, registerSection, handleQueryChange, clearQuery };
}
