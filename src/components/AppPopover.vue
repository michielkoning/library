<script lang="ts" setup>
import { computed, useId } from "vue";

const id = useId();

const anchor = computed(() => {
  return `--${id}`;
});
</script>

<template>
  <button :interestfor="id" :popovertarget="id">Open Popover</button>

  <div :id popover="hint">Greetings, one and all!</div>
</template>

<style lang="css" scoped>
button {
  anchor-name: v-bind(anchor);
  interest-delay: 0s var(--transition-duration);
}

[popover] {
  position: absolute;
  padding: var(--spacing-1) var(--spacing-2);
  margin: var(--spacing-2);
  position-area: top;
  position-anchor: v-bind(anchor);
  position-try-fallbacks: flip-block;
  color: rgb(250 250 250);
  zoom: 0.9;
  background-color: rgb(17 17 17);
  border: 1px solid rgb(39 39 42);
  opacity: 0;
  transition:
    opacity var(--transition),
    zoom var(--transition),
    overlay allow-discrete,
    display allow-discrete;

  &:popover-open {
    zoom: 1;
    opacity: 1;
  }
}

@starting-style {
  [popover]:popover-open {
    zoom: 0.9;
    opacity: 0;
  }
}
</style>
