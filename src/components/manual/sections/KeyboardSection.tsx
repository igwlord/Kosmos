import { ManualCallout } from '../ManualCallout';
import type { ManualSectionProps } from '../sectionTypes';

export function KeyboardSection({ registerSection }: ManualSectionProps) {
  return (
    <section className="guide-section" id="keyboard" ref={registerSection('keyboard')}>
      <span className="section-tag mini-label">08 · Interpretación</span>
      <h2>Teclado, ruedas y atajos</h2>
      <p>
        El teclado inferior puede plegarse con <strong>v</strong> y desplegarse con <strong>^</strong>. En Library
        permanece visible. Su rango es aproximadamente C1–C6.
      </p>
      <ul>
        <li><strong>PITCH:</strong> modifica temporalmente la afinación y vuelve al centro al soltar.</li>
        <li><strong>MOD:</strong> envía CC1, tiene vibrato inicial y también puede rutearse como WHEEL.</li>
      </ul>
      <h3>Mapa musical de la computadora</h3>
      <div className="piano-map" role="img" aria-label="Mapa de teclas musicales">
        {'Negras:      W  E     T  Y  U     O  P\nBlancas:  A  S  D  F  G  H  J  K  L  ;'}
      </div>
      <p>
        La secuencia comienza en <kbd>A</kbd> y avanza cromáticamente. <kbd>Z</kbd> baja la octava base y{' '}
        <kbd>X</kbd> la sube.
      </p>
      <h3>Atajos completos</h3>
      <div className="table-wrap" tabIndex={0} role="region" aria-label="Atajos de teclado">
        <table>
          <thead>
            <tr>
              <th>Atajo</th>
              <th>Contexto</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>A W S E D F T G Y H U J K O L P ;</strong></td><td>Global</td><td>Tocar notas.</td></tr>
            <tr><td><kbd>Z</kbd> / <kbd>X</kbd></td><td>Global</td><td>Bajar / subir una octava.</td></tr>
            <tr><td>Ctrl/Cmd + Z</td><td>Global</td><td>Deshacer.</td></tr>
            <tr><td>Ctrl/Cmd + Y</td><td>Global</td><td>Rehacer.</td></tr>
            <tr><td>Ctrl/Cmd + Shift + Z</td><td>Global</td><td>Rehacer, alternativa.</td></tr>
            <tr><td>Ctrl/Cmd + K</td><td>Library</td><td>Enfocar búsqueda.</td></tr>
            <tr><td>↑ / ↓</td><td>Library</td><td>Cambiar selección.</td></tr>
            <tr><td>Enter</td><td>Library</td><td>Cargar seleccionado.</td></tr>
            <tr><td>F</td><td>Library</td><td>Alternar favorito.</td></tr>
            <tr><td>Escape</td><td>Library</td><td>Limpiar búsqueda.</td></tr>
            <tr><td>Delete / Backspace</td><td>Matrix</td><td>Eliminar ruta seleccionada.</td></tr>
            <tr><td>Shift + arrastre</td><td>Matrix</td><td>Ajustar Amount con precisión.</td></tr>
          </tbody>
        </table>
      </div>
      <ManualCallout variant="warning">
        Algunos DAW reservan teclas para sus propios comandos. Si Kosmos no las recibe, hacé clic dentro del plugin o
        revisá la captura de teclado del host.
      </ManualCallout>
    </section>
  );
}
