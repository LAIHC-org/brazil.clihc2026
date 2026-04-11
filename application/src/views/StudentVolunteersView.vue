<script>
import TheHeader from '@/components/Header.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

import Tr from '@/i18n/translation'

import { shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    TheHeader,
    Breadcrumbs
  },
  setup() {
    const { locale } = useI18n()
    const Component = shallowRef(null)

    const loadComponents = async (newLocale) => {
      Component.value = await getContentForLocale(newLocale)
    }

    watch(locale, loadComponents, { immediate: true })

    async function getContentForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Student-volunteers.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Student-volunteers.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Student-volunteers.vue'))
        default:
          return null
      }
    }

    return {
      Component,
      Tr
    }
  }
}
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t("nav.student_volunteers") }}
    </template>
  </TheHeader>
  <Breadcrumbs />

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center my-3">
          <div class="col-lg-10">

            <template v-if="Component">
              <component :is="Component" />
            </template>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
