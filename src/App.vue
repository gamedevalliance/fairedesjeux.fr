<!--
  Don't mind this, just needed by the Router
-->
<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script lang="ts" setup>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
</script>
