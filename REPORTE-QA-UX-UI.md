# Reporte QA UX/UI — Kosmos Web

> **INFORME HISTÓRICO DE BETA 0.1.0-beta.2.** Se conserva para trazabilidad y
> para reutilizar sus procedimientos de QA. No usar sus enlaces, versión,
> tamaños, métricas ni veredicto como evidencia del sitio beta.3 actual sin
> revalidación. El contexto vigente comienza en
> [Kosmos audits — start here](https://github.com/igwlord/Kosmos-build/blob/main/docs/audits/README.md).

**Fecha:** 25 de julio de 2026  
**Proyecto:** `C:\Users\juego\OneDrive\Escritorio\Kosmos Web`  
**Estado evaluado:** rama `main`  
**Veredicto posterior a la corrección:** **apto para publicar como beta 0.1.0-beta.2.** Los enlaces de Google Drive se conservaron exactamente como pidió el propietario.

## Estado posterior a la corrección

Las secciones de hallazgos conservan la evidencia original para trazabilidad. El estado actual es:

| Grupo | Estado aplicado |
|---|---|
| Versión y capacidades | Unificadas con el manual y los ZIP `0.1.0-beta.2`. |
| Idioma | Landing, descarga, 404 y manual completos en ES/EN; `<html lang>` y metadata se actualizan. |
| Móvil | Menú accesible, controles de 44 px, índice completo y tablas identificadas como desplazables. |
| Navegación | Anclas compensadas, página 404 con `noindex`, ruta activa y skip links. |
| Accesibilidad | Un solo `<main>`, buscador etiquetado, iconos decorativos ocultos y headings corregidos. |
| Búsqueda | Resultados, conteo e índice sincronizados, con estado vacío y acción para limpiar. |
| Rendimiento | Manual/descarga cargan por código dividido; imágenes bajo el fold usan lazy loading y decoding asíncrono. |
| Descargas | Links originales intactos; se agregó versión, estado beta, formato y aviso de apertura en Drive. |

Quedan como mejoras dependientes de material externo: reemplazar las capturas remotas de 512 px por originales locales de alta resolución, añadir demos de audio reales y publicar tamaño/checksum de cada ZIP cuando esos datos estén disponibles.

## 1. Alcance y metodología

Se revisaron las tres rutas de la aplicación:

- `/` — landing, funcionalidades e instalación.
- `/download` — selección de Windows/macOS y enlaces externos.
- `/manual` — manual, índice, búsqueda, tablas, atajos y resolución de problemas.

La validación incluyó:

- Lectura del código React/TypeScript, estilos, router, traducciones, metadata y configuración de Netlify.
- Recorrido real en navegador a `1440 × 900` y `375 × 812`.
- Pruebas de navegación SPA, anclas, selector ES/EN, búsqueda del manual, rutas inexistentes y enlaces de descarga.
- Revisión de landmarks, nombres accesibles, tamaños de controles, idioma del documento, contenido responsive, imágenes y consola.
- `npm run lint` y `npm run build`.

No se descargaron ni ejecutaron los instaladores. Tampoco se hizo una prueba de rendimiento con red/CPU simuladas; las observaciones de rendimiento se basan en recursos, dimensiones y estrategia de carga.

## 2. Resumen ejecutivo

| Área | Puntaje | Lectura |
|---|---:|---|
| UI visual | 8.5/10 | Identidad fuerte, consistente y apropiada para un sintetizador. |
| Responsive | 8.8/10 | Navegación completa y sin overflow a 375 px. |
| UX y conversión | 7.5/10 | Versión y estado claros; Drive se mantiene por decisión del propietario. |
| Funcionalidad | 9/10 | Build, rutas, anclas, búsqueda, 404 y enlaces validados. |
| Accesibilidad | 8.8/10 | Landmarks, idioma, labels, targets, iconos y navegación corregidos. |
| SEO/compartir | 8/10 | Metadata por ruta/idioma, canonical y `noindex` para 404. |
| **Global** | **8.5/10** | Base sólida para publicar como beta. |

## 3. Lo que funciona bien

- La identidad visual es coherente: paleta, tipografías, paneles, brillos y screenshots construyen una estética de producto clara.
- La jerarquía de la landing es entendible: propuesta → funcionalidades → instalación → descarga.
- La portada y las tarjetas se reordenan correctamente a 375 px, sin desborde horizontal del documento.
- `/download` ofrece botones grandes y claramente diferenciados para Windows y macOS.
- Ambos enlaces de Google Drive están activos y permiten llegar de forma anónima a un botón de descarga.
- El manual es completo, tiene índice, búsqueda, estado con `aria-live`, tablas con scroll horizontal, contenido de troubleshooting y foco visible propio.
- Las imágenes relevantes tienen texto alternativo y los iconos SVG de plataforma están ocultos a lectores de pantalla.
- El código pasa `tsc --noEmit` y el build de producción termina sin errores: JS 264.82 kB (79.67 kB gzip) y CSS 52.55 kB (10.41 kB gzip).
- No aparecieron errores ni advertencias de consola durante los recorridos locales.

## 4. Hallazgos originales y correcciones aplicadas

### QA-01 — P0 — RESUELTO — La versión y las capacidades del producto se contradicen

**Evidencia**

- La landing anuncia `KOSMOS 2.0`, `+12.000 PRESETS`, `32 FUENTES DE MOD`, `168 DESTINOS` y `Rango de 88 Teclas` (`src/i18n/translations.ts:124`, `:131`, `:140`, `:164-165`).
- El manual describe `25 presets de fábrica` (`AdvancedSection.tsx:23`), `11 fuentes, 10 destinos y hasta 8 rutas` (`MatrixSection.tsx:10`) y un rango aproximado `C1–C6` (`KeyboardSection.tsx:11`).
- Los enlaces públicos entregan archivos llamados `Kosmos-0.1.0-beta.2-Windows-x64.zip` y `Kosmos-0.1.0-beta.2-macOS-Universal.zip`.

**Impacto**

Es el mayor riesgo del sitio: puede parecer publicidad incorrecta, genera dudas antes de descargar y complica soporte, documentación y control de versiones.

**Recomendación**

Definir una única fuente de verdad para versión, cantidad de presets, matriz, destinos y rango de teclado. Si “12.000+” incluye referencias importadas y no presets reproducibles incluidos, explicarlo literalmente. Mostrar en `/download` la misma versión que llevan los ZIP.

**Criterio de aceptación**

Landing, manual, metadata, nombres de archivo y página de descarga muestran una versión y capacidades compatibles, sin ambigüedades.

### QA-02 — P1 — RESUELTO — El sistema de idioma sólo traduce una parte del producto

**Evidencia**

- El documento declara siempre `<html lang="en">` (`index.html:2`) aunque la sesión observada mostraba contenido en español.
- Al seleccionar `EN` dentro de `/manual`, la navegación pasa a inglés pero el título, buscador, índice y contenido del manual continúan en español.
- `ManualPage.tsx` y las diez secciones del manual contienen strings españolas sin usar el contexto de idioma.

**Impacto**

Lectores de pantalla pronuncian el español como inglés; buscadores reciben señales incoherentes; el selector promete una traducción que la ruta más extensa no cumple.

**Recomendación**

Actualizar `document.documentElement.lang` al cambiar idioma. Internacionalizar manual, estados de búsqueda, índice y textos accesibles; o, hasta tener traducción completa, ocultar/deshabilitar EN en `/manual` e indicar “manual disponible en español”.

### QA-03 — P1 — RESUELTO — La navegación principal desaparece en móvil

**Evidencia**

- El grupo central usa `hidden md:flex` (`src/components/Navbar.tsx:22`).
- A 375 px sólo quedan logo, EN, ES y DESCARGAR. No hay menú, enlace directo al manual ni acceso a Matriz/Efectos/Instalación.
- El manual sólo puede descubrirse desde el footer, después de recorrer una landing de 5.425 px.

**Impacto**

La arquitectura de información queda incompleta en móvil y fuerza scroll o conocimiento previo de la URL.

**Recomendación**

Agregar menú móvil accesible con Inicio, Matriz, Efectos, Instalación, Manual y Descarga. Mantener un objetivo táctil mínimo de 44 × 44 px y gestionar foco/escape si se usa un drawer.

### QA-04 — P1 — RESUELTO — Las anclas quedan tapadas por la barra fija

**Evidencia**

- La navbar es fija y mide 80 px (`src/components/Navbar.tsx:17`).
- Al abrir `/#effects`, el bloque objetivo terminó con `top: -24 px`, por debajo de la barra fija; su encabezado queda oculto.
- Las secciones del manual sí tienen `scroll-margin-top: 96px`, pero los IDs de la landing no.

**Impacto**

Los enlaces Matriz/Efectos/Instalación parecen aterrizar en un punto incorrecto y ocultan el contexto principal.

**Recomendación**

Aplicar `scroll-margin-top: 96px` a `#modulation`, `#effects` y `#installation`, y validar tanto clic interno como carga directa con hash.

### QA-05 — P1 — MEJORADO — La entrega de instaladores agrega fricción y poca confianza

**Evidencia**

- Los CTA abren vistas de Google Drive en otra pestaña (`DownloadPage.tsx:32-35`, `:52-55`) en lugar de iniciar una descarga directa.
- Google Drive no puede previsualizar el ZIP y muestra un paso adicional “Descargar”.
- La página no informa versión, tamaño, fecha de release, checksum, firma, changelog, licencia ni si la descarga es beta.

**Impacto**

Se pierde conversión en el último paso y aumenta la percepción de riesgo al instalar scripts `.cmd`/`.command`.

**Recomendación**

Servir archivos desde un dominio/CDN propio o usar enlaces directos. Mostrar versión, tamaño, fecha, SHA-256/firma, requisitos, notas de versión y estado beta/estable. Explicar de forma breve por qué Windows/macOS pueden mostrar advertencias.

### QA-06 — P1 — RESUELTO — Problemas de estructura accesible y nombres anunciados

**Evidencia**

- `App.tsx:43` envuelve todas las páginas en `<main>`, mientras `ManualPage.tsx:88` agrega otro `<main>`: el manual contiene landmarks `main` anidados.
- El input está dentro de un `<label>` que también incluye el icono y el atajo (`ManualPage.tsx:68-81`); el nombre accesible observado fue `⌕ CTRL + K`, no “Buscar en el manual”.
- Los `span.material-symbols-outlined` no tienen `aria-hidden="true"`; por eso enlaces como descarga se anuncian como `download Descargar…`.
- La instalación salta de `h2` a `h4` (`Installation.tsx:70`, `:88`, `:97`, `:124`).

**Impacto**

La navegación por landmarks/encabezados es confusa y algunos controles no comunican bien su propósito.

**Recomendación**

Mantener un solo `<main>` por ruta; usar un `div`/`section` para el contenido interior del manual. Añadir una etiqueta explícita “Buscar en el manual”, ocultar iconos decorativos con `aria-hidden`, corregir niveles de heading y añadir `aria-current="page"` a la ruta activa.

### QA-07 — P2 — RESUELTO — La búsqueda del manual y el índice quedan desincronizados

**Evidencia**

- Buscar `matrix` dejó seis secciones visibles y ocultó cuatro, pero los diez enlaces del índice siguieron visibles.
- El usuario puede pulsar un enlace que apunta a una sección `hidden`.
- Existe estilo para `<mark>`, pero no se resaltan coincidencias.

**Impacto**

El resultado es difícil de escanear y puede parecer que un enlace del índice no funciona.

**Recomendación**

Filtrar el índice con el mismo conjunto de resultados, mostrar coincidencias en título/contenido, resaltar el término y ofrecer estado vacío con botón “Limpiar búsqueda”. Evaluar búsqueda por tokens para reducir coincidencias demasiado amplias.

### QA-08 — P2 — RESUELTO — Las rutas desconocidas muestran la home como si fueran válidas

**Evidencia**

- `AppRoutes` sólo distingue `/download` y `/manual`; cualquier otro path retorna la landing (`src/App.tsx:19-35`).
- `/ruta-inexistente` mostró la home completa manteniendo la URL inválida.
- Netlify redirige todo a `index.html` con status 200 (`netlify.toml:13-16`).

**Impacto**

Confunde a usuarios, ensucia analytics y puede indexar URLs duplicadas/soft-404.

**Recomendación**

Agregar ruta Not Found con CTA a Inicio/Manual/Descarga y `noindex`. Si SEO es prioritario, resolver 404 reales en hosting/edge o migrar las rutas indexables a renderizado estático.

### QA-09 — P2 — MEJORADO — Imágenes remotas pequeñas se amplían y casi todas cargan de inmediato

**Evidencia**

- Los screenshots provienen de URLs externas `lh3.googleusercontent.com` (`Hero.tsx:124`, `Features.tsx:38`, `:61`, `:91`).
- Los originales observados miden 512 px de ancho, pero se renderizan hasta 669–826 px, por lo que pierden nitidez en desktop y pantallas de alta densidad.
- Las cuatro imágenes de la landing usan `loading="auto"`; sólo la imagen del manual usa lazy loading.
- La misma captura se repite en hero, Voice y manual.

**Impacto**

Dependencia externa frágil, más transferencia inicial, LCP potencialmente peor y menor calidad percibida del producto.

**Recomendación**

Hospedar assets propios optimizados, generar WebP/AVIF con `srcset`/`sizes`, reservar `fetchpriority="high"` para el hero y usar `loading="lazy"` en contenido bajo el fold. Proveer al menos 2× del ancho de render objetivo y usar capturas específicas para cada feature.

### QA-10 — P2 — RESUELTO — Metadata y SEO no cambian por ruta o idioma

**Evidencia**

- Todas las rutas mantienen el título `Kosmos - VST3 Synthesizer Plugin` (`index.html:6`) y la misma description.
- `og:image` es relativa (`index.html:14`), lo que no es fiable para scrapers sociales.
- No hay canonical, `hreflang`, URL Open Graph, metadata propia del manual ni metadata propia de descargas.

**Impacto**

Resultados de búsqueda y previews menos relevantes; el manual pierde oportunidad de posicionar consultas de soporte.

**Recomendación**

Definir título/description/canonical/OG por ruta e idioma, usar URLs absolutas públicas y una imagen social 1200 × 630 específica del producto.

### QA-11 — P2 — RESUELTO — Parte de la microtipografía es demasiado pequeña o tenue

**Evidencia**

- Varias etiquetas y stats usan 10 px; el footer usa 9–10 px con opacidades 0.5/0.7.
- Los enlaces de navegación desktop miden 20 px de alto y los enlaces del footer 15 px; los botones EN/ES miden 29 px de alto. En móvil, EN/ES miden 27 px y Descargar 31 px.

**Impacto**

Lectura difícil para usuarios con baja visión, interacción táctil menos cómoda y pérdida de jerarquía en textos secundarios.

**Recomendación**

Subir información operativa a 12–14 px, evitar opacidad baja para texto informativo y ampliar hit areas sin cambiar necesariamente el tamaño visual. Validar contraste final sobre el fondo real y objetivos de 44 px en móvil.

### QA-12 — P3 — RESUELTO — El manual móvil es correcto, pero excesivamente largo y omite una sección del índice

**Evidencia**

- A 375 px el manual mide 16.718 px de alto.
- `Flujos recomendados` sigue en el contenido pero se excluye deliberadamente del índice móvil con `hideOnMobile` (`manualSections.ts:65`, `ManualToc.tsx:24`).
- Las cinco tablas requieren scroll horizontal (260 px visibles frente a 520 px de contenido), comportamiento correcto pero poco evidente.

**Recomendación**

No ocultar rutas del índice. Convertir capítulos en acordeones o páginas/anchors más pequeñas, añadir indicación visual “deslizá horizontalmente” a tablas y mantener un acceso fijo/rápido al índice.

### QA-13 — P3 — RESUELTO — El soporte de movimiento reducido es parcial

`useReveal` respeta `prefers-reduced-motion`, lo cual es positivo, pero `html { scroll-behavior: smooth; }` y varias transiciones/transformaciones siguen activas. Añadir una media query global que elimine scroll suave y reduzca animaciones/transiciones cuando el usuario lo solicita.

## 5. Oportunidades UX de conversión

No son fallos funcionales, pero tendrían alto impacto para un sintetizador:

1. **Permitir escuchar antes de descargar.** Agregar 4–6 demos A/B por preset o un video corto del flujo real.
2. **Clarificar la oferta.** Indicar precio/gratuidad, tipo de licencia, uso comercial, actualización y si es beta.
3. **Aumentar confianza.** Añadir changelog, firma/checksum, contacto/soporte, política de privacidad y preguntas frecuentes.
4. **Mostrar la interfaz con detalle.** Abrir screenshots en lightbox o proporcionar capturas nítidas de Voice, Effects y Matrix en lugar de reutilizar la misma imagen.
5. **Cerrar el flujo de activación.** Tras descarga, ofrecer una página “siguiente paso” con instalación, escaneo del plugin y acceso al manual.

## 6. Orden recomendado de implementación

### Antes de publicar

1. Unificar versión y claims (QA-01).
2. Corregir idioma/documento y decidir alcance real de EN (QA-02).
3. Agregar navegación móvil (QA-03).
4. Corregir anclas tapadas (QA-04).
5. Mejorar la confianza y entrega de instaladores (QA-05).
6. Resolver landmarks, etiqueta de búsqueda, iconos y headings (QA-06).

### Iteración siguiente

7. Sincronizar búsqueda/índice y crear 404 (QA-07/08).
8. Optimizar imágenes y metadata (QA-09/10).
9. Ajustar microtipografía, targets y manual móvil (QA-11/12).
10. Completar reduced motion y sumar demos sonoras (QA-13 y oportunidades).

## 7. Checklist de regresión

- [x] `/`, `/download` y `/manual` muestran título, idioma y metadata correctos en ES/EN.
- [x] La versión visible coincide con ambos nombres de ZIP.
- [x] Claims de presets/matriz/teclado coinciden en landing y manual.
- [x] Menú móvil accesible, con objetivos de 44 px y sin overflow a 375 px.
- [x] `/#modulation`, `/#effects` y `/#installation` dejan visible el encabezado.
- [x] Hay exactamente un landmark `<main>` por ruta.
- [x] El buscador se anuncia como “Buscar en el manual” / “Search the manual”.
- [x] Iconos decorativos no forman parte de nombres accesibles.
- [x] Búsqueda, índice y conteo muestran el mismo conjunto de secciones.
- [x] Una ruta inválida presenta 404 y `noindex`, no la home.
- [x] No hay overflow horizontal del documento; tablas conservan scroll local y foco de teclado.
- [x] Imágenes below-the-fold usan lazy loading y decoding asíncrono.
- [x] Los enlaces originales de Drive funcionan sin login y la página muestra versión/estado/formato.
- [x] `npm run lint`, `npm run build` y consola del navegador quedan limpios.
