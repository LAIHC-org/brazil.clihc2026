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
            <i class="fa-solid fa-calendar-check fa-2x text-white"></i>
        </span>
        <div>
            <strong class="text-white fs-5">Abstract submission deadline: February 23</strong>
            <br />
            <RouterLink
                :to="Tr.i18nRoute({ name: 'call-for-papers', hash: '#cpf-dates' })"
                class="uline text-white-50"
            >
                See all important dates <i class="fa-solid fa-arrow-down ms-1"></i>
            </RouterLink>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h5 class="d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-primary rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-bullhorn"></i>
                </span>
                About CLIHC 2026
            </h5>
            <p>
                The
                <a href="https://clihc2026.laihc.org/" class="uline">
                    XII Latin American Conference on Human-Computer Interaction (CLIHC 2026)</a
                >, aims to provide a premier forum that brings together the Latin American and
                international Human-Computer Interaction (HCI) research communities to discuss and
                share ideas, methods, approaches, and techniques for designing, implementing, and
                evaluating interactive user experiences. In accordance with previous editions, we
                believe that HCI must foster the production of technology that can be used by and
                benefit as many people as possible, enabling intercultural exchange and
                cooperation between people with different backgrounds and needs.
            </p>
            <p>
                This year, CLIHC 2026 will take place in two cities, Aracaju/Brazil and
                Oaxaca/Mexico. However, the
                <strong>
                    presentation of the full papers will only take place in the satellite city of
                    Aracaju, Brazil
                </strong>. For now, submissions are open in the following category:
            </p>
            <span class="badge bg-gradient-primary fs-6 px-3 py-2 rounded-pill mb-2">Full papers</span>
            <p class="mt-3">
                Authors are invited to prepare and submit papers reporting on research projects,
                innovative designs, user studies, models of interaction, field studies, case
                studies, and others. Academics, researchers, practitioners and professionals from
                industry, as well as undergraduate and graduate students are welcome to
                participate in the peer-reviewed selection of the works that will be presented at
                the conference, from May 06 to 08, 2026.
            </p>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h5 class="d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-info rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-lightbulb"></i>
                </span>
                Topics of Interest
            </h5>
            <p>Topics of submissions may cover all aspects of HCI, including, but not limited to:</p>
            <div class="d-flex flex-wrap gap-2">
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Affective computing</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Brain computer interaction (BCI)</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">CSCW and social computing</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Design methods</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Education and HCI</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Embodied interaction</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">HCI for development (HCI4D)</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Health and HCI</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">HCI and Artificial Intelligence</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">HCI in Society</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Inclusion and accessibility</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Innovative user interfaces</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Interaction Evaluation</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Interfaces and interaction in games</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Mobile computing</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Perception and visualization</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Human-robot interaction and telepresence</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">User experience (UX) and usability</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Intellectual Property and HCI</span>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h5 class="d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-success rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-paper-plane"></i>
                </span>
                Submission and Important Dates
            </h5>
            <p>
                All manuscripts must be submitted fully anonymized. Please consider an
                international audience: e.g., avoid local terms, and use the international system
                of units. In addition, consider following
                <a
                    target="_blank"
                    href="https://clihc2023.laihc.org/en/accessibility-recommendations-for-authors"
                    class="uline"
                    rel="noopener noreferrer"
                >accessibility guidelines (CLIHC 2023 edition, opens in a new tab)</a
                >.
            </p>

            <h5 id="cpf-dates" class="mt-4 mb-3">Important Dates (Full Papers)</h5>
            <div class="cfp-timeline">
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-danger"></div>
                    <div class="cfp-timeline-content">
                        <strong class="text-danger">Abstract submission</strong>
                        <span class="text-muted ms-2">February 23</span>
                    </div>
                </div>
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-warning"></div>
                    <div class="cfp-timeline-content">
                        <strong>Paper submission</strong>
                        <span class="text-muted ms-2">March 1</span>
                    </div>
                </div>
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-info"></div>
                    <div class="cfp-timeline-content">
                        <strong>Notification</strong>
                        <span class="text-muted ms-2">March 30</span>
                    </div>
                </div>
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-success"></div>
                    <div class="cfp-timeline-content">
                        <strong>Camera ready</strong>
                        <span class="text-muted ms-2">April 12</span>
                    </div>
                </div>
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-primary"></div>
                    <div class="cfp-timeline-content">
                        <strong>Event</strong>
                        <span class="text-muted ms-2">May 06 – 08</span>
                    </div>
                </div>
            </div>
            <p class="text-muted mt-3 mb-0"><small><i class="fa-solid fa-circle-info me-1"></i>Deadlines are at midnight AoE (Anywhere on Earth).</small></p>
        </div>
    </div>

    <div class="row g-3 mb-4">
        <div class="col-md-6">
            <div class="card border-0 shadow-sm rounded-4 h-100">
                <div class="card-body p-4">
                    <h5 class="d-flex align-items-center mb-3">
                        <span class="icon icon-shape icon-sm bg-gradient-warning rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-scale-balanced"></i>
                        </span>
                        Code of Ethics
                    </h5>
                    <p class="mb-0">
                        We abide by the
                        <a href="https://www.acm.org/code-of-ethics" class="uline">ACM Code of Ethics</a>.
                        We expect that all submissions, underlying research, and behavior during the
                        review process and conference comply with the principles and responsibilities
                        outlined by the code.
                    </p>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card border-0 shadow-sm rounded-4 h-100">
                <div class="card-body p-4">
                    <h5 class="d-flex align-items-center mb-3">
                        <span class="icon icon-shape icon-sm bg-gradient-dark rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-trophy"></i>
                        </span>
                        Best Papers
                    </h5>
                    <p>
                        The authors of four full papers awarded as <strong>Best Papers</strong> at CLIHC 2026 will be
                        invited to submit an extended version in English, with at least <strong>30% original</strong>
                        content, to be included in a special issue of the Journal of the Brazilian
                        Computer Society (JBCS).
                    </p>
                    <ul class="mb-0">
                        <li>
                            <a href="https://journals-sol.sbc.org.br/index.php/jbcs/clihc-2026" class="uline">
                                Full call for the JBCS special issue
                            </a>
                        </li>
                        <li>
                            <a href="https://journals-sol.sbc.org.br/index.php/jbcs/open-calls" class="uline">
                                Other currently open calls from JBCS
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h5 class="d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-primary rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-upload"></i>
                </span>
                Submission Process
            </h5>
            <p>
                Full paper submissions are to be made through the
                <a href="https://jems3.sbc.org.br/events/510" class="uline">JEMS3 System</a>
                (Journal and Event Management System).
            </p>
            <p>
                Submission format to be used for each category will follow the Brazilian Computer
                Society template. Authors may choose to work in one of the following formats:
            </p>

            <div class="row g-3 mt-1">
                <div class="col-md-4">
                    <a href="https://jems3.sbc.org.br/events/510" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
                        <div class="card border-0 bg-gradient-primary text-white text-center p-3 rounded-4 action-card h-100">
                            <i class="fa-solid fa-cloud-arrow-up fa-2x mb-2"></i>
                            <strong>JEMS3 System</strong>
                            <small class="text-white-50">Submit paper</small>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="https://www.sbc.org.br/wp-content/uploads/2024/07/modelosparapublicaodeartigos.zip" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
                        <div class="card border-0 bg-dark text-white text-center p-3 rounded-4 action-card h-100">
                            <i class="fa-solid fa-file-word fa-2x mb-2"></i>
                            <strong>Word and LaTeX</strong>
                            <small class="text-white-50">Templates (recommended)</small>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="https://www.overleaf.com/latex/templates/sbc-conferences-template-updated-sbc-template-dot-sty-v2017/pyhttxftxjqn" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
                        <div class="card border-0 bg-success text-white text-center p-3 rounded-4 action-card h-100">
                            <i class="fa-solid fa-leaf fa-2x mb-2"></i>
                            <strong>Overleaf</strong>
                            <small class="text-white-50">Online template</small>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h5 class="d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-info rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-file-lines"></i>
                </span>
                Submission Categories
            </h5>

            <div class="card bg-light border-0 rounded-4 p-3 mb-0">
                <h6 class="mb-2">
                    <i class="fa-solid fa-file-alt text-primary me-2"></i>
                    Full Papers (15 Pages)
                </h6>
                <p>
                    Research projects that have achieved a mature stage and present an original
                    contribution to the state of the art are welcome to submit in the full paper
                    category. Submissions must be relevant to the subject of the conference, and may
                    not have been published nor be under review in any other conference or journal.
                    The maximum length for full papers is
                    <strong>15 pages including references</strong>, and papers must be written in
                    English, Portuguese, or Spanish.
                </p>

                <p>
                    The papers will be reviewed by at least two reviewers in a double-anonymous
                    process. Please note that submitted papers must be anonymized, including
                    references to the authors' own previous work.
                </p>

                <p class="mb-0">
                    We are working to ensure that accepted papers will be published in the SBC OpenLib
                    (SOL) (a digital library maintained by the Brazilian Computer Society - SBC). In
                    addition, best papers will be recommended for submitting an extended version and
                    be published in a special edition that we are negotiating with a prestigious HCI
                    or Computer Science journal.
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
                    <th>Name</th>
                    <th>Affiliation</th>
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
                    <th>Name</th>
                    <th>Affiliation</th>
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
