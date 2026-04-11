<script setup>
import SpeakerLargeItem from "@/components/SpeakerLargeItem.vue";
</script>

<template>
    <SpeakerLargeItem>
        <template #image>
            <img
                id="luciana-zaina"
                class="img border-radius-lg w-100 position-relative z-index-2"
                src="/assets/img/people/lucianaZaina.png"
                alt="Luciana Zaina"
            />
        </template>
        <template #image-shadow>
            <div
                class="colored-shadow"
                style="background-image: url('/assets/img/people/lucianaZaina.png')"
            ></div>
        </template>
        <template #name> Dr. Luciana Zaina </template>

        <p>
            She is a Full Professor at the Department of Computing of the Federal
            University of São Carlos, Brazil. Her expertise lies in UX design and
            empirical studies in both Human–Computer Interaction and Software Engineering.
            She has served as principal investigator on Research, Development, and
            Innovation projects funded by Brazilian agencies (FAPESP, CNPq, and FUNDEP) as
            well as by Brazilian software companies. She was featured in an interview on
            the future of Agile UX in industry, published in Interaction Design: Beyond
            Human–Computer Interaction (2023), one of the most widely adopted HCI books in
            academia and professional practice. Her current research interests include
            user experience design and evaluation, user experience in complex systems, and
            long-term user experience, developed in close collaboration with industry
            partners in Brazil. Since 2020, she has been recognized as a CNPq Fellow
            (DT-2), an award granted to Brazilian researchers acknowledged as outstanding
            leaders in applied, industry-oriented research.
        </p>
    </SpeakerLargeItem>

    <SpeakerLargeItem>
        <template #image>
            <img
                id="pedro-reynolds"
                class="img border-radius-lg w-100 position-relative z-index-2"
                src="/assets/img/people/pedroReynolds.png"
                alt="Pedro Reynolds-Cuéllar"
            />
        </template>
        <template #image-shadow>
            <div
                class="colored-shadow"
                style="background-image: url('/assets/img/people/pedroReynolds.png')"
            ></div>
        </template>
        <template #name> Dr. Pedro Reynolds-Cuéllar </template>

        <p>
            He is a Research Scientist at the Robotics and AI Institute (RAI), conducting
            research that provides data to support evidence-based societal decisions on
            the design, integration, and regulation of robotics and artificial
            intelligence. He holds a Bachelor of Science in Linguistics from the National
            University of Colombia and a Master of Science from the Personal Robots group
            at the MIT Media Lab. He completed his Ph.D. jointly in the Arts, Culture, &
            Technology and Media Arts and Sciences departments at the MIT Media Lab. He is
            also a co-founder of Diversa, a design collective and organization focused on
            supporting rural technology initiatives across Colombia.
        </p>
    </SpeakerLargeItem>

    <SpeakerLargeItem>
        <template #image>
            <img
                id="ann-blandford"
                class="img border-radius-lg w-100 position-relative z-index-2"
                src="/assets/img/people/annBlandford.png"
                alt="Ann Blandford"
            />
        </template>
        <template #image-shadow>
            <div
                class="colored-shadow"
                style="background-image: url('/assets/img/people/annBlandford.png')"
            ></div>
        </template>
        <template #name> Dr. Ann Blandford </template>

        <p>
            She is a Professor of Human-Centred Information Technology at University
            College London (UCL), where she also served as Director of the UCL Interaction
            Centre (UCLIC) from 2004 to 2021. Her research addresses human-computer
            interaction, with a focus on user-centred design, information security, and
            interaction with museums and cultural collections. She holds a Ph.D. from the
            University of Cambridge and is a Fellow of the Royal Academy of Engineering.
            She was Vice-Dean for Research in the Faculty of Engineering Sciences at UCL
            and Chair of the Engineering and Physical Sciences Research Council (EPSRC)
            Grants Committee. She has published extensively on human-computer interaction,
            including the book <em>Expertise in Context: Human-Computer Interaction</em>.
            Her current research interests include the design of secure and usable
            interactions, access to digital cultural collections, and understanding
            decision-making in complex contexts.
        </p>
    </SpeakerLargeItem>
</template>
