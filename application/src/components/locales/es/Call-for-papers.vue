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
            <i class="fa-solid fa-calendar-check fa-2x text-white" aria-hidden="true"></i>
        </span>
        <div>
            <h2 class="text-white fs-5 mb-0 fw-bold">Fecha límite de envío de resúmenes: 1 de marzo</h2>
            <br />
            <RouterLink
                :to="Tr.i18nRoute({ name: 'call-for-papers', hash: '#cpf-dates' })"
                class="uline text-light"
            >
                Ver todas las fechas importantes <i class="fa-solid fa-arrow-down ms-1" aria-hidden="true"></i>
            </RouterLink>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h2 class="h5 d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-primary rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-bullhorn" aria-hidden="true"></i>
                </span>
                Sobre CLIHC 2026
            </h2>
            <p>
                La
                <a href="https://clihc2026.laihc.org/" class="uline">
                    XII Conferencia Latinoamericana de Interacción Humano-Computadora (CLIHC
                    2026)</a
                >
                tiene como objetivo ofrecer un foro de primer nivel que reúna a las comunidades
                latinoamericana e internacional de investigación en Interacción Humano-Computadora
                (HCI), para discutir y compartir ideas, métodos, enfoques y técnicas para el
                diseño, implementación y evaluación de experiencias interactivas de usuario. De
                acuerdo con ediciones anteriores, creemos que la HCI debe fomentar la producción
                de tecnología que pueda ser utilizada y beneficiar al mayor número posible de
                personas, promoviendo el intercambio intercultural y la cooperación entre personas
                con diferentes contextos y necesidades.
            </p>
            <p>
                Este año, CLIHC 2026 se llevará a cabo en dos ciudades, Aracaju/Brasil y
                Oaxaca/México. Sin embargo, la
                <strong>
                    presentación de los artículos completos se realizará únicamente en la ciudad
                    satélite de Aracaju, Brasil
                </strong>. Por el momento, se reciben envíos en la siguiente categoría:
            </p>
            <span class="badge bg-gradient-primary fs-6 px-3 py-2 rounded-pill mb-2">Artículos completos</span>
            <p class="mt-3">
                Se invita a los autores a preparar y enviar artículos que reporten proyectos de
                investigación, diseños innovadores, estudios de usuarios, modelos de interacción,
                estudios de campo, estudios de caso, entre otros. Académicos, investigadores,
                profesionales de la industria, así como estudiantes de licenciatura y posgrado,
                son bienvenidos a participar en el proceso de selección por revisión por pares de
                los trabajos que serán presentados en la conferencia, del 06 al 08 de mayo de
                2026.
            </p>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h2 class="h5 d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-info rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-lightbulb" aria-hidden="true"></i>
                </span>
                Temas de Interés
            </h2>
            <p>Los temas de los envíos pueden abarcar todos los aspectos de la HCI, incluyendo, pero no limitándose a:</p>
            <div class="d-flex flex-wrap gap-2">
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Computación afectiva</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Interacción cerebro-computadora (BCI)</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">CSCW y computación social</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Métodos de diseño</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Educación y HCI</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Interacción corporizada</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">HCI para el desarrollo (HCI4D)</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Salud y HCI</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">HCI e Inteligencia Artificial</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">HCI en la sociedad</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Inclusión y accesibilidad</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Interfaces de usuario innovadoras</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Evaluación de la interacción</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Interfaces e interacción en videojuegos</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Computación móvil</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Percepción y visualización</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Interacción humano-robot y telepresencia</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Experiencia de usuario (UX) y usabilidad</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Propiedad intelectual y HCI</span>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h2 class="h5 d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-success rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
                </span>
                Envío y Fechas Importantes
            </h2>
            <p>
                Todos los manuscritos deben enviarse completamente anonimizados. Por favor,
                considere una audiencia internacional: evite términos locales y utilice el sistema
                internacional de unidades. Además, considere seguir las
                <a
                    target="_blank"
                    href="https://clihc2023.laihc.org/en/accessibility-recommendations-for-authors"
                    class="uline"
                    rel="noopener noreferrer"
                >
                    pautas de accesibilidad (edición CLIHC 2023, se abre en una nueva pestaña)
                </a>.
            </p>

            <h3 id="cpf-dates" class="h5 mt-4 mb-3">Fechas importantes (Artículos completos)</h3>
            <div class="cfp-timeline">
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-danger"></div>
                    <div class="cfp-timeline-content">
                        <strong class="text-danger">Envío de resúmenes</strong>
                        <span class="text-muted ms-2">23 de febrero</span>
                    </div>
                </div>
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-warning"></div>
                    <div class="cfp-timeline-content">
                        <strong>Envío de artículos</strong>
                        <span class="text-muted ms-2">8 de marzo</span>
                    </div>
                </div>
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-info"></div>
                    <div class="cfp-timeline-content">
                        <strong>Notificación</strong>
                        <span class="text-muted ms-2">30 de marzo</span>
                    </div>
                </div>
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-success"></div>
                    <div class="cfp-timeline-content">
                        <strong>Versión final (camera ready)</strong>
                        <span class="text-muted ms-2">12 de abril</span>
                    </div>
                </div>
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-primary"></div>
                    <div class="cfp-timeline-content">
                        <strong>Evento</strong>
                        <span class="text-muted ms-2">06 – 08 de mayo</span>
                    </div>
                </div>
            </div>
            <p class="text-muted mt-3 mb-0"><small><i class="fa-solid fa-circle-info me-1" aria-hidden="true"></i>Las fechas límite son a medianoche AoE (Anywhere on Earth).</small></p>
        </div>
    </div>

    <div class="row g-3 mb-4">
        <div class="col-md-6">
            <div class="card border-0 shadow-sm rounded-4 h-100">
                <div class="card-body p-4">
                    <h2 class="h5 d-flex align-items-center mb-3">
                        <span class="icon icon-shape icon-sm bg-gradient-warning rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-scale-balanced" aria-hidden="true"></i>
                        </span>
                        Código de Ética
                    </h2>
                    <p class="mb-0">
                        Nos regimos por el
                        <a href="https://www.acm.org/code-of-ethics" class="uline">
                            Código de Ética de la ACM
                        </a>. Esperamos que todos los envíos, la investigación subyacente y el
                        comportamiento durante el proceso de revisión y la conferencia cumplan con
                        los principios y responsabilidades establecidos por dicho código.
                    </p>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card border-0 shadow-sm rounded-4 h-100">
                <div class="card-body p-4">
                    <h2 class="h5 d-flex align-items-center mb-3">
                        <span class="icon icon-shape icon-sm bg-gradient-dark rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-trophy" aria-hidden="true"></i>
                        </span>
                        Best Papers
                    </h2>
            <p>
                        Las personas autoras de cuatro artículos completos premiados como
                        <strong>Best Papers</strong> en CLIHC 2026 serán invitadas a enviar una versión
                        extendida en inglés, con al menos <strong>30% de contenido original</strong>,
                        para ser incluida en una edición especial de la Journal of the Brazilian
                        Computer Society (JBCS).
                    </p>
                    <ul class="mb-0">
                        <li>
                            <a
                                href="https://journals-sol.sbc.org.br/index.php/jbcs/clihc-2026"
                                class="uline"
                            >
                                Convocatoria completa de la edición especial JBCS
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://journals-sol.sbc.org.br/index.php/jbcs/open-calls"
                                class="uline"
                            >
                                Demás convocatorias abiertas de la JBCS
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h2 class="h5 d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-primary rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-upload" aria-hidden="true"></i>
                </span>
                Proceso de Envío
            </h2>
            <p>
                Los envíos de artículos completos deben realizarse a través del
                <a href="https://jems3.sbc.org.br/events/510" class="uline">Sistema JEMS3</a>
                (Journal and Event Management System).
            </p>
            <p>
                El formato de envío a utilizar seguirá la plantilla de la Sociedad Brasileña de
                Computación. Los autores pueden elegir trabajar en uno de los siguientes formatos:
            </p>

            <div class="row g-3 mt-1">
                <div class="col-md-4">
                    <a href="https://jems3.sbc.org.br/events/510" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
                        <div class="card border-0 bg-gradient-primary text-white text-center p-3 rounded-4 action-card h-100">
                            <i class="fa-solid fa-cloud-arrow-up fa-2x mb-2" aria-hidden="true"></i>
                            <strong>Sistema JEMS3</strong>
                            <small class="text-light">Enviar artículo</small>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="https://www.sbc.org.br/wp-content/uploads/2024/07/modelosparapublicaodeartigos.zip" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
                        <div class="card border-0 bg-dark text-white text-center p-3 rounded-4 action-card h-100">
                            <i class="fa-solid fa-file-word fa-2x mb-2" aria-hidden="true"></i>
                            <strong>Word y LaTeX</strong>
                            <small class="text-light">Plantillas (recomendado)</small>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="https://www.overleaf.com/latex/templates/sbc-conferences-template-updated-sbc-template-dot-sty-v2017/pyhttxftxjqn" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
                        <div class="card border-0 text-white text-center p-3 rounded-4 action-card h-100" style="background-color: #0f5132;">
                            <i class="fa-solid fa-leaf fa-2x mb-2" aria-hidden="true"></i>
                            <strong class="text-white">Overleaf</strong>
                            <small class="text-light">Plantilla online</small>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h2 class="h5 d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-info rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-file-lines" aria-hidden="true"></i>
                </span>
                Categorías de Envío
            </h2>
            <div class="card bg-light border-0 rounded-4 p-3 mb-0">
                <h3 class="h6 mb-2">
                    <i class="fa-solid fa-file-alt text-primary me-2" aria-hidden="true"></i>
                    Artículos completos (15 páginas)
                </h3>
                <p>
                    Los proyectos de investigación que hayan alcanzado una etapa madura y presenten
                    una contribución original al estado del arte son bienvenidos a enviar trabajos
                    en la categoría de artículos completos. Los envíos deben ser relevantes para la
                    temática de la conferencia y no deben haber sido publicados ni estar bajo
                    revisión en otra conferencia o revista. La extensión máxima es de
                    <strong>15 páginas, incluidas las referencias</strong>, y los artículos deben
                    estar escritos en inglés, portugués o español.
                </p>

                <p>
                    Los artículos serán revisados por al menos dos evaluadores en un proceso de
                    doble anonimato. Los trabajos enviados deben estar anonimizados, incluyendo
                    referencias a trabajos previos de los propios autores.
                </p>

                <p class="mb-0">
                    Estamos trabajando para asegurar que los artículos aceptados sean publicados en
                    SBC OpenLib (SOL), la biblioteca digital mantenida por la Sociedad Brasileña de
                    Computación (SBC). Además, los mejores artículos serán recomendados para enviar
                    una versión extendida y ser publicados en una edición especial que estamos
                    negociando con una revista prestigiosa de HCI o Ciencias de la Computación.
                </p>
            </div>
        </div>
    </div>

    <h3 class="my-4">{{ $t("organizers.program_chairs_title") }}</h3>
    <div class="row g-3">
        <div class="col-md-4 d-flex">
            <OrganizerItem class="w-100">
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img
                            src="/assets/img/people/adrianaDamian.png"
                            alt="Adriana Damian"
                            class="img-fluid shadow rounded-3"
                        />
                    </div>
                    <div
                        class="colored-shadow"
                        style="
                            background-image: url('/assets/img/people/adrianaDamian.png');
                        "
                    ></div>
                </template>
                <template #name> Dra. Adriana Lopes Damian </template>
                <template #institution> Instituto de Pesquisas Eldorado, BR </template>
                <template #email> </template>
            </OrganizerItem>
        </div>

        <div class="col-md-4 d-flex">
            <OrganizerItem class="w-100">
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img
                            src="/assets/img/people/liz.jpg"
                            alt="Liz"
                            class="img-fluid shadow rounded-3"
                        />
                    </div>
                    <div
                        class="colored-shadow"
                        style="background-image: url('/assets/img/people/liz.jpg')"
                    ></div>
                </template>
                <template #name> Dra. Lizbeth Escobedo </template>
                <template #institution> Dalhousie University, CA </template>
                <template #email> </template>
            </OrganizerItem>
        </div>
    </div>

    <h3 class="my-4">{{ $t("organizers.full_papers_cahirs_title") }}</h3>
    <p>{{ $t("organizers.full_papers_cahirs_description") }}</p>
    <div class="table-responsive">
        <table class="table table-hover align-middle cfp-table mb-0">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Afiliación</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Adriana Lorena Iniguez Carrillo</td><td>Universidad De Guadalajara</td></tr>
                <tr><td>Adeline Gabriela Silva Gil</td><td>University Of São Paulo</td></tr>
                <tr><td>Ailton Santos Ribeiro</td><td>Universidade Federal Da Bahia</td></tr>
                <tr><td>Ana Cristina Bicharra Garcia</td><td>Universidade Federal Do Estado Do Rio De Janeiro</td></tr>
                <tr><td>Ana Grasielle Dionísio Corrêa</td><td>Universidade Presbiteriana Mackenzie</td></tr>
                <tr><td>Andre Pimenta Freire</td><td>Universidade Federal De Lavras</td></tr>
                <tr><td>Anna Beatriz Marques</td><td>Universidade Federal Do Ceará</td></tr>
                <tr><td>Beatriz Brito do Rêgo</td><td>Universidade Federal Da Bahia</td></tr>
                <tr><td>Bruna Diirr</td><td>Universidade Federal Do Estado Do Rio De Janeiro</td></tr>
                <tr><td>Candy T. Gonzales</td><td>University Of São Paulo</td></tr>
                <tr><td>Carlos H. Morimoto</td><td>University Of São Paulo</td></tr>
                <tr><td>Caroline Queiroz Santos</td><td>Universidade Federal Dos Vales Do Jequitinhonha E Mucuri</td></tr>
                <tr><td>Diego Zabot</td><td>Universidade Federal Da Bahia</td></tr>
                <tr><td>Franceli Cibrian</td><td>Chapman University</td></tr>
                <tr><td>Genildo Gomes</td><td>Universidade Federal Do Amazonas</td></tr>
                <tr><td>Gustavo Souto</td><td>Universidade De São Paulo</td></tr>
                <tr><td>Hanieh Shakeri</td><td>Dalhousie University</td></tr>
                <tr><td>Ingrid Teixeira Monteiro</td><td>Universidade Federal Do Ceará</td></tr>
                <tr><td>Ismar Frango Silveira</td><td>Universidade Presbiteriana Mackenzie</td></tr>
                <tr><td>Jose Carlos Duarte</td><td>Universidade Federal Do Amazonas</td></tr>
                <tr><td>Julia Silva Weber</td><td>Dalhousie University</td></tr>
                <tr><td>Kamila Rodrigues</td><td>Universidade De São Paulo</td></tr>
                <tr><td>Leandro Guedes</td><td>Instituto Federal De Mato Grosso Do Sul</td></tr>
                <tr><td>Leonardo Marques</td><td>Universidade Federal Do Amazonas</td></tr>
                <tr><td>Leonardo Moraes</td><td>Universidade De São Paulo</td></tr>
                <tr><td>Luciana Borges</td><td>Universidade Federal De Mato Grosso</td></tr>
                <tr><td>Lucineide Rodrigues da Silva</td><td>Universidade Federal De Mato Grosso Do Sul</td></tr>
                <tr><td>Luis Miguel Zamudio</td><td>Cicese Research Center</td></tr>
                <tr><td>Luã Marcelo Muriana</td><td>Universidade Estadual De Campinas</td></tr>
                <tr><td>Maria Lucia Bento Villela</td><td>Universidade Federal De Viçosa</td></tr>
                <tr><td>María Victoria Kubo</td><td>Universidad Autónoma De Baja California</td></tr>
                <tr><td>Mateus Monteiro</td><td>Universidade Federal De São Carlos</td></tr>
                <tr><td>Mayara Costa Figueiredo</td><td>Universidade Federal Do Pará</td></tr>
                <tr><td>Maylon Macedo</td><td>Instituto Tecnológico De Aeronáutica</td></tr>
                <tr><td>Monica Perusquia Hernandez</td><td>Nara Institute Of Science And Technology</td></tr>
                <tr><td>Napoliana S. Souza</td><td>Universidade Estadual Do Amapá</td></tr>
                <tr><td>Pablo-Armando Alcazar-Valencia</td><td>Universidad De Colima</td></tr>
                <tr><td>Paulo Knob</td><td>Pontifícia Universidade Católica Do Rio Grande Do Sul</td></tr>
                <tr><td>Raymundo Cornejo</td><td>Universidad Autónoma De Chihuahua</td></tr>
                <tr><td>Rodrigo Oliveira Zacarias</td><td>Universidade Federal Fluminense</td></tr>
                <tr><td>Rogerio Lopes Vieira Cesar</td><td>Ifce Campus Iguatu</td></tr>
                <tr><td>Sandra Souza Rodrigues</td><td>Federal University Of Lavras</td></tr>
                <tr><td>Sara Wolf</td><td>University Of Würzburg</td></tr>
                <tr><td>Suéllen Martinelli</td><td>Instituto Federal De Educação Ciência E Tecnologia De São Paulo</td></tr>
                <tr><td>Taciana Pontual Falcão</td><td>Universidade Federal Rural De Pernambuco</td></tr>
                <tr><td>Thais H. C. Castro</td><td>Universidade Federal Do Amazonas</td></tr>
                <tr><td>Valéria Argolo Rosa</td><td>Universidade Estadual Do Sudoeste Da Bahia</td></tr>
                <tr><td>Valéria M. Pinheiro</td><td>Universidade Federal Do Ceará</td></tr>
                <tr><td>Vania Paula Almeida Neris</td><td>Universidade Federal De São Carlos</td></tr>
                <tr><td>Walter Nakamura</td><td>Universidade Tecnológica Federal Do Paraná</td></tr>
                <tr><td>Willian Garcias Assuncao</td><td>Universidade Federal De São Carlos</td></tr>
                <tr><td>Wilson Sarmiento</td><td>Universidad Militar Nueva Granada</td></tr>
            </tbody>
        </table>
    </div>

    <h3 class="my-4">{{ $t("organizers.short_papers_cahirs_title") }}</h3>
    <p>{{ $t("organizers.short_papers_cahirs_description") }}</p>
    <div class="table-responsive">
        <table class="table table-hover align-middle cfp-table mb-0">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Afiliación</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Alessandro Rubim Assis</td><td>HCL Tech. Ltd.</td></tr>
                <tr><td>Arlem Aleida Castillo Avila</td><td>Benemérita Universidad Autónoma De Puebla Y Universitat De Girona</td></tr>
                <tr><td>Carlos Alberto Martínez Sandoval</td><td>Universidad Tecnológica De La Mixteca</td></tr>
                <tr><td>Claudia Ribeiro Santos Lopes</td><td>Universidade Estadual Do Sudoeste Da Bahia</td></tr>
                <tr><td>Cristiane Aparecida Lana</td><td>Universidade Federal De Lavras</td></tr>
                <tr><td>Daniel Domingos Alves</td><td>Instituto Federal De Mato Grosso</td></tr>
                <tr><td>Diego Zabot</td><td>Universidade Federal Da Bahia</td></tr>
                <tr><td>Eduardo H. Tanaka</td><td>Eldorado Research Institute</td></tr>
                <tr><td>Filipe Garrido</td><td>Instituto Federal De Educação, Ciência E Tecnologia Baiano</td></tr>
                <tr><td>Hideki Garcia Goo</td><td>University Of Twente</td></tr>
                <tr><td>Laura Sanely Gaytán Lugo</td><td>Universidad De Colima</td></tr>
                <tr><td>Leandro Soares Guedes</td><td>Instituto Federal De Mato Grosso Do Sul</td></tr>
                <tr><td>Lucas Santos de Oliveira</td><td>Universidade Estadual Do Sudoeste Da Bahia</td></tr>
                <tr><td>Luciana Zaina</td><td>Universidade Federal De São Carlos</td></tr>
                <tr><td>Luiz Paulo Carvalho</td><td>Universidade Federal Rural Do Rio De Janeiro</td></tr>
                <tr><td>Marcelo M. Eler</td><td>Universidade De São Paulo</td></tr>
                <tr><td>Marcos Alexandre Rose Silva</td><td>Universidade Federal De Santa Maria</td></tr>
                <tr><td>María de Rosario Peralta Calvo</td><td>Universidad De La Cañada</td></tr>
                <tr><td>Maylon Macedo</td><td>Instituto Tecnológico De Aeronáutica</td></tr>
                <tr><td>Mydiã Freitas</td><td>Universidade Federal Do Sul Da Bahia</td></tr>
                <tr><td>Napoliana S. Souza</td><td>Universidade Estadual Do Amapá</td></tr>
                <tr><td>Nicolas Soriano Martinez</td><td>Universidad Tecnológica De La Mixteca</td></tr>
                <tr><td>Pedro C. Santana-Mancilla</td><td>Universidad De Colima</td></tr>
                <tr><td>Phelipe Dias Feio</td><td>Universidade Federal Do Pará</td></tr>
                <tr><td>Sergio Zepeda</td><td>Autonomous Metropolitan University</td></tr>
                <tr><td>Suéllen Martinelli</td><td>Instituto Federal De Educação Ciência E Tecnologia De São Paulo</td></tr>
                <tr><td>Thais H. C. Castro</td><td>Universidade Federal Do Amazonas</td></tr>
                <tr><td>Thiago Adriano Coleti</td><td>Universidade Estadual Do Norte Do Paraná</td></tr>
                <tr><td>Walter Nakamura</td><td>Universidade Tecnológica Federal Do Paraná</td></tr>
                <tr><td>Ícaro Andrade Souza</td><td>Universidade Federal Do Sul Da Bahia</td></tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.alert-gradient {
    background: linear-gradient(135deg, #e53e3e 0%, #dd6b20 100%);
    color: #fff;
}

.cfp-timeline {
    position: relative;
    padding-left: 2rem;
}

.cfp-timeline::before {
    content: '';
    position: absolute;
    left: 0.5rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #dee2e6;
}

.cfp-timeline-item {
    position: relative;
    padding: 0.5rem 0;
}

.cfp-timeline-dot {
    position: absolute;
    left: -1.75rem;
    top: 0.75rem;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px #dee2e6;
}

.cfp-timeline-content strong {
    display: inline;
}

.action-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
}

.action-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2) !important;
}

:deep(.cfp-table thead th) {
    background: linear-gradient(135deg, #2152ff 0%, #21d4fd 100%);
    color: #fff;
    border: none;
    font-weight: 600;
}

:deep(.cfp-table tbody tr:hover) {
    background-color: rgba(33, 82, 255, 0.05);
}
</style>
