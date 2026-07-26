import type { ManualSectionProps } from '../sectionTypes';

export function WorkflowsSection({ registerSection }: ManualSectionProps) {
  return (
    <section className="guide-section" id="workflows" ref={registerSection('workflows')}>
      <span className="section-tag mini-label">09 · Recetas</span>
      <h2>Flujos recomendados</h2>
      <details open>
        <summary>Crear un sonido desde cero</summary>
        <div>
          <ol>
            <li>Activá un oscilador y elegí forma de onda.</li>
            <li>Ajustá ENV 1.</li>
            <li>Activá un filtro y buscá el tono.</li>
            <li>Sumá capas o ruido.</li>
            <li>Modulá Cutoff con ENV 2 o un LFO.</li>
            <li>Agregá efectos de a uno y compensá la salida.</li>
            <li>Asigná macros y guardá.</li>
          </ol>
        </div>
      </details>
      <details>
        <summary>Crear movimiento sincronizado</summary>
        <div>
          <ol>
            <li>Elegí un LFO y activá SYNC.</li>
            <li>Seleccioná una división como 1/8.</li>
            <li>Arrastralo sobre Cutoff u Osc Level.</li>
            <li>Ajustá Amount en MATRIX.</li>
            <li>Probá RETRIG activado y desactivado.</li>
          </ol>
        </div>
      </details>
      <details>
        <summary>Preparar un preset para tocar en vivo</summary>
        <div>
          <ol>
            <li>Asigná Macro 1 a brillo, Macro 2 a movimiento y Macro 3 a efectos.</li>
            <li>Asigná WHEEL a una variación expresiva.</li>
            <li>Activá LOCK MATRIX para conservar rutas al recorrer presets.</li>
            <li>Guardá los sonidos del show en una colección.</li>
          </ol>
        </div>
      </details>
    </section>
  );
}
