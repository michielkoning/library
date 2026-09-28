<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";
import CenterWrapper from "@/components/CenterWrapper.vue";

const tokens = ["contrast", "fg", "subtle", "muted", "emphasized", "solid", "focus-ring", "border"];
</script>

<template>
  <center-wrapper>
    <div class="colors">
      <template v-for="theme in ['primary', 'accent', 'secondary']" :key="theme">
        {{ theme }}
        <div
          v-for="token in tokens"
          :key="token"
          class="color"
          :style="{
            '--color': `var(--color-${theme}-${token})`,
          }"
        >
          {{ token }}
        </div>
      </template>
    </div>
    <div class="buttons">
      <template v-for="theme in ['primary', 'accent', 'secondary']" :key="theme">
        {{ theme }}
        <app-button title="Button" :theme />
        <app-button title="Button" variant="subtle" :theme />
        <app-button title="Button" variant="outline" :theme />
      </template>
    </div>
  </center-wrapper>
</template>

<style lang="css" scoped>
.colors,
.buttons {
  display: grid;
  grid-template-columns: 8em repeat(8, 1fr);
  gap: var(--spacing-2);
  align-items: center;
  margin-block-end: 1em;
}

.buttons {
  grid-template-columns: 8em repeat(3, 1fr);
}

.colors {
  grid-template-columns: 8em repeat(8, 1fr);
}

.color {
  display: flex;
  align-items: center;
  justify-content: center;
  inline-size: 100%;
  aspect-ratio: 1;
  font-size: 0.8em;
  color: contrast-color(var(--color));
  background-color: var(--color);
}
</style>
