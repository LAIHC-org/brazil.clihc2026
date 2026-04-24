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
		Welcome to the XII Latin American Conference on Human-Computer Interaction (CLIHC 2026). We are pleased to welcome you to this outstanding event that brings together research communities in HCI from Latin America and around the world. This "Getting Started" page is designed to provide essential information for your participation in the conference.
	</p>

	<ol class="list-group list-group-numbered mb-4">
		<li class="list-group-item d-flex justify-content-between align-items-start border-0">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#rates-and-registration' })" class="text-decoration-none" style="color: #0a58ca !important;">
						Registration and Payment
					</RouterLink>
				</div>
				Get information on how to register and pay, ensuring your attendance at CLIHC 2026, with instructions for payments with or without an invoice.
			</div>
		</li>
	</ol>

	<h2 id="rates-and-registration" class="mt-5 h3">Registration and Payment:</h2>
	<div>
		<p>To attend the conference, the first step is the payment and registration process. We recommend checking the information related to <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="text-decoration-none fw-bold" style="color: #0a58ca !important;">{{ $t("nav.rates_and_registration") }}</RouterLink>, where you will find details on different rates based on participation options, as well as author registration information.</p>

		<h3 class="h4 mt-4">Payment Instructions:</h3>

		<p>Payments for the CLIHC 2026 Congress will be handled as follows:</p>

		<ul class="list-group list-group-flush mb-4">
			<li class="list-group-item bg-transparent"><strong>Payment without an invoice:</strong> You must provide the referenced form and the payment receipt.</li>
			<li class="list-group-item bg-transparent">
				<strong>Invoice request:</strong> Requirements vary depending on the payment origin:
				<ul class="mt-2">
					<li class="mb-2"><strong>For payments within Brazil:</strong> You must provide the referenced form, the payment receipt, the CPF or CNPJ (in the name of the person or institution to whom the invoice will be issued), specify the use justification, and provide the email address to which the invoice will be sent.</li>
					<li><strong>For payments from abroad:</strong> You need to provide the referenced form, the payment receipt, the institutional/personal information necessary for the invoice, and the email address to which you want the document to be sent. An invoice will be issued, and a receipt will be attached.</li>
				</ul>
			</li>
		</ul>

		<div class="alert alert-warning rounded-3 border-0 mt-4">
			<i class="fa-solid fa-circle-exclamation me-2" aria-hidden="true"></i>
			Be sure to send all the necessary information to generate the invoices in a timely manner. Additionally, <strong>please note that payment for conference registration is a prerequisite for enrolling in tutorials and workshops (if applicable), and it must be done separately.</strong>
		</div>
	</div>
</template>