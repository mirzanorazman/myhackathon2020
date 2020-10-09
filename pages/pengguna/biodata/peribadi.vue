<template>
  <div
    class="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <h1 class="text-center text-4xl leading-9 font-bold text-gray-900">
      Maklumat Peribadi
    </h1>
    <form
      class="flex flex-col space-y-6 w-full max-w-xl mt-4"
      @submit.prevent="save()"
    >
      <StyledInput
        inputId="name"
        inputType="text"
        v-model="name"
        placeholder="Abu bin Ali"
        labelText="Nama penuh (seperti dalam Kad Pengenalan)"
      />
      <StyledInput
        inputId="ic"
        inputType="number"
        v-model="ic"
        placeholder="XXXXXX-XX-XXXX"
        labelText="Nombor Kad Pengenalan"
      />
      <StyledInput
        inputId="icTentera"
        inputType="number"
        v-model="icTentera"
        placeholder="XXXXXXXX"
        labelText="Nombor Kad Pengenalan Tentera (jika ada)"
      />
      <div class="flex flex-wrap">
        <StyledSelect
          class="md:w-1/2"
          inputId="statusKahwin"
          v-model="statusKahwin"
          :options="statusKahwinOptions"
          labelText="Status perkahwinan"
          placeholder="Pilih satu"
        />
        <StyledInput
          class="md:w-1/2"
          inputId="numChildren"
          inputType="number"
          v-model="numChildren"
          labelText="Bilangan anak (jika ada)"
        />
      </div>

      <StyledInput
        inputId="mobileNum"
        inputType="tel"
        v-model="mobileNum"
        placeholder="XXX-XXX-XXXX"
        labelText="Nombor Telefon Bimbit"
      />
      <StyledInput
        inputId="homeNum"
        inputType="tel"
        v-model="homeNum"
        placeholder="XXX-XXXXXXX"
        labelText="Nombor Telefon Rumah"
      />
      <StyledInput
        inputId="officeNum"
        inputType="tel"
        v-model="officeNum"
        placeholder="XXX-XXXXXXX"
        labelText="Nombor Telefon Pejabat"
      />
      <h2
        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
      >
        Alamat Surat Menyurat
      </h2>
      <div class="flex flex-col space-y-3 mb-6">
        <StyledInput
          inputId="street"
          inputType="text"
          v-model="street"
          labelText="Nama Jalan"
          placeholder="31 Jalan 3/20"
        />
        <StyledInput
          inputId="city"
          inputType="text"
          v-model="city"
          labelText="Bandar"
          placeholder="Bandar Baru Bangi"
        />
        <div class="flex flex-wrap">
          <StyledInput
            class="md:w-1/2"
            inputId="postcode"
            inputType="text"
            v-model="postcode"
            labelText="Poskod"
            placeholder="43650"
          />
          <StyledInput
            class="md:w-1/2"
            inputId="state"
            inputType="text"
            v-model="negeri"
            labelText="Negeri"
            placeholder="Selangor"
          />
        </div>
      </div>
      <button
        class="mx-3 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 rounded"
        type="submit"
      >
        Simpan
      </button>
    </form>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      name: this.$store.state.applicant.name,
      ic: this.$store.state.applicant.ic,
      icTentera: this.$store.state.applicant.icTentera,
      statusKahwin: this.$store.state.applicant.statusKahwin,
      statusKahwinOptions: [
        "Tidak Berkahwin",
        "Berkahwin",
        "Balu/Duda",
        "Bercerai",
        "Berpisah",
        "Tiada Maklumat"
      ],
      numChildren: this.$store.state.applicant.numChildren,
      mobileNum: this.$store.state.applicant.mobileNum,
      homeNum: this.$store.state.applicant.homeNum,
      officeNum: this.$store.state.applicant.officeNum,
      street: this.$store.state.applicant.street,
      city: this.$store.state.applicant.city,
      postcode: this.$store.state.applicant.postcode,
      negeri: this.$store.state.applicant.negeri
    };
  },
  methods: {
    save() {
      // Save to Vuex store
      this.$store.commit("applicant/saveMaklumatPeribadi", {
        name: this.name,
        ic: this.ic,
        icTentera: this.icTentera,
        statusKahwin: this.statusKahwin,
        numChildren: this.numChildren,
        mobileNum: this.mobileNum,
        homeNum: this.homeNum,
        officeNum: this.officeNum,
        street: this.street,
        city: this.city,
        postcode: this.postcode,
        negeri: this.negeri
      });
    }
  }
};
</script>
