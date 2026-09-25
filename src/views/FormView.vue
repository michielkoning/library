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

const { handleSubmit, errors, values } = useForm({
  name: "form",
  validationSchema: toTypedSchema(
    z.object({
      name: z.string().min(1, "Het veld naam is verplicht"),
      comment: z.string(),
      email: z.email({
        error: "Het veld email is niet correct",
      }),
      select: z
        .enum(["option 1", "option 2", "option 3", ""])
        .refine((val) => val !== "option 3" && val !== "", {
          error: "Het veld select is verplicht",
        }),
    }),
  ),
  initialValues: {
    name: "",
    comment: "",
    select: "",
    email: "",
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
  <CenterWrapper>
    <AppForm
      :errors
      button-title="Reactie plaatsen"
      success-text="success"
      :status
      @submit-form="submit"
    >
      <FormFieldset title="Adres" :colunns="3">
        <TextField name="name" title="Name" autocomplete="name" />
        <TextField name="email" title="Email" type="email" autocomplete="email" />
        <SelectField
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
        <TextareaField name="comment" title="Reactie" class="comment" />
      </FormFieldset>
    </AppForm>
    <pre>{{ values }}</pre>
  </CenterWrapper>
</template>

<style lang="css" scoped>
.comment {
  grid-column: span 3;
}
</style>
