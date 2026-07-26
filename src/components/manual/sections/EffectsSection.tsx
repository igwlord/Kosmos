import { ManualCallout } from '../ManualCallout';
import type { ManualSectionProps } from '../sectionTypes';

export function EffectsSection({ registerSection }: ManualSectionProps) {
  return (
    <section className="guide-section" id="effects" ref={registerSection('effects')}>
      <span className="section-tag mini-label">04 · Procesamiento</span>
      <h2>EFFECTS</h2>
      <p className="lead">
        Los cuatro efectos se procesan en un orden fijo. Cada módulo tiene encendido independiente y visualizador.
      </p>
      <div className="signal-flow" aria-label="Orden de efectos">
        <span>Distortion</span><i>→</i><span>Chorus</span><i>→</i><span>Delay</span><i>→</i><span>Reverb</span>
      </div>
      <div className="cards">
        <article className="card">
          <h3>Distortion</h3>
          <p><strong>Drive</strong> define saturación, <strong>Tone</strong> su balance tonal y <strong>Mix</strong> la mezcla limpia/procesada.</p>
        </article>
        <article className="card">
          <h3>Chorus</h3>
          <p><strong>Rate</strong> controla velocidad, <strong>Depth</strong> amplitud del movimiento y <strong>Mix</strong> la cantidad.</p>
        </article>
        <article className="card">
          <h3>Delay</h3>
          <p><strong>Time, Feedback y Mix</strong>. SYNC ofrece divisiones 1/1 a 1/32 según el tempo.</p>
        </article>
        <article className="card">
          <h3>Reverb</h3>
          <p><strong>Size</strong> controla el espacio, <strong>Damp</strong> absorbe agudos y <strong>Mix</strong> define la cantidad.</p>
        </article>
      </div>
      <h3>Controles generales</h3>
      <ul>
        <li><strong>FX Preset:</strong> Custom, Default, Wide, Space y Crushed. Al editar un parámetro pasa a Custom.</li>
        <li><strong>ALL / DIST / CHOR / DELAY / REVERB:</strong> encendido rápido de módulos.</li>
        <li><strong>Cadena superior:</strong> selecciona y destaca una tarjeta.</li>
        <li><strong>Output y medidor:</strong> regulan y muestran el nivel final de esta sección.</li>
      </ul>
      <ManualCallout variant="warning">
        Compará periódicamente con los efectos apagados. Más volumen puede parecer {'“'}mejor{'”'} aunque
        solamente sea más fuerte.
      </ManualCallout>
    </section>
  );
}
