<script lang="ts" setup>
import { computed, ref, useId, useTemplateRef } from "vue";

const props = defineProps<{
  tabs: {
    id: string;
    title: string;
  }[];
}>();

const selectedTab = ref(0);

const id = useId();

const anchor = computed(() => `--${id}`);

const nextTab = () => {
  if (selectedTab.value === props.tabs.length - 1) {
    goToTab(0);
  } else {
    goToTab(selectedTab.value + 1);
  }
};

const previousTab = () => {
  if (selectedTab.value === 0) {
    goToTab(props.tabs.length - 1);
  } else {
    goToTab(selectedTab.value - 1);
  }
};

const firstTab = () => {
  goToTab(0);
};

const lastTab = () => {
  goToTab(props.tabs.length - 1);
};

const tabButtons = useTemplateRef("button");

const goToTab = (tab: number) => {
  if (tabButtons.value?.length && tabButtons.value[tab]) {
    tabButtons.value[tab].focus();
  }
  selectedTab.value = tab;
};

const total = computed(() => {
  return props.tabs.length;
});
</script>

<template>
  <div class="tabs">
    <ul role="tablist">
      <li v-for="(tab, index) in tabs" :key="tab.id" role="presentation">
        <button
          :id="`tab-${tab.id}`"
          ref="button"
          type="button"
          role="tab"
          :aria-selected="selectedTab === index"
          :aria-controls="`panel-${tab.id}`"
          :tabindex="selectedTab === index ? undefined : '-1'"
          @keydown.right="nextTab"
          @keydown.left="previousTab"
          @keydown.home="firstTab"
          @keydown.end="lastTab"
          @click="selectedTab = index"
        >
          {{ tab.title }}
        </button>
      </li>
    </ul>
    <div class="panel">
      <div
        v-for="(tab, index) in tabs"
        :id="`panel-${tab.id}`"
        :key="tab.id"
        :aria-labelledby="`tab-${tab.id}`"
        role="tabpanel"
        tabindex="0"
        :class="{
          active: selectedTab === index,
        }"
      >
        <slot :name="tab.id" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.tabs {
  margin-block-end: var(--spacing-4);
  transition:
    height var(--transition),
    content-visibility var(--transition) allow-discrete;
}

ul {
  display: grid;
  grid-template-columns: repeat(v-bind(total), 1fr);
  padding: 0;
  margin: 0 0 var(--spacing-4);
  list-style: none outside;
  border-block-end: 1px solid var(--color-primary-subtle);

  &::before {
    position: absolute;
    inset-block-end: anchor(bottom);
    inset-inline-start: anchor(left);
    display: block;
    /* stylelint-disable-next-line declaration-property-value-no-unknown */
    inline-size: anchor-size(inline);
    /* stylelint-disable-next-line declaration-property-value-no-unknown */
    block-size: anchor-size(block);
    position-anchor: v-bind(anchor);
    content: "";
    background: var(--color-primary-subtle);
    transition:
      left var(--transition),
      width var(--transition);
  }
}

[role="tab"] {
  position: relative;
  inline-size: 100%;
  padding: var(--spacing-3) var(--spacing-2);
  text-align: center;
  transition: background var(--transition);

  &:hover:not([aria-selected="true"]) {
    color: var(--color-gray-fg);
    background-color: var(--color-gray-subtle);
  }

  &[aria-selected="true"] {
    anchor-name: v-bind(anchor);
    color: var(--color-primary-fg);
  }
}

[role="tabpanel"] {
  display: none;
  opacity: 0;
  transition:
    opacity var(--transition),
    overlay allow-discrete,
    display allow-discrete;

  &.active {
    display: block;
    opacity: 1;
    transition-delay: 0.1s;
  }
}

@starting-style {
  [role="tabpanel"].active {
    opacity: 0;
  }
}
</style>
