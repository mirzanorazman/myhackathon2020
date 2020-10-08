<template>
  <div class="bg-gray-100">
    <!-- <ProgressBar /> -->
    <div class="flex space-x-2 items-center justify-center pt-4">
      <nuxt-link to="/" class="flex">
        <img
          class="flex mx-auto h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
          alt="Workflow"
        />
      </nuxt-link>

      <h1
        class="flex text-center text-4xl leading-9 font-extrabold text-gray-900"
      >
        Biodata
      </h1>
    </div>
    <div class="mx-4 sm:mx-20 md:mx-32 lg:mx-64">
      <StepProgress
        :steps="steps"
        :current-step="currentStep"
        active-color="#7f9cf5"
        passive-color="#a0aec0"
        :line-thickness="3"
        :passive-thickness="1"
        :active-thickness="3"
      ></StepProgress>
    </div>

    <Nuxt />
  </div>
</template>

<script>
import StepProgress from "vue-step-progress";
import "vue-step-progress/dist/main.css";

export default {
  components: {
    StepProgress
  },
  data() {
    return {
      steps: ["Peribadi", "Pendidikan", "Pekerjaan", "Waris"]
    };
  },
  computed: {
    currentStep() {
      if (this.$route.path == "/daftar/biodata/peribadi") return 0;
      if (this.$route.path == "/daftar/biodata/pendidikan") return 1;
      if (this.$route.path == "/daftar/biodata/pekerjaan") return 2;
      if (this.$route.path == "/daftar/biodata/waris") return 3;
    }
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
