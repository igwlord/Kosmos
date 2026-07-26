import type { ManualSectionProps } from '../sectionTypes';

export function AdvancedSection({ registerSection }: ManualSectionProps) {
  return (
    <section className="guide-section" id="advanced" ref={registerSection('advanced')}>
      <span className="section-tag mini-label">07 · Guardar y recuperar</span>
      <h2>ADVANCED y presets</h2>
      <h3>Guardar</h3>
      <ol>
        <li>Abrí ADVANCED y elegí <strong>Save Preset</strong>, o usá <strong>Save Preset…</strong> en el menú superior.</li>
        <li>Asigná un nombre y confirmá.</li>
      </ol>
      <p>
        Los archivos <code>.kosmospreset</code> del usuario se guardan en <code>Documentos/Kosmos/Presets</code>.
      </p>
      <h3>Cargar un archivo</h3>
      <p>
        Usá <strong>Load Preset</strong> y seleccioná un archivo válido. Un preset externo puede copiarse a tu
        biblioteca para encontrarlo nuevamente.
      </p>
      <h3>Fábrica</h3>
      <p>
        Kosmos incluye <strong>25 presets de fábrica</strong>. Recorrelos con las flechas superiores o elegilos por
        nombre.
      </p>
    </section>
  );
}
