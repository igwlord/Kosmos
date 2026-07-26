import { useCallback, useEffect, useRef, useState } from 'react';
import type { ManualSection } from '../components/manual/manualSections';

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
  visibleIds: string[];
}

interface SearchCopy {
  idle: string;
  singular: string;
  plural: string;
}

export function useManualSearch(sections: ManualSection[], copy: SearchCopy): UseManualSearchResult {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(copy.idle);
  const [visibleIds, setVisibleIds] = useState(() => sections.map((section) => section.id));
  const nodesRef = useRef(new Map<string, HTMLElement>());

  useEffect(() => {
    setQuery('');
    setStatus(copy.idle);
    setVisibleIds(sections.map((section) => section.id));
  }, [copy.idle, sections]);

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
      const nextVisibleIds: string[] = [];
      sections.forEach((section) => {
        const node = nodesRef.current.get(section.id);
        if (!node) return;
        const haystack = normalize(`${section.keywords} ${node.textContent ?? ''}`);
        const match = !normalizedQuery || haystack.includes(normalizedQuery);
        node.hidden = !match;
        if (match) {
          visible += 1;
          nextVisibleIds.push(section.id);
        }
      });
      setVisibleIds(nextVisibleIds);
      setStatus(
        normalizedQuery ? `${visible} ${visible === 1 ? copy.singular : copy.plural}.` : copy.idle,
      );
    },
    [copy, sections],
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

  return { query, status, registerSection, handleQueryChange, clearQuery, visibleIds };
}
