<script lang="ts" setup>
import { RouterLink, type RouteLocationRaw } from "vue-router";

defineProps<{
  pages: {
    title: string;
    to: RouteLocationRaw;
  }[];
}>();
</script>

<template>
  <nav v-if="pages.length" aria-label="Breadcrumb">
    <ol>
      <li v-for="(page, index) in pages" :key="page.title">
        <router-link :aria-current="index === pages.length - 1 ? 'page' : undefined" :to="page.to">
          {{ page.title }}
        </router-link>
      </li>
    </ol>
  </nav>
</template>

<style lang="css" scoped>
nav {
  margin-block-end: var(--spacing-4);
}

ol {
  display: flex;
  gap: var(--spacing-2);
  padding: 0;
  margin: 0;
  list-style: none outside;
}

li {
  display: flex;
  gap: var(--spacing-2);
  align-items: center;

  &:not(:last-child)::after {
    content: "/";
  }
}

a {
  &[aria-current="page"] {
    color: var(--color-body-text);

    &:not(:hover) {
      text-decoration: none;
    }
  }
}

svg {
  inline-size: 1.25em;
  translate: 0 -1px;
}
</style>
