<script setup lang="ts">
import CenterWrapper from '@/components/CenterWrapper.vue';
import AppForm from '@/components/Forms/AppForm.vue';
import FormFieldset from '@/components/Forms/FormFieldset.vue';
import SelectField from '@/components/Forms/SelectField.vue';
import TextareaField from '@/components/Forms/TextareaField.vue';
import TextField from '@/components/Forms/TextField.vue';
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { ref, type Ref } from 'vue';

const { handleSubmit, errors } = useForm({
  name: 'form',
  validationSchema: toTypedSchema(
    z.object({
      name: z.string().min(1, 'Het veld naam is verplicht'),
      comment: z.string(),
      select: z.enum(['option 1', 'option 2', 'option 3', '']).refine((val) => val !== '', {
        error: 'Het veld select is verplicht'
      })
    }),
  ),
  initialValues: {
    name: '',
    comment: '',
    select: ''
  }
});

const status: Ref<'idle' | 'pending' | 'success' | 'error'> = ref('idle')

const submit = handleSubmit(() => {
  status.value = 'pending'
  setTimeout(() => {
    status.value = 'success'
  }, 2000);
})
</script>

<template>
  <CenterWrapper>
    <AppForm
      :errors
      button-title="Submit"
      success-text="success"
      :status
      @submit-form="submit"
    >
      <FormFieldset
        title="Adres"
        :colunns="2"
      >
        <TextField
          name="name"
          title="name"
        />
        <SelectField
          :options="[{
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
          title="select"
        />
        <TextareaField
          name="comment"
          title="comment"
          class="comment"
        />
      </FormFieldset>
    </AppForm>
  </CenterWrapper>
</template>


<style lang="css" scoped>
.comment {
  grid-column: span 2;
}
</style>
