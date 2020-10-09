<template>
  <div>
    <h1 class="mt-8 mb-12 text-4xl leading-9 font-bold text-gray-900">
      Selamat datang, Dr Salmiah Adam!
    </h1>
    <div
      class="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mb-4"
    >
      <section
        class="flex flex-col h-auto w-full md:w-1/3 bg-white border border-gray-500 rounded rounded-lg"
      >
        <p
          class="h-auto text-lg font-semibold text-gray-700 text-center border-b border-gray-300"
        >
          Pemohon:
        </p>
        <div class="flex flex-col h-32 items-center justify-center">
          <p class="text-2xl font-semibold text-gray-900 text-center">
            En. Bakri Salleh
          </p>
        </div>
      </section>
      <section
        class="flex flex-col h-auto w-full md:w-1/3 bg-white border border-gray-500 rounded rounded-lg"
      >
        <p
          class="h-auto text-lg font-semibold text-gray-700 text-center border-b border-gray-300"
        >
          Status pengesahan:
        </p>
        <div class="flex flex-col h-32 items-center justify-center">
          <p class="text-2xl font-semibold text-green-700 text-center">
            Pengesahan Lengkap
          </p>
          <button
            @click="sendInfo()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Hantar ke JKM
          </button>
        </div>
      </section>
    </div>
    <div
      class="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mb-4"
    >
      <section
        class="flex flex-col h-auto w-full md:w-1/3 bg-white border border-gray-500 rounded rounded-lg"
      >
        <p
          class="h-auto text-lg font-semibold text-gray-700 text-center border-b border-gray-300"
        >
          Pemohon:
        </p>
        <div class="flex flex-col h-32 items-center justify-center">
          <p class="text-2xl font-semibold text-gray-900 text-center">
            Pn. Suriati Bt Khamis
          </p>
        </div>
      </section>
      <section
        class="flex flex-col h-auto w-full md:w-1/3 bg-white border border-gray-500 rounded rounded-lg"
      >
        <p
          class="h-auto text-lg font-semibold text-gray-700 text-center border-b border-gray-300"
        >
          Status pengesahan:
        </p>
        <div class="flex flex-col h-32 items-center justify-center">
          <p class="text-2xl font-semibold text-red-700 text-center">
            Tidak Lengkap
          </p>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Sambung pengesahan
          </button>
        </div>
      </section>
    </div>
    <div
      class="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mb-4"
    >
      <section
        class="flex flex-col h-auto w-full md:w-1/3 bg-white border border-gray-500 rounded rounded-lg"
      >
        <p
          class="h-auto text-lg font-semibold text-gray-700 text-center border-b border-gray-300"
        >
          Pemohon:
        </p>
        <div class="flex flex-col h-32 items-center justify-center">
          <p class="text-2xl font-semibold text-gray-900 text-center">
            En. Khalid Badrulzaman
          </p>
        </div>
      </section>
      <section
        class="flex flex-col h-auto w-full md:w-1/3 bg-white border border-gray-500 rounded rounded-lg"
      >
        <p
          class="h-auto text-lg font-semibold text-gray-700 text-center border-b border-gray-300"
        >
          Status pengesahan:
        </p>
        <div class="flex flex-col h-32 items-center justify-center">
          <p class="text-2xl font-semibold text-indigo-700 text-center">
            Perlu Pengesahan
          </p>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Mula pengesahan
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "dashboard-doctor",
  computed: {
    ...mapState("applicant", {
      name: state => state.name
    })
  },
  methods: {
    sendInfo() {
      this.$router.push("/doktor/hantar-maklumat-jkm");
    }
  }
};
</script>

<style scoped></style>
