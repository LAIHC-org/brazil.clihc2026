<template>
  <button 
    @click="scrollToTop" 
    class="btn rounded-circle position-fixed shadow-lg d-flex align-items-center justify-content-center"
    :class="{ 'show': isVisible }"
    style="background-color: #426F3C; color: white; border: none; bottom: 2rem; right: 2rem; width: 50px; height: 50px; z-index: 1000; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;"
    :style="isVisible ? 'opacity: 1; pointer-events: auto;' : ''"
    :aria-label="$t('nav.back_to_top')"
    title="Back to top"
  >
    <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const checkScroll = () => {
  // Show button when scrolled down 300px
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Move focus silently to the main content container for screen readers,
  // without triggering visual outlines for mouse users.
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    mainContent.focus({ preventScroll: true });
  }
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.addEventListener('scroll', checkScroll);
});
</script>
