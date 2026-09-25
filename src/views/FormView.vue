<script setup lang="ts">
import CenterWrapper from "@/components/CenterWrapper.vue";
import AppForm from "@/components/Forms/AppForm.vue";
import FormFieldset from "@/components/Forms/FormFieldset.vue";
import SelectField from "@/components/Forms/SelectField.vue";
import TextareaField from "@/components/Forms/TextareaField.vue";
import TextField from "@/components/Forms/TextField.vue";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { ref, type Ref } from "vue";
import RadioGroup from "@/components/Forms/RadioGroup.vue";

const { handleSubmit, errors, values } = useForm({
  name: "form",
  validationSchema: toTypedSchema(
    z.object({
      name: z.string().min(1, "Het veld naam is verplicht"),
      comment: z.string(),
      email: z.email({
        error: "Het veld email is niet correct",
      }),
      select: z.enum(["option 1", "option 2", "option 3", ""]).refine((val) => val !== "", {
        error: "Het veld select is verplicht",
      }),
      radio: z.enum(["option 1", "option 2", "option 3", ""]).refine((val) => val !== "", {
        error: "Het veld radio is verplicht",
      }),
    }),
  ),
  initialValues: {
    name: "",
    comment: "",
    select: "",
    email: "",
    radio: "option 2",
  },
});

const status: Ref<"idle" | "pending" | "success" | "error"> = ref("idle");

const submit = handleSubmit(() => {
  status.value = "pending";
  setTimeout(() => {
    status.value = "success";
  }, 2000);
});
</script>

<template>
  <center-wrapper>
    <app-form
      :errors
      button-title="Reactie plaatsen"
      success-text="success"
      :status
      @submit-form="submit"
    >
      <form-fieldset title="Adres" :columns="3">
        <text-field name="name" title="Name" autocomplete="name" />
        <text-field name="email" title="Email" type="email" autocomplete="email" />
        <select-field
          :options="[
            {
              title: 'Option 1',
              value: 'option 1',
            },
            {
              title: 'Option 2',
              value: 'option 2',
            },
            {
              title: 'Option 3',
              value: 'option 3',
            },
          ]"
          name="select"
          title="Opties"
        />
        <textarea-field name="comment" title="Reactie" class="comment" />
      </form-fieldset>
      <radio-group
        class="options"
        :options="[
          {
            title: 'Option 1',
            value: 'option 1',
          },
          {
            title: 'Option 2',
            value: 'option 2',
          },
          {
            title: 'Option 3',
            value: 'option 3',
          },
        ]"
        name="radio"
        title="Radio opties"
      />
    </app-form>
    <pre>{{ values }}</pre>
  </center-wrapper>
</template>

<style lang="css" scoped>
.options,
.comment {
  grid-column: span 3;
}
</style>
