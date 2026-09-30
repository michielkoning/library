<script lang="ts" setup>
import useTheme from "@/composables/useTheme";
import { computed, useId } from "vue";

defineProps<{
  pages: {
    id: string;
    title: string;
  }[];
}>();

const id = useId();

const anchor = computed(() => {
  return `--${id}`;
});

const { colors } = useTheme();
</script>

<template>
  <div class="content">
    <div>
      <section v-for="page in pages" :key="page.title">
        <span :id="page.id" />
        <h2>{{ page.title }}</h2>
        <slot :name="page.id" />
      </section>
    </div>
    <nav>
      <ol>
        <li v-for="item in pages" :id="`link-${item.title}`" :key="item.title">
          <a :href="`#${item.id}`">
            {{ item.title }}
          </a>
        </li>
      </ol>
    </nav>
  </div>
</template>

<style lang="css" scoped>
.content {
  position: relative;
  display: grid;
  gap: var(--gutter);
  align-items: start;

  @media (--md) {
    grid-template-columns: auto 12rem;
  }
}

span {
  display: block;
  translate: 0 calc(var(--spacing-4) * -1);
}

nav {
  position: sticky;
  inset-block-start: var(--spacing-4);
  display: none;
  order: -1;
  color: var(--color-panel-fg);
  background: var(--color-panel-bg);
  border: 1px solid var(--color-panel-border);
  scroll-target-group: auto;

  @media (--md) {
    display: block;
    order: 1;
  }
}

ol {
  padding: 0;
  margin: 0;
  list-style: none outside;

  &::before {
    position: absolute;
    inset-block-start: anchor(top);
    inset-inline-start: 0;
    display: block;
    inline-size: 0.25em;
    /* stylelint-disable-next-line declaration-property-value-no-unknown */
    block-size: anchor-size(block);
    position-anchor: v-bind(anchor);
    content: "";
    background: var(--color-primary-solid);
    transition:
      top var(--transition),
      height var(--transition);
  }
}

a {
  display: block;
  padding-block: var(--spacing-1);
  padding-inline-start: var(--spacing-3);
  text-decoration: none;
  border-inline-start: 0.25em solid v-bind(colors.subtle);

  &:target-current {
    anchor-name: v-bind(anchor);
    color: v-bind(colors.emphasized);
  }

  &:hover {
    border-color: v-bind(colors.emphasized);
  }
}
</style>
