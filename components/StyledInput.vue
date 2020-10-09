<template>
  <div class="w-full px-3">
    <label
      class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
      :for="inputId"
    >
      {{ labelText }}
    </label>
    <input
      class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-400"
      :id="inputId"
      :type="inputType"
      @input="$emit('input', $event.target.value)"
      :value="value"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    inputId: {
      type: String
    },
    inputType: {
      type: String
    },
    value: {
      type: String
    },
    labelText: {
      type: String
    },
    placeholder: {
      type: String
    }
  }
  // data() {
  //   return {
  //     content: this.value
  //   };
  // },
  // methods: {
  //   handleInput(e) {
  //     this.$emit("input", this.content);
  //   }
  // }
};
</script>

<style scoped></style>
