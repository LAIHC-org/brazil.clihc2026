<script>

	import Tr from '@/i18n/translation'

	export default {
		setup() {
			return { Tr }
		}
	}
</script>

<template>
    <footer class="footer pt-5 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-6 col-md-2 mb-4">
                    <div>
                        <h2 class="text-gradient text-secondary text-sm h3">{{ $t("nav.calls") }}</h2>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <a class="nav-link uline" :href="`https://clihc2026.laihc.org/${Tr.currentLocale}/call-for-participation`">
                                    {{ $t("nav.calls_general") }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-6 col-md-2 mb-4">
                    <div>
                        <h2 class="text-gradient text-secondary text-sm h3">{{ $t("nav.for_participants") }}</h2>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'getting-started' })"
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.getting_started") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'registration' })"
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.rates_and_registration") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-6 col-md-2 mb-4">
                    <div>
                        <h2 class="text-gradient text-secondary text-sm h3">{{ $t("nav.program") }}</h2>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'schedule' })"
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.schedule") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link uline" :to="Tr.i18nRoute({ name: 'keynote-speakers' })">
                                    {{ $t("nav.keynotes") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-6 col-md-2 mb-4">
                    <div>
                        <h2 class="text-gradient text-secondary text-sm h3">{{ $t("nav.organization") }}</h2>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <a class="nav-link uline" :href="`https://clihc2026.laihc.org/${Tr.currentLocale}/organizers`">
                                    {{ $t("nav.organization_general") }}
                                </a>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'organizers' })"
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.organization_local") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <div>
                        <h2 class="text-gradient text-secondary font-weight-bolder fs-5">{{ $t("nav.sitemap") }}</h2>
                    </div>
                    <ul class="flex-column ms-n3 nav">
                        <li class="nav-item">
                            <a class="nav-link uline" href="/">{{ $t("nav.home_local") }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link uline" :href="`https://clihc2026.laihc.org/${Tr.currentLocale}`">
                                {{ $t("nav.central_site") }}
                            </a>
                        </li>
                    </ul>
                    <div class="d-flex align-items-center gap-2 mt-3 mb-3">
                        <a href="https://www.facebook.com/clihc" target="_blank" rel="noopener noreferrer"
                            class="btn-social-footer d-inline-flex align-items-center justify-content-center rounded-circle">
                            <i class="fab fa-facebook"></i>
                            <span class="visually-hidden">{{ $t("nav.facebook") }}</span>
                        </a>
                        <a href="https://x.com/clihc2026" target="_blank" rel="noopener noreferrer"
                            class="btn-social-footer d-inline-flex align-items-center justify-content-center rounded-circle">
                            <i class="fab fa-x-twitter"></i>
                            <span class="visually-hidden">{{ $t("nav.twitter") }}</span>
                        </a>
                        <a href="https://www.instagram.com/clihc.conf/" target="_blank" rel="noopener noreferrer"
                            class="btn-social-footer d-inline-flex align-items-center justify-content-center rounded-circle">
                            <i class="fab fa-instagram"></i>
                            <span class="visually-hidden">Instagram</span>
                        </a>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="https://www.laihc.org/">
                            <img src="/assets/img/logos/laihc-blanco.svg" alt="LaIHC" class="footer-logo" />
                        </a>
                    </div>
                </div>
            </div>

            <hr class="footer-divider my-0" />

            <div class="py-4">
                <div class="text-center">
                    <p class="my-0 text-sm opacity-6">
                        {{ $t("nav.copyright") }}
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.btn-social-footer {
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.1);
    color: #F6F5F2;
    font-size: 1rem;
    transition: all 0.2s ease;
}

.btn-social-footer:hover {
    background: rgba(255, 255, 255, 0.25);
    color: #fff;
    transform: translateY(-2px);
}

.footer-logo {
    height: 45px;
    opacity: 0.85;
    transition: opacity 0.2s ease;
}

.footer-logo:hover {
    opacity: 1;
}

.footer-divider {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.footer .nav-link {
    transition: opacity 0.2s ease;
}

.footer .nav-link:hover {
    opacity: 0.7;
}
</style>
