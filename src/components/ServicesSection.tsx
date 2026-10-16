const services = [
  {
    id: "coordinacion-transporte-seguro",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
    title: "Coordinación de Transporte Seguro",
    description:
      "Organización eficiente de flotas y carreras de transporte bajo estrictos estándares de calidad y seguridad para conductores y pasajeros en toda la red urbana.",
    accent: "Rutas verificadas",
  },
  {
    id: "tecnologia-taxis-apps",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3"
        />
      </svg>
    ),
    title: "Tecnología para Taxis & Apps",
    description:
      "Integración de soluciones digitales para optimizar el trabajo de los taxistas amarillos y mejorar la experiencia del usuario con tecnología de punta.",
    accent: "Plataforma digital",
  },
  {
    id: "gestion-logistica-inteligente",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
        />
      </svg>
    ),
    title: "Gestión Logística Inteligente",
    description:
      "Planificación estratégica orientada a mejorar la movilidad urbana de forma confiable, eficiente y sostenible en Guayaquil y en todo el Ecuador.",
    accent: "Optimización de rutas",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-surface py-16 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <div className="text-center mb-14 md:mb-16">
          <span className="font-body text-xs font-bold text-accent-dark tracking-[0.2em] uppercase">
            Nuestros Servicios
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-[2.6rem] text-navy mt-3 leading-tight">
            Soluciones que Transforman la Movilidad
          </h2>
          <p className="font-body text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Ofrecemos servicios especializados en coordinación y logística de
            transporte urbano, respaldados por tecnología avanzada y experiencia
            en el sector.
          </p>
          {/* Accent underline */}
          <div className="mt-6 h-1 w-16 bg-accent rounded-full mx-auto" aria-hidden="true" />
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <article
              key={service.id}
              id={service.id}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Icon bubble */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-navy group-hover:bg-accent transition-colors duration-300 mb-6 shrink-0">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading font-black text-base text-navy uppercase tracking-wide mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-slate-600 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Accent tag + bar */}
              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-accent-dark bg-accent/10 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {service.accent}
                </span>
                <svg
                  className="w-5 h-5 text-slate-300 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
