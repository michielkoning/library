<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";
import CenterWrapper from "@/components/CenterWrapper.vue";
</script>

<template>
  <center-wrapper>
    <div class="colors">
      <div></div>
    </div>
    <div v-for="theme in ['primary', 'accent', 'secondary']" :key="theme" class="buttons">
      {{ theme }}
      <app-button title="Button" :theme />
      <app-button title="Button" variant="subtle" :theme />
      <app-button title="Button" variant="outline" :theme />
    </div>
  </center-wrapper>
</template>

<style lang="css" scoped>
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-2);
  margin-block-end: 1em;
}

.colors {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-2);
  margin-block-end: 1em;
}
</style>
