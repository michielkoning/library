<script lang="ts" setup>
import { computed, useId } from "vue";

const id = useId();

const anchor = computed(() => {
  return `--${id}`;
});

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <button :interestfor="id" :popovertarget="id" v-bind="$attrs"><slot name="anchor" /></button>

  <div :id popover="hint"><slot /></div>
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
  color: var(--color-panel-fg);
  zoom: 0.9;
  background-color: var(--color-panel-bg);
  border: 1px solid var(--color-panel-border);
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
