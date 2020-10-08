<template>
  <div class="panel-body">
    <h1>Maklumat Peribadi</h1>
    <form>
      <!-- <vue-form-generator :schema="schema" :model="model" @model-updated="onModelUpdated"> -->
      <vue-form-generator :schema="schema" :model="model">
      </vue-form-generator>
    </form>
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";

// need to add submit form logic
export default {
  components: {
    "vue-form-generator": VueFormGenerator.component
  },
  data () {
    return {
      model: {
        ic: '',
        icTentera: '',
        name: '',
        status: '',
        numChildren: '',
        homeNum: '',
        officeNum: '',
        mobileNum: '',
        address: '',
        city: '',
        postcode: '',
        state: ''
      },
      schema: {
            fields: [
              {
                type: "input",
                inputType: "number",
                label: "No KP",
                model: "ic"
              },
              {
                type: "input",
                inputType: "number",
                label: "No KP Tentera",
                model: "icTentera"
              },
              {
                type: "input",
                inputType: "text",
                label: "Nama Penuh",
                model: "name",
                placeholder: "Seperti tertera di KP",
                required: true
              },
              {
                type: "radios",
                label: "Status Perkahwinan",
                model: "password",
                values: [
                    "Tidak Berkahwin",
                    "Berkahwin",
                    "Balu/Duda",
                    "Bercerai",
                    "Berpisah",
                    "Tiada Maklumat"
                ]
              },
              {
                type: "input",
                inputType: "number",
                label: "No. Telefon Rumah",
                model: "homeNum"
              },              {
                type: "input",
                inputType: "number",
                label: "No. Telefon Pejabat",
                model: "officeNum"
              },              {
                type: "input",
                inputType: "number",
                label: "No. Telefon Bimbit",
                model: "mobileNum"
              },
              {
                type: "input",
                inputType: "text",
                label: "Alamat Surat-Menyurat",
                model: "address"
              },              
              {
                type: "input",
                inputType: "text",
                label: "Bandar",
                model: "city"
              },             
              {
                type: "input",
                inputType: "number",
                label: "Poskod",
                model: "postCode",
                min: 5
              },                       
              {
                type: "input",
                inputType: "text",
                label: "Negeri",
                model: "state"
              },
              {
                type: "submit",
                onSubmit(model) {
                    console.log(model);
                },
                label: "",
                buttonText: "Submit",
                validateBeforeSubmit: true
                }
            ]
          }
        }
      },
    methods: {
        // onModelUpdated(model, schema) {
        //     this.$store.dispatch('update', {
        //         model: model,
        //         schema: schema
        // });
    }
}
</script>

<style scoped>

</style>