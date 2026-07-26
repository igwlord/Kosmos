import { ManualCallout } from '../ManualCallout';
import type { ManualSectionProps } from '../sectionTypes';

export function InterfaceSection({ registerSection }: ManualSectionProps) {
  return (
    <section className="guide-section" id="interface" ref={registerSection('interface')}>
      <span className="section-tag mini-label">02 · Reglas comunes</span>
      <h2>Interfaz y controles</h2>
      <h3>Barra superior</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Control</th>
              <th>Qué hace</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>VOICE / EFFECTS / MATRIX / ADVANCED / LIBRARY</strong></td>
              <td>Cambia el espacio de trabajo sin cerrar el instrumento.</td>
            </tr>
            <tr>
              <td><strong>Flechas anterior / siguiente</strong></td>
              <td>Recorren los presets de fábrica.</td>
            </tr>
            <tr>
              <td><strong>Nombre del preset</strong></td>
              <td>Abre el menú de fábrica, presets del usuario y <em>Save Preset…</em>.</td>
            </tr>
            <tr>
              <td><strong>Engranaje</strong></td>
              <td>Abre ADVANCED.</td>
            </tr>
            <tr>
              <td><strong>Medidor</strong></td>
              <td>Muestra la salida de audio en dB.</td>
            </tr>
            <tr>
              <td><strong>OUTPUT</strong></td>
              <td>Ajusta la salida general entre -24 y +12 dB. Doble clic: 0 dB.</td>
            </tr>
            <tr>
              <td><strong>Dispositivo</strong></td>
              <td>En modo independiente abre driver, salida, sample rate y buffer. Como plugin muestra HOST / DAW.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Gestos que se repiten</h3>
      <div className="cards">
        <article className="card">
          <h4>Perillas</h4>
          <p>Arrastrá para ajustar. Doble clic restablece el valor. Clic derecho abre Reset y las acciones de modulación disponibles.</p>
        </article>
        <article className="card">
          <h4>Encendido</h4>
          <p>Cada oscilador, filtro, módulo de ruido y efecto puede apagarse sin perder su configuración.</p>
        </article>
        <article className="card">
          <h4>Gráficos</h4>
          <p>Las envolventes, los LFO y la grilla de MATRIX aceptan edición directa con el mouse.</p>
        </article>
        <article className="card">
          <h4>Modulación</h4>
          <p>Arrastrá LFO, ENV, MACRO o WHEEL desde VOICE sobre una perilla con anillo. La ruta comienza en +50.</p>
        </article>
      </div>
      <ManualCallout variant="green">
        El anillo de una perilla muestra la profundidad y el movimiento total de sus moduladores. Kosmos admite hasta{' '}
        <strong>8 rutas activas</strong>.
      </ManualCallout>
    </section>
  );
}
