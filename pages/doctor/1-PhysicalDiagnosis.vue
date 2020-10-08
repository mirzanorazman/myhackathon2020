<template>
  <div class="container">
    <div>
      <step-progress
        :steps="mySteps"
        :current-step="currentStep"
        icon-class="fa fa-check"
      ></step-progress>
    </div>
    <h1>Diagnosis Fizikal</h1>
    <span>Diagnosis Utama</span>
    <input v-model="diagnosis" placeholder="edit me" />
    <p>Diagnosis is: {{ diagnosis }}</p>
  </div>
</template>

<script>
import StepProgress from "vue-step-progress";

export default {
  components: {
    "step-progress": StepProgress
  },
  data() {
    return {
      mySteps: ["Pendengaran", "Penglihatan", "Pertuturan"],
      currentStep: 0
    };
  }
};
</script>

<style></style>
