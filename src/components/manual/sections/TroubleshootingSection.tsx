import type { ManualSectionProps } from '../sectionTypes';

export function TroubleshootingSection({ registerSection }: ManualSectionProps) {
  return (
    <section className="guide-section" id="troubleshooting" ref={registerSection('troubleshooting')}>
      <span className="section-tag mini-label">10 · Ayuda</span>
      <h2>Problemas frecuentes</h2>
      <details open>
        <summary>No se escucha audio</summary>
        <div>
          <ol>
            <li>Confirmá que un oscilador o Noise esté encendido y tenga Level.</li>
            <li>Revisá Delay, Attack y Sustain de ENV 1.</li>
            <li>Comprobá Cutoff y Mix de los filtros.</li>
            <li>Observá OUTPUT y el medidor.</li>
            <li>En plugin, verificá pista, monitoreo y salida del DAW.</li>
            <li>En modo independiente, elegí driver y dispositivo correctos.</li>
          </ol>
        </div>
      </details>
      <details>
        <summary>El sonido satura</summary>
        <div>
          <p>
            Bajá niveles de osciladores y ruido, Drive, Feedback, Output de EFFECTS o la salida general. Probá
            tocando varias notas a la vez.
          </p>
        </div>
      </details>
      <details>
        <summary>Un preset importado no carga</summary>
        <div>
          <p>
            Load Approximation indica que existe una adaptación. Conversion Required significa que la entrada está
            indexada pero todavía no es reproducible.
          </p>
        </div>
      </details>
      <details>
        <summary>Z o X no cambian la octava</summary>
        <div>
          <p>Hacé clic dentro de Kosmos. Es posible que el DAW esté capturando esas teclas antes de enviarlas al plugin.</p>
        </div>
      </details>
      <details>
        <summary>No puedo agregar otra modulación</summary>
        <div>
          <p>El límite es 8. Revisá ROUTES n/8 y eliminá o reemplazá una conexión.</p>
        </div>
      </details>
      <details>
        <summary>El preset modifica mis rutas</summary>
        <div>
          <p>Activá LOCK MATRIX antes de cargar el siguiente sonido.</p>
        </div>
      </details>
    </section>
  );
}
