<template>
  <div class="wrap">
    <navbar ref="nav"></navbar>
    <main>
      <router-view />
    </main>
    <footer-section></footer-section>
  </div>
</template>

<script>
import navbar from '@/components/front/Navbar.vue';
import footerSection from '@/components/front/Footer.vue';

export default {
  components: {
    navbar,
    footerSection,
  },
  watch: {
    $route() {
      this.$refs.nav.closeNav();
    },
  },
};
</script>
