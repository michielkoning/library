<script lang="ts" setup>
withDefaults(
  defineProps<{
    title: string;
    columns?: number;
  }>(),
  {
    columns: 1,
  },
);
</script>

<template>
  <fieldset>
    <legend>
      {{ title }}
    </legend>
    <slot />
  </fieldset>
</template>

<style lang="css" scoped>
fieldset {
  display: grid;
  grid-template-columns: repeat(v-bind(columns), 1fr);
  gap: var(--gutter);
}
</style>
