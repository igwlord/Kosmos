import { ManualCallout } from './ManualCallout';
import type { ManualSectionProps } from './sectionTypes';

interface TableProps {
  label: string;
  headings: string[];
  rows: Array<Array<string>>;
}

function ManualTable({ label, headings, rows }: TableProps) {
  return (
    <div className="table-wrap" tabIndex={0} role="region" aria-label={label}>
      <table>
        <thead><tr>{headings.map((heading) => <th key={heading}>{heading}</th>)}</tr></thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join('-')}>
              {row.map((cell, index) => <td key={cell}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function EnglishManualContent({ registerSection }: ManualSectionProps) {
  return (
    <>
      <section className="guide-section" id="quick-start" ref={registerSection('quick-start')}>
        <span className="section-tag mini-label">01 · First minutes</span>
        <h2>Your first sound</h2>
        <p className="lead">Kosmos brings synthesis, modulation, effects, and presets together across VOICE, EFFECTS, MATRIX, ADVANCED, and LIBRARY.</p>
        <div className="cards three">
          <article className="card"><span className="card-number">1</span><h3>Choose</h3><p>Open the top selector and load one of the 25 factory presets, a user preset, or a sound from Library.</p></article>
          <article className="card"><span className="card-number">2</span><h3>Play</h3><p>Use a MIDI controller, the on-screen keyboard, or your computer keyboard.</p></article>
          <article className="card"><span className="card-number">3</span><h3>Design</h3><p>Edit VOICE, add effects, and create movement in MATRIX. Save the result from ADVANCED.</p></article>
        </div>
        <ManualCallout variant="purple"><strong>Essential shortcut.</strong> Press <kbd>Z</kbd> to move down one octave and <kbd>X</kbd> to move up. Use the keys without Ctrl or Cmd.</ManualCallout>
        <img className="hero-shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_up5HYGetUoL0pCjPwxxy4emThsAskUq2ZrREMB9iivL0TA1uOcIXYpZA-dwpod0LZI7IytJQrtvNrkD_D_6O0gXE0qGhkiQH3rEBG7BF-4bOvLUVEUf3U6KFOW8feShZDTjKfXVsPdrNp_8RyEDE-7Jw8CJ3pl92F870VgPEtI3RoZUZFC7ceI1e6z_573s85WsBhbi3FmkLUPOCvTwd2xuHXv5cq8x-Mg6Uj5OFi5FarlzgLVRseRMq6G6KHGQTbCyZ9bhwqgTF" alt="Kosmos main interface" loading="lazy" decoding="async" />
      </section>

      <section className="guide-section" id="interface" ref={registerSection('interface')}>
        <span className="section-tag mini-label">02 · Common rules</span>
        <h2>Interface and controls</h2>
        <h3>Top bar</h3>
        <ManualTable label="Top bar controls" headings={['Control', 'What it does']} rows={[
          ['VOICE / EFFECTS / MATRIX / ADVANCED / LIBRARY', 'Switches workspace without closing the instrument.'],
          ['Previous / next arrows', 'Move through factory presets.'],
          ['Preset name', 'Opens factory presets, user presets, and Save Preset…'],
          ['Gear', 'Opens ADVANCED.'],
          ['Meter', 'Shows audio output in dB.'],
          ['OUTPUT', 'Adjusts global output from -24 to +12 dB. Double-click resets to 0 dB.'],
          ['Device', 'In standalone mode, opens driver, output, sample rate, and buffer settings. As a plugin, it shows HOST / DAW.'],
        ]} />
        <h3>Common gestures</h3>
        <div className="cards">
          <article className="card"><h4>Knobs</h4><p>Drag to adjust. Double-click resets. Right-click opens Reset and available modulation actions.</p></article>
          <article className="card"><h4>Power</h4><p>Oscillators, filters, noise, and effects can be bypassed without losing their settings.</p></article>
          <article className="card"><h4>Graphs</h4><p>Envelopes, LFOs, and the MATRIX grid support direct mouse editing.</p></article>
          <article className="card"><h4>Modulation</h4><p>Drag LFO, ENV, MACRO, or WHEEL from VOICE onto a ringed knob. New routes begin at +50.</p></article>
        </div>
        <ManualCallout variant="green">A knob ring shows modulation depth and total movement. Kosmos supports up to <strong>8 active routes</strong>.</ManualCallout>
      </section>

      <section className="guide-section" id="voice" ref={registerSection('voice')}>
        <span className="section-tag mini-label">03 · Sound engine</span>
        <h2>VOICE</h2>
        <p className="lead">Sound starts here: three oscillators, noise, three envelopes, four LFOs, two filters, and four macros.</p>
        <h3>Macros and Glide</h3>
        <p><strong>Macro 1–4</strong> controls several parameters from one knob. Drag its chip onto each destination, then move the macro to transform them together. Right-click can clear all routes for that macro.</p>
        <p><strong>Glide</strong> controls pitch transition between notes: higher values produce longer slides; lower values make changes immediate.</p>
        <h3>Oscillators 1, 2, and 3</h3>
        <ManualTable label="Oscillator controls" headings={['Control', 'Use']} rows={[
          ['Power', 'Enables or disables the oscillator.'], ['Waveform', 'Selects Sine, Saw, Square, or Triangle.'], ['Pitch', 'Transposes in semitones.'], ['Level', 'Controls volume.'], ['Pan', 'Moves the sound left or right.'], ['Unison', 'Stacks voices for a wider sound.'], ['Detune', 'Offsets the pitch of stacked Unison voices.'],
        ]} />
        <h3>Noise</h3><p>The generator adds white noise for attacks, air, percussion, and textures. It includes power, monitor, <strong>Level</strong>, and <strong>Pan</strong>.</p>
        <h3>ENV 1, ENV 2, and ENV 3</h3><p><strong>ENV 1</strong> controls main amplitude. <strong>ENV 2 and ENV 3</strong> are modulation sources.</p>
        <ManualTable label="Envelope stages" headings={['Stage', 'Function']} rows={[
          ['Delay', 'Waits before starting.'], ['Attack', 'Time to reach the maximum.'], ['Hold', 'Keeps the maximum level.'], ['Decay', 'Time to reach Sustain.'], ['Sustain', 'Level held while the note is pressed.'], ['Release', 'Fade after the note is released.'], ['Curve', 'Changes the shape of the transition.'],
        ]} />
        <p>You can also move Attack, Decay, Sustain, and Release points directly in the graph.</p>
        <h3>LFO 1–4</h3><p>Shapes include <strong>Sine, Triangle, Saw, Square, and S&amp;H</strong>. Controls are Rate, Depth, Fade, Phase, Smooth, and Delay.</p>
        <ul><li><strong>SYNC:</strong> locks Rate to 1/1 through 1/32. Without a host, it uses 120 BPM.</li><li><strong>RETRIG:</strong> restarts the cycle on every note.</li><li><strong>Graph:</strong> drag horizontally to change speed or division.</li></ul>
        <h3>Filters 1 and 2</h3><p>Types: <strong>Low Pass, High Pass, Band Pass, Notch, Comb, and Ladder</strong>. Each filter offers Cutoff, Resonance, Drive, Mix, and Key Track.</p>
        <ManualCallout variant="purple"><strong>Quick idea:</strong> drag ENV 2 onto Cutoff for a bright attack that darkens, or use LFO 1 for a repeating sweep.</ManualCallout>
        <h3>Source tray</h3><p>Drag <strong>LFO 1–4, ENV 2–3, MACRO 1–4, and WHEEL</strong> from the lower tray. WHEEL represents MIDI modulation wheel CC1.</p>
      </section>

      <section className="guide-section" id="effects" ref={registerSection('effects')}>
        <span className="section-tag mini-label">04 · Processing</span><h2>EFFECTS</h2>
        <p className="lead">The four effects run in a fixed order. Every module has independent power and a visualizer.</p>
        <div className="signal-flow" aria-label="Effects order"><span>Distortion</span><i>→</i><span>Chorus</span><i>→</i><span>Delay</span><i>→</i><span>Reverb</span></div>
        <div className="cards">
          <article className="card"><h3>Distortion</h3><p><strong>Drive</strong> sets saturation, <strong>Tone</strong> changes balance, and <strong>Mix</strong> blends dry and processed sound.</p></article>
          <article className="card"><h3>Chorus</h3><p><strong>Rate</strong> sets speed, <strong>Depth</strong> sets movement, and <strong>Mix</strong> sets amount.</p></article>
          <article className="card"><h3>Delay</h3><p><strong>Time, Feedback, and Mix</strong>. SYNC offers divisions from 1/1 through 1/32.</p></article>
          <article className="card"><h3>Reverb</h3><p><strong>Size</strong> sets space, <strong>Damp</strong> absorbs highs, and <strong>Mix</strong> sets amount.</p></article>
        </div>
        <h3>Global controls</h3><ul><li><strong>FX Preset:</strong> Custom, Default, Wide, Space, and Crushed.</li><li><strong>ALL / DIST / CHOR / DELAY / REVERB:</strong> quick module power.</li><li><strong>Top chain:</strong> selects and highlights a card.</li><li><strong>Output and meter:</strong> control and display final section level.</li></ul>
        <ManualCallout variant="warning">Compare with effects bypassed from time to time. Louder can feel “better” even when it is only louder.</ManualCallout>
      </section>

      <section className="guide-section" id="matrix" ref={registerSection('matrix')}>
        <span className="section-tag mini-label">05 · Movement and expression</span><h2>MATRIX</h2>
        <p className="lead">Connect a moving source to a receiving destination. The current version provides <strong>11 sources, 10 destinations, and up to 8 simultaneous routes</strong>.</p>
        <div className="cards"><article className="card"><h3>Sources</h3><p>ENV 2–3, LFO 1–4, Macro 1–4, and Mod Wheel.</p></article><article className="card"><h3>Destinations</h3><p>Filter 1/2 Cutoff and Resonance; Osc 1/2/3 Pitch and Level.</p></article></div>
        <h3>Create and edit a route</h3><ol><li>Click the source/destination cell. It starts at <code>+50</code>.</li><li>Drag vertically from <code>-100</code> to <code>+100</code>.</li><li>Hold <kbd>Shift</kbd> while dragging for fine control.</li><li>Positive values keep direction; negative values invert it.</li></ol>
        <p>The inspector changes <strong>Source</strong>, <strong>Destination</strong>, and <strong>Amount</strong>, removes the route, or closes the selection. Exact duplicates are prevented.</p>
        <h3>Toolbar</h3>
        <ManualTable label="Matrix toolbar" headings={['Control', 'Action']} rows={[
          ['+ ADD ROUTE', 'Creates the first available combination and opens the inspector.'], ['LOCK MATRIX', 'Keeps routes when loading another preset.'], ['RESET MATRIX', 'Requires a second CONFIRM RESET click before clearing.'], ['GRID / ROUTES', 'Switches the view.'], ['?', 'Opens contextual help.'], ['ROUTES n/8', 'Shows used route slots.'],
        ]} />
        <h3>Delete</h3><p>Double-click the cell, press <kbd>Delete</kbd> or <kbd>Backspace</kbd>, set Amount to zero, use Remove Route, or reset the matrix.</p>
      </section>

      <section className="guide-section" id="library" ref={registerSection('library')}>
        <span className="section-tag mini-label">06 · Find sounds</span><h2>LIBRARY</h2>
        <p className="lead">Library combines native factory presets, user presets, and imported catalog references. It loads the first time you open the section.</p>
        <h3>Search, filter, and sort</h3><ul><li><strong>Search:</strong> names, instruments, banks, types, styles, and tags.</li><li><strong>Views:</strong> All Presets, Favorites, Recently Used, and Imported.</li><li><strong>Categories:</strong> Instruments, Types, Styles, Genres, Banks, and Authors.</li><li><strong>Chips:</strong> remove one filter or use Clear all.</li><li><strong>Sort:</strong> Name, Type, or Bank.</li><li><strong>List / Grid:</strong> detailed table or visual grid.</li></ul>
        <h3>Select and load</h3><p>One click selects and shows details; double-click loads. You can also use <kbd>↑</kbd>/<kbd>↓</kbd> and <kbd>Enter</kbd>. Press <kbd>F</kbd> or the star to toggle Favorite.</p>
        <h3>Button meanings</h3><div className="cards three"><article className="card"><h4>Load Preset</h4><p>Loads a native Kosmos sound with its parameters.</p></article><article className="card"><h4>Load Approximation</h4><p>Loads an adaptation with a similar intent, not an identical original instrument.</p></article><article className="card"><h4>Conversion Required</h4><p>The reference can be searched, but no playable version exists yet.</p></article></div>
        <h3>Favorites and collections</h3><p>Stars are saved. Create a collection with <strong>+ New Collection</strong>, select it in the inspector, then use Add/Remove from Collection. The <code>…</code> menu renames or deletes a collection without deleting presets.</p>
        <ManualCallout variant="green"><strong>Library shortcuts:</strong> <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>K</kbd> searches; <kbd>↑</kbd>/<kbd>↓</kbd> selects; <kbd>Enter</kbd> loads; <kbd>F</kbd> toggles Favorite; <kbd>Esc</kbd> clears search.</ManualCallout>
      </section>

      <section className="guide-section" id="advanced" ref={registerSection('advanced')}>
        <span className="section-tag mini-label">07 · Save and restore</span><h2>ADVANCED and presets</h2>
        <h3>Save</h3><ol><li>Open ADVANCED and select <strong>Save Preset</strong>, or use <strong>Save Preset…</strong> in the top menu.</li><li>Enter a name and confirm.</li></ol>
        <p>User <code>.kosmospreset</code> files are stored in <code>Documents/Kosmos/Presets</code>.</p>
        <h3>Load a file</h3><p>Use <strong>Load Preset</strong> and choose a valid file. External presets can be copied into your library.</p>
        <h3>Factory</h3><p>Kosmos includes <strong>25 factory presets</strong>. Browse them with the top arrows or choose them by name.</p>
      </section>

      <section className="guide-section" id="keyboard" ref={registerSection('keyboard')}>
        <span className="section-tag mini-label">08 · Performance</span><h2>Keyboard, wheels, and shortcuts</h2>
        <p>The lower keyboard folds with <strong>v</strong> and expands with <strong>^</strong>. It stays visible in Library and covers approximately C1–C6.</p>
        <ul><li><strong>PITCH:</strong> temporarily changes pitch and returns to center on release.</li><li><strong>MOD:</strong> sends CC1, begins with vibrato, and can be routed as WHEEL.</li></ul>
        <h3>Computer keyboard map</h3><div className="piano-map" role="img" aria-label="Musical keyboard map">{'Black:      W  E     T  Y  U     O  P\nWhite:  A  S  D  F  G  H  J  K  L  ;'}</div>
        <p>The sequence starts at <kbd>A</kbd> and moves chromatically. <kbd>Z</kbd> lowers the base octave and <kbd>X</kbd> raises it.</p>
        <h3>Complete shortcuts</h3>
        <ManualTable label="Keyboard shortcuts" headings={['Shortcut', 'Context', 'Action']} rows={[
          ['A W S E D F T G Y H U J K O L P ;', 'Global', 'Play notes.'], ['Z / X', 'Global', 'Move one octave down / up.'], ['Ctrl/Cmd + Z', 'Global', 'Undo.'], ['Ctrl/Cmd + Y', 'Global', 'Redo.'], ['Ctrl/Cmd + Shift + Z', 'Global', 'Alternative redo.'], ['Ctrl/Cmd + K', 'Library', 'Focus search.'], ['↑ / ↓', 'Library', 'Change selection.'], ['Enter', 'Library', 'Load selection.'], ['F', 'Library', 'Toggle favorite.'], ['Escape', 'Library', 'Clear search.'], ['Delete / Backspace', 'Matrix', 'Delete selected route.'], ['Shift + drag', 'Matrix', 'Fine Amount adjustment.'],
        ]} />
        <ManualCallout variant="warning">Some DAWs reserve keys for their own commands. Click inside Kosmos or review the host keyboard-capture setting if the plugin does not receive them.</ManualCallout>
      </section>

      <section className="guide-section" id="workflows" ref={registerSection('workflows')}>
        <span className="section-tag mini-label">09 · Recipes</span><h2>Recommended workflows</h2>
        <details open><summary>Build a sound from scratch</summary><div><ol><li>Enable an oscillator and choose a waveform.</li><li>Shape ENV 1.</li><li>Enable a filter and find the tone.</li><li>Add layers or noise.</li><li>Modulate Cutoff with ENV 2 or an LFO.</li><li>Add effects one at a time and compensate output.</li><li>Assign macros and save.</li></ol></div></details>
        <details><summary>Create synchronized movement</summary><div><ol><li>Choose an LFO and enable SYNC.</li><li>Select a division such as 1/8.</li><li>Drag it onto Cutoff or Osc Level.</li><li>Adjust Amount in MATRIX.</li><li>Compare RETRIG on and off.</li></ol></div></details>
        <details><summary>Prepare a live preset</summary><div><ol><li>Assign Macro 1 to brightness, Macro 2 to movement, and Macro 3 to effects.</li><li>Assign WHEEL to an expressive variation.</li><li>Enable LOCK MATRIX before browsing presets.</li><li>Save show sounds in a collection.</li></ol></div></details>
      </section>

      <section className="guide-section" id="troubleshooting" ref={registerSection('troubleshooting')}>
        <span className="section-tag mini-label">10 · Help</span><h2>Troubleshooting</h2>
        <details open><summary>No audio</summary><div><ol><li>Confirm an oscillator or Noise is enabled and has Level.</li><li>Check ENV 1 Delay, Attack, and Sustain.</li><li>Check filter Cutoff and Mix.</li><li>Watch OUTPUT and the meter.</li><li>As a plugin, verify track, monitoring, and DAW output.</li><li>In standalone mode, choose the correct driver and device.</li></ol></div></details>
        <details><summary>The sound clips</summary><div><p>Lower oscillator/noise levels, Drive, Feedback, EFFECTS Output, or global output. Test with several notes at once.</p></div></details>
        <details><summary>An imported preset does not load</summary><div><p>Load Approximation means an adaptation is available. Conversion Required means the entry is indexed but not playable yet.</p></div></details>
        <details><summary>Z or X does not change octave</summary><div><p>Click inside Kosmos. The DAW may be capturing those keys before the plugin receives them.</p></div></details>
        <details><summary>I cannot add another modulation</summary><div><p>The limit is 8. Check ROUTES n/8 and remove or replace a connection.</p></div></details>
        <details><summary>A preset changes my routes</summary><div><p>Enable LOCK MATRIX before loading the next sound.</p></div></details>
      </section>
    </>
  );
}
