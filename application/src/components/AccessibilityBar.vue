<template>
  <div class="accessibility-bar bg-dark text-white py-1 px-3 d-flex flex-wrap justify-content-between align-items-center" aria-label="Acessibilidade / Accessibility">
    <div class="d-flex align-items-center">
      <a href="#main-content" @click="skipToContent" class="text-white text-decoration-none fw-bold px-2 py-1" style="font-size: 0.85rem;" :aria-label="$t('nav.skip_to_content')">
        <i class="fa-solid fa-arrow-down me-1" aria-hidden="true"></i>
        {{ $t("nav.skip_to_content") }}
      </a>
    </div>
    <div class="d-flex align-items-center flex-wrap gap-2">
      <button @click="toggleContrast" class="btn btn-link text-white text-decoration-none p-1 fw-bold" style="font-size: 0.85rem;" :aria-label="isHighContrast ? $t('nav.normal_contrast') : $t('nav.high_contrast')">
        <i class="fa-solid fa-circle-half-stroke me-1" aria-hidden="true"></i>
        {{ isHighContrast ? $t("nav.normal_contrast") : $t("nav.high_contrast") }}
      </button>
      <div class="vr bg-white opacity-50 mx-1 d-none d-sm-block"></div>
      <button @click="decreaseFont" class="btn btn-link text-white text-decoration-none p-1 fw-bold" style="font-size: 0.85rem;" :aria-label="$t('nav.decrease_font')">
        A-
      </button>
      <button @click="increaseFont" class="btn btn-link text-white text-decoration-none p-1 fw-bold" style="font-size: 1rem;" :aria-label="$t('nav.increase_font')">
        A+
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isHighContrast = ref(false)
const currentFontSize = ref(100) // Percentage

const skipToContent = (e) => {
  e.preventDefault()
  const main = document.getElementById('main-content')
  if (main) {
    main.focus({ preventScroll: true })
    
    // Obtém a altura da navbar para não esconder o conteúdo debaixo dela
    const navbar = document.querySelector('.navbar')
    const offset = navbar ? navbar.offsetHeight + 20 : 80

    window.scrollTo({
      top: main.offsetTop - offset,
      behavior: 'smooth'
    })
  }
}

const toggleContrast = () => {
  isHighContrast.value = !isHighContrast.value
  if (isHighContrast.value) {
    document.body.classList.add('high-contrast-mode')
    localStorage.setItem('accessibility_contrast', 'high')
  } else {
    document.body.classList.remove('high-contrast-mode')
    localStorage.setItem('accessibility_contrast', 'normal')
  }
}

const increaseFont = () => {
  if (currentFontSize.value < 130) {
    currentFontSize.value += 10
    updateFont()
  }
}

const decreaseFont = () => {
  if (currentFontSize.value > 90) {
    currentFontSize.value -= 10
    updateFont()
  }
}

const updateFont = () => {
  document.documentElement.style.fontSize = `${currentFontSize.value}%`
  localStorage.setItem('accessibility_fontsize', currentFontSize.value)
}

onMounted(() => {
  const savedContrast = localStorage.getItem('accessibility_contrast')
  if (savedContrast === 'high') {
    isHighContrast.value = true
    document.body.classList.add('high-contrast-mode')
  }
  
  const savedFontSize = localStorage.getItem('accessibility_fontsize')
  if (savedFontSize) {
    currentFontSize.value = parseInt(savedFontSize)
    updateFont()
  }
})
</script>

<style scoped>
.accessibility-bar {
  font-family: Arial, sans-serif;
  z-index: 1050;
  position: relative;
}
.accessibility-bar button:focus,
.accessibility-bar a:focus {
  outline: 2px solid #fff;
  outline-offset: 2px;
}
.vr {
  width: 1px;
  min-height: 1em;
}
</style>
