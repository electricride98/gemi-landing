import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | GEMI - Gestión de Movilidad Inteligente",
  description:
    "Términos y Condiciones de uso de los servicios de GESTION DE MOVILIDAD INTELIGENTE GEMI S.A.S. RUC: 0993405280001. Lee nuestras condiciones antes de utilizar nuestros servicios.",
};

export default function TerminosYCondicionesPage() {
  return (
    <main className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm font-body text-slate-500">
            <li>
              <Link href="/" className="hover:text-accent-dark transition-colors">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-navy font-semibold">Términos y Condiciones</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-10 border-b border-gray-100 pb-8">
          <span className="font-body text-xs font-bold text-accent-dark tracking-widest uppercase">
            Documento Legal
          </span>
          <h1 className="font-heading font-black text-3xl md:text-4xl text-navy mt-2 mb-3">
            Términos y Condiciones de Uso
          </h1>
          <p className="font-body text-sm text-slate-500">
            Última actualización: Octubre 2024 · Vigente a partir del 01 de octubre de 2024
          </p>
          <div className="mt-4 p-4 bg-surface rounded-lg border border-gray-100">
            <p className="font-body text-sm text-slate-700">
              <strong className="text-navy">GESTION DE MOVILIDAD INTELIGENTE GEMI S.A.S.</strong><br />
              RUC: 0993405280001<br />
              Km 6½ Vía a la Costa, Edificio Grace Ceibos Piso 1, Guayaquil, Ecuador.<br />
              Correo: <a href="mailto:info@gemimobilidad.com" className="text-accent-dark underline">info@gemimobilidad.com</a>
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none font-body space-y-8">
          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              1. Identificación y Aceptación
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Los presentes Términos y Condiciones regulan el acceso y uso del sitio
              web y los servicios prestados por{" "}
              <strong>GESTION DE MOVILIDAD INTELIGENTE GEMI S.A.S.</strong>, empresa
              legalmente constituida en la República del Ecuador con RUC{" "}
              <strong>0993405280001</strong>, con domicilio en Km 6½ Vía a la Costa,
              Edificio Grace Ceibos Piso 1, Guayaquil, Ecuador.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Al acceder o utilizar nuestro sitio web y/o servicios, usted acepta
              íntegramente estos Términos y Condiciones. Si no está de acuerdo con
              alguna de estas disposiciones, le rogamos que no acceda ni utilice
              nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              2. Descripción de los Servicios
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              GEMI ofrece servicios transitorios de organización y coordinación de
              operaciones de transporte y flete, incluyendo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Coordinación de flotas de transporte urbano y taxis amarillos.</li>
              <li>Gestión logística inteligente y planificación de rutas.</li>
              <li>Integración de soluciones tecnológicas para optimización de transporte.</li>
              <li>Coordinación de servicios de transporte seguro de personas y carga.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              GEMI actúa exclusivamente como coordinadora y organizadora de operaciones,
              no siendo responsable directa de la prestación del servicio de transporte
              en sí, el cual es ejecutado por los operadores habilitados correspondientes.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              3. Condiciones de Uso del Sitio Web
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Al utilizar este sitio web, usted se compromete a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Utilizar el sitio y los servicios conforme a la ley ecuatoriana y los presentes Términos.</li>
              <li>No realizar ninguna actividad que pueda dañar, deshabilitar o deteriorar el sitio web.</li>
              <li>No reproducir, distribuir ni comercializar el contenido del sitio sin autorización expresa.</li>
              <li>No suplantar la identidad de otras personas o entidades al contactarse con GEMI.</li>
              <li>Proporcionar información veraz, completa y actualizada al registrarse o solicitar servicios.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              4. Propiedad Intelectual
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Todos los contenidos de este sitio web, incluyendo pero no limitado a
              textos, imágenes, logotipos, marcas, diseños y software, son propiedad
              de GESTION DE MOVILIDAD INTELIGENTE GEMI S.A.S. o se encuentran bajo
              licencia de uso. Queda expresamente prohibida su reproducción, distribución,
              modificación o uso comercial sin autorización escrita previa de GEMI.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              5. Responsabilidad y Limitaciones
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              GEMI no será responsable por:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Daños derivados del uso incorrecto del sitio web o los servicios.</li>
              <li>Interrupciones del servicio por causas de fuerza mayor, fallos técnicos ajenos a GEMI o mantenimientos programados.</li>
              <li>El contenido de sitios web de terceros enlazados desde esta plataforma.</li>
              <li>Incumplimientos atribuibles directamente a los operadores de transporte habilitados.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              6. Obligaciones del Usuario
            </h2>
            <p className="text-slate-600 leading-relaxed">
              El usuario se compromete a utilizar los servicios de GEMI de manera
              responsable y respetuosa. Cualquier uso fraudulento, abusivo o contrario
              a la ley dará lugar a la suspensión inmediata del servicio, sin perjuicio
              de las acciones legales que correspondan conforme a la legislación ecuatoriana.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              7. Condiciones de Pago
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Los precios y condiciones de pago por los servicios de coordinación serán
              comunicados previamente y de forma clara al usuario o empresa contratante.
              GEMI emitirá la documentación fiscal correspondiente conforme a la normativa
              tributaria ecuatoriana vigente (SRI).
            </p>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              8. Ley Aplicable y Jurisdicción
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Estos Términos y Condiciones se rigen por las leyes de la República del
              Ecuador. Cualquier controversia que surja de su interpretación o aplicación
              será sometida a la jurisdicción de los tribunales competentes de la ciudad
              de Guayaquil, Ecuador, renunciando expresamente las partes a cualquier
              otro fuero que pudiera corresponderles.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              9. Modificaciones a los Términos
            </h2>
            <p className="text-slate-600 leading-relaxed">
              GEMI se reserva el derecho de modificar estos Términos y Condiciones en
              cualquier momento. Las modificaciones entrarán en vigor a partir de su
              publicación en este sitio web. Se recomienda revisar periódicamente este
              documento. El uso continuado de nuestros servicios tras la publicación de
              cambios implica la aceptación de los nuevos términos.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              10. Contacto
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Para consultas relacionadas con estos Términos y Condiciones:
            </p>
            <div className="mt-3 p-4 bg-surface rounded-lg border border-gray-100">
              <p className="font-body text-sm text-slate-700">
                <strong className="text-navy">GESTION DE MOVILIDAD INTELIGENTE GEMI S.A.S.</strong><br />
                Km 6½ Vía a la Costa, Edificio Grace Ceibos Piso 1, Guayaquil, Ecuador.<br />
                Correo: <a href="mailto:info@gemimobilidad.com" className="text-accent-dark underline">info@gemimobilidad.com</a><br />
                RUC: 0993405280001
              </p>
            </div>
          </section>
        </div>

        {/* Back + Privacy link */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/"
            id="terms-back-link"
            className="inline-flex items-center gap-2 font-body font-semibold text-sm text-navy hover:text-accent-dark transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Volver al Inicio
          </Link>
          <Link
            href="/politica-de-privacidad"
            id="terms-privacy-link"
            className="font-body text-sm text-slate-500 hover:text-accent-dark transition-colors underline underline-offset-2"
          >
            Ver Política de Privacidad →
          </Link>
        </div>
      </div>
    </main>
  );
}
