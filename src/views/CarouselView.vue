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
  <center-wrapper>
    <app-carousel :items="entries">
      <template v-for="image in entries" #[image] :key="image">
        <img :src="image" />
      </template>
    </app-carousel>
  </center-wrapper>
</template>
