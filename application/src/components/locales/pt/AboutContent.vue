<script setup>
import Tr from '@/i18n/translation'
</script>

<template>
	<div class="row">
		<div class="col-12 text-center mb-5">
			<h2 class="mb-3">O que é o Evento Brasil da CLIHC 2026?</h2>
			<p class="lead text-dark opacity-8">
				Uma sede presencial oficial da XII Conferência Latino-Americana de Interação Humano-Computador
			</p>
		</div>
	</div>

	<div class="row g-4">
		<div class="col-md-4">
			<div class="card card-plain text-center h-100">
				<div class="card-body px-3">
					<h5 class="d-flex align-items-center justify-content-center mb-3">
						<span class="icon icon-shape icon-sm bg-gradient-primary rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
							<i class="fa-solid fa-globe"></i>
						</span>
						Formato Distribuído
					</h5>
					<p class="text-sm">
						A CLIHC 2026 acontece em formato distribuído, com duas sedes presenciais na América Latina, promovendo uma experiência integrada e plural.
					</p>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card card-plain text-center h-100">
				<div class="card-body px-3">
					<h5 class="d-flex align-items-center justify-content-center mb-3">
						<span class="icon icon-shape icon-sm bg-gradient-warning rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
							<i class="fa-solid fa-location-dot"></i>
						</span>
						Aracaju, Brasil
					</h5>
					<p class="text-sm">
						No Brasil, a conferência será realizada no Centro Universitário Maurício de Nassau de Aracaju, na Av. Augusto Franco, 2340 - Siqueira Campos, Aracaju - SE.
					</p>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card card-plain text-center h-100">
				<div class="card-body px-3">
					<h5 class="d-flex align-items-center justify-content-center mb-3">
						<span class="icon icon-shape icon-sm bg-gradient-success rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
							<i class="fa-solid fa-calendar-days"></i>
						</span>
						6 a 8 de Maio de 2026
					</h5>
					<p class="text-sm">
						Três dias de atividades acadêmicas, científicas e profissionais, com programação e organização local próprias, integradas ao conjunto da conferência.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="row mt-5">
		<div class="col-lg-10 mx-auto">
			<div class="card bg-gray-100 border-0">
				<div class="card-body p-4">
					<p class="mb-2">
						O Evento Brasil tem como objetivo promover o encontro da comunidade latino-americana de Interação Humano-Computador (IHC) por meio de atividades acadêmicas, científicas e profissionais. Esta sede conta com <strong>programação e organização local próprias</strong>, integradas academicamente ao conjunto da conferência.
					</p>
					<p class="mb-0">
						No modelo distribuído da CLIHC 2026, <strong>alguns processos acadêmicos e editoriais</strong> são coordenados de forma central, em articulação com as equipes locais, enquanto o Evento Brasil desenvolve sua <strong>agenda presencial</strong>, sessões e atividades específicas, organizadas por sua coordenação local.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="row mt-4 justify-content-center">
		<div class="col-auto">
			<RouterLink :to="Tr.i18nRoute({ name: 'registration' })"
				class="btn btn-lg bg-gradient-primary mb-0">
				Inscrições
			</RouterLink>
		</div>
	</div>
</template>
