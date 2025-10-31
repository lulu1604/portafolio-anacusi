<template>
  <router-view />
</template>

<script setup>
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'


onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  })
})
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #0b0b0f;
}
</style>
