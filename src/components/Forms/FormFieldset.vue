<script lang="ts" setup>
withDefaults(
  defineProps<{
    title: string;
    colunns?: number;
  }>(),
  {
    colunns: 1,
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
  grid-template-columns: repeat(v-bind(colunns), 1fr);
  gap: var(--gutter);
}
</style>
