<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { useField } from "vee-validate";
import { toRefs, useId } from "vue";
import FormField from "@/components/Forms/FormField.vue";

const props = defineProps<{
  title: string;
  name: string;
  placeholder?: string;
  autocomplete?: AutoFillField;
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
  <form-field :id :title :error-message>
    <div class="field">
      <input
        :id
        :name
        type="search"
        :autocomplete
        :value
        :placeholder
        :aria-invalid="errorMessage !== undefined ? 'true' : 'false'"
        v-on="validationListeners"
      />
      <button type="submit">
        <icon icon="solar:minimalistic-magnifer-outline" />
      </button>
    </div>
  </form-field>
</template>

<style lang="css" scoped>
.field {
  position: relative;
}

input {
  padding-inline-end: 3rem;
}

button {
  position: absolute;
  inset: 0 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
}

svg {
  inline-size: 1.5rem;
  block-size: auto;
  aspect-ratio: 1;
  translate: 0 -0.25rem;
}
</style>
