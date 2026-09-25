<script lang="ts" setup>
import CenterWrapper from "@/components/CenterWrapper.vue";
import ScrollSpy from "@/components/ScrollSpy.vue";

const pages = [
  {
    id: "section-1",
    title: "Section 1",
  },

  {
    id: "section-2",
    title: "Section 2",
  },
  {
    id: "section-3",
    title: "Section 3",
  },
  {
    id: "section-4",
    title: "Section 4",
  },
  {
    id: "section-5",
    title: "Section 5",
  },
];
</script>

<template>
  <center-wrapper>
    <scroll-spy :pages>
      <template v-for="page in pages" #[page.id] :key="page.id">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptatum vitae fugiat
          dolor amet rem ab tempore aspernatur, dolore nostrum laboriosam ratione sequi quidem autem
          libero. Molestias placeat omnis explicabo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores veniam sint quidem, ut corporis fuga impedit, obcaecati
          neque, dolor earum unde maiores nesciunt atque. Atque adipisci nemo temporibus optio est!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptatum vitae fugiat
          dolor amet rem ab tempore aspernatur, dolore nostrum laboriosam ratione sequi quidem autem
          libero. Molestias placeat omnis explicabo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores veniam sint quidem, ut corporis fuga impedit, obcaecati
          neque, dolor earum unde maiores nesciunt atque. Atque adipisci nemo temporibus optio est!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptatum vitae fugiat
          dolor amet rem ab tempore aspernatur, dolore nostrum laboriosam ratione sequi quidem autem
          libero. Molestias placeat omnis explicabo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores veniam sint quidem, ut corporis fuga impedit, obcaecati
          neque, dolor earum unde maiores nesciunt atque. Atque adipisci nemo temporibus optio est!
        </p>
      </template>
    </scroll-spy>
  </center-wrapper>
</template>
