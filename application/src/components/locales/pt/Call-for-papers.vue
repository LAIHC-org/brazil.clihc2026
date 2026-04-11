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
            <strong class="text-white fs-5">Prazo para submissão de resumos: 23 de fevereiro</strong>
            <br />
            <RouterLink
                :to="Tr.i18nRoute({ name: 'call-for-papers', hash: '#cpf-dates' })"
                class="uline text-white-50"
            >
                Ver todas as datas importantes <i class="fa-solid fa-arrow-down ms-1"></i>
            </RouterLink>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h5 class="d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-primary rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-bullhorn"></i>
                </span>
                Sobre a CLIHC 2026
            </h5>
            <p>
                A
                <a href="https://clihc2026.laihc.org/" class="uline">
                    XII Conferência Latino-Americana de Interação Humano-Computador (CLIHC
                    2026)</a
                >
                tem como objetivo oferecer um fórum de alto nível que reúna as comunidades
                latino-americana e internacional de pesquisa em Interação Humano-Computador (IHC),
                para discutir e compartilhar ideias, métodos, abordagens e técnicas para o
                projeto, implementação e avaliação de experiências interativas do usuário. De
                acordo com edições anteriores, acreditamos que a IHC deve fomentar a produção de
                tecnologia que possa ser utilizada e beneficiar o maior número possível de
                pessoas, promovendo o intercâmbio intercultural e a cooperação entre pessoas com
                diferentes contextos e necessidades.
            </p>
            <p>
                Neste ano, a CLIHC 2026 ocorrerá em duas cidades, Aracaju/Brasil e Oaxaca/México.
                No entanto, a
                <strong>
                    apresentação dos artigos completos ocorrerá exclusivamente na cidade satélite
                    de Aracaju, Brasil </strong
                >. No momento, estão abertas submissões na seguinte categoria:
            </p>
            <span class="badge bg-gradient-primary fs-6 px-3 py-2 rounded-pill mb-2">Artigos completos</span>
            <p class="mt-3">
                Os autores são convidados a preparar e submeter artigos que relatem projetos de
                pesquisa, designs inovadores, estudos com usuários, modelos de interação, estudos
                de campo, estudos de caso, entre outros. Acadêmicos, pesquisadores, profissionais
                da indústria, bem como estudantes de graduação e pós-graduação, são bem-vindos a
                participar do processo de seleção por revisão por pares dos trabalhos que serão
                apresentados na conferência, de 06 a 08 de maio de 2026.
            </p>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h5 class="d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-info rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-lightbulb"></i>
                </span>
                Temas de Interesse
            </h5>
            <p>Os temas das submissões podem abranger todos os aspectos da IHC, incluindo, mas não se limitando a:</p>
            <div class="d-flex flex-wrap gap-2">
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Computação afetiva</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Interação cérebro-computador (BCI)</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">CSCW e computação social</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Métodos de design</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Educação e IHC</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Interação incorporada</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">IHC para o desenvolvimento (HCI4D)</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Saúde e IHC</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">IHC e Inteligência Artificial</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">IHC na sociedade</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Inclusão e acessibilidade</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Interfaces de usuário inovadoras</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Avaliação da interação</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Interfaces e interação em jogos</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Computação móvel</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Percepção e visualização</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Interação humano-robô e telepresença</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Experiência do usuário (UX) e usabilidade</span>
                <span class="badge bg-light text-dark border rounded-pill px-3 py-2">Propriedade intelectual e IHC</span>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 mb-4">
        <div class="card-body p-4">
            <h5 class="d-flex align-items-center mb-3">
                <span class="icon icon-shape icon-sm bg-gradient-success rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-paper-plane"></i>
                </span>
                Submissão e Datas Importantes
            </h5>
            <p>
                Todos os manuscritos devem ser submetidos completamente anonimizados. Por favor,
                considere um público internacional: evite termos locais e utilize o sistema
                internacional de unidades. Além disso, considere seguir as
                <a
                    target="_blank"
                    href="https://clihc2023.laihc.org/en/accessibility-recommendations-for-authors"
                    class="uline"
                    rel="noopener noreferrer"
                >
                    diretrizes de acessibilidade (edição CLIHC 2023, abre em nova aba) </a
                >.
            </p>

            <h5 id="cpf-dates" class="mt-4 mb-3">Datas importantes (Artigos completos)</h5>
            <div class="cfp-timeline">
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-danger"></div>
                    <div class="cfp-timeline-content">
                        <strong class="text-danger">Submissão de resumos</strong>
                        <span class="text-muted ms-2">23 de fevereiro</span>
                    </div>
                </div>
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-warning"></div>
                    <div class="cfp-timeline-content">
                        <strong>Submissão de artigos</strong>
                        <span class="text-muted ms-2">1º de março</span>
                    </div>
                </div>
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-info"></div>
                    <div class="cfp-timeline-content">
                        <strong>Notificação</strong>
                        <span class="text-muted ms-2">30 de março</span>
                    </div>
                </div>
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-success"></div>
                    <div class="cfp-timeline-content">
                        <strong>Versão final (camera ready)</strong>
                        <span class="text-muted ms-2">12 de abril</span>
                    </div>
                </div>
                <div class="cfp-timeline-item">
                    <div class="cfp-timeline-dot bg-primary"></div>
                    <div class="cfp-timeline-content">
                        <strong>Evento</strong>
                        <span class="text-muted ms-2">06 – 08 de maio</span>
                    </div>
                </div>
            </div>
            <p class="text-muted mt-3 mb-0"><small><i class="fa-solid fa-circle-info me-1"></i>Os prazos se encerram à meia-noite AoE (Anywhere on Earth).</small></p>
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
                        Código de Ética
                    </h5>
                    <p class="mb-0">
                        Seguimos o
                        <a href="https://www.acm.org/code-of-ethics" class="uline">
                            Código de Ética da ACM </a
                        >. Esperamos que todas as submissões, pesquisas subjacentes e o comportamento
                        durante o processo de revisão e a conferência estejam em conformidade com os
                        princípios e responsabilidades estabelecidos pelo código.
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
                        As pessoas autoras de quatro artigos completos premiados como
                        <strong>Best Papers</strong> na CLIHC 2026 serão convidadas a submeter uma versão
                        estendida em inglês, com pelo menos <strong>30% de conteúdo original</strong>,
                        para compor uma edição especial da Journal of the Brazilian Computer Society
                        (JBCS).
                    </p>
                    <ul class="mb-0">
                        <li>
                            <a
                                href="https://journals-sol.sbc.org.br/index.php/jbcs/clihc-2026"
                                class="uline"
                            >
                                Chamada completa da edição especial JBCS
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://journals-sol.sbc.org.br/index.php/jbcs/open-calls"
                                class="uline"
                            >
                                Demais chamadas abertas da JBCS
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
                Processo de Submissão
            </h5>
            <p>
                As submissões de artigos completos devem ser realizadas por meio do
                <a href="https://jems3.sbc.org.br/events/510" class="uline">Sistema JEMS3</a>
                (Journal and Event Management System).
            </p>
            <p>
                O formato de submissão a ser utilizado seguirá o modelo da Sociedade Brasileira de
                Computação. Os autores podem optar por trabalhar em um dos seguintes formatos:
            </p>

            <div class="row g-3 mt-1">
                <div class="col-md-4">
                    <a href="https://jems3.sbc.org.br/events/510" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
                        <div class="card border-0 bg-gradient-primary text-white text-center p-3 rounded-4 action-card h-100">
                            <i class="fa-solid fa-cloud-arrow-up fa-2x mb-2"></i>
                            <strong>Sistema JEMS3</strong>
                            <small class="text-white-50">Submeter artigo</small>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="https://www.sbc.org.br/wp-content/uploads/2024/07/modelosparapublicaodeartigos.zip" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
                        <div class="card border-0 bg-dark text-white text-center p-3 rounded-4 action-card h-100">
                            <i class="fa-solid fa-file-word fa-2x mb-2"></i>
                            <strong>Word e LaTeX</strong>
                            <small class="text-white-50">Modelos (recomendado)</small>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="https://www.overleaf.com/latex/templates/sbc-conferences-template-updated-sbc-template-dot-sty-v2017/pyhttxftxjqn" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
                        <div class="card border-0 bg-success text-white text-center p-3 rounded-4 action-card h-100">
                            <i class="fa-solid fa-leaf fa-2x mb-2"></i>
                            <strong>Overleaf</strong>
                            <small class="text-white-50">Template online</small>
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
                Categorias de Submissão
            </h5>

            <div class="card bg-light border-0 rounded-4 p-3 mb-0">
                <h6 class="mb-2">
                    <i class="fa-solid fa-file-alt text-primary me-2"></i>
                    Artigos completos (15 páginas)
                </h6>
                <p>
                    Projetos de pesquisa que tenham alcançado um estágio maduro e apresentem uma
                    contribuição original ao estado da arte são bem-vindos na categoria de artigos
                    completos. As submissões devem ser relevantes para o tema da conferência e não
                    podem ter sido publicadas nem estar sob avaliação em outra conferência ou revista.
                    O limite máximo é de
                    <strong>15 páginas, incluindo referências</strong>, e os artigos devem ser
                    escritos em inglês, português ou espanhol.
                </p>

                <p>
                    Os artigos serão avaliados por pelo menos dois revisores em um processo de dupla
                    anonimização. Os trabalhos submetidos devem estar anonimizados, incluindo
                    referências a trabalhos anteriores dos próprios autores.
                </p>

                <p class="mb-0">
                    Estamos trabalhando para garantir que os artigos aceitos sejam publicados na SBC
                    OpenLib (SOL), a biblioteca digital mantida pela Sociedade Brasileira de
                    Computação (SBC). Além disso, os melhores artigos serão recomendados para
                    submissão de uma versão estendida e publicação em uma edição especial que está
                    sendo negociada com uma revista de prestígio na área de IHC ou Ciência da
                    Computação.
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
                    <th>Nome</th>
                    <th>Afiliação</th>
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
                    <th>Nome</th>
                    <th>Afiliação</th>
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
