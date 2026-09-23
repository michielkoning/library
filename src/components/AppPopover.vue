<script lang="ts" setup>
import { computed, useId } from 'vue';

const id = useId()

const anchor = computed(() => {
  return `--${id}`
})
</script>

<template>
  <button
    :interestfor="id"
    :popovertarget="id"
  >
    Open Popover
  </button>

  <div
    :id
    popover="hint"
  >
    Greetings, one and all!
  </div>
</template>

<style lang="css" scoped>
button {
  /* margin-block-start: 20em; */
  margin-inline-start: 20em;
  anchor-name: v-bind(anchor);
  interest-delay: 0s var(--transition-duration);
}

[popover] {
  position: absolute;
  padding: var(--spacing-2);
  margin: var(--spacing-2);
  position-area: top;
  position-anchor: v-bind(anchor);
  position-try-fallbacks: flip-block;
  color: black;
  background-color: #fff;
  border: 0;
  opacity: 0;
  translate: 0 var(--spacing-4);
  transition:
    opacity var(--transition),
    translate var(--transition),
    overlay allow-discrete,
    display allow-discrete;

  &:popover-open {
    opacity: 1;
    translate: 0 0;
  }
}

@starting-style {
  [popover]:popover-open {
    opacity: 0;
    translate: 0 var(--spacing-4);
  }
}

</style>
