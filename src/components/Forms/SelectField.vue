<script lang="ts" setup>
import { useField } from "vee-validate";
import { toRefs, useId } from "vue";
import FormField from "./FormField.vue";

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
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.title }}
      </option>
    </select>
  </form-field>
</template>

<style lang="css" scoped>
select {
  display: flex;
  gap: var(--spacing-2);
  align-items: center;
  appearance: base-select;
  cursor: pointer;

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
    inline-size: calc(0.5em * 0.571);
    block-size: calc(0.5em);
    aspect-ratio: auto;
    content: "";
    background-color: var(--color-border-inverted);
    clip-path: var(--chevron);
    rotate: 90deg;
    transition: rotate var(--transition);
  }

  &:open {
    &::picker-icon {
      rotate: -90deg;
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
    translate var(--transition),
    opacity var(--transition),
    overlay var(--transition) allow-discrete,
    display var(--transition) allow-discrete;
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
    color: var(--color-primary-fg);
    background-color: var(--color-primary-subtle);
  }

  &:checked {
    color: var(--color-primary-contrast);
    background-color: var(--color-primary-solid);
  }
}
</style>
