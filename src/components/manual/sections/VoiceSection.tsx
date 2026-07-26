import { ManualCallout } from '../ManualCallout';
import type { ManualSectionProps } from '../sectionTypes';

export function VoiceSection({ registerSection }: ManualSectionProps) {
  return (
    <section className="guide-section" id="voice" ref={registerSection('voice')}>
      <span className="section-tag mini-label">03 · Motor sonoro</span>
      <h2>VOICE</h2>
      <p className="lead">
        Acá nace el sonido: tres osciladores, ruido, tres envolventes, cuatro LFO, dos filtros y cuatro macros.
      </p>

      <h3>Macros y Glide</h3>
      <p>
        <strong>Macro 1–4</strong> permite controlar varios parámetros desde una sola perilla. Arrastrá su chip sobre
        cada destino y luego mové la macro para transformar todos a la vez. El clic derecho puede limpiar todas las
        rutas de esa macro.
      </p>
      <p>
        <strong>Glide</strong> regula la transición de afinación entre notas: más valor produce deslizamientos largos;
        menos valor genera cambios directos.
      </p>

      <h3>Osciladores 1, 2 y 3</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Control</th>
              <th>Uso</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Power</strong></td><td>Activa o desactiva el oscilador.</td></tr>
            <tr><td><strong>Waveform</strong></td><td>Elige Sine, Saw, Square o Triangle.</td></tr>
            <tr><td><strong>Pitch</strong></td><td>Transpone en semitonos.</td></tr>
            <tr><td><strong>Level</strong></td><td>Controla el volumen.</td></tr>
            <tr><td><strong>Pan</strong></td><td>Posiciona a izquierda o derecha.</td></tr>
            <tr><td><strong>Unison</strong></td><td>Superpone voces para ampliar el sonido.</td></tr>
            <tr><td><strong>Detune</strong></td><td>Desafina entre sí las voces de Unison.</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Noise</h3>
      <p>
        El generador agrega ruido blanco para ataques, aire, percusión y texturas. Incluye encendido, monitor,{' '}
        <strong>Level</strong> y <strong>Pan</strong>.
      </p>

      <h3>ENV 1, ENV 2 y ENV 3</h3>
      <p>
        <strong>ENV 1</strong> controla la amplitud principal. <strong>ENV 2 y ENV 3</strong> son fuentes para animar
        otros parámetros.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Etapa</th>
              <th>Función</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Delay</strong></td><td>Espera antes del inicio.</td></tr>
            <tr><td><strong>Attack</strong></td><td>Tiempo hasta alcanzar el máximo.</td></tr>
            <tr><td><strong>Hold</strong></td><td>Conserva el máximo.</td></tr>
            <tr><td><strong>Decay</strong></td><td>Tiempo hasta Sustain.</td></tr>
            <tr><td><strong>Sustain</strong></td><td>Nivel mantenido con la nota presionada.</td></tr>
            <tr><td><strong>Release</strong></td><td>Apagado después de soltarla.</td></tr>
            <tr><td><strong>Curve</strong></td><td>Cambia la curvatura de la evolución.</td></tr>
          </tbody>
        </table>
      </div>
      <p>También podés mover directamente los puntos de Attack, Decay, Sustain y Release en el gráfico.</p>

      <h3>LFO 1–4</h3>
      <p>
        Ofrecen formas <strong>Sine, Triangle, Saw, Square y S&H</strong>. Sus controles son Rate, Depth, Fade, Phase,
        Smooth y Delay.
      </p>
      <ul>
        <li><strong>SYNC:</strong> fija Rate al tempo en 1/1, 1/2, 1/4, 1/8, 1/16 o 1/32. Sin host usa 120 BPM.</li>
        <li><strong>RETRIG:</strong> reinicia el ciclo con cada nota.</li>
        <li><strong>Gráfico:</strong> arrastrá horizontalmente para cambiar la velocidad o la división.</li>
      </ul>

      <h3>Filtros 1 y 2</h3>
      <p>
        Tipos: <strong>Low Pass, High Pass, Band Pass, Notch, Comb y Ladder</strong>. Cada filtro dispone de Cutoff,
        Resonance, Drive, Mix y Key Track.
      </p>
      <ManualCallout variant="purple">
        <strong>Idea rápida:</strong> arrastrá ENV 2 sobre Cutoff para crear un ataque brillante que se oscurece, o
        LFO 1 para un barrido repetitivo.
      </ManualCallout>

      <h3>Bandeja de fuentes</h3>
      <p>
        Desde la parte inferior podés arrastrar <strong>LFO 1–4, ENV 2–3, MACRO 1–4 y WHEEL</strong>. WHEEL representa
        la rueda de modulación MIDI CC1.
      </p>
    </section>
  );
}
