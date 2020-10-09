<template>
  <div>
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-screen-xl mx-auto">
        <div
          class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            >
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <nuxt-link to="/" aria-label="Home">
                    <img
                      class="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                      alt="Logo"
                    />
                  </nuxt-link>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                      @click="showMobileMenu = true"
                    >
                      <svg
                        class="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4 flex space-x-8">
                <nuxt-link
                  to="/"
                  class="font-medium transition duration-150 ease-in-out"
                  :class="
                    this.$route.path == '/'
                      ? 'text-indigo-600 hover:text-indigo-900'
                      : 'text-gray-500 hover:text-gray-900 '
                  "
                >
                  Utama
                </nuxt-link>
                <nuxt-link
                  to="/about"
                  class="font-medium transition duration-150 ease-in-out"
                  :class="
                    this.$route.path == '/about'
                      ? 'text-indigo-600 hover:text-indigo-900'
                      : 'text-gray-500 hover:text-gray-900 '
                  "
                >
                  Tentang Kami
                </nuxt-link>
                <nuxt-link
                  to="/doktor/login"
                  class="font-medium transition duration-150 ease-in-out"
                  :class="
                    this.$route.path == '/doktor/login'
                      ? 'text-indigo-600 hover:text-indigo-900'
                      : 'text-gray-500 hover:text-gray-900 '
                  "
                >
                  Log masuk untuk Doktor
                </nuxt-link>
              </div>
            </nav>
          </div>

          <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
          <div
            class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div class="rounded-lg shadow-md">
              <div
                class="rounded-lg bg-white shadow-xs overflow-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
                v-show="showMobileMenu"
              >
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                      alt=""
                    />
                  </div>
                  <div class="-mr-2">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      aria-label="Close menu"
                      @click="showMobileMenu = false"
                    >
                      <svg
                        class="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                  <nuxt-link
                    to="/"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    :class="
                      this.$route.path == '/'
                        ? 'text-indigo-600 bg-gray-100 hover:text-indigo-900'
                        : ''
                    "
                  >
                    Utama
                  </nuxt-link>
                  <nuxt-link
                    to="/about"
                    class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    :class="
                      this.$route.path == '/about'
                        ? 'text-indigo-600 bg-gray-100 hover:text-indigo-900'
                        : ''
                    "
                  >
                    Tentang kami
                  </nuxt-link>
                  <nuxt-link
                    to="/doctor/login"
                    class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    :class="
                      this.$route.path == '/doctor/login'
                        ? 'text-indigo-600 bg-gray-100 hover:text-indigo-900'
                        : ''
                    "
                  >
                    Log masuk untuk doktor
                  </nuxt-link>
                </div>
                <div>
                  <nuxt-link
                    to="/log-masuk"
                    class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Log masuk untuk pengguna
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>

          <main
            class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h2
                class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
              >
                Selamat datang ke
                <br class="xl:hidden" />
                <span class="text-indigo-600">OKU-R</span>
              </h2>
              <p
                class="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Portal pendaftaran kad Orang Kelainan Upaya (OKU) dalam talian,
                buat rakyat Malaysia.
              </p>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div class="rounded-md shadow">
                  <nuxt-link
                    to="/daftar"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Daftar
                  </nuxt-link>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <nuxt-link
                    to="/log-masuk"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Log Masuk
                  </nuxt-link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://assets.nst.com.my/images/articles/23okuoku_1495434450.jpg"
          alt=""
        />
      </div>
    </div>

    <div class="py-12 bg-gray-100">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <p
            class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
          >
            Pendaftaran
          </p>
          <h3
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            Cara lebih mudah untuk memohon kad OKU
          </h3>
          <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            Reimagining accessibility for OKU card applicants
          </p>
        </div>

        <div class="mt-10">
          <ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <!-- Heroicon name: globe-alt -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Pendaftaran dalam talian
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Melalui internet, anda boleh mendaftar dengan mudah sebagai
                    OKU dan memohon untuk kad OKU untuk mendapatkan bantuan yang
                    diperlukan daripada Jabatan Kebajikan Malaysia (JKM).
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <!-- Heroicon name: scale -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Antaramuka mesra OKU
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Daftar secara online dengan antaramuka yang mesra pengguna
                    kelainan upaya. Kembalikan kuasa pengguna kepada anda.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <!-- Heroicon name: lightning-bolt -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Pengurusan lebih cekap dan efisien
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Paparan Muka (dashboard) yang intuitif dan mudah digunakan,
                    memudahkan admin untuk menguruskan hal-ehwal pendaftaran kad
                    OKU.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <!-- Heroicon name: annotation -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Pemberitahuan secara digital
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Dapatkan status pemohonan anda melalui antaramuka web.
                    Hubungi pihak doktor dan pengurusan JKM secara dalam talian.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-gray-200">
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2
          class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          Anda sudah bersedia?
          <br />
          <span class="text-indigo-600">Daftar keahlian OKU sekarang.</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <nuxt-link
              to="/daftar"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Daftar sekarang
            </nuxt-link>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <nuxt-link
              to="/about"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Ketahui lebih
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false
    };
  }
};
</script>

<style scoped></style>
