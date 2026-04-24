<script>
import { shallowRef, watch, defineAsyncComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";

export default {
    setup() {
        const { locale } = useI18n();
        const currentComponent = shallowRef(null);

        const loadComponent = async (newLocale) => {
            currentComponent.value = await getComponentForLocale(newLocale);
        };

        watch(locale, loadComponent, { immediate: true });

        async function getComponentForLocale(locale) {
            switch (locale) {
                case "en":
                    return defineAsyncComponent(() =>
                        import("@/components/locales/en/Message.vue")
                    );
                case "es":
                    return defineAsyncComponent(() =>
                        import("@/components/locales/es/Message.vue")
                    );
                case "pt":
                    return defineAsyncComponent(() =>
                        import("@/components/locales/pt/Message.vue")
                    );
                default:
                    return null;
            }
        }

        // 🔹 LOGO SEGÚN IDIOMA
        const logoSrc = computed(() => {
            switch (locale.value) {
                case "en":
                    return "/assets/img/logos/clihc2026_en.png";
                case "pt":
                    return "/assets/img/logos/clihc2026_pt.png";
                case "es":
                default:
                    return "/assets/img/logos/clihc2026_es.png";
            }
        });

        return {
            currentComponent,
            logoSrc,
            Tr,
        };
    },
};
</script>

<template>
    <!-- Jumbotron -->
    <header class="header-2">
        <div
            class="page-header section-height-100 relative"
            style="background-image: url('/assets/img/banner-2.png')"
        >
            <div class="container">
                <div class="row">
                    <div
                        class="col-lg-8 z-index-2 border-radius-xl mx-auto py-3 mt-7 mb-4 blur shadow-blur"
                    >
                        <div class="row">
                            <div class="col-md-4 text-center">
                                <div class="pt-3">
                                    <img
                                        :src="logoSrc"
                                        height="250"
                                        alt="CLIHC 2026 logo"
                                        style="position: relative; top: -2px"
                                    /><br />
                                </div>
                            </div>
                            <div class="col-md-8 text-center">
                                <h1 class="visually-hidden">CLIHC 2026 — Brazil Event</h1>
                                <p class="lead mt-3 mx-0 my-0" aria-hidden="true"><strong>CLIHC 2026 — Brazil Event</strong></p>
                                <p class="lead mt-0">
                                    {{ $t("jumbotron.conference") }}
                                </p>
                                <p class="lead mt-2">
                                    <strong>
                                        {{ $t("jumbotron.date") }} <br />
                                        Aracaju, Brazil<br />
                                    </strong>
                                </p>

                                <p class="lead pt-2">
                                    <a
                                        :href="`https://clihc2026.laihc.org/${Tr.currentLocale}/call-for-participation`"
                                        class="btn btn-lg bg-gradient-yellow btn-round"
                                    >
                                        {{ $t("jumbotron.button") }}
                                    </a>

                                    <!--
										<template v-if="currentComponent">
											<component :is="currentComponent" />
										</template>
										-->
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- End Jumbotron -->
</template>
