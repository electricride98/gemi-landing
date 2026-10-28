const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Confianza y Seguridad",
    text: "Todos nuestros operadores y unidades cumplen estrictos protocolos de verificación.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Tecnología Avanzada",
    text: "Plataformas digitales integradas para gestión en tiempo real de flotas y rutas.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Eficiencia Operativa",
    text: "Optimización continua de procesos para maximizar la productividad de cada operación.",
  },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-white py-16 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* ── Left: Text ── */}
          <div>
            <span className="font-body text-xs font-bold text-accent-dark tracking-[0.2em] uppercase">
              Quiénes Somos
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-navy mt-3 mb-6 leading-tight">
              Una empresa ecuatoriana comprometida con la movilidad del futuro
            </h2>
            <p className="font-body text-slate-600 leading-relaxed mb-4">
              <strong className="text-navy">GESTION DE MOVILIDAD INTELIGENTE GEMI S.A.S.</strong> es una empresa
              legalmente constituida en Ecuador, dedicada a la organización y
              coordinación de operaciones de transporte y flete bajo los más
              altos estándares del sector.
            </p>
            <p className="font-body text-slate-600 leading-relaxed">
              Con sede en Guayaquil, integramos tecnología, logística y talento
              humano para ofrecer soluciones de movilidad urbana confiables,
              seguras y eficientes para conductores y usuarios.
            </p>
          </div>

          {/* ── Right: Pillars ── */}
          <div className="grid grid-cols-1 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex items-start gap-5 bg-surface rounded-xl p-6 border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-navy group-hover:bg-accent group-hover:text-navy transition-colors duration-300 shadow-sm shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-navy uppercase tracking-wide mb-1">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
