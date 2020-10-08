<template>
  <div
    class="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <h1 class="text-center text-4xl leading-9 font-bold text-gray-900">
      Maklumat Peribadi
    </h1>
    <form
      class="flex flex-col space-y-6 w-full max-w-xl mt-4"
      @submit.prevent="goToNextPage()"
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
        class="mx-3 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Seterusnya
      </button>
    </form>
  </div>
</template>

<script>
export default {
  layout: "biodata",
  data() {
    return {
      name: "",
      ic: "",
      icTentera: "",
      statusKahwin: "",
      statusKahwinOptions: [
        "Tidak Berkahwin",
        "Berkahwin",
        "Balu/Duda",
        "Bercerai",
        "Berpisah",
        "Tiada Maklumat"
      ],
      numChildren: "",
      mobileNum: "",
      homeNum: "",
      officeNum: "",
      street: "",
      city: "",
      postcode: "",
      negeri: ""
    };
  },
  methods: {
    goToNextPage() {
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

      this.$router.push("/daftar/biodata/pendidikan");
    }
  }
};
</script>

<style scoped></style>
