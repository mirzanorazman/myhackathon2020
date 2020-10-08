<template>
  <div
    class="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <h1 class="text-center text-4xl leading-9 font-bold text-gray-900">
      Maklumat Pendidikan
    </h1>
    <form
      class="flex flex-col space-y-6 w-full max-w-xl mt-4"
      @submit.prevent="goToNextPage()"
    >
      <StyledSelect
        inputId="tahapPendidikan"
        v-model="tahapPendidikan"
        :options="tahapPendidikanOptions"
        labelText="Tahap Pendidikan"
        placeholder="Pilih satu"
      />
      <StyledInput
        inputId="bidangPengajian"
        inputType="text"
        v-model="bidangPengajian"
        placeholder="Kejuruteraan"
        labelText="Bidang pengajian"
      />
      <StyledInput
        inputId="namaInstitusi"
        inputType="text"
        v-model="namaInstitusi"
        placeholder="Universiti Kebangsaan Malaysia"
        labelText="Nama institusi"
      />

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
      tahapPendidikan: "",
      tahapPendidikanOptions: [
        "Tidak bersekolah",
        "Pra-Sekolah",
        "Sekolah Rendah",
        "Sekolah Menengah",
        "Kolej Vokasional/Teknik",
        "Sijil",
        "Diploma",
        "Sarjana Muda",
        "Sarjana",
        "Doktor Falsafah"
      ],
      bidangPengajian: "",
      namaInstitusi: ""
    };
  },
  methods: {
    goToNextPage() {
      // TODO: Save to Vuex store

      this.$router.push("/daftar/biodata/pekerjaan");
    }
  }
};
</script>

<style scoped></style>
