<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { computed, ref } from "vue";

const props = defineProps<{
  title?: string;
  variant: "error" | "info" | "success" | "warning";
}>();

const variantIcon = computed(() => {
  switch (props.variant) {
    case "error":
      return "solar:danger-triangle-bold";
    case "info":
      return "solar:info-circle-bold";
    case "warning":
      return "solar:danger-circle-bold";
    case "success":
    default:
      return "solar:check-circle-bold";
  }
});

 const colors = ref({
    bg: `var(--color-bg-${props.variant})`,
    fg: `var(--color-fg-${props.variant})`,
    border: `var(--color-border-${props.variant})`,
  })

</script>

<template>
  <div class="notification" :class="variant">
    <icon :icon="variantIcon" />
    <div>
      <div v-if="title" class="title">
        {{ title }}
      </div>
      <slot />
    </div>
  </div>
</template>

<style lang="css" scoped>
.notification {
  display: flex;
  gap: var(--spacing-1);
  padding: var(--spacing-2);
  margin-block-end: var(--spacing-4);
  color: v-bind(colors.fg);
  background-color: v-bind(colors.bg);
  border: 1px solid v-bind(colors.border);
  border-inline-start-width: 0.25em;
}

.title {
  font-weight: var(--font-weight-bold);
}

svg {
  --size: 1.25em;

  flex: 0 0 auto;
  inline-size: var(--size);
  block-size: var(--size);
  margin-block-start: 0.1em;
}
</style>
