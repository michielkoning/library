<script setup lang="ts">
import { RouterView } from "vue-router";
import CenterWrapper from "./components/CenterWrapper.vue";
</script>

<template>
  <div class="page">
    <header>
      <center-wrapper>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/scroll-spy">Scroll spy</router-link>
          <router-link to="/form">Form</router-link>
          <router-link to="/carousel">Carousel</router-link>
          <router-link to="/colors">Colors</router-link>
        </nav>
      </center-wrapper>
    </header>
    <main>
      <router-view />
    </main>

    <footer>
      <center-wrapper>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/scroll-spy">Scroll spy</router-link>
          <router-link to="/form">Form</router-link>
          <router-link to="/carousel">Carousel</router-link>
          <router-link to="/colors">Colors</router-link>
        </nav>
      </center-wrapper>
    </footer>
  </div>
</template>

<style lang="css" scoped>
nav {
  display: flex;
  gap: var(--spacing-2);
}

footer,
header {
  padding-block: var(--spacing-2);
  color: var(--color-landmark-fg);
  background-color: var(--color-landmark-bg);
}

.page {
  display: flex;
  flex-direction: column;
  min-block-size: 100dvh;
}

header {
  margin-block-end: var(--spacing-4);
}

main {
  flex: 1 0 auto;
}

a {
  color: currentcolor;
}
</style>
