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
                <strong class="text-primary text-gradient">Prazo para submissão:</strong>
                <strong class="text-danger"> 05 de abril de 2026</strong><br />
                <RouterLink
                    :to="Tr.i18nRoute({ name: 'call-for-posters', hash: '#cpt-dates' })"
                    class="uline"
                >
                    Ver todas as datas importantes
                </RouterLink>
            </div>
        </li>
    </ol>

    <p>
        Prezados colegas, cordiais saudações: convidamos docentes, pesquisadores,
        estudantes, profissionais e pessoas da indústria a submeterem seus trabalhos à
        trilha de pôsteres da
        <a href="https://clihc2026.laihc.org/" class="uline"
            >XII Conferência Latino-Americana de Interação Humano-Computador (CLIHC
            2026)</a
        >.
    </p>

    <p>
        Os pôsteres devem apresentar trabalhos em andamento ou em estágio inicial, com
        resultados preliminares. As submissões podem ser escritas em inglês, espanhol ou
        português, devem ser anônimas e ter no máximo 2 páginas, incluindo referências.
    </p>

    <p>
        A conferência acontecerá em Aracaju, Brasil, de 06 a 08 de maio de 2026.
    </p>

    <p>
        Os temas podem abranger todos os aspectos de IHC, incluindo, mas não se
        limitando a:
    </p>

    <ol>
        <li>Computação afetiva</li>
        <li>Interação cérebro-computador (BCI)</li>
        <li>CSCW e computação social</li>
        <li>Métodos de design</li>
        <li>Educação e IHC</li>
        <li>Interação incorporada</li>
        <li>IHC para o desenvolvimento (HCI4D)</li>
        <li>Saúde e IHC</li>
        <li>
            IHC e Inteligência Artificial (por exemplo, IA centrada no ser humano e
            design de interação; interação humano-IA; IHC em sistemas com IA; experiência
            do usuário e design para sistemas de IA; IHC responsável e ética para
            aplicações de IA; inteligência artificial explicável - XAI)
        </li>
        <li>IHC na sociedade</li>
        <li>Inclusão e acessibilidade</li>
        <li>Interfaces de usuário inovadoras</li>
        <li>Avaliação de interação</li>
        <li>Interfaces e interação em jogos</li>
        <li>Computação móvel</li>
        <li>Percepção e visualização</li>
        <li>Interação humano-robô e telepresença</li>
        <li>Experiência do usuário (UX) e usabilidade</li>
        <li>Propriedade intelectual e IHC</li>
    </ol>

    <h3>Submissão e datas importantes</h3>
    <p>
        Todos os manuscritos devem ser submetidos totalmente anonimizados. Por favor,
        considere um público internacional: por exemplo, evite termos locais e use o
        sistema internacional de unidades. Além disso, considere seguir as
        <a
            target="_blank"
            href="https://clihc2023.laihc.org/en/accessibility-recommendations-for-authors"
            class="uline"
            rel="noopener noreferrer"
            >diretrizes de acessibilidade (edição CLIHC 2023, abre em uma nova guia)</a
        >.
    </p>

    <h4 id="cpt-dates">Datas importantes (Pôsteres)</h4>
    <ul>
        <li>Submissão de pôsteres: <strong class="text-danger">05 de abril de 2026</strong></li>
        <li>Notificação: 15 de abril de 2026</li>
        <li>Versão final: 20 de abril de 2026</li>
        <li>Evento: 06 – 08 de maio de 2026</li>
    </ul>

    <h3>Código de Ética</h3>
    <p>
        Seguimos o
        <a href="https://www.acm.org/code-of-ethics" class="uline">Código de Ética da ACM</a>.
        Esperamos que todas as submissões, a pesquisa subjacente e o comportamento
        durante o processo de revisão e a conferência cumpram os princípios e
        responsabilidades estabelecidos pelo código.
    </p>

    <h3>Trilha de Pôsteres (2 páginas)</h3>
    <p>
        A trilha de pôsteres é destinada a apresentações e discussões de trabalhos em
        andamento ou em estágio inicial, com resultados preliminares. O limite máximo
        para pôsteres é de 2 páginas, incluindo referências, e os trabalhos devem ser
        escritos em inglês, português ou espanhol.
    </p>

    <h3>Processo de submissão</h3>
    <p>
        As submissões de pôsteres devem ser feitas por meio do sistema JEMS3 (Journal
        and Event Management System):
        <a href="https://jems3.sbc.org.br/events/" class="uline"
            >https://jems3.sbc.org.br/events/</a
        >
    </p>

    <p>
        O formato de submissão para cada categoria seguirá o template da Sociedade
        Brasileira de Computação. Os autores podem escolher trabalhar em um dos
        seguintes formatos:
    </p>

    <ul>
        <li>
            <a
                href="https://www.sbc.org.br/wp-content/uploads/2024/07/modelosparapublicaodeartigos.zip"
                class="uline"
                >Microsoft Word e LaTeX (recomendado)</a
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
        Mais informações:
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
