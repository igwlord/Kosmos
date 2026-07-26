import { ManualCallout } from '../ManualCallout';
import type { ManualSectionProps } from '../sectionTypes';

export function LibrarySection({ registerSection }: ManualSectionProps) {
  return (
    <section className="guide-section" id="library" ref={registerSection('library')}>
      <span className="section-tag mini-label">06 · Encontrar sonidos</span>
      <h2>LIBRARY</h2>
      <p className="lead">
        La biblioteca reúne presets nativos de fábrica, presets del usuario y referencias de catálogos importados. Se
        carga la primera vez que abrís la sección.
      </p>
      <h3>Buscar, filtrar y ordenar</h3>
      <ul>
        <li><strong>Search:</strong> busca nombres, instrumentos, bancos, tipos, estilos y etiquetas.</li>
        <li><strong>Vistas:</strong> All Presets, Favorites, Recently Used e Imported.</li>
        <li><strong>Categorías:</strong> Instruments, Types, Styles, Genres, Banks y Authors.</li>
        <li><strong>Chips:</strong> quitá un filtro individual o usá Clear all.</li>
        <li><strong>Sort:</strong> Name, Type o Bank.</li>
        <li><strong>List / Grid:</strong> alterna tabla detallada y vista visual.</li>
      </ul>
      <h3>Seleccionar y cargar</h3>
      <p>
        Un clic selecciona y muestra detalles; doble clic carga. También podés usar <kbd>↑</kbd>/<kbd>↓</kbd> y{' '}
        <kbd>Enter</kbd>. La tecla <kbd>F</kbd> o la estrella alternan favorito. Cada carga aparece en Recently Used.
      </p>
      <h3>Qué significa cada botón</h3>
      <div className="cards three">
        <article className="card">
          <h4>Load Preset</h4>
          <p>Carga un sonido nativo de Kosmos con sus parámetros.</p>
        </article>
        <article className="card">
          <h4>Load Approximation</h4>
          <p>Carga una adaptación. Mantiene una intención similar, pero no es idéntica al instrumento original.</p>
        </article>
        <article className="card">
          <h4>Conversion Required</h4>
          <p>La referencia puede buscarse, pero todavía no existe una versión reproducible. El botón queda deshabilitado.</p>
        </article>
      </div>
      <h3>Favoritos y colecciones</h3>
      <p>
        Las estrellas quedan guardadas. Para agrupar sonidos, creá una colección con <strong>+ New Collection</strong>,
        elegila en el inspector y usá Add/Remove from Collection. El menú <code>…</code> permite renombrarla o
        eliminarla sin borrar los presets.
      </p>
      <ManualCallout variant="green">
        <strong>Atajos de Library:</strong> <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>K</kbd> busca; <kbd>↑</kbd>/<kbd>↓</kbd>{' '}
        selecciona; <kbd>Enter</kbd> carga; <kbd>F</kbd> marca favorito y <kbd>Esc</kbd> limpia la búsqueda.
      </ManualCallout>
    </section>
  );
}
