<script>
import { shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
	setup() {
		const { locale } = useI18n()
		const currentComponent = shallowRef(null)

		const loadComponent = async (newLocale) => {
			currentComponent.value = await getComponentForLocale(newLocale)
		}

		watch(locale, loadComponent, { immediate: true })

		async function getComponentForLocale(locale) {
			switch (locale) {
				case 'en':
					return defineAsyncComponent(() => import('@/components/locales/en/AboutContent.vue'))
				case 'es':
					return defineAsyncComponent(() => import('@/components/locales/es/AboutContent.vue'))
				case 'pt':
					return defineAsyncComponent(() => import('@/components/locales/pt/AboutContent.vue'))
				default:
					return null
			}
		}

		return {
			currentComponent
		}
	}
}
</script>

<template>
	<section class="py-5">
		<div class="container">
			<template v-if="currentComponent">
				<component :is="currentComponent" />
			</template>
		</div>
	</section>
</template>
