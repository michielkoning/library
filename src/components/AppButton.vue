<script lang="ts" setup>
import { computed, resolveComponent } from 'vue';
import type { RouteLocationRaw } from 'vue-router';


const props = withDefaults(
  defineProps<{
      to?: RouteLocationRaw
      type?: 'submit' | 'button'
      variant?: 'primary' | 'ghost' | 'secondary'
      title: string
      disabled?: boolean
    }
  >(),
  {
    to: undefined,
    variant: 'primary',
    type: 'button',
    disabled: false,
  },
)

const component = computed(() => {
  if (props.to) {
    return resolveComponent('RouterLink')
  }
  else {
    return 'button'
  }
})

</script>

<template>
  <component
    :is="component"
    :to="to"
    :class="variant"
    :type="component === 'button' ? type : undefined"
    :disabled
  >
    {{ title }}
  </component>
</template>

<style lang="css" scoped>
a,
button {
  --btn-border-radius: 0.5em;

  &.primary {
    --btn-background-color: var(--color-primary);
    --btn-background-color-hover: var(--color-primary-hover);
    --btn-background-color-disabled: var(--color-primary-disabled);
    --btn-text-color: var(--color-primary-text);
  }

  &.secondary {
    --btn-background-color: var(--color-secondary);
    --btn-background-color-hover: var(--color-secondary-hover);
    --btn-background-color-disabled: var(--color-secondary-disabled);
    --btn-text-color: var(--color-secondary-text);
  }

  &.ghost {
    --btn-background-color: transparant;
    --btn-background-color-hover: var(--color-primary-hover);
    --btn-background-color-disabled: var(--color-primary-disabled);
    --btn-text-color: var(--color-primary);
    --btn-border-color: currentcolor;
  }

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
  transition: background-color var(--transition), text-decoration var(--transition);

  &:hover {
    text-decoration: 2px solid underline;
    text-underline-offset: 0.25em;
    background-color: var(--btn-background-color-hover);
  }

  &:active {
    padding-block: calc(var(--spacing-2) + 1px) calc(var(--spacing-2) - 1px);
  }
}

button:disabled {
  background-color: var(--btn-background-color-disabled);
}
</style>
