<script lang="ts" setup>
import { useField } from 'vee-validate';
import { toRefs, useId, type InputTypeHTMLAttribute } from 'vue'
import FormField from './FormField.vue';

const props = withDefaults(defineProps<{
  type?: InputTypeHTMLAttribute
  autocomplete?: AutoFillField
  title: string
  name: string
}>(), {
  autocomplete: undefined,
  type: 'text',
})

const id = useId()
const { name } = toRefs(props)

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const { value, handleBlur, handleChange, errorMessage } = useField<string>(name, undefined, {
  validateOnValueUpdate: false,
})

const validationListeners = {
  blur: (evt: Event) => handleBlur(evt, true),
  change: handleChange,
  input: (evt: Event) => handleChange(evt, !!errorMessage.value),
}
</script>

<template>
  <form-field
    :id
    :title
    :error-message
  >
    <input
      :id
      :name
      :type
      :autocomplete
      :value
      v-on="validationListeners"
    >
  </form-field>
</template>
