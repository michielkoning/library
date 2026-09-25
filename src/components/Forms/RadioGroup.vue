<script lang="ts" setup>
import { useField } from "vee-validate";
import { toRefs, useId } from "vue";
import FormErrorMessage from "./FormErrorMessage.vue";

const props = defineProps<{
  // type: 'directors' | 'authors'
  name: string;
  title: string;
  options: {
    value: string | number;
    title: string;
  }[];
}>();

const id = useId();

const { name } = toRefs(props);

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const { value, handleChange, errorMessage } = useField<string>(name);

const validationListeners = {
  change: handleChange,
};
</script>

<template>
  <fieldset>
    <legend>{{ title }}</legend>
    <div class="fields">
      <div v-for="(option, index) in options" :key="option.value" class="field">
        <input
          :id="`${id}-${index}`"
          type="radio"
          :checked="value === option.value"
          :name
          :value="option.value"
          v-on="validationListeners"
        />
        <label :for="`${id}-${index}`">
          {{ option.title }}
        </label>
      </div>
    </div>
    <FormErrorMessage :error-message="errorMessage" />
  </fieldset>
</template>

<style lang="css" scoped>
.field {
  display: flex;
  gap: var(--spacing-2);
  align-items: start;

  &:not(:last-child) {
    margin-block-end: var(--spacing-2);
  }
}

input {
  flex: 0 0 auto;
  inline-size: 1.25em;
  aspect-ratio: 1;
  padding: 0;
  margin: 0;
  margin-block-start: 0.1em;
  appearance: none;
  background: var(--color-panel-bg);
  border: 3px solid var(--color-white);
  border-radius: 50%;
  transition:
    border var(--transition),
    background var(--transition);

  &:checked {
    background-color: var(--color-primary);
  }
}
</style>
