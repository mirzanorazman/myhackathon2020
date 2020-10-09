<template>
  <div class="flex flex-col pl-8 space-y-8">
    <h1 class="mt-6 text-4xl leading-9 font-bold text-gray-900">
      Pergi ke:
    </h1>
    <nav class="flex flex-col text-xl space-y-4">
      <nuxt-link
        class="text-gray-800 hover:text-indigo-600 flex items-center"
        to="/pengguna/biodata/peribadi"
        ><svg
          class="fill-current w-3 h-3 mx-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          /></svg
        >Maklumat Peribadi</nuxt-link
      >
      <nuxt-link
        class="text-gray-800 hover:text-indigo-600 flex items-center"
        to="/pengguna/biodata/pendidikan"
        ><svg
          class="fill-current w-3 h-3 mx-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          /></svg
        >Maklumat Pendidikan
      </nuxt-link>
      <nuxt-link
        class="text-gray-800 hover:text-indigo-600 flex items-center"
        to="/pengguna/biodata/pekerjaan"
        ><svg
          class="fill-current w-3 h-3 mx-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          /></svg
        >Maklumat Pekerjaan</nuxt-link
      >
      <nuxt-link
        class="text-gray-800 hover:text-indigo-600 flex items-center"
        to="/pengguna/biodata/waris"
        ><svg
          class="fill-current w-3 h-3 mx-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          /></svg
        >Maklumat Waris</nuxt-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  layout: "dashboard"
};
</script>

<style scoped></style>
