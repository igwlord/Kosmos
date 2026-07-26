import type { Language } from '../../i18n/translations';

export interface ManualSection {
  id: string;
  label: string;
  mobileLabel: string;
  keywords: string;
}

const ES_SECTIONS: ManualSection[] = [
  { id: 'quick-start', label: 'Inicio rápido', mobileLabel: 'Inicio rápido', keywords: 'Inicio rápido primer sonido preset' },
  { id: 'interface', label: 'Interfaz y controles', mobileLabel: 'Interfaz', keywords: 'Interfaz barra superior controles perillas arrastrar doble clic modulación' },
  { id: 'voice', label: 'VOICE', mobileLabel: 'VOICE', keywords: 'Voice macros glide osciladores pitch level pan unison detune noise envelopes envolventes LFO filtros cutoff resonance' },
  { id: 'effects', label: 'EFFECTS', mobileLabel: 'EFFECTS', keywords: 'Effects efectos distortion chorus delay reverb sync drive feedback size damp mix output' },
  { id: 'matrix', label: 'MATRIX', mobileLabel: 'MATRIX', keywords: 'Matrix matriz modulación rutas sources destinations amount bipolar lock reset grid inspector delete shift' },
  { id: 'library', label: 'LIBRARY', mobileLabel: 'LIBRARY', keywords: 'Library librería búsqueda favoritos colecciones imported approximation conversion required presets filtros tags genres banks authors' },
  { id: 'advanced', label: 'ADVANCED y presets', mobileLabel: 'ADVANCED', keywords: 'Advanced guardar cargar save load preset factory user Documents Kosmos Presets kosmospreset' },
  { id: 'keyboard', label: 'Teclado y atajos', mobileLabel: 'Atajos', keywords: 'teclado shortcuts atajos Z X octave octava notes pitch wheel mod wheel CC1 undo redo' },
  { id: 'workflows', label: 'Flujos recomendados', mobileLabel: 'Flujos', keywords: 'workflows flujo crear sonido modulación sincronizada live tocar en vivo macros' },
  { id: 'troubleshooting', label: 'Problemas frecuentes', mobileLabel: 'Ayuda', keywords: 'problemas troubleshooting no audio saturación preset imported no load keyboard Z X rutas lock matrix' },
];

const EN_SECTIONS: ManualSection[] = [
  { id: 'quick-start', label: 'Quick start', mobileLabel: 'Quick start', keywords: 'quick start first sound preset' },
  { id: 'interface', label: 'Interface and controls', mobileLabel: 'Interface', keywords: 'interface top bar controls knobs drag double click modulation' },
  { id: 'voice', label: 'VOICE', mobileLabel: 'VOICE', keywords: 'voice macros glide oscillators pitch level pan unison detune noise envelopes LFO filters cutoff resonance' },
  { id: 'effects', label: 'EFFECTS', mobileLabel: 'EFFECTS', keywords: 'effects distortion chorus delay reverb sync drive feedback size damp mix output' },
  { id: 'matrix', label: 'MATRIX', mobileLabel: 'MATRIX', keywords: 'matrix modulation routes sources destinations amount bipolar lock reset grid inspector delete shift' },
  { id: 'library', label: 'LIBRARY', mobileLabel: 'LIBRARY', keywords: 'library search favorites collections imported approximation conversion required presets filters tags genres banks authors' },
  { id: 'advanced', label: 'ADVANCED and presets', mobileLabel: 'ADVANCED', keywords: 'advanced save load preset factory user Documents Kosmos Presets kosmospreset' },
  { id: 'keyboard', label: 'Keyboard and shortcuts', mobileLabel: 'Shortcuts', keywords: 'keyboard shortcuts Z X octave notes pitch wheel mod wheel CC1 undo redo' },
  { id: 'workflows', label: 'Recommended workflows', mobileLabel: 'Workflows', keywords: 'workflows create sound synchronized modulation live performance macros' },
  { id: 'troubleshooting', label: 'Troubleshooting', mobileLabel: 'Help', keywords: 'troubleshooting no audio clipping preset imported load keyboard Z X routes lock matrix' },
];

export const MANUAL_SECTIONS = ES_SECTIONS;

export function getManualSections(language: Language): ManualSection[] {
  return language === 'es' ? ES_SECTIONS : EN_SECTIONS;
}
