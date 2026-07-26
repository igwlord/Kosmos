export interface ManualSection {
  id: string;
  label: string;
  mobileLabel: string;
  keywords: string;
  hideOnMobile?: boolean;
}

export const MANUAL_SECTIONS: ManualSection[] = [
  {
    id: 'quick-start',
    label: 'Inicio rápido',
    mobileLabel: 'Inicio rápido',
    keywords: 'Inicio rápido primer sonido preset',
  },
  {
    id: 'interface',
    label: 'Interfaz y controles',
    mobileLabel: 'Interfaz',
    keywords: 'Interfaz barra superior controles perillas arrastrar doble clic modulación',
  },
  {
    id: 'voice',
    label: 'VOICE',
    mobileLabel: 'VOICE',
    keywords:
      'Voice macros glide osciladores pitch level pan unison detune noise envelopes envolventes LFO filtros cutoff resonance',
  },
  {
    id: 'effects',
    label: 'EFFECTS',
    mobileLabel: 'EFFECTS',
    keywords: 'Effects efectos distortion chorus delay reverb sync drive feedback size damp mix output',
  },
  {
    id: 'matrix',
    label: 'MATRIX',
    mobileLabel: 'MATRIX',
    keywords:
      'Matrix matriz modulación rutas sources destinations amount bipolar lock reset grid inspector delete shift',
  },
  {
    id: 'library',
    label: 'LIBRARY',
    mobileLabel: 'LIBRARY',
    keywords:
      'Library librería búsqueda favoritos colecciones imported approximation conversion required presets filtros tags genres banks authors',
  },
  {
    id: 'advanced',
    label: 'ADVANCED y presets',
    mobileLabel: 'ADVANCED',
    keywords: 'Advanced guardar cargar save load preset factory user Documents Kosmos Presets kosmospreset',
  },
  {
    id: 'keyboard',
    label: 'Teclado y atajos',
    mobileLabel: 'Atajos',
    keywords: 'teclado shortcuts atajos Z X octave octava notes pitch wheel mod wheel CC1 undo redo',
  },
  {
    id: 'workflows',
    label: 'Flujos recomendados',
    mobileLabel: 'Flujos',
    hideOnMobile: true,
    keywords: 'workflows flujo crear sonido modulación sincronizada live tocar en vivo macros',
  },
  {
    id: 'troubleshooting',
    label: 'Problemas frecuentes',
    mobileLabel: 'Ayuda',
    keywords: 'problemas troubleshooting no audio saturación preset imported no load keyboard Z X rutas lock matrix',
  },
];
