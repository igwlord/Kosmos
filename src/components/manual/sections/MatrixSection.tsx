import type { ManualSectionProps } from '../sectionTypes';

export function MatrixSection({ registerSection }: ManualSectionProps) {
  return (
    <section className="guide-section" id="matrix" ref={registerSection('matrix')}>
      <span className="section-tag mini-label">05 · Movimiento y expresión</span>
      <h2>MATRIX</h2>
      <p className="lead">
        Conecta una fuente que genera movimiento con un destino que lo recibe. La versión actual dispone de{' '}
        <strong>11 fuentes, 10 destinos y hasta 8 rutas simultáneas</strong>.
      </p>
      <div className="cards">
        <article className="card">
          <h3>Fuentes</h3>
          <p>ENV 2–3, LFO 1–4, Macro 1–4 y Mod Wheel.</p>
        </article>
        <article className="card">
          <h3>Destinos</h3>
          <p>Cutoff y Resonance de Filter 1/2; Pitch y Level de Osc 1/2/3.</p>
        </article>
      </div>
      <h3>Crear y editar una ruta</h3>
      <ol>
        <li>Hacé clic en la celda donde se cruzan fuente y destino. Comienza en <code>+50</code>.</li>
        <li>Arrastrá verticalmente para ajustar entre <code>-100</code> y <code>+100</code>.</li>
        <li>Mantené <kbd>Shift</kbd> mientras arrastrás para ajuste fino.</li>
        <li>El valor positivo conserva la dirección; el negativo la invierte.</li>
      </ol>
      <p>
        El inspector permite cambiar <strong>Source</strong>, <strong>Destination</strong> y <strong>Amount</strong>,
        quitar la ruta o cerrar la selección. Kosmos evita duplicados exactos.
      </p>
      <h3>Barra de herramientas</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Control</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>+ ADD ROUTE</strong></td><td>Crea la primera combinación disponible y abre el inspector.</td></tr>
            <tr><td><strong>LOCK MATRIX</strong></td><td>Conserva las rutas al cambiar de preset.</td></tr>
            <tr><td><strong>RESET MATRIX</strong></td><td>Pide un segundo clic en CONFIRM RESET antes de borrar todo.</td></tr>
            <tr><td><strong>GRID / ROUTES</strong></td><td>Alterna la presentación.</td></tr>
            <tr><td><strong>?</strong></td><td>Abre la ayuda contextual.</td></tr>
            <tr><td><strong>ROUTES n/8</strong></td><td>Muestra cuántos espacios están usados.</td></tr>
          </tbody>
        </table>
      </div>
      <h3>Eliminar</h3>
      <p>
        Doble clic en la celda, <kbd>Delete</kbd> o <kbd>Backspace</kbd> sobre la selección, Amount en cero, Remove
        Route, o RESET MATRIX para limpiar todas.
      </p>
    </section>
  );
}
