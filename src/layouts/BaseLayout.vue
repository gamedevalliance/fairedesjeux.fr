<template>
  <Header />
  <main class="bg-body font-body">
    <div class="container mx-auto">
      <slot />
    </div>
  </main>
  <Footer />
</template>

<script setup lang="ts">
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
</script>
