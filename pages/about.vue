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
                  to="/doctor/login"
                  class="font-medium transition duration-150 ease-in-out"
                  :class="
                    this.$route.path == '/doctor/login'
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
                Mengenai <span class="text-indigo-600">kami</span>
              </h2>
              <p
                class="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                We are young working professionals who are enthusiastic for an
                opportunity to use our skills to give back to our nation.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="@/assets/group-pic.jpeg"
          alt="Group photo of the team."
        />
      </div>
    </div>

    <div class="py-12 bg-gray-100">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <!-- <p
            class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
          >
            This is us
          </p> -->
          <h3
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            This is us
          </h3>
          <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-600 lg:mx-auto">
            We recently graduated from the University of Wisconsin-Madison with
            combined education experiences in Computer Science, Actuarial
            Science, Geoscience and liberal arts studies.
          </p>
        </div>

        <div class="mt-10">
          <ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center">
                    <img
                      class="w-32 h-32 rounded-full md:w-48 md:h-48"
                      src="@/assets/rina.jpeg"
                      alt="A photo of Khairina."
                    />
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Khairina Ibrahim
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-600">
                    Business analyst with a knack for coding. #girlswhocode
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center">
                    <img
                      class="w-32 h-32 rounded-full md:w-48 md:h-48"
                      src="@/assets/lisa.png"
                      alt="A photo of Lisa."
                    />
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Lisa Kamal
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-600">
                    Geoscientist with a passion in education and social studies.
                    Always curious, always learning.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center">
                    <img
                      class="w-32 h-32 rounded-full md:w-48 md:h-48"
                      src="@/assets/mirza.png"
                      alt="A photo of Mirza."
                    />
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Mirza Nor Azman
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-600">
                    Software Engineer who enjoys converting coffee to code ☕
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center">
                    <img
                      class="w-32 h-32 rounded-full md:w-48 md:h-48"
                      src="@/assets/mujahid.jpeg"
                      alt="A photo of Mujahid."
                    />
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Mujahid Fakhrul Anuar
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-600">
                    Tinkers with web & mobile apps, and loves everything
                    beautiful and open source.
                  </p>
                </div>
              </div>
            </li>
          </ul>
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
