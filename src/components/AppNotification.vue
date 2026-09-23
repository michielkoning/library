<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { computed } from "vue";

const props = defineProps<{
  text: string
  variant:  'danger' | 'info' | 'success' | 'warning'
}>()

const variantIcon = computed(() => {
  switch (props.variant) {
    case 'danger':
      return 'solar:danger-triangle-bold';
    case 'info':
      return 'solar:info-circle-bold'
    case 'warning':
      return 'solar:danger-circle-bold';
    case 'success':
    default:
      return 'solar:check-circle-bold';
  }
})
</script>

<template>
  <div
    class="notification"
    :class="variant"
  >
    <icon :icon="variantIcon" />
    {{ text }}
  </div>
</template>

<style lang="css" scoped>
.notification {
  &.success {
    --notification-background-color: var(--color-success-background);
    --notification-text-color: var(--color-success-text);
    --notification-border-color: var(--color-success-border);
  }

  &.danger {
    --notification-background-color: var(--color-danger-background);
    --notification-text-color: var(--color-danger-text);
    --notification-border-color: var(--color-danger-border);
  }

  &.info {
    --notification-background-color: var(--color-info-background);
    --notification-text-color: var(--color-info-text);
    --notification-border-color: var(--color-info-border);
  }

  &.warning {
    --notification-background-color: var(--color-warning-background);
    --notification-text-color: var(--color-warning-text);
    --notification-border-color: var(--color-warning-border);
  }

  display: flex;
  gap: var(--spacing-1);
  padding: var(--spacing-2);
  margin-block-end: var(--spacing-4);
  color: var(--notification-text-color);
  background-color: var(--notification-background-color);
  border: 1px solid var(--notification-border-color);
  border-inline-start-width: 0.25em;
}

svg {
  --size: 1.25em;

  flex: 0 0 auto;
  inline-size: var(--size);
  block-size: var(--size);
  margin-block-start: 0.1em;
}
</style>
