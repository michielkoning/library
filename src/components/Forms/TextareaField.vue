<script lang="ts" setup>
import { useField } from "vee-validate";
import { toRefs, useId } from "vue";
import FormField from "./FormField.vue";

const props = defineProps<{
  title: string;
  name: string;
  placeholder?: string;
}>();

const id = useId();
const { name } = toRefs(props);

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const { value, handleBlur, handleChange, errorMessage } = useField<string>(name, undefined, {
  validateOnValueUpdate: false,
});

const validationListeners = {
  blur: (event: InputEvent) => handleBlur(event, true),
  change: handleChange,
  input: (event: InputEvent) => handleChange(event, !!errorMessage.value),
};
</script>

<template>
  <form-field :id :title :name :error-message>
    <textarea :id :value :name :placeholder v-on="validationListeners" />
  </form-field>
</template>
