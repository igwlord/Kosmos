import { useLanguage } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';

export function Features() {
  const { t } = useLanguage();
  const [headingRef, headingVisible] = useReveal<HTMLDivElement>();
  const [voiceRef, voiceVisible] = useReveal<HTMLDivElement>();
  const [fxRef, fxVisible] = useReveal<HTMLDivElement>();
  const [modRef, modVisible] = useReveal<HTMLDivElement>();

  return (
    <section className="w-full max-w-7xl px-panel-margin py-16 md:py-32">
      <div
        ref={headingRef}
        className={`flex flex-col items-center mb-10 md:mb-20 transition-all duration-700 ease-out ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <h2 className="font-display-lg text-4xl text-on-surface text-center">{t.features.heading}</h2>
        <div className="h-1 w-24 bg-primary mt-6 rounded-full"></div>
      </div>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-module-gap md:auto-rows-[450px]">
        {/* Main UI Block (Voice) */}
        <div
          ref={voiceRef}
          className={`md:col-span-8 glass-panel rounded-2xl p-5 md:p-8 flex flex-col relative overflow-hidden group transition-all duration-700 ease-out ${voiceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          id="main-ui"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32 transition-all duration-1000 group-hover:bg-primary/20"></div>
          <div className="relative z-10 flex flex-col md:h-full">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-label-caps text-primary tracking-[0.2em] text-[10px]">{t.features.voice.tag}</span>
                <h3 className="font-headline-md text-3xl text-secondary mt-1">{t.features.voice.title}</h3>
              </div>
              <span className="material-symbols-outlined text-primary/40 text-4xl">waves</span>
            </div>
            <p className="font-body-base text-on-surface-variant mt-4 max-w-lg leading-relaxed">{t.features.voice.description}</p>
            <div className="mt-auto pt-8 rounded-xl overflow-hidden border border-white/5 shadow-2xl relative">
              <img alt={t.features.voice.imageAlt} width={800} height={300} className="w-full object-cover rounded-t-lg transition-transform duration-700 group-hover:scale-[1.02]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_up5HYGetUoL0pCjPwxxy4emThsAskUq2ZrREMB9iivL0TA1uOcIXYpZA-dwpod0LZI7IytJQrtvNrkD_D_6O0gXE0qGhkiQH3rEBG7BF-4bOvLUVEUf3U6KFOW8feShZDTjKfXVsPdrNp_8RyEDE-7Jw8CJ3pl92F870VgPEtI3RoZUZFC7ceI1e6z_573s85WsBhbi3FmkLUPOCvTwd2xuHXv5cq8x-Mg6Uj5OFi5FarlzgLVRseRMq6G6KHGQTbCyZ9bhwqgTF" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Studio Grade Effects Block */}
        <div
          ref={fxRef}
          className={`md:col-span-4 glass-panel rounded-2xl p-5 md:p-8 flex flex-col relative overflow-hidden group transition-all duration-700 ease-out delay-100 ${fxVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          id="effects"
        >
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/10 blur-[80px] rounded-full -ml-20 -mb-20 transition-all duration-1000 group-hover:bg-secondary-container/20"></div>
          <div className="relative z-10 flex flex-col md:h-full">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-label-caps text-secondary-container tracking-[0.2em] text-[10px]">{t.features.fx.tag}</span>
                <h3 className="font-headline-md text-3xl text-primary mt-1">{t.features.fx.title}</h3>
              </div>
              <span className="material-symbols-outlined text-secondary-container/40 text-4xl">reverb</span>
            </div>
            <p className="font-body-base text-on-surface-variant mt-4 leading-relaxed">{t.features.fx.description}</p>
            <div className="mt-auto rounded-xl overflow-hidden border border-white/5 shadow-2xl relative aspect-[2/1] md:aspect-auto md:h-48">
              <img alt={t.features.fx.imageAlt} width={400} height={192} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMwOj5IFOA5zIIUGb_2gAwWN42J4r-8XZf9UpL3mPXfBRYSbwb1KsdT0syVyCsoDMd2Khwcfj0XjKpEMsFW1v55tL9VkSi4uRcXnI50vvjI6n9gUR614IH2HZL-EMAUTssbpj7nh7ur78iv7VwDrvUsI_itFE5miu65s1SuKoYPwC6aM-PoKCASZUDM12DR3tGTNSs9My_hTDrLvRzrzl72ZHd9n-TsDEd2jaVPDKKl3qfaELaFjx3xO0y7KB07rmlxByLjXVqALD1" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Infinite Modulation Block */}
        <div
          ref={modRef}
          className={`md:col-span-12 glass-panel rounded-2xl p-5 md:p-10 flex flex-col md:flex-row gap-6 md:gap-12 relative overflow-hidden items-center group transition-all duration-700 ease-out delay-200 ${modVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          id="modulation"
        >
          <div className="absolute inset-0 bg-tertiary/5 blur-[150px] rounded-full transition-all duration-1000 group-hover:bg-tertiary/10"></div>
          <div className="relative z-10 flex-1">
            <span className="font-label-caps text-tertiary tracking-[0.2em] text-[10px]">{t.features.modulation.tag}</span>
            <h3 className="font-headline-md text-4xl text-tertiary mt-2">{t.features.modulation.title}</h3>
            <p className="font-body-base text-lg text-on-surface-variant mt-4 max-w-xl leading-relaxed">{t.features.modulation.description}</p>
            <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8">
              <div className="flex items-center gap-2 text-tertiary bg-tertiary/10 px-4 py-2 rounded-lg border border-tertiary/20 font-label-caps text-[10px]">
                <span className="material-symbols-outlined text-sm">settings_input_component</span>
                {t.features.modulation.sources}
              </div>
              <div className="flex items-center gap-2 text-secondary bg-secondary/10 px-4 py-2 rounded-lg border border-secondary/20 font-label-caps text-[10px]">
                <span className="material-symbols-outlined text-sm">tune</span>
                {t.features.modulation.destinations}
              </div>
            </div>
          </div>
          <div className="relative z-10 flex-1 w-full">
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative glow-tertiary">
              <img alt={t.features.modulation.imageAlt} width={800} height={450} className="w-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7PUerFQnE4PQGuZC_RdK5bNeE67IZqPrHh84xx18-cFmLrIMdjF13rSl37Wb6dBfxhiFzzAaCl4Rs33lfKwuiXd5ph6urWId0R4BvKb52O-mWc0BtGkho-ofmUuCsad-tjnbKRomfJstBLtdzUcKEU46k3eTsR_7zA_ycoQ6rlmi7qX1npgsN9-FAcaom5tdbtsgYh0iHF3tlPntcHQWSrWMlXiX8ooDwPl9l3I9zbnuL9mOjvDiOnDyLb9yOOYukObxqYNVvVww0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
