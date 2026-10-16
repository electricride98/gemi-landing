import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | GEMI - Gestión de Movilidad Inteligente",
  description:
    "Política de Privacidad de GESTION DE MOVILIDAD INTELIGENTE GEMI S.A.S. RUC: 0993405280001. Conoce cómo protegemos y gestionamos tu información personal.",
};

export default function PoliticaDePrivacidadPage() {
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
            <li className="text-navy font-semibold">Política de Privacidad</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-10 border-b border-gray-100 pb-8">
          <span className="font-body text-xs font-bold text-accent-dark tracking-widest uppercase">
            Documento Legal
          </span>
          <h1 className="font-heading font-black text-3xl md:text-4xl text-navy mt-2 mb-3">
            Política de Privacidad
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
              1. Responsable del Tratamiento de Datos
            </h2>
            <p className="text-slate-600 leading-relaxed">
              GESTION DE MOVILIDAD INTELIGENTE GEMI S.A.S., con RUC{" "}
              <strong>0993405280001</strong>, domiciliada en Km 6½ Vía a la Costa,
              Edificio Grace Ceibos Piso 1, Guayaquil, Ecuador, es la empresa
              responsable del tratamiento de los datos personales que usted nos
              proporcione a través de este sitio web y nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              2. Información que Recopilamos
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Podemos recopilar los siguientes tipos de información:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>
                <strong>Datos de identificación:</strong> nombre completo, cédula
                de identidad o RUC, dirección, número de teléfono y correo
                electrónico.
              </li>
              <li>
                <strong>Datos de uso:</strong> información sobre cómo accede y
                utiliza nuestros servicios de coordinación de transporte.
              </li>
              <li>
                <strong>Datos de navegación:</strong> dirección IP, tipo de
                navegador, páginas visitadas y tiempo de permanencia en el sitio.
              </li>
              <li>
                <strong>Datos de geolocalización:</strong> cuando utilice nuestros
                servicios de coordinación de rutas, con su consentimiento expreso.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              3. Finalidad del Tratamiento
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Sus datos personales son tratados para las siguientes finalidades:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Prestación y gestión de los servicios de coordinación de transporte.</li>
              <li>Comunicación comercial y atención al cliente.</li>
              <li>Cumplimiento de obligaciones legales y fiscales en Ecuador.</li>
              <li>Mejora continua de nuestros servicios y plataformas digitales.</li>
              <li>Envío de información y publicidad relacionada con nuestros servicios, con su consentimiento.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              4. Base Legal del Tratamiento
            </h2>
            <p className="text-slate-600 leading-relaxed">
              El tratamiento de sus datos personales se realiza con base en la{" "}
              <strong>Ley Orgánica de Protección de Datos Personales del Ecuador</strong>{" "}
              (LOPDP), así como en las políticas del sector de transporte establecidas por
              las autoridades competentes. En determinados casos, el tratamiento
              se basa en su consentimiento expreso, en la ejecución de un contrato
              o en el cumplimiento de una obligación legal.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              5. Conservación de los Datos
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Sus datos personales serán conservados durante el tiempo estrictamente
              necesario para cumplir con las finalidades para las que fueron recopilados
              y para dar cumplimiento a las obligaciones legales aplicables. Una vez
              finalizada la relación contractual o de servicio, los datos serán
              bloqueados durante los plazos de prescripción legal antes de su
              eliminación definitiva.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              6. Transferencia de Datos a Terceros
            </h2>
            <p className="text-slate-600 leading-relaxed">
              GEMI no vende, arrienda ni comparte sus datos personales con terceros
              con fines comerciales propios. Únicamente podrán compartirse con:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 mt-3">
              <li>Prestadores de servicios necesarios para la operación (proveedores tecnológicos, plataformas de pago).</li>
              <li>Autoridades y organismos públicos cuando la ley así lo exija.</li>
              <li>Operadores de transporte con quienes se coordine directamente su servicio.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              7. Derechos del Titular de los Datos
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Conforme a la LOPDP, usted tiene derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted.</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
              <li><strong>Eliminación:</strong> Solicitar la supresión de sus datos.</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado.</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
              <li><strong>Revocación del consentimiento:</strong> Retirar el consentimiento otorgado en cualquier momento.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              Para ejercer estos derechos, puede contactarnos en:{" "}
              <a href="mailto:info@gemimobilidad.com" className="text-accent-dark underline font-semibold">
                info@gemimobilidad.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              8. Uso de Cookies y Tecnologías de Seguimiento
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Este sitio web puede utilizar cookies técnicas y analíticas para mejorar
              la experiencia de navegación. Las cookies no invasivas de carácter técnico
              son estrictamente necesarias para el funcionamiento del sitio. Las cookies
              analíticas se activan únicamente con su consentimiento. Puede gestionar o
              deshabilitar las cookies desde la configuración de su navegador.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              9. Seguridad de los Datos
            </h2>
            <p className="text-slate-600 leading-relaxed">
              GEMI adopta medidas técnicas y organizativas adecuadas para proteger sus
              datos personales contra acceso no autorizado, pérdida, alteración o
              divulgación. Sin embargo, ningún sistema de transmisión de datos por
              internet puede garantizarse completamente seguro, por lo que le
              recomendamos tomar precauciones adicionales al compartir información.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              10. Modificaciones a esta Política
            </h2>
            <p className="text-slate-600 leading-relaxed">
              GEMI se reserva el derecho de modificar esta Política de Privacidad
              para adaptarla a cambios legislativos, normativos o de servicios.
              Cualquier modificación relevante será comunicada a través de este
              sitio web con al menos 30 días de antelación.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-black text-xl text-navy mb-3">
              11. Contacto
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Para cualquier consulta relacionada con esta Política de Privacidad,
              puede contactarnos:
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

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link
            href="/"
            id="privacy-back-link"
            className="inline-flex items-center gap-2 font-body font-semibold text-sm text-navy hover:text-accent-dark transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Volver al Inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
