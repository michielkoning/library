<script lang="ts" setup>
import { useField } from "vee-validate";
import { toRefs, useId } from "vue";

const props = defineProps<{
  name: string;
  value: string | number;
  title: string;
}>();

const id = useId();

const { name } = toRefs(props);

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const { checked, handleChange } = useField(name, undefined, {
  type: "checkbox",
  checkedValue: props.value,
});

const validationListeners = {
  change: handleChange,
};
</script>

<template>
  <div class="field">
    <input :id type="checkbox" :checked :name :value="value" v-on="validationListeners" />
    <label :for="id">
      {{ title }}
    </label>
  </div>
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
  margin-block-start: 0.15em;
}
</style>
