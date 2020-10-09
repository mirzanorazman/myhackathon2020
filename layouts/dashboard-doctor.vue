<template>
  <div id="main-body" class="leading-normal tracking-normal">
    <div class="flex flex-wrap">
      <DashboardSidebarDoctor />

      <div
        id="main-content"
        class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen overlay"
      >
        <DashboardNavbar />

        <div class="p-6 bg-gray-100 mb-20">
          <Nuxt />
        </div>

        <!-- <Footer /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      if (window.innerWidth >= 1024) {
        this.$store.commit("dashboard/setSidebarVisibility", true);
      } else {
        this.$store.commit("dashboard/setSidebarVisibility", false);
      }
    }
  }
};
</script>

<style>
/* @import '~vue-snotify/styles/material.css'; */
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

.main-red {
  color: rgb(236, 27, 81);
}
.bg-main-red {
  background-color: rgb(236, 27, 81);
}
.main-dblue {
  color: rgb(12, 31, 62);
}
.bg-main-dblue {
  background-color: rgb(12, 31, 62);
}
</style>
