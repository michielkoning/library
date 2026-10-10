<script lang="ts" setup>
import { useField } from "vee-validate";
import { toRefs, useId } from "vue";
import FormField from "./FormField.vue";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  // type: 'directors' | 'authors'
  name: string;
  title: string;
  options: {
    value?: string | number;
    title: string;
  }[];
}>();

const id = useId();

const { name } = toRefs(props);

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const { value, handleChange, errorMessage } = useField<string>(name, undefined, {
  validateOnValueUpdate: false,
});

const validationListeners = {
  change: handleChange,
};
</script>

<template>
  <form-field :id :title :error-message>
    <select
      :id
      :value
      :name
      :aria-invalid="errorMessage !== undefined ? 'true' : 'false'"
      v-on="validationListeners"
    >
      <button>
        <selectedcontent />
        <icon
          icon="solar:alt-arrow-down-outline"
          class="icon"
        />
      </button>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.title }}
      </option>
    </select>
  </form-field>
</template>

<style lang="css" scoped>
button {
  display: flex;
  gap: var(--spacing-2);
  align-items: center;
  justify-content: space-between;
  inline-size: 100%;
}

.icon {
  flex: 0 0 auto;
  inline-size: 1em;
  aspect-ratio: 0.571;
  transition: rotate var(--transition);
}

select {
  display: flex;
  gap: var(--spacing-2);
  align-items: center;
  justify-content: space-between;
  appearance: base-select;

  &::checkmark {
    display: block;
    inline-size: 1em;
    aspect-ratio: 1.348;
    content: "";
    background: currentcolor;
    clip-path: var(--check);
    fill: currentcolor;
  }

  &::picker-icon {
    display: none;
  }

  &:open {
    .icon {
      rotate: -180deg;
    }
  }

  &[value=""] {
    &::before {
      content: "-";
      opacity: 0;
    }
  }
}

::picker(select) {
  margin-block-start: var(--spacing-1);
  appearance: base-select;
  background-color: var(--color-bg);
  border: 2px solid var(--color-border-inverted);
  opacity: 0;
  translate: 0 calc(-1 * var(--spacing-4));
  transition:
    translate var(--transition-reduced),
    opacity var(--transition-reduced),
    overlay var(--transition-reduced) allow-discrete,
    display var(--transition-reduced) allow-discrete;
}

:open::picker(select) {
  opacity: 1;
  translate: 0 0;
}

@starting-style {
  :open::picker(select) {
    opacity: 0;
    translate: 0 calc(-1 * var(--spacing-4));
  }
}

option {
  display: flex;
  gap: var(--spacing-2);
  padding: var(--spacing-2);
  color: var(--color-fg);

  &:focus {
    outline: none;
  }

  &:focus,
  &:hover {
    color: var(--color-primary-contrast);
    background-color: var(--color-primary-subtle);
  }

  &:checked {
    color: var(--color-primary-contrast);
    background-color: var(--color-primary-solid);
  }
}
</style>
