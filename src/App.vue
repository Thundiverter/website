<script setup>
import FirstSection from './components/FirstSection.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <main>
    <FirstSection />
    <RouterView></RouterView>
    <Footer />
  </main>
</template>

<style scoped>
</style>
