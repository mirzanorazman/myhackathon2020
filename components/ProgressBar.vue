<template>
  <!-- component -->
  <div class="w-full py-6">
    <div class="flex">
      <!-- peribadi -->
      <div class="w-1/4">
        <div class="relative mb-2">
          <nuxt-link
            to="/daftar/biodata/peribadi"
            class="w-10 h-10 mx-auto bg-indigo-500 rounded-full text-lg text-white flex items-center"
          >
            <span class="text-center text-white w-full">
              <svg
                class="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </span>
          </nuxt-link>
        </div>

        <div class="text-xs text-center md:text-base">Maklumat Peribadi</div>
      </div>

      <!-- pendidikan -->
      <div class="w-1/4">
        <div class="relative mb-2">
          <div
            class="absolute flex align-center items-center align-middle content-center"
            style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)"
          >
            <div
              class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1"
            >
              <div
                class="w-0 bg-indigo-300 py-1 rounded"
                style="width: 100%;"
              ></div>
            </div>
          </div>

          <nuxt-link
            to="/daftar/biodata/pendidikan"
            class="w-10 h-10 mx-auto bg-indigo-500 rounded-full text-lg text-white flex items-center"
          >
            <span class="text-center text-white w-full">
              <svg
                class="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>
          </nuxt-link>
        </div>

        <div class="text-xs text-center md:text-base">Maklumat Pendidikan</div>
      </div>

      <!-- pekerjaan -->
      <div class="w-1/4">
        <div class="relative mb-2">
          <div
            class="absolute flex align-center items-center align-middle content-center"
            style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)"
          >
            <div
              class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1"
            >
              <div
                class="w-0 bg-indigo-300 py-1 rounded"
                style="width: 33%;"
              ></div>
            </div>
          </div>

          <nuxt-link
            to="/daftar/biodata/pekerjaan"
            class="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center"
          >
            <span class="text-center text-gray-600 w-full">
              <svg
                class="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </span>
          </nuxt-link>
        </div>

        <div class="text-xs text-center md:text-base">Maklumat Pekerjaan</div>
      </div>

      <!-- waris -->
      <div class="w-1/4">
        <div class="relative mb-2">
          <div
            class="absolute flex align-center items-center align-middle content-center"
            style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)"
          >
            <div
              class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1"
            >
              <div
                class="w-0 bg-indigo-300 py-1 rounded"
                style="width: 0%;"
              ></div>
            </div>
          </div>

          <nuxt-link
            to="/daftar/biodata/waris"
            class="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center"
          >
            <span class="text-center text-gray-600 w-full">
              <svg
                class="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </span>
          </nuxt-link>
        </div>

        <div class="text-xs text-center md:text-base">
          Maklumat Waris Terdekat
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
