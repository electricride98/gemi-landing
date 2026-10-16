import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="bg-white py-14 md:py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Copy ── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/15 text-navy-light px-4 py-2 rounded-full text-sm font-body font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              Movilidad Urbana Inteligente · Ecuador
            </div>

            {/* H1 */}
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-[3.25rem] text-navy leading-[1.1] uppercase tracking-tight">
              Innovación y Seguridad en la Gestión de Movilidad Urbana
            </h1>

            {/* Subheader */}
            <p className="font-body text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              Coordinación inteligente de flotas, taxis amarillos y carreras de
              transporte seguro con tecnología avanzada.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#servicios"
                id="cta-hero-servicios"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-navy font-heading font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
              >
                Conoce Nuestros Servicios
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#contacto"
                id="cta-hero-contacto"
                className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-heading font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-lg transition-all duration-200 hover:bg-navy hover:text-white hover:-translate-y-0.5 active:scale-95"
              >
                Contáctanos
              </a>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-6 pt-6 mt-2 border-t border-gray-100">
              <div>
                <p className="font-heading font-black text-2xl text-navy">100%</p>
                <p className="font-body text-xs text-slate-500 mt-0.5 leading-tight">
                  Rutas seguras
                </p>
              </div>
              <div>
                <p className="font-heading font-black text-2xl text-navy">24/7</p>
                <p className="font-body text-xs text-slate-500 mt-0.5 leading-tight">
                  Disponibilidad
                </p>
              </div>
              <div>
                <p className="font-heading font-black text-2xl text-navy">
                  <span className="text-accent">✓</span> RUC
                </p>
                <p className="font-body text-xs text-slate-500 mt-0.5 leading-tight">
                  Empresa legal Ecuador
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Illustration ── */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            {/* Decorative glow blob */}
            <div
              className="absolute inset-0 -z-10 scale-110 rounded-3xl bg-gradient-to-br from-accent/20 via-surface to-transparent blur-3xl"
              aria-hidden="true"
            />
            <Image
              src="/hero-illustration.png"
              alt="Ilustración de taxi amarillo conectado a tecnología de mapas y movilidad urbana inteligente"
              width={700}
              height={500}
              className="relative w-full h-auto object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
