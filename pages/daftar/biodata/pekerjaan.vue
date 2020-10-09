<template>
  <div
    class="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <h1 class="text-center text-4xl leading-9 font-bold text-gray-900">
      Maklumat Pekerjaan
    </h1>
    <form
      class="flex flex-col space-y-6 w-full max-w-xl mt-4"
      @submit.prevent="goToNextPage()"
    >
      <StyledSelect
        inputId="sektorPekerjaan"
        v-model="sektorPekerjaan"
        :options="sektorPekerjaanOptions"
        labelText="Sektor Pekerjaan"
        placeholder="Pilih satu"
      />
      <StyledSelect
        inputId="statusPekerjaan"
        v-model="statusPekerjaan"
        :options="statusPekerjaanOptions"
        labelText="Status Pekerjaan"
        placeholder="Pilih satu"
      />
      <StyledInput
        inputId="pekerjaan"
        inputType="text"
        v-model="pekerjaan"
        placeholder="Cikgu"
        labelText="Pekerjaan"
      />

      <StyledInput
        inputId="namaMajikan"
        inputType="text"
        v-model="namaMajikan"
        placeholder="Dolah bin Said"
        labelText="Nama majikan"
      />
      <StyledInput
        inputId="telMajikan"
        inputType="tel"
        v-model="telMajikan"
        placeholder="XXX-XXX-XXXX"
        labelText="Nombor Telefon Majikan"
      />

      <div class="flex flex-col space-y-3 mb-6">
        <StyledInput
          inputId="street"
          inputType="text"
          v-model="streetMajikan"
          labelText="Alamat Majikan"
          placeholder="31 Jalan 3/20"
        />
        <StyledInput
          inputId="city"
          inputType="text"
          v-model="cityMajikan"
          labelText="Bandar"
          placeholder="Bandar Baru Bangi"
        />
        <div class="flex flex-wrap">
          <StyledInput
            class="md:w-1/2"
            inputId="postcode"
            inputType="text"
            v-model="postcodeMajikan"
            labelText="Poskod"
            placeholder="43650"
          />
          <StyledInput
            class="md:w-1/2"
            inputId="state"
            inputType="text"
            v-model="negeriMajikan"
            labelText="Negeri"
            placeholder="Selangor"
          />
        </div>
      </div>

      <StyledSelect
        inputId="pendapatan"
        v-model="pendapatan"
        :options="pendapatanOptions"
        labelText="Pendapatan (RM)"
        placeholder="Pilih satu"
      />
      <StyledInput
        inputId="pendapatanLain"
        inputType="text"
        v-model="pendapatanLain"
        placeholder="Perkeso, Pencen, dsb"
        labelText="Sumber Pendapatan Lain"
      />

      <h2
        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
      >
        Adakah anda memerlukan pekerjaan atau sedang mencari pekerjaan?
      </h2>
      <label class="flex items-center space-x-4">
        <input
          type="radio"
          id="Ya"
          value="Ya"
          v-model="sedangCariKerja"
          class="h-3 w-3 border border-gray-400 rounded-full"
        />
        <span>Ya</span>
      </label>
      <label class="flex items-center space-x-4">
        <input
          type="radio"
          id="Tidak"
          value="Tidak"
          v-model="sedangCariKerja"
          class="h-3 w-3 border border-gray-400 rounded-full"
        />
        <span>Tidak</span>
      </label>

      <button
        class="mt-20 mx-3 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 rounded"
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
      sektorPekerjaan: "",
      sektorPekerjaanOptions: [
        "Kerajaan",
        "Badan berkanun",
        "Swasta",
        "Pertubuhan Bukan Kerajaan",
        "Bekerja sendiri",
        "Tidak Berkenaan"
      ],
      statusPekerjaan: "",
      statusPekerjaanOptions: [
        "Tidak Bekerja",
        "Majikan",
        "Pekerja Kerajaan",
        "Pekerja Swasta",
        "Bekerja Sendiri",
        "Pesara"
      ],
      pekerjaan: "",
      namaMajikan: "",
      telMajikan: "",
      streetMajikan: "",
      cityMajikan: "",
      postcodeMajikan: "",
      negeriMajikan: "",
      pendapatan: "",
      pendapatanOptions: [
        "Di bawah RM500.00",
        "RM500.00-RM999.00",
        "RM1,000.00-RM1,999.00",
        "RM2,000.00-RM2,999.00",
        "RM3,000.00-RM3,999.00",
        "RM4,000.00 dan ke atas"
      ],
      pendapatanLain: "",
      sedangCariKerja: ""
    };
  },
  methods: {
    goToNextPage() {
      // Save to Vuex store
      this.$store.commit("applicant/saveMaklumatPekerjaan", {
        sektorPekerjaan: this.sektorPekerjaan,
        statusPekerjaan: this.statusPekerjaan,
        pekerjaan: this.pekerjaan,
        namaMajikan: this.namaMajikan,
        telMajikan: this.telMajikan,
        streetMajikan: this.streetMajikan,
        cityMajikan: this.cityMajikan,
        postcodeMajikan: this.postcodeMajikan,
        negeriMajikan: this.negeriMajikan,
        pendapatan: this.pendapatan,
        pendapatanLain: this.pendapatanLain,
        sedangCariKerja: this.sedangCariKerja
      });

      this.$router.push("/daftar/biodata/waris");
    }
  }
};
</script>

<style scoped></style>
