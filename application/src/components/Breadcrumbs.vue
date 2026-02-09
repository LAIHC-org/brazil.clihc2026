<script>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'

const CENTRAL_SITE_BASE = 'https://clihc2026.laihc.org'
const SITE_HOME_LABEL_KEY = 'breadcrumbs.site_brazil'

export default {
  components: { RouterLink },
  setup() {
    const route = useRoute()
    const { t } = useI18n()

    const centralHref = computed(() => `${CENTRAL_SITE_BASE}/${Tr.currentLocale}`)

    const parentConfig = computed(() => {
      switch (route.name) {
        case 'getting-started':
        case 'registration':
          return {
            labelKey: 'nav.for_participants',
            to: Tr.i18nRoute({ name: 'getting-started' })
          }
        case 'schedule':
        case 'keynote-speakers':
          return {
            labelKey: 'nav.program',
            to: Tr.i18nRoute({ name: 'schedule' })
          }
        case 'organizers':
          return {
            labelKey: 'nav.organization',
            href: `${CENTRAL_SITE_BASE}/${Tr.currentLocale}/organizers`
          }
        case 'call-for-participation':
        case 'call-for-papers':
        case 'call-for-posters':
        case 'call-for-workshops-and-tutorials':
        case 'student-design-competition':
        case 'graduate-colloquium':
        case 'accessibility-recommendations-for-authors':
          return {
            labelKey: 'nav.calls',
            href: `${CENTRAL_SITE_BASE}/${Tr.currentLocale}/call-for-participation`
          }
        default:
          return null
      }
    })

    const currentLabel = computed(() => {
      const map = {
        organizers: 'organizers.title',
        'getting-started': 'nav.getting_started',
        registration: 'nav.rates_and_registration',
        schedule: 'nav.schedule',
        'keynote-speakers': 'nav.keynotes',
        'call-for-participation': 'nav.calls_general',
        'call-for-papers': 'nav.cfp',
        'call-for-posters': 'nav.cpt',
        'call-for-workshops-and-tutorials': 'nav.cwt',
        'student-design-competition': 'nav.sdc',
        'graduate-colloquium': 'nav.cgc',
        'accessibility-recommendations-for-authors': 'nav.accessibility_for_autors',
        'accepted-papers': 'nav.accepted_papers',
        'accessibility-FAQ': 'nav.accessibility_faqs',
        videoArchives: 'breadcrumbs.video_archives',
        'not-found-local': 'breadcrumbs.not_found',
        'not-found': 'breadcrumbs.not_found'
      }

      const key = map[route.name] || null
      if (key) return t(key)
      if (route.meta && route.meta.title) return route.meta.title
      return ''
    })

    const showBreadcrumbs = computed(() => route.name && route.name !== 'home')

    return {
      t,
      Tr,
      centralHref,
      parentConfig,
      currentLabel,
      showBreadcrumbs,
      siteHomeLabelKey: SITE_HOME_LABEL_KEY
    }
  }
}
</script>

<template>
  <div v-if="showBreadcrumbs" class="container">
    <nav aria-label="breadcrumb" class="small text-secondary">
      <ol class="breadcrumb mb-3">
        <li class="breadcrumb-item">
          <a class="uline text-secondary" :href="centralHref">{{ t('breadcrumbs.central') }}</a>
        </li>
        <li class="breadcrumb-item">
          <RouterLink class="uline text-secondary" :to="Tr.i18nRoute({ name: 'home' })">
            {{ t(siteHomeLabelKey) }}
          </RouterLink>
        </li>
        <li v-if="parentConfig" class="breadcrumb-item">
          <RouterLink
            v-if="parentConfig.to"
            class="uline text-secondary"
            :to="parentConfig.to"
          >
            {{ t(parentConfig.labelKey) }}
          </RouterLink>
          <a
            v-else
            class="uline text-secondary"
            :href="parentConfig.href"
          >
            {{ t(parentConfig.labelKey) }}
          </a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ currentLabel }}
        </li>
      </ol>
    </nav>
  </div>
</template>
