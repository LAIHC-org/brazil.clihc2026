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
		Bem-vindo à XII Conferência Latino-Americana de Interação Humano-Computador (CLIHC 2026). Temos o prazer de recebê-lo neste evento excepcional que reúne comunidades de pesquisa em IHC da América Latina e de todo o mundo. Esta página "Primeiros Passos" foi projetada para fornecer informações essenciais para a sua participação na conferência.
	</p>

	<ol class="list-group list-group-numbered mb-4">
		<li class="list-group-item d-flex justify-content-between align-items-start border-0">
			<div class="ms-2 me-auto">
				<div class="fw-bold">
					<RouterLink :to="Tr.i18nRoute({ name: 'getting-started', hash: '#rates-and-registration' })" class="text-decoration-none" style="color: #0a58ca !important;">
						Inscrição e Pagamento
					</RouterLink>
				</div>
				Obtenha informações sobre como se inscrever e pagar, garantindo a sua presença no CLIHC 2026, com instruções para pagamentos com ou sem nota fiscal (fatura).
			</div>
		</li>
	</ol>

	<h2 id="rates-and-registration" class="mt-5 h3">Inscrição e Pagamento:</h2>
	<div>
		<p>Para participar da conferência, o primeiro passo é o processo de pagamento e inscrição. Recomendamos verificar as informações relacionadas a <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="text-decoration-none fw-bold" style="color: #0a58ca !important;">{{ $t("nav.rates_and_registration") }}</RouterLink>, onde você encontrará detalhes sobre diferentes tarifas com base nas opções de participação, bem como informações de inscrição para autores.</p>

		<h3 class="h4 mt-4">Instruções de Pagamento:</h3>

		<p>Os pagamentos para o Congresso CLIHC 2026 serão tratados da seguinte forma:</p>

		<ul class="list-group list-group-flush mb-4">
			<li class="list-group-item bg-transparent"><strong>Pagamento sem nota fiscal (fatura):</strong> Você deve fornecer o formulário de referência e o recibo de pagamento.</li>
			<li class="list-group-item bg-transparent">
				<strong>Solicitação de nota fiscal (fatura):</strong> Os requisitos variam dependendo da origem do pagamento:
				<ul class="mt-2">
					<li class="mb-2"><strong>Para pagamentos dentro do Brasil:</strong> Você deve fornecer o formulário de referência, o recibo de pagamento, o CPF ou CNPJ (em nome da pessoa ou instituição para quem a nota fiscal será emitida), especificar a justificativa do uso e fornecer o endereço de e-mail para o qual a nota fiscal será enviada.</li>
					<li><strong>Para pagamentos do exterior:</strong> Você precisa fornecer o formulário de referência, o recibo de pagamento, as informações institucionais/pessoais necessárias para a *invoice* (fatura) e o endereço de e-mail para o qual deseja que o documento seja enviado. Uma fatura será emitida e um recibo será anexado.</li>
				</ul>
			</li>
		</ul>

		<div class="alert alert-warning rounded-3 border-0 mt-4">
			<i class="fa-solid fa-circle-exclamation me-2" aria-hidden="true"></i>
			Certifique-se de enviar todas as informações necessárias para gerar as faturas de forma oportuna. Além disso, <strong>observe que o pagamento da inscrição na conferência é um pré-requisito para se inscrever em tutoriais e oficinas (caso aplicável), e deve ser feito separadamente.</strong>
		</div>
	</div>
</template>