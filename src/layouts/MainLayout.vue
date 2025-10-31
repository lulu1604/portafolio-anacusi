<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="glass-header">
      <q-toolbar>
        <div class="text-h6 text-bold text-white">Ana<span class="text-primary">Cusi</span></div>
        <q-space />
        <q-btn flat label="Inicio" @click="scrollTo('inicio')" />
        <q-btn flat label="Sobre mí" @click="scrollTo('sobre-mi')" />
        <q-btn flat label="Proyectos" @click="scrollTo('proyectos')" />
        <q-btn flat label="Contacto" @click="scrollTo('contacto')" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script setup>
// no necesitamos nada adicional aquí
</script>

<style scoped>
.q-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

</style>
