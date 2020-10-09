<template>
  <div>
    <h1 class="mt-8 mb-12 text-4xl leading-9 font-bold text-gray-900">
      Selamat datang, {{ name }}!
    </h1>
    <div class="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
      <section
        class="flex flex-col h-auto w-full md:w-1/3 bg-white border border-gray-500 rounded rounded-lg"
      >
        <p
          class="h-auto text-lg font-semibold text-gray-700 text-center border-b border-gray-300"
        >
          Status permohonan:
        </p>
        <div class="flex flex-col h-32 items-center justify-center">
          <p class="text-2xl font-semibold text-indigo-700 text-center">
            Sedang diproses
          </p>
          <p class="font-semibold text-gray-600 text-center">
            Tarikh pendaftaran: 10 Oktober 2020
          </p>
        </div>
      </section>
      <section
        class="flex flex-col h-auto w-full md:w-1/3 bg-white border border-gray-500 rounded rounded-lg"
      >
        <p
          class="h-auto text-lg font-semibold text-gray-700 text-center border-b border-gray-300"
        >
          Doktor anda:
        </p>
        <div class="flex flex-col h-32 items-center justify-center">
          <p class="text-2xl font-semibold text-gray-900 text-center">
            Dr. Salmiah Adam
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "dashboard",
  computed: {
    ...mapState("applicant", {
      name: state => state.name
    })
  }
};
</script>

<style scoped></style>
