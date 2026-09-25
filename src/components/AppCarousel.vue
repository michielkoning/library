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
      <li v-for="tab in items" :key="tab">
        <slot :name="tab" />
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
  margin-block-end: 0;
  margin-block-end: var(--spacing-4);
  list-style: none;
  scroll-snap-type: x mandatory;
  scrollbar-color: var(--chakra-colors-gray-400) transparent;
  scrollbar-width: thin;

  &:has(::scroll-marker-group) {
    margin-block-end: var(--spacing-2);
  }

  &::scroll-button(left),
  &::scroll-button(right) {
    position: absolute;
    inset-block-start: 50%;
    display: none;
    inline-size: 1.5em;
    aspect-ratio: 0.571;
    margin-block-start: calc(var(--spacing-8) * -1);
    cursor: pointer;
    content: "";
    background-color: var(--chakra-colors-gray-900);
    border: 1px solid var(--chakra-colors-gray-300);
    transition: opacity var(--transition);
    /* stylelint-disable-next-line @stylistic/declaration-colon-newline-after */
    border-shape: shape(
      from 96.34% 44.96%,
      curve by 0% 10.11% with 4.88% 2.79%/4.88% 7.32%,
      line by -74.99% 42.84%,
      curve by -17.69% 0% with -4.88% 2.79%/-12.81% 2.79%,
      smooth by 0% -10.11% with -4.88% -7.32%,
      line to 69.82% 50%,
      line to 3.7% 12.2%,
      curve by 0% -10.11% with -4.88% -2.79%/-4.88% -7.32%,
      smooth by 17.69% 0% with 12.81% -2.79%,
      line by 74.99% 42.84%,
      close
    );

    &:disabled {
      opacity: 0;
    }
  }

  &::scroll-button(left) {
    inset-inline-start: 1em;
    rotate: 180deg;
  }

  &::scroll-button(right) {
    inset-inline-end: 1em;
  }

  &:has(li + li) {
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-marker-group: after;

    &::scroll-button(left),
    &::scroll-button(right) {
      display: block;
    }
  }

  &::scroll-marker-group {
    display: flex;
    gap: var(--spacing-2);
    place-content: center;
    margin-block-end: var(--spacing-6);
  }
}

li {
  scroll-snap-align: center;

  &::scroll-marker {
    display: block;
    inline-size: 0.5em;
    block-size: 0.5em;
    aspect-ratio: 1;
    content: "";
    background-color: var(--color-white);
    border: 3px solid var(--color-white);
    border-radius: 50%;
    transition:
      border var(--transition),
      background var(--transition);
  }

  &::scroll-marker:target-current,
  &::scroll-marker:hover {
    background-color: var(--color-primary);
  }

  &::scroll-marker:target-current {
    border-color: var(--color-primary);
  }
}
</style>
