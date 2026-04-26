<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { nextTick } from 'vue'
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
import BackToTop from '@/components/BackToTop.vue'
import AccessibilityBar from '@/components/AccessibilityBar.vue'

</script>

<template>
  <div>
    <AccessibilityBar />
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
