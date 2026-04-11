<script>
import { shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
  
    const { locale } = useI18n()
    const contentComponent = shallowRef(null)

    const loadComponents = async (newLocale) => {
      contentComponent.value = await getContentForLocale(newLocale)
    }

    watch(locale, loadComponents, { immediate: true })

    async function getContentForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Speakers-small.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Speakers-small.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Speakers-small.vue'))
        default:
          return null
      }
    }

    return {
      contentComponent,
    }
  }
}
</script>

<template>
    <section class="py-5">
        <div class="container" id="speakers">
            <template v-if="contentComponent">
                <component :is="contentComponent" />
            </template>
        </div>
    </section>
</template>