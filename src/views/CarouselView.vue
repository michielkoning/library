<script setup lang="ts">
import AppCarousel from "@/components/AppCarousel.vue";
import CenterWrapper from "@/components/CenterWrapper.vue";

const entries = [
  "https://images.pexels.com/photos/8081419/pexels-photo-8081419.jpeg",
  "https://images.pexels.com/photos/20066093/pexels-photo-20066093.jpeg",
  "https://images.pexels.com/photos/799706/pexels-photo-799706.jpeg",
];
</script>

<template>
  <CenterWrapper>
    <AppCarousel :items="entries">
      <template v-for="image in entries" #[image] :key="image">
        <img :src="image" />
      </template>
    </AppCarousel>
  </CenterWrapper>
</template>
