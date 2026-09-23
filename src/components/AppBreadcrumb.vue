<template>
  <nav v-if="pages.length" aria-label="Breadcrumb">
    <ol>
      <li v-for="(page, index) in pages" :key="page.title">
        <router-link :aria-current="index === pages.length - 1 ? 'page' : undefined" :to="page.to">
          {{ page.title }}
        </router-link>
        <icon icon="solar:alt-arrow-right-bold" v-if="index < pages.length - 1" />
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { RouterLink, type RouteLocationRaw } from "vue-router";

defineProps<{
  pages: {
    title: string;
    to: RouteLocationRaw;
  }[];
}>();
</script>

<style lang="css" scoped>
nav {
  margin-block-end: var(--spacing-4);
}

ol {
  display: flex;
  gap: var(--spacing-1);
  padding: 0;
  margin: 0;
  list-style: none outside;
}

li {
  display: flex;
  gap: var(--spacing-1);
  align-items: center;
}

a {
  &[aria-current="page"] {
    color: var(--color-body-text);
    text-decoration: none;
  }
}

svg {
  inline-size: 1.25em;
  translate: 0 -1px;
}
</style>
