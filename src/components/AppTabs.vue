<script lang="ts" setup>
import { computed, ref, useId, useTemplateRef } from 'vue';

const props = defineProps<{
  tabs: {
    id: string
    title: string
    text: string
  }[]
}>()

const selectedTab = ref(0)

const id = useId();

const anchor = computed(() => `--${id}`)

const nextTab = () => {
  if (selectedTab.value === props.tabs.length - 1) {
    goToTab(0)
  } else {
    goToTab(selectedTab.value +1)
  }
}

const previousTab = () => {
  if (selectedTab.value === 0) {
    goToTab(props.tabs.length - 1)
  } else {
    goToTab(selectedTab.value - 1)
  }
}

const firstTab = () => {
  goToTab(0)
}

const lastTab = () => {
  goToTab(props.tabs.length - 1)
}

const tabButtons = useTemplateRef('button')

const goToTab = (tab: number) => {
  if (tabButtons.value?.length && tabButtons.value[tab]) {
    tabButtons.value[tab].focus()
  }
  selectedTab.value = tab
}
</script>

<template>
  <div class="tabs">
    <ul
      role="tablist"
    >
      <li
        v-for="(tab, index) in tabs"
        :key="tab.id"
        role="presentation"
      >
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
        id="`panel-${tab.id}`"
        :key="tab.id"
        :aria-labelledby="`tab-${tab.id}`"
        role="tabpanel"
        tabindex="0"
        :class="{
          active: selectedTab === index
        }"
      >
        <p>{{ tab.text }} <button>test</button></p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.tabs {
  margin-block-end: var(--spacing-4);
  border-block-end: 1px solid #f0f;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  margin: 0 0 var(--spacing-4);
  list-style: none outside;
  border-block-end: 1px solid #f0f;

  &::after {
    position: absolute;
    inset-block-end: anchor(bottom);
    inset-inline-start: anchor(left);
    display: block;
    inline-size: anchor-size(inline);
    block-size: 3px;
    position-anchor: v-bind(anchor);
    content: "";
    background: #f00;
    transition: left var(--transition), width var(--transition);
  }
}

[role="tab"] {
  inline-size: 100%;
  padding: var(--spacing-2);
  text-align: center;

  &[aria-selected="true"] {
    anchor-name: v-bind(anchor);
  }
}

[role="tabpanel"] {
  display: none;
  block-size: 0;
  opacity: 0;

  &.active {
    display: block;
    block-size: auto;
    opacity: 1;
    transition:
      padding var(--transition),
      opacity var(--transition),
      height var(--transition),
      content-visibility var(--transition) allow-discrete;
  }
}

@starting-style {
  [role="tabpanel"].active {
    block-size: 0;
    opacity: 0;
    translate: 0 calc(-1 * var(--spacing-4));
  }
}
</style>
