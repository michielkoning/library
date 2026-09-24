<script lang="ts" setup>
defineProps<{
  errorMessage?: string;
}>();
</script>

<template>
  <div aria-live="assertive">
    {{ errorMessage }}
  </div>
</template>

<style lang="css" scoped>
span {
  display: block;
}
</style>
