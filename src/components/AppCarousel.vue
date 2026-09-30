<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  items: string[];
}>();

const total = computed(() => {
  return props.items.length;
});
</script>

<template>
  <div class="wrapper">
    <ul>
      <li v-for="item in items" :key="item">
        <slot :name="item" />
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  position: relative;
}

ul {
  display: grid;
  grid-template-columns: repeat(v-bind(total), 100%);
  gap: var(--spacing-2);
  padding-inline-start: 0;
  list-style: none;
  scroll-snap-type: x mandatory;
  scrollbar-color: var(--color-gray-400) transparent;
  scrollbar-width: thin;

  &::scroll-button(*) {
    position: absolute;
    inset-block-start: 50%;
    display: none;
    inline-size: 1.5em;
    aspect-ratio: 0.571;
    margin-block-start: calc(var(--spacing-8) * -1);
    cursor: pointer;
    outline: 2px solid var(--color-black);
    outline-offset: 0;
    content: "";
    background-color: var(--color-gray-100);
    border: 0;
    opacity: 0.7;
    transition: opacity var(--transition);
    border-shape: var(--chevron);
  }

  &::scroll-button(*):hover,
  &::scroll-button(*):focus {
    opacity: 1;
  }

  &::scroll-button(*):active {
    translate: 0 1px;
  }

  &::scroll-button(*):disabled {
    opacity: 0.2;
  }

  &::scroll-button(left) {
    inset-inline-start: 1em;
    rotate: 180deg;
  }

  &::scroll-button(right) {
    inset-inline-end: 1em;
  }

  &:has(> li:nth-child(2)) {
    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }

    overflow-x: scroll;
    scroll-marker-group: after;

    &::scroll-button(left),
    &::scroll-button(right) {
      display: block;
    }
  }

  &::scroll-marker-group {
    position: absolute;
    inset: auto 0 var(--spacing-4);
    display: flex;
    gap: var(--spacing-2);
    place-content: center;
  }
}

li {
  scroll-snap-align: center;

  &::scroll-marker {
    display: block;
    inline-size: 0.75em;
    block-size: 0.75em;
    aspect-ratio: 1;
    content: "";
    background-color: var(--color-gray-100);
    border: 2px solid var(--color-black);
    border-radius: 50%;
    transition:
      border var(--transition),
      background var(--transition);
  }

  &::scroll-marker:target-current,
  &::scroll-marker:hover {
    background-color: var(--color-primary-solid);
  }
}
</style>
