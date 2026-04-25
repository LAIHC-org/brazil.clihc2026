<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>

<template>
  <main role="main">
    <router-link :to="{ hash: '#main-content' }" class="skip-to-content visually-hidden-focusable bg-primary text-white px-4 py-2 position-absolute top-0 start-50 translate-middle-x mt-3 rounded-pill shadow-sm" style="z-index: 9999;">{{ $t("nav.skip_to_content") }}</router-link>
    <TheNavBar />
    <div id="main-content" tabindex="-1">
      <RouterView />
    </div>
  </main>
  <TheFooter />
  <BackToTop />
</template>

<style>
  @import '@/assets/base.css';
  @import '@/assets/style.css';
</style>
