export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      voice: 'VOICE',
      matrix: 'MATRIX',
      effects: 'EFFECTS',
      install: 'INSTALL',
      download: 'DOWNLOAD NOW',
    },
    hero: {
      badge: 'VERSION 2.0 AVAILABLE NOW',
      titlePrefix: 'Infinite',
      titleHighlight: 'Atmospheres',
      description:
        'A cinematic wavetable engine for the modern sound designer. Dive into a universe of high-fidelity oscillators, advanced modulation matrices, and a bespoke studio effects chain.',
      windows: 'VST3 FOR WINDOWS',
      macos: 'VST3 FOR MACOS',
      presets: '12,000+ PRESETS',
      oscillators: '3 OSCILLATORS / VOICE',
      matrixStat: '32X16 MATRIX',
      imageAlt: 'Kosmos Main UI Interface',
    },
    features: {
      heading: 'Engineered for Precision',
      voice: {
        tag: 'OSCILLATORS & FILTERS',
        title: 'The Voice Engine',
        description:
          'Experience surgical control with high-resolution visualizers, dual-mode filters, and up to 3 spectral oscillators per voice.',
        imageAlt: 'Kosmos Voice Engine Interface',
      },
      fx: {
        tag: 'FX CHAIN',
        title: 'Studio Rack',
        description:
          'Integrated rack-style FX processing featuring lush reverb, granular delay, and tube distortion.',
        imageAlt: 'Kosmos FX Rack Interface',
      },
      modulation: {
        tag: 'ROUTING SYSTEM',
        title: 'Matrix Modulation',
        description:
          'Connect any source to any destination with our ultra-precise 32x16 matrix. Visualize complex signal paths with a glowing node system designed for workflow speed.',
        sources: '32 MOD SOURCES',
        destinations: '168 DESTINATIONS',
        imageAlt: 'Kosmos Modulation Matrix UI',
      },
    },
    installation: {
      heading: 'Installation Guide',
      subheading: 'Get up and running in minutes',
      step1Title: 'Download Installer',
      step1Body: 'Select your platform and download the lightweight installer package (approx. 450MB).',
      step2Title: 'Deploy VST3 Files',
      step2Body: "Ensure Kosmos.vst3 is located in your system's default directory:",
      windowsLabel: 'WINDOWS',
      macosLabel: 'MACOS',
      step3Title: 'Rescan & Create',
      step3Body: 'Open your DAW (Ableton Live, Logic, FL Studio, etc.), rescan plugins, and start exploring the infinite Kosmos.',
    },
    footer: {
      tagline: 'Empowering producers with professional-grade sound synthesis. Designed in Berlin. Used worldwide.',
      madeBy: 'Made by',
      copyright: '© 2026 Kosmos Audio',
    },
  },
  es: {
    nav: {
      voice: 'VOZ',
      matrix: 'MATRIZ',
      effects: 'EFECTOS',
      install: 'INSTALAR',
      download: 'DESCARGAR',
    },
    hero: {
      badge: 'VERSIÓN 2.0 DISPONIBLE AHORA',
      titlePrefix: 'Atmósferas',
      titleHighlight: 'Infinitas',
      description:
        'Un motor de wavetables cinematográfico para el diseñador de sonido moderno. Sumergite en un universo de osciladores de alta fidelidad, matrices de modulación avanzadas y una cadena de efectos de estudio a medida.',
      windows: 'VST3 PARA WINDOWS',
      macos: 'VST3 PARA MACOS',
      presets: '+12.000 PRESETS',
      oscillators: '3 OSCILADORES / VOZ',
      matrixStat: 'MATRIZ 32X16',
      imageAlt: 'Interfaz principal de Kosmos',
    },
    features: {
      heading: 'Diseñado para la Precisión',
      voice: {
        tag: 'OSCILADORES Y FILTROS',
        title: 'El Motor de Voz',
        description:
          'Controlá cada detalle con visualizadores de alta resolución, filtros de doble modo y hasta 3 osciladores espectrales por voz.',
        imageAlt: 'Interfaz del motor de voz de Kosmos',
      },
      fx: {
        tag: 'CADENA DE FX',
        title: 'Rack de Estudio',
        description:
          'Procesamiento de efectos tipo rack integrado, con reverb envolvente, delay granular y distorsión a válvula.',
        imageAlt: 'Interfaz del rack de FX de Kosmos',
      },
      modulation: {
        tag: 'SISTEMA DE RUTEO',
        title: 'Matriz de Modulación',
        description:
          'Conectá cualquier fuente con cualquier destino en nuestra matriz de 32x16 ultra precisa. Visualizá rutas de señal complejas con un sistema de nodos luminosos pensado para la velocidad de trabajo.',
        sources: '32 FUENTES DE MOD',
        destinations: '168 DESTINOS',
        imageAlt: 'Interfaz de la matriz de modulación de Kosmos',
      },
    },
    installation: {
      heading: 'Guía de Instalación',
      subheading: 'Listo para usar en minutos',
      step1Title: 'Descargar el Instalador',
      step1Body: 'Elegí tu plataforma y descargá el instalador liviano (aprox. 450MB).',
      step2Title: 'Copiar los Archivos VST3',
      step2Body: 'Asegurate de que Kosmos.vst3 esté ubicado en el directorio predeterminado de tu sistema:',
      windowsLabel: 'WINDOWS',
      macosLabel: 'MACOS',
      step3Title: 'Reescanear y Crear',
      step3Body: 'Abrí tu DAW (Ableton Live, Logic, FL Studio, etc.), reescaneá los plugins y empezá a explorar el Kosmos infinito.',
    },
    footer: {
      tagline: 'Potenciando productores con síntesis de sonido de grado profesional. Diseñado en Berlín. Usado en todo el mundo.',
      madeBy: 'Hecho por',
      copyright: '© 2026 Kosmos Audio',
    },
  },
} as const;

export type Translations = typeof translations.en;
