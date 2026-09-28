<script lang="ts" setup>
import useTheme from "@/composables/useTheme";
import { computed, resolveComponent } from "vue";
import type { RouteLocationRaw } from "vue-router";

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw;
    type?: "submit" | "button";
    variant?: "solid" | "outline" | "subtle";
    theme?: "primary" | "secondary" | "accent";
    title: string;
    disabled?: boolean;
  }>(),
  {
    theme: undefined,
    to: undefined,
    variant: "solid",
    type: "button",
    disabled: false,
  },
);

const component = computed(() => {
  if (props.to) {
    return resolveComponent("RouterLink");
  } else {
    return "button";
  }
});

const { colors } = useTheme(props.theme);
</script>

<template>
  <component
    :is="component"
    :to
    :class="[variant, theme]"
    :type="component === 'button' ? type : undefined"
    :disabled
  >
    {{ title }}
  </component>
</template>

<style lang="css" scoped>
.solid {
  --btn-background-color: v-bind(colors.solid);
  --btn-background-color-hover: v-bind(colors.emphasized);
  --btn-text-color: v-bind(colors.contrast);
  --focus-ring-color: v-bind(colors.focusRing);
}

.outline {
  --btn-background-color: transparant;
  --btn-background-color-hover: v-bind(colors.subtle);
  --btn-text-color: v-bind(colors.solid);
  --btn-border-color: currentcolor;
  --focus-ring-color: var(--btn-text-color);
}

.subtle {
  --btn-background-color: transparant;
  --btn-background-color-hover: v-bind(colors.subtle);
  --btn-text-color: v-bind(colors.solid);
  --btn-border-color: currentcolor;
  --focus-ring-color: var(--btn-text-color);
}

a,
button {
  --btn-border-radius: 0.5em;

  display: inline-block;
  inline-size: auto;
  padding: var(--spacing-2) var(--spacing-8);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-heading);
  color: var(--btn-text-color);
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  background-color: var(--btn-background-color);
  border: 2px solid var(--btn-border-color);
  border-radius: var(--btn-border-radius);
  transition:
    background-color var(--transition),
    text-decoration var(--transition),
    opacity var(--transition);

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
}

button:disabled {
  opacity: 0.5;
}
</style>
