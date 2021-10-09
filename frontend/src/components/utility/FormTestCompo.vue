<template>
  <Card title="Créer un compte" >
    <Form :validation-schema="formSchema.validation" :initial-values="formSchema.values" @submit.prevent="">
      <div class="mb-2">
        <div v-for="{ as, name, label, ...attrs } in formSchema.fields" :key="name">
          <label :for="name" class="form-label mb-0 fw-light">{{ label }}</label>
          <Field :as="as" :id="name" :name="name" v-bind="attrs" class="form-control"/>
          <ErrorMessage class="text-primary form-text" :name="name"/>
        </div>
      </div>
      <div class="d-grid">
        <button type="submit" class="btn btn-primary">Se connecter</button>
      </div>
    </Form>
  </Card>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {ErrorMessage, Field, Form} from 'vee-validate';
import Card from "@/components/utility/CardCompo.vue";
import * as yup from 'yup';

export default defineComponent({
  name: "TestCompo",
  components: {
    Form,
    Field,
    ErrorMessage,
    Card
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const formSchema = {
        fields: [
          {
            label: 'Pseudo :',
            name: 'pseudo',
            as: 'input',
          },
          {
            label: 'Prénom :',
            name: 'firstname',
            as: 'input',
          }, {
            label: 'Nom :',
            name: 'lastname',
            as: 'input',
          }, {
            label: 'Email :',
            name: 'email',
            as: 'input',
            type: 'email'
          },
          {
            label: 'Mot de passe :',
            name: 'password',
            as: 'input',
            type: 'password'
          },
        ],
        validation: yup.object({
          email: yup.string().email().required(),
          pseudo: yup.string().max(8).required(),
          password: yup.string().min(8).required(),
          lastname: yup.string().required(),
          firstname: yup.string().required(),
        }),
        values: {
          email: '',
          name: '',
          password: '',
          firstname: '',
          lastname: ''
        }
      }
    ;
    return {formSchema}
  }

})
</script>

<style scoped>

</style>