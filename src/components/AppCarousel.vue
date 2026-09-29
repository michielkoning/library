<script lang="ts" setup>
import useTheme from "@/composables/useTheme";
import { computed } from "vue";

const props = defineProps<{
  items: string[];
}>();

const total = computed(() => {
  return props.items.length;
});

const { colors } = useTheme();
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

  @supports (scroll-marker-group: after) {
    margin-block-end: var(--spacing-12);
  }
}

ul {
  display: grid;
  grid-template-columns: repeat(v-bind(total), 100%);
  gap: var(--spacing-2);
  padding-inline-start: 0;
  margin-block-end: var(--spacing-4);
  list-style: none;
  scroll-snap-type: x mandatory;
  scrollbar-color: var(--color-gray-400) transparent;
  scrollbar-width: thin;

  @supports (scroll-marker-group: after) {
    margin-block-end: var(--spacing-2);
  }

  &::scroll-button(*) {
    position: absolute;
    inset-block-start: 50%;
    display: none;
    inline-size: 1.5em;
    aspect-ratio: 0.571;
    margin-block-start: calc(var(--spacing-8) * -1);
    cursor: pointer;
    content: "";
    background-color: var(--color-gray-900);
    border: 1px solid var(--color-gray-300);
    opacity: 0.7;
    clip-path: shape(
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
    transition: opacity var(--transition);
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
    display: flex;
    gap: var(--spacing-2);
    place-content: center;
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
    background-color: v-bind(colors.solid);
  }

  &::scroll-marker:target-current {
    border-color: v-bind(colors.solid);
  }
}
</style>
