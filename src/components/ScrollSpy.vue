<script lang="ts" setup>
import { computed, useId } from 'vue';

defineProps<{
  pages: {
    id: string
    title: string
  }[]
}>()

const id = useId()

const anchor = computed(() => {
  return `--${id}`
})
</script>


<template>
  <div class="content">
    <div>
      <section
        v-for="page in pages"
        :key="page.title"
      >
        <span :id="page.id" />
        <h2>{{ page.title }}</h2>
        <slot :name="page.id" />
      </section>
    </div>
    <nav>
      <ol>
        <li
          v-for="item in pages"
          :id="`link-${item.title}`"
          :key="item.title"
        >
          <a
            :href="`#${item.id}`"
          >
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
  gap: var(--spacing-4);
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
  inset-block-start: 0;
  order: -1;
  padding-block: var(--spacing-2);
  background: var(--color-body-background);
  scroll-target-group: auto;

  @media (--md) {
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
    inline-size: 2px;
    block-size: anchor-size(block);
    position-anchor: v-bind(anchor);
    content: "";
    background: var(--color-primary);
    transition:
      top var(--transition),
      height var(--transition);
  }
}

a {
  padding-block: var(--spacing-1);
  padding-inline-start: var(--spacing-2);
  text-decoration: none;
  border-inline-start: 2px solid var(--color-primary-subtle);

  &:target-current {
    anchor-name: v-bind(anchor);
    color: var(--color-primary-subtle);
  }

  &:target-current,
  &:hover {
    &::before {
      background-color: var(--color-primary-subtle);
    }
  }
}
</style>
