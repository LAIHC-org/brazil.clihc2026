<script>
import Tr from '@/i18n/translation'

export default {
	setup() {
		return { Tr }
	}
}
</script>

<template>
	<p>
		Bienvenidos a la XII Conferencia Latinoamericana de Interacción Humano-Computadora (CLIHC 2026). Nos complace darles la bienvenida a este destacado evento que reúne a comunidades de investigación en IHC de América Latina y de todo el mundo. Esta página "Primeros Pasos" está diseñada para proporcionar información esencial para su participación en la conferencia.
	</p>

	<ol class="list-group list-group-numbered mb-4">
		<li class="list-group-item d-flex justify-content-between align-items-start border-0">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#rates-and-registration' })" class="text-decoration-none" style="color: #0a58ca !important;">
						Inscripción y Pago
					</RouterLink>
				</div>
				Obtenga información sobre cómo inscribirse y pagar, asegurando su asistencia al CLIHC 2026, con instrucciones para pagos con o sin factura.
			</div>
		</li>
	</ol>

	<h2 id="rates-and-registration" class="mt-5 h3">Inscripción y Pago:</h2>
	<div>
		<p>Para asistir a la conferencia, el primer paso es el proceso de pago e inscripción. Recomendamos consultar la información relacionada a <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="text-decoration-none fw-bold" style="color: #0a58ca !important;">{{ $t("nav.rates_and_registration") }}</RouterLink>, donde encontrará detalles sobre las diferentes tarifas según las opciones de participación, así como información de inscripción para autores.</p>

		<h3 class="h4 mt-4">Instrucciones de Pago:</h3>

		<p>Los pagos para el Congreso CLIHC 2026 se manejarán de la siguiente manera:</p>

		<ul class="list-group list-group-flush mb-4">
			<li class="list-group-item bg-transparent"><strong>Pago sin factura:</strong> Debe proporcionar el formulario de referencia y el comprobante de pago.</li>
			<li class="list-group-item bg-transparent">
				<strong>Solicitud de factura:</strong> Los requisitos varían según el origen del pago:
				<ul class="mt-2">
					<li class="mb-2"><strong>Para pagos dentro de Brasil:</strong> Debe proporcionar el formulario de referencia, el comprobante de pago, el CPF o CNPJ (a nombre de la persona o institución a la que se emitirá la factura), especificar la justificación de uso y proporcionar el correo electrónico al cual se enviará la factura.</li>
					<li><strong>Para pagos desde el extranjero:</strong> Debe proporcionar el formulario de referencia, el comprobante de pago, la información institucional/personal necesaria para la factura (*invoice*) y el correo electrónico al cual desea que se envíe el documento. Se emitirá una factura y se adjuntará un comprobante.</li>
				</ul>
			</li>
		</ul>

		<div class="alert alert-warning rounded-3 border-0 mt-4">
			<i class="fa-solid fa-circle-exclamation me-2" aria-hidden="true"></i>
			Asegúrese de enviar toda la información necesaria para generar las facturas de manera oportuna. Además, <strong>tenga en cuenta que el pago de la inscripción a la conferencia es un requisito previo para inscribirse en tutoriales y talleres (si corresponde), y debe realizarse por separado.</strong>
		</div>
	</div>
</template>