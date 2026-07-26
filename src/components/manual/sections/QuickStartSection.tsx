import { ManualCallout } from '../ManualCallout';
import type { ManualSectionProps } from '../sectionTypes';

export function QuickStartSection({ registerSection }: ManualSectionProps) {
  return (
    <section className="guide-section" id="quick-start" ref={registerSection('quick-start')}>
      <span className="section-tag mini-label">01 · Primeros minutos</span>
      <h2>Tu primer sonido</h2>
      <p className="lead">
        Kosmos concentra síntesis, modulación, efectos y presets en cinco espacios: VOICE, EFFECTS, MATRIX, ADVANCED y
        LIBRARY.
      </p>
      <div className="cards three">
        <article className="card">
          <span className="card-number">1</span>
          <h3>Elegí</h3>
          <p>Abrí el selector superior y cargá uno de los 25 presets de fábrica, un preset del usuario o un sonido desde Library.</p>
        </article>
        <article className="card">
          <span className="card-number">2</span>
          <h3>Tocá</h3>
          <p>Usá un controlador MIDI, el teclado en pantalla o las teclas musicales de la computadora.</p>
        </article>
        <article className="card">
          <span className="card-number">3</span>
          <h3>Diseñá</h3>
          <p>Modificá VOICE, sumá efectos y creá movimiento desde MATRIX. Guardá el resultado en ADVANCED.</p>
        </article>
      </div>
      <ManualCallout variant="purple">
        <strong>Atajo esencial.</strong> Presioná <kbd>Z</kbd> para bajar una octava y <kbd>X</kbd> para subir una
        octava. Son teclas simples, sin Ctrl ni Cmd.
      </ManualCallout>
      <img
        className="hero-shot"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_up5HYGetUoL0pCjPwxxy4emThsAskUq2ZrREMB9iivL0TA1uOcIXYpZA-dwpod0LZI7IytJQrtvNrkD_D_6O0gXE0qGhkiQH3rEBG7BF-4bOvLUVEUf3U6KFOW8feShZDTjKfXVsPdrNp_8RyEDE-7Jw8CJ3pl92F870VgPEtI3RoZUZFC7ceI1e6z_573s85WsBhbi3FmkLUPOCvTwd2xuHXv5cq8x-Mg6Uj5OFi5FarlzgLVRseRMq6G6KHGQTbCyZ9bhwqgTF"
        alt="Interfaz principal de Kosmos"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
}
