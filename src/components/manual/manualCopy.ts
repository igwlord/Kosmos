import type { Language } from '../../i18n/translations';

export const MANUAL_COPY = {
  es: {
    skip: 'Saltar al manual',
    eyebrow: 'Guía oficial de Kosmos',
    titlePrefix: 'Todo lo que necesitás para',
    titleHighlight: 'diseñar tu sonido',
    description: 'Aprendé a usar cada sección, crear modulaciones, organizar tu biblioteca y tocar Kosmos desde el teclado de tu computadora.',
    quickKeysLabel: 'Atajos destacados',
    octaveDown: 'bajar una octava',
    octaveUp: 'subir una octava',
    librarySearch: 'buscar en este manual',
    searchLabel: 'Buscar en el manual',
    searchPlaceholder: 'Buscar: osciladores, presets, matriz, atajos…',
    searchIdle: 'Escribí para filtrar las secciones del manual.',
    searchSingular: 'sección encontrada',
    searchPlural: 'secciones encontradas',
    noResults: 'No encontramos secciones con ese término.',
    clearSearch: 'Limpiar búsqueda',
    tocTitle: 'En esta guía',
    mobileTocTitle: 'Índice del manual',
    tableHint: 'Las tablas se pueden desplazar horizontalmente en pantallas pequeñas.',
    backTop: 'Volver arriba ↑',
  },
  en: {
    skip: 'Skip to the manual',
    eyebrow: 'Official Kosmos guide',
    titlePrefix: 'Everything you need to',
    titleHighlight: 'design your sound',
    description: 'Learn every section, build modulations, organize your library, and play Kosmos from your computer keyboard.',
    quickKeysLabel: 'Featured shortcuts',
    octaveDown: 'one octave down',
    octaveUp: 'one octave up',
    librarySearch: 'search this manual',
    searchLabel: 'Search the manual',
    searchPlaceholder: 'Search: oscillators, presets, matrix, shortcuts…',
    searchIdle: 'Type to filter the manual sections.',
    searchSingular: 'section found',
    searchPlural: 'sections found',
    noResults: 'No sections match that search.',
    clearSearch: 'Clear search',
    tocTitle: 'In this guide',
    mobileTocTitle: 'Manual index',
    tableHint: 'Tables can be scrolled horizontally on smaller screens.',
    backTop: 'Back to top ↑',
  },
} as const;

export function getManualCopy(language: Language) {
  return MANUAL_COPY[language];
}
