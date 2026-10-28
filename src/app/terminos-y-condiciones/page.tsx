import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones del Servicio de Taxi Compartido | Taxi Enlace Aerovía - GEMI S.A.S.",
  description:
    "Términos y condiciones del servicio de taxi compartido Taxi Enlace Aerovía coordinado por GESTION DE MOVILIDAD INTELIGENTE GEMI S.A.S. RUC: 0993405280001. Versión 1.0 - 24 de octubre de 2026.",
};

export default function TerminosYCondicionesPage() {
  return (
    <main className="bg-surface/50 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm font-body text-slate-500">
            <li>
              <Link href="/" className="hover:text-accent-dark transition-colors font-medium">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">/</li>
            <li className="text-navy font-semibold">Términos y Condiciones</li>
          </ol>
        </nav>

        {/* Header Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200/80 mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-heading font-bold bg-amber-100 text-amber-900 border border-amber-200 uppercase tracking-wider">
              Documento Legal Oficial
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-semibold bg-slate-100 text-slate-700">
              Versión 1.0 — 24 de octubre de 2026
            </span>
          </div>

          <h1 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-navy leading-tight mb-2">
            Términos y condiciones del servicio de taxi compartido
          </h1>
          <p className="font-heading font-bold text-xl sm:text-2xl text-accent-dark mb-4">
            Taxi Enlace Aerovía
          </p>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm font-body text-slate-600">
            <div>
              <span className="font-semibold text-navy">Gestión de Movilidad Inteligente GEMI S.A.S.</span>
              <span className="block sm:inline sm:ml-2 text-slate-500">RUC: 0993405280001</span>
            </div>
            <div className="text-xs text-slate-500">
              Canal de soporte: <a href="mailto:soporte@compiecu.com" className="text-navy font-medium underline">soporte@compiecu.com</a>
            </div>
          </div>

          {/* Resumen introductorio */}
          <div className="mt-6 p-4 sm:p-5 rounded-xl bg-slate-50 border-l-4 border-accent text-slate-700 font-body text-sm leading-relaxed">
            Estos términos establecen cómo se solicita, confirma, paga y utiliza el servicio de taxi compartido coordinado por GEMI, así como las reglas de cancelación, inasistencia, atención de incidentes y reclamaciones. Se aplican a las reservas que los incorporen y cuya aceptación quede registrada antes de contratar el viaje. Cada confirmación identifica el trayecto, los cupos, el precio y las condiciones particulares aceptadas.
          </div>
        </div>

        {/* Document Content */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200/80 font-body text-slate-700 space-y-10">

          {/* 1 */}
          <section id="seccion-1" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">1.</span> Identificación de GEMI y alcance
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                GESTION DE MOVILIDAD INTELIGENTE GEMI S.A.S., en adelante GEMI, con RUC 0993405280001, organiza y coordina el servicio denominado Taxi Enlace Aerovía.
              </p>
              <p>
                Estos términos regulan el servicio de taxi compartido entre los sectores habilitados de Durán y la Estación 5 de la Aerovía, sus retornos reservados y la modalidad individual que se ofrezca para esos trayectos. Comprenden las solicitudes efectuadas mediante el WhatsApp oficial, el sitio web y otros canales expresamente habilitados por GEMI.
              </p>
              <p>
                Las consultas y gestiones del servicio se atenderán mediante el número oficial del servicio. Para soporte y reclamos también se encuentra habilitado el correo <a href="mailto:soporte@compiecu.com" className="text-navy font-semibold underline hover:text-accent-dark">soporte@compiecu.com</a>. El horario de atención al cliente para soporte y reclamos es de lunes a viernes laborables, de 09:00 a 17:00, hora del Ecuador continental, excluidos los feriados aplicables.
              </p>
            </div>
          </section>

          {/* 2 */}
          <section id="seccion-2" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">2.</span> Funciones de GEMI y de los participantes
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                GEMI gestiona el registro, las reservas, la agrupación de pasajeros, la asignación de unidades, la comunicación del viaje, los cobros, las devoluciones y la atención de incidencias. El traslado lo realizan conductores y unidades de taxi legalmente habilitados, cuya documentación y condiciones de vinculación verifica GEMI.
              </p>
              <p>
                Los conductores deben cumplir las normas de tránsito, respetar los puntos y horarios acordados, conducir de manera segura y comunicar novedades. GEMI responde por las obligaciones que le correspondan en su gestión y por las demás responsabilidades que determine la ley; esta distribución de funciones no constituye una exoneración general.
              </p>
              <p>
                Las unidades deberán mantener las condiciones de seguridad, limpieza, cinturones y climatización exigidas por la operación. Los conductores deberán identificarse, respetar la tarifa confirmada y prestar un trato cordial y no discriminatorio. Una contingencia que afecte estas condiciones se comunicará a GEMI para evaluar la continuidad segura del servicio.
              </p>
              <p>
                El servicio contratado comprende exclusivamente el traslado terrestre. El pasaje, los controles de acceso y la operación del sistema Aerovía son independientes. La reserva del taxi no incluye el pasaje de Aerovía ni garantiza acceso cuando la estación se encuentre cerrada o exista una restricción legítima de ingreso.
              </p>
            </div>
          </section>

          {/* 3 */}
          <section id="seccion-3" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">3.</span> Información previa y aceptación
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                Antes de la primera reserva, GEMI facilitará estos términos mediante un enlace accesible o una copia por el canal de atención. El usuario podrá consultar dudas y conservar el texto. Su aceptación se registrará mediante una respuesta afirmativa, un botón u otro mecanismo equivalente que identifique la versión aceptada.
              </p>
              <p>
                La consulta del sitio, la recepción de un mensaje o el silencio no se utilizarán, por sí solos, como aceptación del servicio. Cada reserva requiere además la aceptación de su recorrido, fecha, horario, número de cupos, tarifa y método de pago. Antes de confirmar se comunicarán de forma visible el plazo para cancelar, la vigencia de cuarenta y ocho horas del saldo para reprogramar, la política de no reembolso y sus excepciones, la espera máxima y las consecuencias de una cancelación tardía o inasistencia injustificada: pérdida del prepago del cupo afectado o, cuando se haya elegido efectivo, bloqueo de esa opción sin generar deuda, conforme a las cláusulas 13 a 15.
              </p>
              <p>
                GEMI entregará una constancia de la reserva y permitirá consultar la versión de los términos aplicable. Ninguna regla contenida únicamente en documentos internos o no facilitados previamente podrá utilizarse para imponer al pasajero un cargo o restricción adicional.
              </p>
            </div>
          </section>

          {/* 4 */}
          <section id="seccion-4" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">4.</span> Registro y reservas para otras personas
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                La persona que contrata debe ser mayor de edad y proporcionar información veraz y suficiente para identificarla y gestionar el viaje: nombre, identificación, teléfono de contacto, sector, punto de recogida y datos de la solicitud. Debe comunicar oportunamente los errores o cambios que puedan afectar la prestación.
              </p>
              <p>
                Quien reserve cupos para acompañantes deberá estar autorizado para hacerlo, identificar el número real de viajeros y comunicarles las condiciones del viaje. La confirmación establecerá si esa persona asume el pago de todos los cupos o si se emitirán reservas independientes. No se presume su responsabilidad por cualquier conducta ajena al margen de la ley.
              </p>
              <p>
                Se prohíben las reservas ficticias, la suplantación, el uso de comprobantes alterados y las solicitudes deliberadamente duplicadas. Los menores viajarán acompañados por su representante o un adulto autorizado, utilizando los elementos de seguridad exigibles. GEMI no presta un servicio de custodia de menores.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section id="seccion-5" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">5.</span> Cobertura y puntos de encuentro
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                La atención comienza en los sectores habilitados de Durán City y se amplía por etapas conforme a la disponibilidad comunicada. El ámbito previsto comprende Durán City, incluidas Camelia, Amaranto y Bromelia; Centro Vial; El Dorado; Villa Ventura; Valencia; Brisas de Santay; Panorama Real; Panorama Club; Nueva Panorama; y La Martina, con origen o destino en la Estación 5. La disponibilidad efectiva de cada sector debe verificarse antes de confirmar; su inclusión en esta relación no significa que todos operen simultáneamente.
              </p>
              <p>
                La recogida y el descenso se realizan en las garitas o puntos de encuentro autorizados que consten en la reserva. Un punto diferente requiere aceptación expresa de GEMI. El usuario debe facilitar una ubicación precisa y encontrarse en un lugar accesible y seguro; la localización enviada no sustituye la confirmación del punto acordado.
              </p>
              <p>
                La ida y el retorno son servicios independientes, con su propia reserva, horario, código y pago. Reservar la ida no asegura automáticamente un cupo de regreso.
              </p>
            </div>
          </section>

          {/* 6 */}
          <section id="seccion-6" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">6.</span> Horarios y solicitud del servicio
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                Los recorridos se programan en franjas de treinta minutos dentro del horario de operación comunicado para el servicio y compatible con la estación. GEMI informará las franjas disponibles para cada fecha. La hora de recogida de cada pasajero puede variar según la secuencia del recorrido y será indicada expresamente en su confirmación.
              </p>
              <p>
                Las reservas anticipadas deben solicitarse al menos sesenta minutos antes del inicio del recorrido. Para los primeros horarios se recomienda reservar la noche anterior. Las solicitudes con menor anticipación o inmediatas se atenderán únicamente si existen unidad, cupos y tiempo suficientes; la solicitud no asegura disponibilidad.
              </p>
              <p>
                El usuario indicará fecha, sentido del viaje, origen, destino, horario y número de personas, además de equipaje voluminoso o asistencia necesaria. Dentro del horario de operación de la central comunicado para las reservas, GEMI dará una primera respuesta en un máximo de cinco minutos desde la recepción de la solicitud y comunicará la confirmación o el rechazo en un máximo de diez minutos desde esa recepción. Si faltan datos indispensables, informará dentro de ese plazo que no puede confirmar e indicará qué información necesita. La falta de respuesta no equivale a confirmación.
              </p>
            </div>
          </section>

          {/* 7 */}
          <section id="seccion-7" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">7.</span> Confirmación y asignación de la unidad
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                Una reserva queda confirmada cuando GEMI valida disponibilidad, recorrido, horario, cupos, unidad y medio de pago, y comunica expresamente ese estado. Cuando el método elegido sea transferencia, también debe verificarse el pago requerido. Una cotización, una solicitud recibida, una agenda preliminar o un pago pendiente de identificar no constituyen por sí solos una reserva confirmada.
              </p>
              <p>
                Para las reglas de cancelación, el servicio de cada pasajero se considera iniciado cuando ha abordado y comienza su traslado. El desplazamiento de la unidad para recogerlo, o el inicio del viaje de otros pasajeros, no equivale por sí solo al inicio de su propio servicio.
              </p>
              <p>
                La confirmación incluirá código, fecha, hora de recogida, punto de encuentro, destino, cupos, precio por persona y total, método y estado de pago, hora exacta de vencimiento del plazo de cancelación gratuita y la consecuencia aplicable después según el medio de pago. Indicará también el inicio del recorrido cuando difiera de la hora de recogida.
              </p>
              <p>
                Los datos del conductor y la placa se comunicarán al menos treinta minutos antes del inicio del recorrido. En servicios inmediatos, se comunicarán al confirmar y siempre antes del embarque. Un reemplazo se notificará oportunamente, conservando las condiciones aceptadas salvo nueva aceptación del usuario.
              </p>
              <p>
                Antes de subir, el pasajero comprobará la placa y la identidad comunicadas y validará su código. Si detecta una diferencia, debe contactar a GEMI; abstenerse de abordar por una discrepancia de identificación no genera penalidad mientras se verifica y resuelve.
              </p>
            </div>
          </section>

          {/* 8 */}
          <section id="seccion-8" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">8.</span> Modalidad compartida y organización del recorrido
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                El usuario acepta compartir el vehículo con otros pasajeros que tengan recorridos compatibles y efectuar las recogidas y descensos necesarios. GEMI organizará una secuencia razonable y segura, sin exceder cuatro pasajeros ni la capacidad legal de la unidad. Cada persona ocupa un cupo; no pueden añadirse acompañantes sin confirmar capacidad y tarifa.
              </p>
              <p>
                La modalidad compartida no garantiza exclusividad del vehículo, elección de conductor o asiento, ni un trayecto sin otras recogidas. Los cambios de ruta por tránsito, seguridad o cierres deben ser razonables y no autorizan cobros adicionales por sí mismos. No se permiten desvíos o paradas para asuntos personales del conductor.
              </p>
              <p>
                Una modificación de destino o una parada adicional solicitada por el usuario requiere coordinación previa. Solo se aceptará cuando sea compatible con la seguridad y los compromisos con los demás pasajeros, informando y acordando previamente cualquier variación de precio.
              </p>
            </div>
          </section>

          {/* 9 */}
          <section id="seccion-9" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">9.</span> Tarifas y falta de pasajeros suficientes
            </h2>
            <div className="space-y-4 leading-relaxed text-sm sm:text-base">
              <p>
                El siguiente tarifario corresponde a los recorridos habilitados, sujeto a las autorizaciones aplicables. Todos los valores están expresados en dólares de los Estados Unidos de América y corresponden a un solo sentido. El precio aplicable se informará y aceptará antes de confirmar cada reserva.
              </p>

              {/* Tabla 1 */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm my-6">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th scope="col" className="py-3.5 px-4 sm:px-6 font-heading font-bold text-xs uppercase tracking-wider">
                        Pasajeros en el vehículo
                      </th>
                      <th scope="col" className="py-3.5 px-4 sm:px-6 font-heading font-bold text-xs uppercase tracking-wider">
                        Modalidad
                      </th>
                      <th scope="col" className="py-3.5 px-4 sm:px-6 font-heading font-bold text-xs uppercase tracking-wider text-right">
                        Valor por pasajero
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-body">
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-medium text-slate-900">4</td>
                      <td className="py-3 px-4 sm:px-6 text-slate-700">Compartida</td>
                      <td className="py-3 px-4 sm:px-6 font-mono font-bold text-navy text-right">USD 1,50</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/40">
                      <td className="py-3 px-4 sm:px-6 font-medium text-slate-900">3</td>
                      <td className="py-3 px-4 sm:px-6 text-slate-700">Compartida</td>
                      <td className="py-3 px-4 sm:px-6 font-mono font-bold text-navy text-right">USD 2,00</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-medium text-slate-900">2</td>
                      <td className="py-3 px-4 sm:px-6 text-slate-700">Compartida</td>
                      <td className="py-3 px-4 sm:px-6 font-mono font-bold text-navy text-right">USD 3,00</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/40">
                      <td className="py-3 px-4 sm:px-6 font-medium text-slate-900">1</td>
                      <td className="py-3 px-4 sm:px-6 text-slate-700 font-medium text-amber-700">Individual</td>
                      <td className="py-3 px-4 sm:px-6 font-mono font-bold text-navy text-right">USD 5,50</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                La tarifa no incluye el pasaje de Aerovía. Antes de contratar se informará el precio total, incluidos los conceptos que corresponda cobrar. El conductor no podrá exigir propinas, recargos por tráfico ni valores diferentes a los aceptados.
              </p>
              <p>
                Si no se reúnen cuatro pasajeros, GEMI podrá ofrecer la tarifa correspondiente a tres, dos o una persona, otro horario disponible o cancelación sin penalidad. Cuando la insuficiencia se conozca después de confirmar, GEMI la comunicará a más tardar quince minutos antes del inicio del recorrido, salvo un hecho sobrevenido que se avisará inmediatamente.
              </p>
              <p>
                Un aumento exige aceptación expresa y registrable antes del cobro y del inicio del viaje. El silencio no autoriza el aumento. Si el usuario no lo acepta o no responde dentro del plazo informado, GEMI deberá mantener la tarifa confirmada o cancelar sin penalidad y devolver lo pagado; no podrá registrar una inasistencia por ese motivo.
              </p>
              <p>
                La ausencia de otro pasajero no autoriza a incrementar unilateralmente la tarifa de quienes se presentan. Los cambios del tarifario se comunicarán antes de futuras contrataciones y requerirán las autorizaciones correspondientes. Se mantendrá el precio de las reservas ya confirmadas.
              </p>
            </div>
          </section>

          {/* 10 */}
          <section id="seccion-10" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">10.</span> Pago y comprobantes
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                Se admiten transferencia bancaria a cuentas oficiales comunicadas por GEMI y efectivo cuando esté habilitado y aceptado en la reserva. Los datos del titular y de la cuenta se enviarán por el canal oficial. El pasajero no debe transferir a cuentas personales propuestas por el conductor ni realizar pagos fuera del mecanismo confirmado.
              </p>
              <p>
                Para reservas anticipadas pagadas por transferencia, el usuario deberá realizarla y enviar el comprobante al menos treinta minutos antes del inicio del recorrido, indicando el código o los datos de su solicitud. En solicitudes inmediatas, GEMI comunicará un plazo específico anterior al embarque. El envío de una captura no acredita por sí solo el ingreso de fondos.
              </p>
              <p>
                Mientras no se valide el pago requerido, la solicitud aparecerá pendiente. Si vence el plazo informado, GEMI podrá liberar el cupo y lo comunicará; no aplicará un cargo por cancelar una reserva que nunca quedó confirmada. Si luego ingresa un pago, deberá identificarlo y acordar una nueva reserva o devolverlo, sin apropiarse del importe.
              </p>
              <p>
                En efectivo, se pagará al conductor autorizado al abordar, conforme a la confirmación, y el ingreso se registrará. Elegir efectivo no significa que la reserva esté pagada: solo se marcará como tal cuando se reciba el importe. El usuario deberá disponer del valor confirmado; si necesita cambio de un billete de alta denominación, lo comunicará al reservar. No se exigirá un segundo pago de un viaje ya pagado. Las diferencias y posibles duplicidades se revisarán antes de solicitar una nueva transacción. Se entregará el comprobante correspondiente según la operación y la normativa tributaria.
              </p>
            </div>
          </section>

          {/* 11 */}
          <section id="seccion-11" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">11.</span> Cancelaciones y cambios solicitados por el usuario
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                El usuario puede cancelar gratuitamente durante los primeros quince minutos contados desde la comunicación de confirmación de su reserva, siempre que el viaje no haya comenzado. La confirmación mostrará la hora límite. Por ejemplo, una reserva confirmada a las 06:00 puede cancelarse sin cargo hasta las 06:15, inclusive, si aún no se ha iniciado.
              </p>
              <p>
                El cómputo se vincula a la confirmación expresa, tanto en efectivo como en transferencia; no comienza por recibir una cotización, enviar un comprobante, cargar saldo o elaborar una agenda. El plazo de quince minutos es una facilidad contractual y no limita otros derechos de devolución o terminación que resulten legalmente aplicables.
              </p>
              <p>
                La cancelación o el cambio debe solicitarse al WhatsApp oficial o al canal alternativo informado, indicando la reserva y los cupos afectados. GEMI registrará la hora de recepción; una demora de su personal en procesarla no convertirá una solicitud oportuna en tardía. Si falla el canal, se considerará la evidencia razonable del intento y la comunicación alternativa realizada.
              </p>
              <p>
                Vencidos los quince minutos, una cancelación injustificada de un cupo confirmado tendrá la consecuencia correspondiente al método de pago según la cláusula 13. Si fue prepagado, se aplicará una penalidad equivalente al 100 % del importe pagado por ese cupo. Si se había elegido efectivo y no se había pagado, se bloqueará esa opción para nuevas reservas, sin generar un cargo pendiente ni saldo de deuda. Un cambio de fecha, horario o recorrido que obligue a liberar el cupo original se tratará como cancelación de ese cupo y una nueva solicitud; las correcciones menores que no alteren la prestación no generan penalidad.
              </p>
              <p>
                La cancelación tardía se registra como tal aunque el usuario haya avisado que no viajará; no se registrará falsamente como inasistencia. Si la cancelación se recibe dentro del plazo gratuito y antes del inicio, el importe pagado quedará disponible para realizar otro viaje dentro de las cuarenta y ocho horas siguientes a la recepción de esa cancelación, conforme a la cláusula 14 y a la política de la cláusula 15. Tampoco se bloqueará el efectivo por una cancelación oportuna o comprendida en las excepciones de estas condiciones.
              </p>
              <p>
                El cambio solo queda realizado cuando GEMI lo confirma. Pedirlo no garantiza disponibilidad en otro horario. Si únicamente se cancela parte de una reserva, la consecuencia económica se limita a los cupos efectivamente cancelados; cualquier nueva tarifa de los pasajeros que continúen requiere su aceptación y se aplica la cláusula 9.
              </p>
              <p>
                Si, después de iniciar su traslado, el pasajero pide terminarlo anticipadamente por decisión propia y sin incumplimiento del prestador, se mantiene la tarifa confirmada, sin añadir un cargo de cancelación por ese mismo viaje. Si la terminación responde a un defecto del servicio, una emergencia u otra causa protegida, se aplicará la solución o devolución que corresponda y no esta regla de cobro íntegro.
              </p>
            </div>
          </section>

          {/* 12 */}
          <section id="seccion-12" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">12.</span> Puntualidad e inasistencia
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                El pasajero deberá estar presente y listo para abordar en el punto y a la hora confirmados, con sus acompañantes y equipaje preparados. Debe revisar las comunicaciones del viaje y avisar oportunamente cualquier impedimento. La tolerancia no modifica la hora de recogida ni autoriza a exigir que los demás pasajeros esperen. La espera máxima es de cinco minutos desde que la unidad llega al punto correcto y se notifica al pasajero. Si llega antes, el cómputo empieza a la hora acordada; si llega después, empieza con la llegada y notificación efectivas.
              </p>
              <p>
                Antes de registrar una inasistencia, el conductor informará a la central, que verificará lugar, horario, aviso y cumplimiento de la espera e intentará contactar al usuario. Cumplidas estas condiciones sin que el pasajero se presente, la unidad podrá continuar para no perjudicar a los demás viajeros. No estará obligada a regresar ni a interrumpir las recogidas ya comprometidas. Un traslado posterior requerirá nueva disponibilidad y confirmación.
              </p>
              <p>
                La inasistencia injustificada, verificada después de la espera de cinco minutos, tendrá las consecuencias de la cláusula 13: pérdida del prepago del cupo afectado o, si se había elegido efectivo, bloqueo de esa opción para nuevas reservas sin generar deuda. No se acumulan penalidades por cancelación e inasistencia de un mismo cupo.
              </p>
              <p>
                No se registra inasistencia por un error de GEMI o del conductor, llegada a un punto distinto, salida anticipada, falta de notificación o negativa justificada a abordar una unidad que no corresponde o presenta un riesgo verificable. La negativa a aceptar un aumento de tarifa tampoco es inasistencia.
              </p>
            </div>
          </section>

          {/* 13 */}
          <section id="seccion-13" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">13.</span> Penalidad sobre el prepago y bloqueo del efectivo
            </h2>
            <div className="space-y-4 leading-relaxed text-sm sm:text-base">
              <p>
                En una reserva prepagada, la cancelación tardía o inasistencia injustificada imputable al usuario genera una penalidad del 100 % del importe pagado por el cupo afectado. Ese importe se retiene automáticamente y deja de estar disponible para otro viaje o como saldo a favor. La consecuencia deberá haberse informado y aceptado antes de confirmar la reserva y queda sujeta a las excepciones, revisión y derechos legales previstos en estas condiciones.
              </p>
              <p>
                En una reserva confirmada con pago en efectivo aún no realizado, una cancelación tardía o inasistencia injustificada imputable al usuario bloqueará automáticamente esa opción para nuevas reservas. No se genera saldo de deuda, no se cobra posteriormente el viaje cancelado y no se añaden recargos por ese incumplimiento. Los siguientes viajes deberán prepagarse por transferencia a una cuenta oficial, con verificación del ingreso de fondos. El bloqueo se aplicará al usuario responsable identificado, sin extenderlo automáticamente a acompañantes que no hayan causado el incumplimiento.
              </p>
              <p>
                GEMI comunicará el motivo del bloqueo, la reserva afectada y la forma de solicitar revisión. La restricción se mantendrá hasta que el departamento encargado evalúe el caso y comunique expresamente la rehabilitación del efectivo; realizar un viaje prepagado no lo restablece automáticamente. El usuario podrá solicitar revisión humana por error, causa justificada o cambio de circunstancias. La decisión deberá ser motivada y proporcional. Si el bloqueo fue incorrecto, se retirará y se corregirán sus efectos. No se alterarán retroactivamente los medios de pago de reservas ya confirmadas.
              </p>
              <p>
                No se aplicarán la penalidad ni el bloqueo del efectivo cuando la cancelación o inasistencia derive de una falla atribuible a la prestación, un cambio relevante no aceptado, ausencia de cupos suficientes, una emergencia comprobable, fuerza mayor, cierre que impida el servicio u otro supuesto de devolución obligatoria. Tampoco por cancelar dentro del plazo gratuito y antes del inicio. La comprobación será razonable y limitada a lo necesario; no se exigirán requisitos imposibles para atender una emergencia.
              </p>
              <p>
                GEMI conservará el registro de confirmación, la aceptación de las condiciones, el medio de pago, la hora de cancelación o los datos de la inasistencia y la consecuencia aplicada. El usuario podrá controvertir un error o una aplicación improcedente. La revisión corregirá las penalidades o restricciones que no correspondan conforme a los hechos o a la ley.
              </p>
              <p>
                La retención se limita al prepago del cupo afectado: no alcanza a pagos de otros viajes, a toda una programación semanal ni a saldos ajenos a esa reserva. No se generará una deuda adicional ni se cobrará dos veces por el mismo incumplimiento. La retención del prepago y el bloqueo por haber elegido efectivo son las consecuencias de sus respectivos supuestos; no se acumularán por el solo hecho de una misma cancelación. Un bloqueo previo seguirá sujeto a revisión. No se condicionará una devolución indiscutida al retiro de un reclamo.
              </p>

              {/* Tabla 2 */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm my-6">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th scope="col" className="py-3.5 px-4 sm:px-6 font-heading font-bold text-xs uppercase tracking-wider w-1/4">
                        Situación
                      </th>
                      <th scope="col" className="py-3.5 px-4 sm:px-6 font-heading font-bold text-xs uppercase tracking-wider w-5/12">
                        Consecuencia económica
                      </th>
                      <th scope="col" className="py-3.5 px-4 sm:px-6 font-heading font-bold text-xs uppercase tracking-wider w-1/3">
                        Medida operativa
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-body">
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-navy align-top">
                        Cancelación dentro de los 15 minutos y antes de iniciar
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-700 align-top">
                        Sin penalidad. Prepago disponible para viajar dentro de 48 horas, con las excepciones de las cláusulas 14 y 15
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600 align-top">
                        Liberación del cupo sin bloqueo del efectivo
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/40">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-rose-900 align-top">
                        Cancelación tardía o inasistencia injustificada con prepago
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-700 align-top">
                        Retención del 100 % del prepago del cupo afectado; no queda crédito ni deuda adicional
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600 align-top">
                        Registro y notificación; posibilidad de revisión
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-amber-900 align-top">
                        Cancelación tardía o inasistencia injustificada con efectivo pendiente
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-700 align-top">
                        No genera cobro pendiente ni saldo de deuda
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600 align-top">
                        Bloqueo del efectivo hasta evaluación; nuevos viajes prepagados por transferencia
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/40">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-emerald-900 align-top">
                        Cancelación por GEMI o cambio relevante no aceptado
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-700 align-top">
                        Sin penalidad y devolución del servicio no prestado
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600 align-top">
                        Sin bloqueo; reprogramación solo si el usuario la elige
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 14 */}
          <section id="seccion-14" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">14.</span> Reservas recurrentes y saldos a favor
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                Pueden solicitarse varios trayectos o una programación semanal. Cada viaje tendrá identificación, precio, horario y estado propios. La agenda preliminar y una transferencia global no confirman por sí solas todos los servicios ni inician un plazo único de cancelación para toda la semana. GEMI identificará expresamente qué trayectos confirma y el vencimiento de la cancelación gratuita de cada uno.
              </p>
              <p>
                Un incumplimiento en un trayecto no permite retener automáticamente el pago de toda la semana ni cancelar los restantes sin comunicar y justificar la medida. Si una restricción impide prestar reservas futuras ya pagadas, se devolverá el importe de los servicios no prestados, salvo una penalidad individualizada legalmente procedente sobre un cupo distinto que sí incurra en el supuesto de la cláusula 13.
              </p>
              <p>
                Cuando el usuario cancele dentro de los primeros quince minutos desde la confirmación y antes de iniciar su traslado, el importe pagado se registrará íntegramente como saldo para otro viaje. Estará disponible durante cuarenta y ocho horas consecutivas, contadas desde la fecha y hora en que GEMI reciba la cancelación oportuna. GEMI comunicará el importe y la fecha y hora exactas de vencimiento. Son horas corridas, incluidos fines de semana y feriados; el horario de soporte y reclamos no modifica por sí solo ese cómputo.
              </p>
              <p>
                El nuevo viaje deberá solicitarse, confirmarse e iniciarse dentro de esas cuarenta y ocho horas; no bastará reservar dentro del plazo un traslado para una fecha posterior. Se mantendrán los requisitos de anticipación y disponibilidad. El saldo se aplicará al precio confirmado: cualquier diferencia a pagar se informará antes de contratar y un remanente conservará el vencimiento original. Una nueva cancelación no reinicia el plazo; si es tardía o existe inasistencia injustificada, se aplica la cláusula 13 al importe asignado a esa reserva.
              </p>
              <p>
                Si el usuario no utiliza el saldo dentro del plazo por una causa atribuible a él, este vencerá y dejará de estar disponible para futuras reservas, sin reembolso comercial ni generación de deuda. El vencimiento no se aplicará cuando GEMI impida su uso, no pueda ofrecer un viaje dentro del plazo pese a una solicitud oportuna, o incurra en una demora que afecte un viaje confirmado para ese período. En tales casos se coordinará una ampliación o reprogramación aceptada por el usuario, sin afectar las devoluciones que correspondan. Las emergencias justificadas y demás excepciones de la cláusula 13 se revisarán antes de aplicar una pérdida del saldo.
              </p>
              <p>
                GEMI mantendrá un detalle consultable de los saldos, abonos, aplicaciones, vencimientos y correcciones, aunque se gestionen mediante la central y no mediante una billetera digital. El plazo de cuarenta y ocho horas se aplica al saldo generado por una cancelación oportuna; no acorta reservas futuras ya confirmadas ni afecta pagos de otros viajes. No se impondrá un crédito en sustitución de una devolución legalmente obligatoria ni se extinguirán derechos irrenunciables por el vencimiento de ese plazo.
              </p>
            </div>
          </section>

          {/* 15 */}
          <section id="seccion-15" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">15.</span> Política de no reembolso y corrección de cobros
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                La política comercial de GEMI no contempla reembolsos de dinero por cancelaciones voluntarias del pasajero. Si cancela oportunamente, podrá utilizar el importe para otro viaje dentro de las cuarenta y ocho horas establecidas en la cláusula 14. Si cancela tardíamente o incurre en inasistencia injustificada, se aplicará la cláusula 13. Esta política está subordinada a los derechos de devolución que sean legalmente exigibles; la aceptación de estos términos no constituye una renuncia a ellos.
              </p>
              <p>
                La regla anterior no autoriza a retener cobros duplicados o excesivos, penalidades incorrectas ni pagos por servicios que GEMI cancele o no pueda prestar sin una alternativa aceptada por el usuario. En esos casos, y en los demás supuestos de devolución previstos en estas condiciones o exigidos por la ley, se restituirá el importe que corresponda. El usuario podrá aceptar una reprogramación o crédito, pero no estará obligado a hacerlo en sustitución de una devolución que proceda.
              </p>
              <p>
                GEMI revisará los errores de cobro y las devoluciones que correspondan sin dilaciones indebidas y dentro de los plazos legales aplicables. Si falta información indispensable, la solicitará oportunamente. Comunicará su decisión, el importe, el medio y el plazo de ejecución, y entregará el comprobante de la devolución efectuada. El vencimiento del saldo de reprogramación no impedirá reclamar un cobro indebido ni ejercer un derecho legal de devolución.
              </p>
              <p>
                Se utilizará preferentemente el mismo medio de pago o una cuenta verificada del pagador. La devolución a un tercero requiere autorización verificable del titular del derecho. Cualquier dificultad bancaria se comunicará con una alternativa, sin dar por cumplida la devolución por el solo hecho de emitir una orden fallida.
              </p>
            </div>
          </section>

          {/* 16 */}
          <section id="seccion-16" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">16.</span> Obligaciones durante el viaje
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                El usuario deberá respetar al conductor, a los demás pasajeros y al personal de la estación; utilizar el cinturón y los sistemas de seguridad; cuidar el vehículo y las instalaciones; mantener sus objetos bajo control; y cumplir instrucciones razonables de seguridad y embarque.
              </p>
              <p>
                Se prohíben la violencia, las amenazas, el acoso, la discriminación, fumar o vapear, el consumo de alcohol o sustancias prohibidas durante el viaje, las actividades ilícitas y las conductas que distraigan o impidan conducir con seguridad. Tampoco podrá exigirse exceso de velocidad, sobrecupo, paradas peligrosas ni incumplimiento de controles de acceso.
              </p>
              <p>
                No se rechazará o sancionará a una persona por una característica protegida, una discapacidad o por formular una queja de buena fe. Si una conducta concreta genera un riesgo, podrá interrumpirse el servicio únicamente en condiciones seguras, con aviso a GEMI y asistencia de autoridades cuando corresponda. No se abandonará a una persona vulnerable en una situación de peligro.
              </p>
            </div>
          </section>

          {/* 17 */}
          <section id="seccion-17" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">17.</span> Equipaje y asistencia para abordar
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                El equipaje debe poder transportarse sin bloquear salidas, cinturones ni visibilidad, sin exceder la capacidad y sin ocupar cupos no reservados. Se informará previamente sobre objetos voluminosos, ayudas de movilidad y animales para coordinar una unidad adecuada. Los objetos peligrosos o de transporte prohibido no serán admitidos.
              </p>
              <p>
                GEMI verificará la posibilidad de atender necesidades de asistencia y comunicará las condiciones antes de confirmar. No asegurará equipamiento especializado que no esté disponible. El transporte de animales de asistencia se atenderá conforme a la normativa aplicable; para otros animales se comunicarán las condiciones de seguridad e higiene antes de aceptar la reserva. No habrá recargos sorpresivos al abordar.
              </p>
            </div>
          </section>

          {/* 18 */}
          <section id="seccion-18" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">18.</span> Acceso a la estación y daños
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                Los pasajeros deben utilizar los puntos habilitados, respetar la señalización y seguir las instrucciones legítimas del personal de la Estación 5. No podrán ingresar a áreas restringidas, obstaculizar operaciones ni dañar instalaciones. GEMI comunicará restricciones o cambios de acceso que afecten al viaje.
              </p>
              <p>
                Quien cause daños por una conducta que le sea jurídicamente atribuible deberá responder por su reparación conforme a la ley. Esto comprende, cuando corresponda, daños al vehículo, a bienes de terceros o a instalaciones de la estación. El desgaste normal y los daños preexistentes no se cargarán al usuario.
              </p>
              <p>
                Todo reclamo de reparación o limpieza extraordinaria deberá identificar el hecho, su relación con la conducta y el costo razonable, con evidencia y oportunidad de respuesta. No se cobrarán multas arbitrarias, sumas duplicadas ni importes ya cubiertos por otro responsable o un seguro. Un reporte de daños no autoriza por sí solo a descontar cualquier saldo o a debitar una cuenta; el cobro se realizará por acuerdo o mediante los mecanismos legales correspondientes.
              </p>
            </div>
          </section>

          {/* 19 */}
          <section id="seccion-19" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">19.</span> Amonestaciones y restricciones del servicio
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                GEMI comunicará al usuario el incumplimiento identificado y las indicaciones necesarias para corregirlo. Las cancelaciones tardías e inasistencias tendrán exclusivamente las consecuencias específicas de las cláusulas 11 a 13, sin suspensiones de nuevas reservas por acumulación de estos eventos ni multas adicionales.
              </p>
              <p>
                El bloqueo del efectivo previsto en la cláusula 13 se aplica desde el primer incumplimiento injustificado de una reserva confirmada con ese método pendiente de pago. No impide reservar nuevos viajes prepagados por transferencia. Se prohíbe suplantar a terceros o crear registros engañosos para eludir restricciones válidas.
              </p>
              <p>
                Ante violencia, acoso, amenazas, fraude, suplantación o un riesgo grave, GEMI podrá adoptar una restricción preventiva para proteger a las personas y revisar los hechos. Deberá comunicar su motivo, permitir al usuario presentar su versión y resolver sin dilaciones indebidas. Cualquier medida posterior deberá fundarse en hechos acreditados, precisar su alcance y duración y ser proporcional a la conducta y al riesgo; no se aplicará por la mera acumulación de cancelaciones.
              </p>
              <p>
                La comunicación identificará la conducta, la regla, las reservas afectadas y la forma de solicitar revisión. El usuario podrá presentar su versión y evidencias. No se impondrán multas adicionales por la restricción. Se mantendrá acceso al canal de reclamos y a las devoluciones que correspondan, y se dejará sin efecto una medida errónea.
              </p>
            </div>
          </section>

          {/* 20 */}
          <section id="seccion-20" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">20.</span> Retrasos y continuidad del servicio
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                GEMI avisará cuando prevea una demora superior a cinco minutos, explicando la situación y la nueva estimación. Ante avería, ausencia de conductor o imposibilidad de la unidad, gestionará un reemplazo habilitado sin cobro adicional por la sustitución. La demora no autoriza al conductor a omitir la espera debida al pasajero.
              </p>
              <p>
                Si no puede cumplirse lo confirmado y no existe una alternativa razonable aceptada por el usuario, este podrá cancelar sin cargo y obtener la devolución del servicio no prestado. Si el viaje se interrumpe en curso, GEMI coordinará una solución segura y liquidará el importe según la prestación efectivamente aprovechable y los derechos legales aplicables; no presumirá que cualquier desplazamiento equivale a cumplir el viaje completo.
              </p>
              <p>
                Las estimaciones de llegada dependen de las condiciones del recorrido. El usuario debe considerar un margen para conexiones o compromisos posteriores, sin que esta recomendación elimine responsabilidades por una prestación defectuosa.
              </p>
            </div>
          </section>

          {/* 21 */}
          <section id="seccion-21" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">21.</span> Emergencias y hechos externos
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                Ante un accidente, emergencia médica o amenaza inmediata, se priorizará la seguridad y se solicitará asistencia al ECU 911 cuando corresponda. El canal de GEMI sirve para coordinar la incidencia y no sustituye a los servicios públicos de emergencia. El conductor y GEMI colaborarán en la atención, preservarán los registros y gestionarán la continuidad segura que resulte posible.
              </p>
              <p>
                Ante robo, amenaza o violencia se priorizará la integridad de las personas y se evitará la confrontación. El conductor interrumpirá el recorrido en condiciones seguras cuando corresponda y solicitará apoyo de las autoridades. GEMI registrará el incidente, conservará la información disponible y colaborará con las actuaciones legalmente procedentes; no garantizará por ese solo hecho la recuperación de bienes.
              </p>
              <p>
                Los cierres, órdenes de autoridad o hechos inevitables se evaluarán según su incidencia real. Una falla técnica, mantenimiento o alta demanda no se califican automáticamente como fuerza mayor. GEMI informará las afectaciones, adoptará medidas razonables para reducirlas y devolverá los importes de servicios no prestados cuando corresponda.
              </p>
              <p>
                Si la estación cierra antes de iniciar, se ofrecerá reprogramación o devolución. Si el viaje está en curso, se acordará una solución segura sin modificar unilateralmente el destino ni prometer un ingreso no autorizado.
              </p>
            </div>
          </section>

          {/* 22 */}
          <section id="seccion-22" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">22.</span> Pertenencias personales robos y objetos olvidados
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                El pasajero es responsable de vigilar sus pertenencias durante el viaje, mantener bajo su control dinero, documentos, teléfonos y otros objetos de valor, y revisar el asiento, el piso y el espacio de equipaje antes de descender. El servicio contratado es de traslado de personas y no incluye una guarda o custodia especial de valores.
              </p>
              <p>
                GEMI no asumirá el costo de pérdidas, extravíos, hurtos o robos que se deban exclusivamente al descuido del usuario o a hechos de terceros por los que no exista responsabilidad legalmente atribuible a GEMI o a los participantes en la prestación. Esta regla no excluye responsabilidad por negligencia, apropiación, participación en el hecho, incumplimiento de obligaciones de seguridad o falta de cuidado de bienes recibidos o encontrados. La responsabilidad se determinará según los hechos y la ley, sin presumir que todo robo o pérdida libera a los prestadores.
              </p>
              <p>
                El usuario reportará la pérdida por el canal oficial tan pronto la advierta, indicando los datos disponibles del viaje, fecha, descripción y lugar probable. No necesitará presentar previamente una denuncia para que GEMI reciba el reporte. Cuando pueda existir un delito, podrá acudir a las autoridades y GEMI colaborará conforme a la ley. La información de otros pasajeros o conductores no se entregará indiscriminadamente.
              </p>
              <p>
                GEMI contactará al conductor para verificar si el objeto reportado fue localizado. El conductor deberá informar inmediatamente cualquier hallazgo, aunque el propietario aún no lo haya reclamado, y no podrá apropiarse, ocultar, utilizar ni disponer del bien. Los objetos encontrados se registrarán y conservarán con cuidado hasta coordinar su retiro por la persona que acredite ser su propietaria o por alguien autorizado por ella. GEMI verificará razonablemente la identidad y las características del objeto y dejará constancia de su recepción y devolución.
              </p>
              <p>
                GEMI no garantiza localizar o recuperar un objeto que no haya sido encontrado ni recibido en custodia. Una vez localizado y recibido, deberá cuidarlo mientras se coordina su retiro. Los detalles del retiro se comunicarán de manera individual por los canales oficiales. No se exigirá una recompensa ni un pago no convenido como condición para devolver un objeto encontrado.
              </p>
            </div>
          </section>

          {/* 23 */}
          <section id="seccion-23" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">23.</span> Responsabilidad y servicios fuera de los canales oficiales
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                La responsabilidad de GEMI, del conductor y de otros participantes se determinará por su intervención y por las normas aplicables. Ninguna cláusula elimina responsabilidades legalmente exigibles por accidentes, lesiones, actos propios, prestación defectuosa o participación en un daño, ni limita anticipadamente una indemnización al precio del viaje.
              </p>
              <p>
                Los acuerdos particulares celebrados con un conductor fuera de la reserva y de los canales oficiales no forman parte, por ese solo hecho, del servicio coordinado por GEMI. Esta delimitación no excluye la responsabilidad que pudiera existir por intervención, autorización o actuación atribuible a GEMI. El usuario debe reportar ofertas de cobro o servicios que aparenten ser oficiales sin serlo.
              </p>
              <p>
                Los conflictos entre pasajeros se atenderán según las conductas y responsabilidades de cada persona. GEMI y el conductor deberán actuar dentro de sus obligaciones de seguridad y atención; no se establece una exclusión general por tratarse de hechos de terceros.
              </p>
            </div>
          </section>

          {/* 24 */}
          <section id="seccion-24" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">24.</span> Reclamos y revisión de decisiones
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                Los reclamos se presentarán mediante el número oficial del servicio o a <a href="mailto:soporte@compiecu.com" className="text-navy font-semibold underline hover:text-accent-dark">soporte@compiecu.com</a>, indicando los datos disponibles del viaje y el motivo. El horario de atención al cliente para soporte y reclamos es de lunes a viernes laborables, de 09:00 a 17:00, hora del Ecuador continental, excluidos los feriados aplicables. La falta del código no impedirá recibir un reclamo que pueda identificarse por otros medios. GEMI confirmará su recepción, conservará un registro y comunicará una respuesta motivada sin dilaciones indebidas, dentro de los plazos legales aplicables. Para determinar si una cancelación fue oportuna y calcular las cuarenta y ocho horas de su saldo, se atenderá a la hora de recepción del mensaje, aunque se revise después. Este horario corresponde a soporte y reclamos; los horarios de los recorridos y de la central de reservas se informarán por separado.
              </p>
              <p>
                El usuario podrá solicitar revisión de penalidades, inasistencias, bloqueo del efectivo, restricciones o devoluciones y aportar pruebas. No será obligatorio aceptar la versión del conductor ni renunciar a otros derechos para obtener respuesta. La gestión interna no limita acudir a autoridades administrativas o judiciales ni modifica los plazos legales para hacerlo.
              </p>
            </div>
          </section>

          {/* 25 */}
          <section id="seccion-25" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">25.</span> Uso de los canales digitales
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                El usuario utilizará los canales de forma lícita, sin alterar sistemas, interferir con otras reservas, extraer información sin autorización, suplantar identidades ni difundir comprobantes falsos. Los contenidos, marcas y software pertenecen a sus titulares o se utilizan bajo autorización; su reproducción o explotación debe respetar los derechos correspondientes y los usos permitidos por la ley.
              </p>
              <p>
                GEMI podrá utilizar atención personal o automatizada según el canal habilitado. El usuario podrá solicitar revisión humana de errores y decisiones controvertidas, incluido el bloqueo del efectivo o una restricción, aportando su versión de los hechos. Las comunicaciones operativas y constancias se utilizarán para gestionar el servicio y atender controversias, conforme a la normativa y a la política de privacidad independiente; estos términos no sustituyen esa política ni una autorización específica que corresponda obtener.
              </p>
            </div>
          </section>

          {/* 26 */}
          <section id="seccion-26" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">26.</span> Versiones y condiciones aplicables
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                GEMI identificará la versión y fecha de los términos y comunicará los cambios relevantes antes de aplicarlos a nuevas contrataciones. Los cambios no alterarán retroactivamente el precio, los cargos o los derechos de reservas ya confirmadas. Cuando corresponda, se solicitará una nueva aceptación expresa.
              </p>
              <p>
                Las instrucciones inmediatas de seguridad podrán aplicarse ante un riesgo real, con información y soluciones para las reservas afectadas, sin convertirlas en nuevos cargos no aceptados. Las condiciones particulares comunicadas y aceptadas integran cada reserva; ningún documento interno podrá reducir derechos legales ni incorporar obligaciones ocultas.
              </p>
            </div>
          </section>

          {/* 27 */}
          <section id="seccion-27" className="scroll-mt-24">
            <h2 className="font-heading font-black text-lg sm:text-xl text-navy flex items-baseline gap-2 mb-4 pb-2 border-b border-slate-100">
              <span className="text-accent-dark font-black">27.</span> Legislación y solución de controversias
            </h2>
            <div className="space-y-3 leading-relaxed text-sm sm:text-base">
              <p>
                Se aplica la legislación de la República del Ecuador, incluidas las normas de defensa del consumidor, contratación electrónica, transporte y demás disposiciones pertinentes. Las controversias se conocerán por las autoridades competentes conforme a la ley, respetando los derechos del consumidor y las reglas de competencia que le correspondan.
              </p>
              <p>
                La mediación u otros mecanismos alternativos podrán utilizarse por acuerdo válido de las partes, sin imponerlos como requisito para reclamar. Si una disposición resulta inválida, las demás conservarán su aplicación en lo que sea jurídicamente posible, sin sustituirla por otra más perjudicial para el usuario.
              </p>
            </div>
          </section>

        </div>

        {/* Footer links */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
          <Link
            href="/"
            id="terms-back-home"
            className="inline-flex items-center gap-2 font-heading font-bold text-sm text-navy hover:text-accent-dark transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a la página principal
          </Link>
          <Link
            href="/politica-de-privacidad"
            id="terms-to-privacy"
            className="font-body text-sm text-slate-500 hover:text-navy transition-colors underline underline-offset-4"
          >
            Consultar Política de Privacidad →
          </Link>
        </div>
      </div>
    </main>
  );
}
