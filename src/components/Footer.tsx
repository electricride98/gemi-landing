import Link from "next/link";
import Image from "next/image";

const CURRENT_YEAR = 2026;

export default function Footer() {
  const year = CURRENT_YEAR;

  return (
    <footer id="contacto" className="bg-navy text-white">
      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo-gemi.png"
              alt="GEMI Gestión de Movilidad Inteligente"
              width={160}
              height={50}
              className="h-10 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="font-body text-sm text-slate-400 leading-relaxed max-w-xs">
              Servicios transitorios de organización y coordinación de
              operaciones de transporte y flete en Ecuador.
            </p>
            {/* Social / Trust badge */}
            <div className="mt-6 inline-flex items-center gap-2 text-xs text-accent font-body font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Guayaquil, Ecuador
            </div>
          </div>

          {/* Legal info — OBLIGATORIO META ADS */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-accent mb-5">
              Información Legal
            </h4>
            <ul className="space-y-3.5 text-sm font-body">
              <li className="text-slate-300">
                <span className="font-semibold text-white block">Razón Social</span>
                GESTION DE MOVILIDAD INTELIGENTE GEMI S.A.S.
              </li>
              <li className="text-slate-300">
                <span className="font-semibold text-white">RUC:</span>{" "}
                <span className="font-mono">0993405280001</span>
              </li>
              <li className="text-slate-300">
                <span className="font-semibold text-white block">Dirección</span>
                Km 6½ Vía a la Costa, Edificio Grace Ceibos Piso 1,
                <br />
                Guayaquil, Ecuador.
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-accent mb-5">
              Contacto
            </h4>
            <ul className="space-y-4 text-sm font-body">
              <li>
                <a
                  href="mailto:info@gemimobilidad.com"
                  id="footer-email-link"
                  className="flex items-start gap-3 text-slate-300 hover:text-accent transition-colors group"
                >
                  <svg className="w-4 h-4 mt-0.5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@gemimobilidad.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5940000000000"
                  id="footer-phone-link"
                  className="flex items-start gap-3 text-slate-300 hover:text-accent transition-colors"
                >
                  <svg className="w-4 h-4 mt-0.5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +593 4 XXX-XXXX
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/593000000000"
                  id="footer-whatsapp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-300 hover:text-accent transition-colors"
                >
                  <svg className="w-4 h-4 mt-0.5 text-accent shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Empresarial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar (legal links para Meta) ── */}
      <div className="border-t border-slate-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-slate-500">
            <p>
              © {year} GESTION DE MOVILIDAD INTELIGENTE GEMI S.A.S. — RUC: 0993405280001. Todos los derechos reservados.
            </p>
            <nav aria-label="Enlaces legales" className="flex items-center gap-5">
              <Link
                href="/politica-de-privacidad"
                id="footer-privacy-link"
                className="hover:text-accent underline underline-offset-2 transition-colors"
              >
                Política de Privacidad
              </Link>
              <span className="text-slate-700" aria-hidden="true">·</span>
              <Link
                href="/terminos-y-condiciones"
                id="footer-terms-link"
                className="hover:text-accent underline underline-offset-2 transition-colors"
              >
                Términos y Condiciones
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
