<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { nextTick } from 'vue'
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
import BackToTop from '@/components/BackToTop.vue'

const skipToContent = (e) => {
  e.preventDefault()
  const main = document.getElementById('main-content')
  if (main) {
    // Removemos o foco do link para ele sumir
    document.activeElement.blur()
    
    // Focamos o conteúdo principal
    main.focus({ preventScroll: true })
    
    // Rolamos a tela suavemente para baixo da navbar
    window.scrollTo({
      top: main.offsetTop - 80,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div>
    <a href="#main-content" @click="skipToContent" class="skip-to-content visually-hidden-focusable bg-primary text-white px-4 py-2 position-absolute top-0 start-50 translate-middle-x mt-3 rounded-pill shadow-sm" style="z-index: 9999;">
      {{ $t("nav.skip_to_content") }}
    </a>
    <TheNavBar />
    <main id="main-content" tabindex="-1">
      <RouterView />
    </main>
  </div>
  <TheFooter />
  <BackToTop />
</template>

<style>
  @import '@/assets/base.css';
  @import '@/assets/style.css';
</style>
