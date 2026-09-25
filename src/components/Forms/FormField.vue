<script lang="ts" setup>
import FormErrorMessage from "./FormErrorMessage.vue";

defineProps<{
  id: string;
  title: string;
  errorMessage?: string;
}>();
</script>

<template>
  <div>
    <label :for="id" class="label">
      {{ title }}
    </label>
    <slot />
    <FormErrorMessage :error-message="errorMessage" class="error-message" />
  </div>
</template>

<style lang="css" scoped>
label {
  margin-block-end: var(--spacing-xxs);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}

.error-message {
  margin-block-start: var(--spacing-xxs);
}
</style>
