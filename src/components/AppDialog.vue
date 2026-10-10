<script lang="ts" setup>
import { Icon } from "@iconify/vue";

withDefaults(
  defineProps<{
    size?: "sm" |"md" | "lg" | 'xlg';
  id: string;
  title: string;
}>(),
  {
    top: false,
    size: "lg",
  },
);
</script>

<template>
  <dialog :id="id" closedby="any" :class="`dialog-${size}`">
    <header>
      <h2>{{ title }}</h2>
      <button :commandfor="id" command="close" class="btn-close">
        <icon icon="solar:close-circle-bold" />
      </button>
    </header>
    <div class="content">
      <slot />
    </div>
  </dialog>
</template>

<style lang="css" scoped>
dialog {
  inline-size: calc(100vw - (var(--spacing-4) * 2));
  max-inline-size: var(--dialog-width);
  padding: 0;
  overscroll-behavior: contain;
  color: var(--color-fg);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 0.25em;
  transition:
    display var(--transition-reduced) allow-discrete,
    overlay var(--transition-reduced) allow-discrete;
  animation: dialog-hide var(--transition-reduced);

  &[open] {
    animation: dialog-show var(--transition-reduced);

    &::backdrop {
      animation: backdrop-show var(--transition-reduced);
    }
  }
}

.dialog-sm {
  --dialog-width: var(--container-size-sm);
}

.dialog-md {
  --dialog-width: var(--container-size-md);
}

.dialog-lg {
  --dialog-width: var(--container-size-lg);
}

.dialog-xlg {
  --dialog-width: var(--container-size-xlg);
}

::backdrop {
  overflow: hidden;
  overscroll-behavior: contain;
  background-color: rgb(0 0 0 / 50%);
  backdrop-filter: blur(0.25em);
  animation: backdrop-hide var(--transition-reduced);
}

button {
  display: block;
  align-self: flex-start;
  aspect-ratio: 1;
}

svg {
  font-size: 2em;
  cursor: pointer;
}

h2 {
  margin: 0;
}

header {
  position: sticky;
  inset-block-start: 0;
  display: flex;
  gap: var(--spacing-2);
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-2) var(--spacing-4);
  color: var(--color-landmark-fg);
  background-color: var(--color-landmark-bg);
}

.content {
  padding: var(--spacing-4);
}

@keyframes dialog-hide {
  from {
    opacity: 1;
    translate: 0 0;
  }

  to {
    opacity: 0;
    translate: 0 -1em;
  }
}

@keyframes dialog-show {
  from {
    opacity: 0;
    translate: 0 -1em;
  }

  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes backdrop-show {
  from {
    opacity: 0;
    backdrop-filter: blur(0);
  }

  to {
    opacity: 1;
    backdrop-filter: blur(0.25em);
  }
}

@keyframes backdrop-hide {
  from {
    opacity: 1;
    backdrop-filter: blur(0.25em);
  }

  to {
    opacity: 0;
    backdrop-filter: blur(0);
  }
}
</style>
