export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      home: 'HOME',
      matrix: 'MATRIX',
      effects: 'EFFECTS',
      install: 'INSTALL',
      manual: 'MANUAL',
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
      subheading:
        "Kosmos will be ready in just a few minutes. The package includes the app, the plugin, and the complete preset library.",
      highlight: 'Download, extract, and run the installer. Kosmos handles the rest.',
      step1: {
        title: 'Download Kosmos',
        body: 'Choose the version for your operating system and download the ZIP file.',
        note: 'Extract all of its contents before you start. Do not run the installer directly from inside the ZIP.',
      },
      step2: {
        title: 'Run the installer',
        windows: {
          label: 'Windows',
          bodyBefore: 'Open',
          fileName: 'Install Kosmos.cmd',
          bodyAfter:
            'and accept the Windows permission prompt. The installer will automatically copy the app, the VST3, and the preset library.',
          note: 'If SmartScreen appears, choose "More info" → "Run anyway".',
        },
        macos: {
          label: 'macOS',
          bodyBefore: 'Right-click',
          fileName: 'Install Kosmos.command',
          bodyAfter: 'and select Open. Confirm again if macOS shows a warning.',
          note: 'The app, the VST3 plugin, the Audio Unit, and the library install automatically. No need to copy files manually.',
        },
      },
      step3: {
        title: 'Open your DAW and create',
        body: 'Restart your DAW and rescan your plugins.',
        daw1Name: 'Ableton Live, FL Studio, Cubase, REAPER, and others',
        daw1Detail: 'look for Kosmos among the VST3 instruments.',
        daw2Name: 'Logic Pro',
        daw2Detail: 'look for Kosmos among the Audio Unit instruments.',
        standalone: 'You can also open Kosmos directly from its Standalone app.',
        footnote: 'The first library load may take a few seconds.',
      },
    },
    footer: {
      copyright: '© 2026 Kosmos Audio',
      manual: 'User Manual',
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
      manual: 'MANUAL',
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
      heading: 'Guía de instalación',
      subheading:
        'Kosmos estará listo en pocos minutos. El paquete incluye la aplicación, el plugin y la biblioteca completa de presets.',
      highlight: 'Descargá, extraé y ejecutá el instalador. Kosmos se encarga del resto.',
      step1: {
        title: 'Descargá Kosmos',
        body: 'Elegí la versión correspondiente a tu sistema operativo y descargá el archivo ZIP.',
        note: 'Extraé todo su contenido antes de comenzar. No ejecutes el instalador directamente desde el ZIP.',
      },
      step2: {
        title: 'Ejecutá el instalador',
        windows: {
          label: 'Windows',
          bodyBefore: 'Abrí',
          fileName: 'Instalar Kosmos.cmd',
          bodyAfter:
            'y aceptá la solicitud de permisos de Windows. El instalador copiará automáticamente la aplicación, el VST3 y la biblioteca de presets.',
          note: 'Si aparece SmartScreen, seleccioná Más información → Ejecutar de todas formas.',
        },
        macos: {
          label: 'macOS',
          bodyBefore: 'Hacé clic derecho sobre',
          fileName: 'Instalar Kosmos.command',
          bodyAfter: 'y seleccioná Abrir. Confirmá nuevamente si macOS muestra una advertencia.',
          note: 'Se instalarán automáticamente la aplicación, el plugin VST3, el Audio Unit y la biblioteca. No necesitás copiar archivos manualmente.',
        },
      },
      step3: {
        title: 'Abrí tu DAW y creá',
        body: 'Reiniciá tu DAW y volvé a escanear los plugins.',
        daw1Name: 'Ableton Live, FL Studio, Cubase, REAPER y otros',
        daw1Detail: 'buscá Kosmos entre los instrumentos VST3.',
        daw2Name: 'Logic Pro',
        daw2Detail: 'buscá Kosmos entre los instrumentos Audio Unit.',
        standalone: 'También podés abrir Kosmos directamente desde su aplicación Standalone.',
        footnote: 'La primera carga de la biblioteca puede tardar algunos segundos.',
      },
    },
    footer: {
      copyright: '© 2026 Kosmos Audio',
      manual: 'Manual de uso',
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
