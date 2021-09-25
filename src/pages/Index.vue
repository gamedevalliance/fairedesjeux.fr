<!--
  Homepage of FaireDesJeux, show the hero and the courses list
-->
<template>
  <div class="bg-body font-body">
    <Header />
    <main class="mx-auto py-40 max-w-screen-sm text-center">
      <img alt="Vue logo" class="h-40 mx-auto" src="../assets/logo.png" />
      <HelloWorld />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
  import HelloWorld from "../components/HelloWorld.vue";
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
</script>
