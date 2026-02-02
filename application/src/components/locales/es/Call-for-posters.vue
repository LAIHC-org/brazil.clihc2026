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
    <ol class="list-group list-group-numbered my-3">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <strong class="text-primary text-gradient">Fecha límite de envío:</strong>
                <strong class="text-danger"> 05 de abril de 2026</strong><br />
                <RouterLink
                    :to="Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-dates' })"
                    class="uline"
                >
                    Ver todas las fechas importantes
                </RouterLink>
            </div>
        </li>
    </ol>

    <p>
        Estimados colegas, un cordial saludo: invitamos a docentes, investigadores,
        estudiantes, profesionales y personas de la industria a enviar sus trabajos a la
        pista de pósteres de la
        <a href="https://clihc2026.laihc.org/" class="uline"
            >XII Conferencia Latinoamericana de Interacción Humano-Computadora (CLIHC
            2026)</a
        >.
    </p>

    <p>
        Los pósteres deben presentar trabajos en progreso o en etapa temprana, con
        resultados preliminares. Los envíos pueden estar escritos en inglés, español o
        portugués, deben ser anónimos y tener una extensión máxima de 2 páginas,
        incluyendo referencias.
    </p>

    <p>
        La conferencia se realizará en Aracaju, Brasil, del 06 al 08 de mayo de 2026.
    </p>

    <p>
        Los temas pueden cubrir todos los aspectos de la IHC, incluyendo, pero no
        limitados a:
    </p>

    <ol>
        <li>Computación afectiva</li>
        <li>Interacción cerebro-computadora (BCI)</li>
        <li>CSCW y computación social</li>
        <li>Métodos de diseño</li>
        <li>Educación e IHC</li>
        <li>Interacción incorporada</li>
        <li>IHC para el desarrollo (HCI4D)</li>
        <li>Salud e IHC</li>
        <li>
            IHC e Inteligencia Artificial (p. ej., IA centrada en las personas y diseño
            de interacción; interacción humano-IA; IHC en sistemas basados en IA;
            experiencia de usuario y diseño para sistemas de IA; IHC responsable y ética
            para aplicaciones de IA; inteligencia artificial explicable - XAI)
        </li>
        <li>IHC en la sociedad</li>
        <li>Inclusión y accesibilidad</li>
        <li>Interfaces de usuario innovadoras</li>
        <li>Evaluación de interacción</li>
        <li>Interfaces e interacción en juegos</li>
        <li>Computación móvil</li>
        <li>Percepción y visualización</li>
        <li>Interacción humano-robot y telepresencia</li>
        <li>Experiencia de usuario (UX) y usabilidad</li>
        <li>Propiedad intelectual e IHC</li>
    </ol>

    <h3>Envío y fechas importantes</h3>
    <p>
        Todos los manuscritos deben enviarse completamente anonimizados. Por favor,
        considere una audiencia internacional: por ejemplo, evite términos locales y use
        el sistema internacional de unidades. Además, considere seguir las
        <a
            target="_blank"
            href="https://clihc2023.laihc.org/en/accessibility-recommendations-for-authors"
            class="uline"
            rel="noopener noreferrer"
            >recomendaciones de accesibilidad (edición CLIHC 2023, se abre en una nueva
            pestaña)</a
        >.
    </p>

    <h4 id="cpt-dates">Fechas importantes (Pósteres)</h4>
    <ul>
        <li>Envío de pósteres: <strong class="text-danger">05 de abril de 2026</strong></li>
        <li>Notificación: 15 de abril de 2026</li>
        <li>Versión final: 20 de abril de 2026</li>
        <li>Evento: 06 – 08 de mayo de 2026</li>
    </ul>

    <h3>Código de ética</h3>
    <p>
        Nos regimos por el
        <a href="https://www.acm.org/code-of-ethics" class="uline">Código de ética de la ACM</a>.
        Esperamos que todas las presentaciones, la investigación subyacente y el
        comportamiento durante el proceso de revisión y la conferencia cumplan con los
        principios y responsabilidades descritos en dicho código.
    </p>

    <h3>Pista de pósteres (2 páginas)</h3>
    <p>
        La pista de pósteres está dirigida a presentaciones y discusiones de trabajos en
        curso o en etapa temprana, con resultados preliminares. La extensión máxima para
        pósteres es de 2 páginas, incluyendo referencias, y los trabajos deben estar
        escritos en inglés, portugués o español.
    </p>

    <h3>Proceso de envío</h3>
    <p>
        Los envíos de pósteres se realizarán a través del sistema JEMS3 (Journal and
        Event Management System):
        <a href="https://jems3.sbc.org.br/events/" class="uline"
            >https://jems3.sbc.org.br/events/</a
        >
    </p>

    <p>
        El formato de envío para cada categoría seguirá la plantilla de la Sociedad
        Brasileña de Computación. Los autores pueden trabajar en uno de los siguientes
        formatos:
    </p>

    <ul>
        <li>
            <a
                href="https://www.sbc.org.br/wp-content/uploads/2024/07/modelosparapublicaodeartigos.zip"
                class="uline"
                >Microsoft Word y LaTeX (recomendado)</a
            >
        </li>
        <li>
            <a
                href="https://www.overleaf.com/latex/templates/sbc-conferences-template-updated-sbc-template-dot-sty-v2017/pyhttxftxjqn"
                class="uline"
                >Overleaf</a
            >
        </li>
    </ul>

    <p>
        Más información:
        <a href="https://clihc2026.laihc.org/en/call-for-posters" class="uline"
            >https://clihc2026.laihc.org/en/call-for-posters</a
        >
    </p>

    <h3 class="my-4">{{ $t("organizers.posters_chairs_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img
                            src="/assets/img/people/sanely.jpg"
                            alt="Laura Sanely Gaytán Lugo"
                            class="img-fluid shadow rounded-3"
                        />
                    </div>
                    <div
                        class="colored-shadow"
                        style="background-image: url('/assets/img/people/sanely.jpg');"
                    ></div>
                </template>
                <template #name> Dra. Laura Sanely Gaytán Lugo </template>
                <template #institution> Universidad de Colima (UCOL), MX </template>
                <template #email> </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img
                            src="/assets/img/people/napoliana.jpg"
                            alt="Napoliana Souza"
                            class="img-fluid shadow rounded-3"
                        />
                    </div>
                    <div
                        class="colored-shadow"
                        style="background-image: url('/assets/img/people/napoliana.jpg')"
                    ></div>
                </template>
                <template #name> Dra. Napoliana Souza </template>
                <template #institution> Universidade do Estado do Amapá (UEAP), BR </template>
                <template #email> </template>
            </OrganizerItem>
        </div>
    </div>
</template>
