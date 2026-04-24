<script>
import Tr from '@/i18n/translation'

export default {
    setup() {
        const nonSbcCategories = [
            {
                name: 'Estudiantes de enseñanza media, técnica y pregrado',
                price: 'R$ 140,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/Estudante%20de%20Ensino%20M%C3%A9dio%2C%20T%C3%A9cnico%20e%20Gradua%C3%A7%C3%A3o'
            },
            {
                name: 'Estudiantes de posgrado',
                price: 'R$ 190,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/Estudante%20de%20P%C3%B3s-Gradua%C3%A7%C3%A3o'
            },
            {
                name: 'Profesores/as de Educación Básica',
                price: 'R$ 215,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/Professores%20do%20Ensino%20M%C3%A9dio%20e%20EBTT'
            },
            {
                name: 'Profesionales y Profesores/as de Educación Superior',
                price: 'R$ 355,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/Profissionais%20e%20Professores%20do%20Magist%C3%A9rio%20Superior'
            }
        ]
        const sbcCategories = [
            {
                name: 'Estudiantes de enseñanza media, técnica y pregrado',
                price: 'R$ 115,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/%5BMembro%20SBC%5D%20Estudante%20de%20Ensino%20M%C3%A9dio%2C%20T%C3%A9cnico%20e%20Gradua%C3%A7%C3%A3o'
            },
            {
                name: 'Estudiantes de posgrado',
                price: 'R$ 160,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/%5BMembro%20SBC%5D%20Estudante%20de%20P%C3%B3s-Gradua%C3%A7%C3%A3o'
            },
            {
                name: 'Profesores/as de Educación Básica',
                price: 'R$ 180,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/%5BMembro%20SBC%5D%20Professores%20do%20Ensino%20M%C3%A9dio%20e%20EBTT'
            },
            {
                name: 'Profesionales y Profesores/as de Educación Superior',
                price: 'R$ 300,00',
                link: 'https://vendyno.goexplosion.com/checkout/conferencia-latino-americana-de-interacao-humano-computador/%5BMembro%20SBC%5D%20Profissionais%20e%20Professores%20do%20Magist%C3%A9rio%20Superior'
            }
        ]
        return { Tr, nonSbcCategories, sbcCategories }
    }
}
</script>

<template>
    <p>
        Tejiendo experiencias entre fronteras, el CLIHC'2026 se realiza de forma distribuida
        entre las sedes de Aracaju y Oaxaca. Consulte a continuación la información necesaria
        para realizar su inscripción en la sede brasileña y participar de esta travesía entre
        mares y manglares:
    </p>
    <ul>
        <li>Las inscripciones al CLIHC'2026 en Aracaju se realizarán exclusivamente a través de la Plataforma Vendyno.</li>
        <li>Los valores de inscripción están en Reales Brasileños (BRL).</li>
        <li>Participantes extranjeros pueden realizar su inscripción para la sede brasileña mediante tarjeta de crédito internacional.</li>
    </ul>
    <h3 class="mt-5">Reglas de descuento SBC</h3>
    <p>
        Como el CLIHC'2026 es un evento apoyado por la Sociedad Brasileña de Computación
        (SBC), las personas asociadas tienen descuento en la inscripción. Para disfrutar de este descuento es necesario:
    </p>
    <ol class="list-group list-group-numbered mb-3">
        <li class="list-group-item">Realizar la inscripción utilizando el enlace específico para la categoría vinculada a la SBC;</li>
        <li class="list-group-item">
            Enviar el carnet de socia de la SBC válido en 2026 al correo electrónico
            <a href="mailto:clihc.conf@gmail.com" class="uline">clihc.conf@gmail.com</a>
            en un plazo de tres días después de la inscripción. El asunto del correo debe comenzar con:
            <strong>"[Inscrição - CLIHC26]"</strong>.
        </li>
    </ol>
    <div class="alert alert-danger d-flex align-items-start rounded-3 p-3 mb-4 border-0 text-white" role="alert">
        <i class="fas fa-exclamation-triangle me-3 mt-1 fs-5 flex-shrink-0" aria-hidden="true"></i>
        <div>
            <strong>Atención:</strong>
            Las inscripciones de socias sin el envío del carnet válido en un plazo de tres días serán canceladas.
        </div>
    </div>
    <h3 class="mt-5">No socias de la SBC</h3>
    <div class="row g-4 mt-1">
        <div v-for="(cat, index) in nonSbcCategories" :key="'non-sbc-' + index" class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center d-flex flex-column">
                    <h4 class="card-title h6 fw-bold text-dark">{{ cat.name }}</h4>
                    <div class="mt-auto pt-3">
                        <p class="fs-3 fw-bold text-primary text-gradient mb-3">{{ cat.price }}</p>
                        <a :href="cat.link" target="_blank" rel="noopener noreferrer" class="btn bg-gradient-yellow btn-round w-100" :aria-label="'Inscríbase en la categoría ' + cat.name">Inscríbase</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h3 class="mt-5">Socias de la SBC</h3>
    <div class="row g-4 mt-1 mb-5">
        <div v-for="(cat, index) in sbcCategories" :key="'sbc-' + index" class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm h-100">
                <div class="card-body text-center d-flex flex-column">
                    <h4 class="card-title h6 fw-bold text-dark">{{ cat.name }}</h4>
                    <div class="mt-auto pt-3">
                        <p class="fs-3 fw-bold text-primary text-gradient mb-3">{{ cat.price }}</p>
                        <a :href="cat.link" target="_blank" rel="noopener noreferrer" class="btn bg-gradient-yellow btn-round w-100" :aria-label="'Inscríbase en la categoría ' + cat.name">Inscríbase</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="my-4" />
    <p class="text-center">
        Cualquier duda puede ponerse en contacto a través del correo electrónico
        <a href="mailto:clihc.conf@gmail.com" class="uline">clihc.conf@gmail.com</a>.
    </p>
</template>
