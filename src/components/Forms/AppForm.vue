<script lang="ts" setup>
import type { FormErrors } from "vee-validate";
import AppButton from "@/components/AppButton.vue";
import AppNotification from "@/components/AppNotification.vue";
import { computed, ref } from "vue";

const props = defineProps<{
  buttonTitle: string;
  successText: string;
  status: "idle" | "pending" | "success" | "error";
  errors: FormErrors<Record<string, string>>;
}>();

const emit = defineEmits<{
  (event: "submit-form"): void;
}>();

const errorlist = computed(() => {
  return Object.values(props.errors);
});

const touched = ref(false);

const submit = () => {
  touched.value = true;
  emit("submit-form");
};
</script>

<template>
  <app-notification v-if="status === 'success'" :title="successText" variant="success" />
  <form v-else method="post" novalidate @submit.prevent="submit">
    <slot />
    <div aria-live="assertive">
      <app-notification
        v-if="errorlist.length && touched"
        variant="warning"
        title="Het formulier is niet correct ingevuld"
      >
        <ul>
          <li v-for="error in errors" :key="error">
            {{ error }}
          </li>
        </ul>
      </app-notification>
    </div>
    <app-button :title="buttonTitle" type="submit" :disabled="status === 'pending'" />
  </form>
</template>

<style lang="css" scoped>
ul {
  padding-inline-start: 0;
  margin: 0;
  list-style: none outside;
}

[aria-live="assertive"]:not(:empty) {
  margin-block-start: var(--spacing-4);
}
</style>
