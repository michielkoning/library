<script setup lang="ts">
import { RouterView } from "vue-router";
import CenterWrapper from "./components/CenterWrapper.vue";
</script>

<template>
  <header>
    <center-wrapper>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/scroll-spy">Scroll spy</router-link>
        <router-link to="/form">Form</router-link>
        <router-link to="/carousel">Carousel</router-link>
      </nav>
    </center-wrapper>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style lang="css" scoped>
nav {
  display: flex;
  gap: var(--spacing-2);
  margin-block-end: var(--spacing-4);
}
</style>
