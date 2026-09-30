<script lang="ts" setup>
import { useField } from "vee-validate";
import { toRefs } from "vue";
import FormErrorMessage from "./FormErrorMessage.vue";
import CheckboxField from "./CheckboxField.vue";

const props = defineProps<{
  // type: 'directors' | 'authors'
  name: string;
  title: string;
  options: {
    value: string | number;
    title: string;
  }[];
}>();

const { name } = toRefs(props);

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const { errorMessage } = useField<string>(name);
</script>

<template>
  <fieldset>
    <legend>{{ title }}</legend>
    <div class="fields">
      <checkbox-field
        v-for="option in options"
        :key="option.value"
        :name
        :title="option.title"
        :value="option.value"
      />
    </div>
    <form-error-message :error-message="errorMessage" />
  </fieldset>
</template>

<style lang="css" scoped>
.field {
  display: flex;
  gap: var(--spacing-2);
  align-items: start;

  &:not(:last-child) {
    margin-block-end: var(--spacing-1);
  }
}

input {
  flex: 0 0 auto;
  margin-block-start: 0.25em;
}
</style>
