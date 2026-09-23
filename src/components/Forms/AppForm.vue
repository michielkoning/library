<script lang="ts" setup>
defineProps<{
  buttonTitle: string
  successText: string
  status: 'idle' | 'pending' | 'success' | 'error'
}>()

const emit = defineEmits<{
  (event: 'submit-form'): void
}>()
</script>

<template>
  <app-notification
    v-if="status === 'success'"
    :text="successText"
  />
  <form
    v-else
    @submit.prevent="emit('submit-form')"
  >
    <slot />
    <app-button
      title="Reactie plaatsen"
      type="submit"
      :disabled="status === 'pending'"
    />
  </form>
</template>
