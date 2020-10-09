<template>
  <div
    class="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <h1 class="text-center text-4xl leading-9 font-bold text-gray-900">
      Maklumat Waris
    </h1>
    <form
      class="flex flex-col space-y-6 w-full max-w-xl mt-4"
      @submit.prevent="finish()"
    >
      <StyledInput
        inputId="namaWaris"
        inputType="text"
        v-model="namaWaris"
        placeholder="Abu bin Ali"
        labelText="Nama penuh (seperti dalam Kad Pengenalan)"
      />
      <StyledInput
        inputId="icWaris"
        inputType="number"
        v-model="icWaris"
        placeholder="XXXXXX-XX-XXXX"
        labelText="Nombor Kad Pengenalan"
      />
      
      <StyledInput
        inputId="passportWaris"
        inputType="number"
        v-model="passportWaris"
        placeholder="A00000000"
        labelText="Nombor Passport"
      />

      <h2
        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
      >
        Kewarganegaraan
      </h2>
      <label class="flex items-center space-x-4">
        <input
          type="radio"
          id="WargangeraMalaysia"
          value="WargangeraMalaysia"
          v-model="nationalityWaris"
          class="h-3 w-3 border border-gray-400 rounded-full"
        />
        <span>Wargangera Malaysia</span>
      </label>
      <label class="flex items-center space-x-4">
        <input
          type="radio"
          id="BukanWarganegara"
          value="BukanWarganegara"
          v-model="nationalityWaris"
          class="h-3 w-3 border border-gray-400 rounded-full"
        />
        <span>Bukan Warganegara</span>
      </label>

      <StyledSelect
          inputId="hubungan"
          v-model="hubungan"
          :options="hubunganWarisOptions"
          labelText="Hubungan"
          placeholder="Pilih satu"
      />

      <StyledInput
        inputId="pekerjaanWaris"
        inputType="text"
        v-model="pekerjaanWaris"
        placeholder="Pensyarah"
        labelText="Pekerjaan"
      />

      <!-- todo pendapatan -->
      <StyledSelect
        inputId="incomeWaris"
        v-model="incomeWaris"
        :options="pendapatanOptions"
        labelText="Pendapatan (RM)"
        placeholder="Pilih satu"
      />

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
        Alamat Tetap
      </h2>
      <div class="flex flex-col space-y-3 mb-6">
        <StyledInput
          inputId="permanentAddWaris"
          inputType="text"
          v-model="permanentAddWaris"
          labelText="Nama Jalan"
          placeholder="31 Jalan 3/20"
        />
        <StyledInput
          inputId="permCityWaris"
          inputType="text"
          v-model="permCityWaris"
          labelText="Bandar"
          placeholder="Bandar Baru Bangi"
        />
        <div class="flex flex-wrap">
          <StyledInput
            class="md:w-1/2"
            inputId="permPostCodeWaris"
            inputType="text"
            v-model="permPostCodeWaris"
            labelText="Poskod"
            placeholder="43650"
          />
          <StyledInput
            class="md:w-1/2"
            inputId="permStateWaris"
            inputType="text"
            v-model="permStateWaris"
            labelText="Negeri"
            placeholder="Selangor"
          />
        </div>
      </div>
            
      <h2
        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
      >
        Alamat Surat Menyurat
      </h2>
      <div class="flex flex-col space-y-3 mb-6">
        <StyledInput
          inputId="mailingAddWaris"
          inputType="text"
          v-model="mailingAddWaris"
          labelText="Nama Jalan"
          placeholder="31 Jalan 3/20"
        />
        <StyledInput
          inputId="mailingCityWaris"
          inputType="text"
          v-model="mailingCityWaris"
          labelText="Bandar"
          placeholder="Bandar Baru Bangi"
        />
        <div class="flex flex-wrap">
          <StyledInput
            class="md:w-1/2"
            inputId="mailingPostCodeWaris"
            inputType="text"
            v-model="mailingPostCodeWaris"
            labelText="Poskod"
            placeholder="43650"
          />
          <StyledInput
            class="md:w-1/2"
            inputId="mailingStateWaris"
            inputType="text"
            v-model="mailingStateWaris"
            labelText="Negeri"
            placeholder="Selangor"
          />
        </div>
      </div>
      <button
        class="mx-3 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 rounded"
        type="submit"
      >
        Hantar Permohonan
      </button>
    </form>
  </div>
</template>

<script>
export default {
  layout: "biodata",
  data() {
    return {
      namaWaris: this.$store.state.applicant.namaWaris,
      icWaris: this.$store.state.applicant.icWaris,
      passportWaris: this.$store.state.applicant.passportWaris,
      nationalityWaris: this.$store.state.applicant.nationalityWaris,
      // nationalityOptions: [
      //   "Warganegara",
      //   "Bukan warganegara"
      // ],
      hubungan: this.$store.state.applicant.hubungan,
      hubunganWarisOptions: [
        "Ibu",
        "Penjaga",
        "Bapa",
        "Suami/Isteri",
        "Penjaga",
        "Saudara kandung"
      ],
      jobWaris: this.$store.state.applicant.jobWaris,
      incomeWaris: this.$store.state.applicant.incomeWaris,
      pendapatanOptions: [
        "Di bawah RM500.00",
        "RM500.00-RM999.00",
        "RM1,000.00-RM1,999.00",
        "RM2,000.00-RM2,999.00",
        "RM3,000.00-RM3,999.00",
        "RM4,000.00 dan ke atas"
      ],
      permanentAddWaris: this.$store.state.applicant.permanentAddWaris,      
      permPostCodeWaris: this.$store.state.applicant.permPostCodeWaris,
      permCityWaris: this.$store.state.applicant.permCityWaris,
      permStateWaris: this.$store.state.applicant.permStateWaris,
      homeNumWaris: this.$store.state.applicant.homeNumWaris,
      officeNumWaris: this.$store.state.applicant.officeNumWaris,
      mobileNumWaris: this.$store.state.applicant.mobileNumWaris,
      mailingAddWaris: this.$store.state.applicant.mailingAddWaris,
      mailingPostCodeWaris: this.$store.state.applicant.mailingPostCodeWaris,
      mailingCityWaris: this.$store.state.applicant.mailingCityWaris,
      mailingStateWaris: this.$store.state.applicant.mailingStateWaris
    };
  },
  methods: {
      finish() {

      // Save to Vuex store
      this.$store.commit("applicant/saveMaklumatWaris", {
        namaWaris: this.namaWaris,
        icWaris: this.icWaris,
        passportWaris: this.passportWaris,
        nationalityWaris: this.nationalityWaris,
        hubungan: this.hubungan,
        jobWaris: this.jobWaris,
        incomeWaris: this.incomeWaris,
        permanentAddWaris: this.permanentAddWaris,
        homeNumWaris: this.homeNumWaris,
        officeNumWaris: this.officeNumWaris,
        mobileNumWaris: this.mobileNumWaris,
        mailingAddWaris: this.mailingAddWaris,
        postCodeWaris: this.postCodeWaris,
        cityWaris: this.cityWaris,
        stateWaris: this.stateWaris,
      });

      this.$router.push("/daftar/tamat");
    }
  }
};
</script>