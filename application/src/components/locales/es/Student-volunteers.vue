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
            <strong class="text-white fs-5">¡Inscripciones abiertas para Estudiantes Voluntarios!</strong>
            <br />
            <span class="text-white-50">
                Fecha límite: <strong class="text-white">17 de abril de 2026</strong>
            </span>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h2 class="h5 d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-primary rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
                </span>
                Sobre el Programa
            </h2>
            <p>
                El programa de <strong>Estudiantes Voluntarios (EV)</strong> es una oportunidad para estudiantes
                de pregrado y posgrado participar activamente en la organización de
                <strong>CLIHC 2026</strong>, en Aracaju, Brasil. Los voluntarios son esenciales para el éxito
                de la conferencia, auxiliando en las sesiones técnicas, registro de participantes y soporte logístico.
            </p>
            <div class="d-flex flex-wrap gap-2 mt-3">
                <span class="badge bg-gradient-primary fs-6 px-3 py-2 rounded-pill">
                    <i class="fa-solid fa-location-dot me-1" aria-hidden="true"></i> Aracaju, Brasil
                </span>
                <span class="badge bg-gradient-primary fs-6 px-3 py-2 rounded-pill">
                    <i class="fa-regular fa-calendar me-1" aria-hidden="true"></i> 6 a 8 de mayo de 2026
                </span>
                <span class="badge bg-gradient-primary fs-6 px-3 py-2 rounded-pill">
                    <i class="fa-solid fa-clock me-1" aria-hidden="true"></i> ~40 horas de servicio
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
                Beneficios para el Voluntario
            </h2>
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="d-flex align-items-start p-3 bg-light rounded-3 h-100">
                        <span class="icon icon-shape icon-sm bg-white shadow-sm rounded-circle text-success me-3 flex-shrink-0 d-inline-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-ticket" aria-hidden="true"></i>
                        </span>
                        <div>
                            <strong>Exención de inscripción</strong>
                            <p class="text-dark mb-0 small">Tarifa de inscripción en la conferencia gratuitamente</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-start p-3 bg-light rounded-3 h-100">
                        <span class="icon icon-shape icon-sm bg-white shadow-sm rounded-circle text-success me-3 flex-shrink-0 d-inline-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-book-open" aria-hidden="true"></i>
                        </span>
                        <div>
                            <strong>Acceso a las sesiones</strong>
                            <p class="text-dark mb-0 small">Sesiones científicas y talleres cuando no esté en turno</p>
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
                            <p class="text-dark mb-0 small">Certificado de participación como voluntario</p>
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
                            <p class="text-dark mb-0 small">Camiseta exclusiva del evento CLIHC 2026</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="alert alert-warning rounded-3 mt-3 mb-0 d-flex align-items-center">
                <i class="fa-solid fa-triangle-exclamation me-2" aria-hidden="true"></i>
                <small><strong>Nota:</strong> Los gastos de viaje, alojamiento, almuerzo y cena son responsabilidad del estudiante.</small>
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
                        <span>Apoyo en la acreditación y entrega de kits</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-center p-3 border rounded-3">
                        <span class="text-primary me-3"><i class="fa-solid fa-headset fa-lg" aria-hidden="true"></i></span>
                        <span>Asistencia técnica en sesiones remotas o presenciales</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-center p-3 border rounded-3">
                        <span class="text-primary me-3"><i class="fa-solid fa-people-arrows fa-lg" aria-hidden="true"></i></span>
                        <span>Orientación de flujo de participantes</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-center p-3 border rounded-3">
                        <span class="text-primary me-3"><i class="fa-solid fa-microphone fa-lg" aria-hidden="true"></i></span>
                        <span>Soporte a los ponentes y al comité organizador</span>
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
                Requisitos para Inscripción
            </h2>
            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex align-items-start border-0 px-0">
                    <span class="badge bg-primary rounded-pill me-2 mt-1 flex-shrink-0">1</span>
                    <span>Estar regularmente matriculado en un curso de <strong>pregrado o posgrado</strong> en el momento del evento</span>
                </li>
                <li class="list-group-item d-flex align-items-start border-0 px-0">
                    <span class="badge bg-primary rounded-pill me-2 mt-1 flex-shrink-0">2</span>
                    <span>Tener <strong>disponibilidad integral</strong> entre el 6 y el 8 de mayo de 2026</span>
                </li>
                <li class="list-group-item d-flex align-items-start border-0 px-0">
                    <span class="badge bg-primary rounded-pill me-2 mt-1 flex-shrink-0">3</span>
                    <span>Poseer nivel de <strong>inglés o español funcional</strong> (deseable, debido al carácter internacional del evento)</span>
                </li>
                <li class="list-group-item d-flex align-items-start border-0 px-0">
                    <span class="badge bg-primary rounded-pill me-2 mt-1 flex-shrink-0">4</span>
                    <span>Demostrar <strong>proactividad y espíritu de equipo</strong></span>
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
                Fechas Importantes
            </h2>
            <div class="row g-3">
                <div class="col-md-4">
                    <div class="text-center p-3 border rounded-3 h-100">
                        <i class="fa-solid fa-door-open text-success fa-2x mb-2" aria-hidden="true"></i>
                        <p class="mb-1"><strong>Apertura de inscripciones</strong></p>
                        <span class="badge rounded-pill text-white" style="background-color: #146c43 !important;">08/04/2026</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center p-3 border rounded-3 border-danger h-100">
                        <i class="fa-solid fa-hourglass-end text-danger fa-2x mb-2" aria-hidden="true"></i>
                        <p class="mb-1"><strong>Fecha límite</strong></p>
                        <span class="badge bg-danger rounded-pill">17/04/2026</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center p-3 border rounded-3 h-100">
                        <i class="fa-solid fa-envelope-open-text text-info fa-2x mb-2" aria-hidden="true"></i>
                        <p class="mb-1"><strong>Notificación de aceptación</strong></p>
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
                Cómo Inscribirse
            </h2>
            <p>
                Los interesados deben completar el formulario oficial de inscripción. El proceso es simple y
                toma solo unos minutos.
            </p>
            <div class="text-center my-4">
                <a
                    href="https://forms.gle/8hFg8x3QfxNRZ7dU6"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-primary btn-lg bg-gradient-primary border-0 rounded-pill px-5 shadow-sm"
                >
                    <i class="fa-solid fa-arrow-up-right-from-square me-2" aria-hidden="true"></i>
                    Formulario de Inscripción
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
                Proceso de Selección
            </h2>
            <p>Los EV serán seleccionados con base en:</p>
            <div class="row g-3">
                <div class="col-md-4">
                    <div class="text-center p-3 bg-light rounded-3">
                        <i class="fa-solid fa-briefcase text-primary fa-lg mb-2" aria-hidden="true"></i>
                        <p class="mb-0 small"><strong>Experiencia previa</strong> en trabajo voluntario</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center p-3 bg-light rounded-3">
                        <i class="fa-solid fa-star text-primary fa-lg mb-2" aria-hidden="true"></i>
                        <p class="mb-0 small"><strong>Habilidades</strong> y experiencia relevantes</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center p-3 bg-light rounded-3">
                        <i class="fa-solid fa-earth-americas text-primary fa-lg mb-2" aria-hidden="true"></i>
                        <p class="mb-0 small"><strong>Diversidad</strong> de género, nacionalidad y contexto</p>
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
                Cantidad de Seleccionados por Día
            </h2>
            <div class="table-responsive">
                <table class="table table-hover align-middle text-center mb-0" aria-label="Cantidad de Estudiantes Voluntarios seleccionados por día">
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
        Coordinación
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
