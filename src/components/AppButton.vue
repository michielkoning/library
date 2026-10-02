<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { computed, resolveComponent } from "vue";
import type { RouteLocationRaw } from "vue-router";

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw;
    type?: "submit" | "button";
    variant?: "solid" | "outline" | "subtle";
    theme?: "primary" | "secondary" | "accent"
    title: string;
    disabled?: boolean;
    icon?: string;
    loading?: boolean;
  }>(),
  {
    theme: 'primary',
    to: undefined,
    variant: "solid",
    type: "button",
    disabled: false,
    icon: undefined,
    loading: false,
  },
);

const component = computed(() => {
  if (props.to) {
    return resolveComponent("RouterLink");
  } else {
    return "button";
  }
});
</script>

<template>
  <component
    :is="component"
    :to
    :class="[
      variant,
      theme,
      {
        loading: loading ? 'loading' : undefined,
      },
    ]"
    :type="component === 'button' ? type : undefined"
    :disabled
  >
    <icon v-if="icon" :icon />
    {{ title }}
  </component>
</template>

<style lang="css" scoped>
.primary {
  --color-contrast: var(--color-white);
  --color-fg: var(--color-black);
  --color-subtle: var(--color-wdt-red-300);
  --color-muted: var(--color-wdt-red-400);
  --color-emphasized: var(--color-wdt-red-950);
  --color-solid: var(--color-wdt-red-600);
  --color-focus-ring: var(--color-wdt-red-700);
  --color-border: var(--color-wdt-red-800);
}

.secondary {
  /* SECONDARY */
  --color-contrast: var(--color-black);
  --color-fg: var(--color-black);
  --color-subtle: var(--color-wdt-yellow-50);
  --color-muted: var(--color-wdt-yellow-700);
  --color-emphasized: var(--color-wdt-yellow-800);
  --color-solid: var(--color-wdt-yellow-500);
  --color-focus-ring: var(--color-wdt-yellow-700);
  --color-border: var(--color-wdt-yellow-700);
}

.accent {
  /* ACCENT */
  --color-fg: var(--color-purple-fg);
  --color-contrast: var(--color-purple-contrast);
  --color-subtle: var(--color-purple-subtle);
  --color-muted: var(--color-purple-muted);
  --color-emphasized: var(--color-purple-emphasized);
  --color-solid: var(--color-purple-solid);
  --color-focus-ring: var(--color-purple-focus-ring);
  --color-border: var(--color-purple-border);
}

.solid {
  --btn-background-color: var(--color-solid);
  --btn-background-color-hover: var(--color-emphasized);
  --btn-text-color: var(--color-contrast);
  --btn-border-color: var(--color-solid);
  --btn-spinner-border: var(--color-emphasized);
  --btn-spinner-bg: var(--color-contrast);
  --focus-ring-color: var(--color-focus-ring);
}

.subtle {
  --btn-background-color: var(--color-subtle);
  --btn-background-color-hover: var(--color-solid);
  --btn-border-color: var(--color-solid);
  --btn-text-color: var(--color-fg);
  --btn-spinner-border: var(--color-solid);
  --btn-spinner-bg: var(--color-contrast);
  --focus-ring-color: var(--color-focus-ring);
}

.outline {
  --btn-background-color: transparant;
  --btn-background-color-hover: var(--color-subtle);
  --btn-text-color: var(--color-solid);
  --btn-border-color: currentcolor;
  --btn-spinner-border: var(--color-solid);
  --btn-spinner-bg: var(--color-contrast);
  --focus-ring-color: var(--btn-text-color);
}

a,
button {
  --btn-border-radius: 0.5em;

  display: flex;
  gap: var(--spacing-2);
  align-items: center;
  justify-content: center;
  inline-size: auto;
  padding: var(--spacing-2) var(--spacing-8);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  line-height: 1;
  color: var(--btn-text-color);
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  background-color: var(--btn-background-color);
  border: 1px solid var(--btn-border-color);
  border-radius: var(--btn-border-radius);
  transition:
    background-color var(--transition),
    text-decoration var(--transition),
    opacity var(--transition);
  text-box: trim-both cap alphabetic;

  &:hover:not(:disabled) {
    background-color: var(--btn-background-color-hover);
  }

  &:active:not(:disabled) {
    padding-block: calc(var(--spacing-2) + 1px) calc(var(--spacing-2) - 1px);
  }

  &:focus-visible {
    outline: var(--focus-ring-color) solid 2px;
    outline-offset: 2px;
  }

  &.loading::before {
    box-sizing: border-box;
    display: inline-block;
    inline-size: 0.75rem;
    block-size: 0.75rem;
    content: "";
    border: 2px solid var(--btn-spinner-bg);
    border-block-end-color: var(--btn-spinner-border);
    border-radius: 50%;
    animation: rotation 1s linear infinite;
  }
}

button:disabled {
  opacity: 0.5;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
