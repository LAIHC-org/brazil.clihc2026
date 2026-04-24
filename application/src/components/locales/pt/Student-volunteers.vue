<script>
import OrganizerItem from "@/components/OrganizerItem.vue";

import Tr from "@/i18n/translation";

export default {
    components: {
        OrganizerItem,
    },
    setup() {
        return {
            Tr,
        };
    },
};
</script>

<template>
    <div class="alert alert-gradient d-flex align-items-center shadow-sm rounded-4 mb-4 p-4 border-0">
        <span class="me-3 flex-shrink-0">
            <i class="fa-solid fa-hand-holding-heart fa-2x text-white" aria-hidden="true"></i>
        </span>
        <div>
            <strong class="text-white fs-5">Inscrições abertas para Estudantes Voluntários!</strong>
            <br />
            <span class="text-white-50">
                Prazo final: <strong class="text-white">17 de abril de 2026</strong>
            </span>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h2 class="h5 d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-primary rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
                </span>
                Sobre o Programa
            </h2>
            <p>
                O programa de <strong>Estudantes Voluntários (EV)</strong> é uma oportunidade para estudantes
                de graduação e pós-graduação participarem ativamente da organização da
                <strong>CLIHC 2026</strong>, em Aracaju, Brasil. Os voluntários são essenciais para o sucesso
                da conferência, auxiliando nas sessões técnicas, registro de participantes e suporte logístico.
            </p>
            <div class="d-flex flex-wrap gap-2 mt-3">
                <span class="badge bg-gradient-primary fs-6 px-3 py-2 rounded-pill">
                    <i class="fa-solid fa-location-dot me-1" aria-hidden="true"></i> Aracaju, Brasil
                </span>
                <span class="badge bg-gradient-primary fs-6 px-3 py-2 rounded-pill">
                    <i class="fa-regular fa-calendar me-1" aria-hidden="true"></i> 6 a 8 de maio de 2026
                </span>
                <span class="badge bg-gradient-primary fs-6 px-3 py-2 rounded-pill">
                    <i class="fa-solid fa-clock me-1" aria-hidden="true"></i> ~40 horas de serviço
                </span>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h2 class="h5 d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-success rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-gift" aria-hidden="true"></i>
                </span>
                Benefícios para o Voluntário
            </h2>
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="d-flex align-items-start p-3 bg-light rounded-3 h-100">
                        <span class="icon icon-shape icon-sm bg-white shadow-sm rounded-circle text-success me-3 flex-shrink-0 d-inline-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-ticket" aria-hidden="true"></i>
                        </span>
                        <div>
                            <strong>Isenção de inscrição</strong>
                            <p class="text-dark mb-0 small">Taxa de inscrição na conferência gratuitamente</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-start p-3 bg-light rounded-3 h-100">
                        <span class="icon icon-shape icon-sm bg-white shadow-sm rounded-circle text-success me-3 flex-shrink-0 d-inline-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-book-open" aria-hidden="true"></i>
                        </span>
                        <div>
                            <strong>Acesso às sessões</strong>
                            <p class="text-dark mb-0 small">Sessões científicas e workshops quando não estiver em turno</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-start p-3 bg-light rounded-3 h-100">
                        <span class="icon icon-shape icon-sm bg-white shadow-sm rounded-circle text-success me-3 flex-shrink-0 d-inline-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-certificate" aria-hidden="true"></i>
                        </span>
                        <div>
                            <strong>Certificado</strong>
                            <p class="text-dark mb-0 small">Certificado de participação como voluntário</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-start p-3 bg-light rounded-3 h-100">
                        <span class="icon icon-shape icon-sm bg-white shadow-sm rounded-circle text-success me-3 flex-shrink-0 d-inline-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-shirt" aria-hidden="true"></i>
                        </span>
                        <div>
                            <strong>Camiseta exclusiva</strong>
                            <p class="text-dark mb-0 small">Camiseta exclusiva do evento CLIHC 2026</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="alert alert-warning rounded-3 mt-3 mb-0 d-flex align-items-center">
                <i class="fa-solid fa-triangle-exclamation me-2" aria-hidden="true"></i>
                <small><strong>Nota:</strong> Despesas de viagem, hospedagem, almoço e jantar são de responsabilidade do estudante.</small>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h2 class="h5 d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-info rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-list-check" aria-hidden="true"></i>
                </span>
                Responsabilidades
            </h2>
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="d-flex align-items-center p-3 border rounded-3">
                        <span class="text-primary me-3"><i class="fa-solid fa-clipboard-check fa-lg" aria-hidden="true"></i></span>
                        <span>Apoio no credenciamento e entrega de kits</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-center p-3 border rounded-3">
                        <span class="text-primary me-3"><i class="fa-solid fa-headset fa-lg" aria-hidden="true"></i></span>
                        <span>Assistência técnica em sessões remotas ou presenciais</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-center p-3 border rounded-3">
                        <span class="text-primary me-3"><i class="fa-solid fa-people-arrows fa-lg" aria-hidden="true"></i></span>
                        <span>Orientação de fluxo de participantes</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-center p-3 border rounded-3">
                        <span class="text-primary me-3"><i class="fa-solid fa-microphone fa-lg" aria-hidden="true"></i></span>
                        <span>Suporte aos palestrantes e ao comitê organizador</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h2 class="h5 d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-warning rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-user-check" aria-hidden="true"></i>
                </span>
                Requisitos para Inscrição
            </h2>
            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex align-items-start border-0 px-0">
                    <span class="badge bg-primary rounded-pill me-2 mt-1 flex-shrink-0">1</span>
                    <span>Estar regularmente matriculado em um curso de <strong>graduação ou pós-graduação</strong> no momento do evento</span>
                </li>
                <li class="list-group-item d-flex align-items-start border-0 px-0">
                    <span class="badge bg-primary rounded-pill me-2 mt-1 flex-shrink-0">2</span>
                    <span>Ter <strong>disponibilidade integral</strong> entre 6 e 8 de maio de 2026</span>
                </li>
                <li class="list-group-item d-flex align-items-start border-0 px-0">
                    <span class="badge bg-primary rounded-pill me-2 mt-1 flex-shrink-0">3</span>
                    <span>Possuir nível de <strong>inglês ou espanhol funcional</strong> (desejável, devido ao caráter internacional do evento)</span>
                </li>
                <li class="list-group-item d-flex align-items-start border-0 px-0">
                    <span class="badge bg-primary rounded-pill me-2 mt-1 flex-shrink-0">4</span>
                    <span>Demonstrar <strong>proatividade e espírito de equipe</strong></span>
                </li>
            </ul>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h2 class="h5 d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-danger rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-calendar-days" aria-hidden="true"></i>
                </span>
                Datas Importantes
            </h2>
            <div class="row g-3">
                <div class="col-md-4">
                    <div class="text-center p-3 border rounded-3 h-100">
                        <i class="fa-solid fa-door-open text-success fa-2x mb-2" aria-hidden="true"></i>
                        <p class="mb-1"><strong>Abertura das inscrições</strong></p>
                        <span class="badge rounded-pill text-white" style="background-color: #146c43 !important;">08/04/2026</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center p-3 border rounded-3 border-danger h-100">
                        <i class="fa-solid fa-hourglass-end text-danger fa-2x mb-2" aria-hidden="true"></i>
                        <p class="mb-1"><strong>Prazo final</strong></p>
                        <span class="badge bg-danger rounded-pill">17/04/2026</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center p-3 border rounded-3 h-100">
                        <i class="fa-solid fa-envelope-open-text text-info fa-2x mb-2" aria-hidden="true"></i>
                        <p class="mb-1"><strong>Notificação de aceitação</strong></p>
                        <span class="badge bg-info text-dark rounded-pill">21/04/2026</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h2 class="h5 d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-primary rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-pen-to-square" aria-hidden="true"></i>
                </span>
                Como se Inscrever
            </h2>
            <p>
                Os interessados devem preencher o formulário oficial de inscrição. O processo é simples e
                leva poucos minutos.
            </p>
            <div class="text-center my-4">
                <a
                    href="https://forms.gle/8hFg8x3QfxNRZ7dU6"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-primary btn-lg bg-gradient-primary border-0 rounded-pill px-5 shadow-sm"
                >
                    <i class="fa-solid fa-arrow-up-right-from-square me-2" aria-hidden="true"></i>
                    Formulário de Inscrição
                </a>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h2 class="h5 d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-info rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-users-gear" aria-hidden="true"></i>
                </span>
                Processo de Seleção
            </h2>
            <p>Os EV serão selecionados com base em:</p>
            <div class="row g-3">
                <div class="col-md-4">
                    <div class="text-center p-3 bg-light rounded-3">
                        <i class="fa-solid fa-briefcase text-primary fa-lg mb-2" aria-hidden="true"></i>
                        <p class="mb-0 small"><strong>Experiência prévia</strong> em trabalho voluntário</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center p-3 bg-light rounded-3">
                        <i class="fa-solid fa-star text-primary fa-lg mb-2" aria-hidden="true"></i>
                        <p class="mb-0 small"><strong>Habilidades</strong> e experiência relevantes</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center p-3 bg-light rounded-3">
                        <i class="fa-solid fa-earth-americas text-primary fa-lg mb-2" aria-hidden="true"></i>
                        <p class="mb-0 small"><strong>Diversidade</strong> de gênero, nacionalidade e contexto</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h2 class="h5 d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-success rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-people-group" aria-hidden="true"></i>
                </span>
                Quantidade de Selecionados por Dia
            </h2>
            <div class="table-responsive">
                <table class="table table-hover align-middle text-center mb-0" aria-label="Quantidade de Estudantes Voluntários selecionados por dia">
                    <thead>
                        <tr class="bg-gradient-primary text-white">
                            <th scope="col" class="text-white py-3">05/05</th>
                            <th scope="col" class="text-white py-3">06/05</th>
                            <th scope="col" class="text-white py-3">07/05</th>
                            <th scope="col" class="text-white py-3">08/05</th>
                            <th scope="col" class="text-white py-3">09/05</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span class="badge bg-primary rounded-pill px-3 py-2 fs-6">2</span>
                            </td>
                            <td>
                                <span class="badge bg-primary rounded-pill px-3 py-2 fs-6">5</span>
                            </td>
                            <td>
                                <span class="badge bg-primary rounded-pill px-3 py-2 fs-6">6</span>
                            </td>
                            <td>
                                <span class="badge bg-primary rounded-pill px-3 py-2 fs-6">5</span>
                            </td>
                            <td>
                                <span class="badge bg-primary rounded-pill px-3 py-2 fs-6">2</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <h2 class="h5 d-flex align-items-center mb-3">
        <span class="icon icon-shape icon-sm bg-gradient-primary rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
            <i class="fa-solid fa-user-tie" aria-hidden="true"></i>
        </span>
        Coordenação
    </h2>
            <div class="row g-3">
        <div class="col-md-4 d-flex">
            <OrganizerItem class="w-100">
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img
                            src="/assets/img/people/sergioSantana.jpg"
                            alt="Sergio Roberto Santos de Santana"
                            class="img-fluid shadow rounded-3"
                        />
                    </div>
                    <div
                        class="colored-shadow"
                        style="background-image: url('/assets/img/people/sergioSantana.jpg')"
                    ></div>
                </template>
                <template #name> Sergio Roberto Santos de Santana </template>
                <template #institution> UNINASSAU </template>
                <template #email> </template>
            </OrganizerItem>
        </div>
        <div class="col-md-4 d-flex">
            <OrganizerItem class="w-100">
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img
                            src="/assets/img/logos/clihc2026_pt.png"
                            alt="Cássia D'Antonio"
                            class="img-fluid shadow rounded-3"
                        />
                    </div>
                    <div
                        class="colored-shadow"
                        style="background-image: url('/assets/img/logos/clihc2026_pt.png')"
                    ></div>
                </template>
                <template #name> Cássia D'Antonio </template>
                <template #institution> UNIT </template>
                <template #email> </template>
            </OrganizerItem>
        </div>
    </div>
</template>

<style scoped>
.alert-gradient {
    background: linear-gradient(135deg, #F49812 0%, #e8590c 100%);
    color: #fff;
}
</style>
