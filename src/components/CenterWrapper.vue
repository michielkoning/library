<script lang="ts" setup>
withDefaults(
  defineProps<{
    size?: "full" | "sm" |"md" | "lg" | 'xlg';
    top?: boolean;
  }>(),
  {
    top: false,
    size: "lg",
  },
);
</script>

<template>
  <div class="notch" :class="{ top }">
    <div class="center-wrapper" :class="`center-wrapper-${size}`">
      <slot />
    </div>
  </div>
</template>

<style lang="css" scoped>
.notch {
  padding: 0 env(safe-area-inset-right) 0 env(safe-area-inset-left);

  &.top {
    padding-block-start: env(safe-area-inset-top);
  }
}

.center-wrapper-sm {
  --wrapper-size: var(--container-size-sm);
}

.center-wrapper-md {
  --wrapper-size: var(--container-size-md);
}

.center-wrapper-lg {
  --wrapper-size: var(--container-size-lg);
}

.center-wrapper-xlg {
  --wrapper-size: var(--container-size-xlg);
}

.center-wrapper {
  /* stylelint-disable-next-line length-zero-no-unit */
  --zero: 0px;

  padding-inline: var(--gutter);
  margin-inline: max(var(--zero), ((100% - var(--wrapper-size)) / 2));
}
</style>
