export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      home: 'HOME',
      matrix: 'MATRIX',
      effects: 'EFFECTS',
      install: 'INSTALL',
      download: 'DOWNLOAD NOW',
    },
    hero: {
      eyebrow: 'KOSMOS 2.0 · VST3 SYNTHESIZER',
      titlePrefix: 'Design sounds from',
      titleHighlight: 'another universe.',
      description:
        'Cinematic wavetable synthesis, deep modulation, and studio effects inside a single instrument.',
      cta: 'Download Kosmos',
      specLine: 'VST3 · Windows & macOS · 64-bit',
      statPresets: '12,000+ PRESETS',
      statOsc: '3 OSCILLATORS',
      statMatrix: '32×16 MATRIX',
      statFx: 'MULTI FX',
      chip1Title: '3 OSC',
      chip1Sub: 'Precise Waveforms',
      chip2Title: 'ENVELOPE',
      chip2Sub: 'Precise ADSR Control',
      chip3Title: 'KEYBOARD',
      chip3Sub: '88-Key Velocity Range',
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
      step1Body: 'Select your platform and download the lightweight installer package.',
      step2Title: 'Deploy VST3 Files',
      step2Body: "Ensure Kosmos.vst3 is located in your system's default directory:",
      windowsLabel: 'WINDOWS',
      macosLabel: 'MACOS',
      step3Title: 'Rescan & Create',
      step3Body: 'Open your DAW (Ableton Live, Logic, FL Studio, etc.), rescan plugins, and start exploring the infinite Kosmos.',
    },
    footer: {
      copyright: '© 2026 Kosmos Audio',
    },
    download: {
      back: 'Back to Kosmos',
      heading: 'Choose Your Platform',
      subheading: 'Pick your OS and grab the full Kosmos installer.',
      windowsTitle: 'Windows',
      windowsSpec: 'VST3 · 64-bit · Windows 10/11',
      windowsCta: 'Download for Windows',
      macTitle: 'macOS',
      macSpec: 'VST3, AU · 64-bit · macOS 12+',
      macCta: 'Download for macOS',
    },
  },
  es: {
    nav: {
      home: 'INICIO',
      matrix: 'MATRIZ',
      effects: 'EFECTOS',
      install: 'INSTALAR',
      download: 'DESCARGAR',
    },
    hero: {
      eyebrow: 'KOSMOS 2.0 · SINTETIZADOR VST3',
      titlePrefix: 'Diseñá sonidos de',
      titleHighlight: 'otro universo.',
      description:
        'Síntesis wavetable cinematográfica, modulación profunda y efectos de estudio dentro de un único instrumento.',
      cta: 'Descargar Kosmos',
      specLine: 'VST3 · Windows y macOS · 64 bits',
      statPresets: '+12.000 PRESETS',
      statOsc: '3 OSCILADORES',
      statMatrix: 'MATRIZ 32×16',
      statFx: 'MULTI FX',
      chip1Title: '3 OSC',
      chip1Sub: 'Waveforms Precisos',
      chip2Title: 'ENVOLVENTE',
      chip2Sub: 'Control ADSR Preciso',
      chip3Title: 'TECLADO',
      chip3Sub: 'Rango de 88 Teclas',
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
      step1Body: 'Elegí tu plataforma y descargá el instalador liviano.',
      step2Title: 'Copiar los Archivos VST3',
      step2Body: 'Asegurate de que Kosmos.vst3 esté ubicado en el directorio predeterminado de tu sistema:',
      windowsLabel: 'WINDOWS',
      macosLabel: 'MACOS',
      step3Title: 'Reescanear y Crear',
      step3Body: 'Abrí tu DAW (Ableton Live, Logic, FL Studio, etc.), reescaneá los plugins y empezá a explorar el Kosmos infinito.',
    },
    footer: {
      copyright: '© 2026 Kosmos Audio',
    },
    download: {
      back: 'Volver a Kosmos',
      heading: 'Elegí tu Plataforma',
      subheading: 'Elegí tu sistema operativo y descargá el instalador completo de Kosmos.',
      windowsTitle: 'Windows',
      windowsSpec: 'VST3 · 64 bits · Windows 10/11',
      windowsCta: 'Descargar para Windows',
      macTitle: 'macOS',
      macSpec: 'VST3, AU · 64 bits · macOS 12+',
      macCta: 'Descargar para macOS',
    },
  },
} as const;

export type Translations = typeof translations.en;
