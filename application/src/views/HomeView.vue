<script setup>
import TheJumbotron from '@/components/Jumbotron.vue'
import TheAboutSection from '@/components/AboutSection.vue'
import TheSpeakers from '@/components/TheSpeakers.vue'
import TheSpetialThanks from '@/components/SpetialThanks.vue'
import TheDescription from '@/components/Description.vue'
import TheOrganization from '@/components/TheOrganization.vue'
import TheSupporters from '@/components/TheSupporters.vue'
import TheCoordinationOfProgram from '@/components/TheCoordinationOfProgram.vue'
import TheSupport from '@/components/Support.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <TheJumbotron />
  <TheAboutSection />
  <section class="py-5 bg-gradient-dark position-relative overflow-hidden">
    <div class="container py-4">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8">
          <h2 class="text-white mb-3">{{ t("home.keynotes") }}</h2>
          <p class="text-white opacity-7 mb-0">{{ t("home.keynotes_message") }}</p>
        </div>
      </div>
    </div>
  </section>
  <TheSpeakers />
  <!-- <TheDescription /> -->
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row">
        <TheOrganization />
        <TheCoordinationOfProgram />
        <TheSupporters />
        <TheSpetialThanks />
      </div>
    </div>
  </section>
  <!-- TheVirtualVenues /> -->
  <!-- <TheSupport /> -->
</template>
