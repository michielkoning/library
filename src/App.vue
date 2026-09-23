<script setup lang="ts">
import { RouterView } from "vue-router";
import CenterWrapper from "./components/CenterWrapper.vue";
</script>

<template>
  <header>
    <CenterWrapper>
      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/scroll-spy">
          Scroll spy
        </RouterLink>
      </nav>
    </CenterWrapper>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="css" scoped>
nav {
  display: flex;
  gap: var(--spacing-2);
  margin-block-end: var(--spacing-4);
}
</style>
