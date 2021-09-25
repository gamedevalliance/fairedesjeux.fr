<!--
  Header of FaireDesJeux, display the logo, navigation and socials
-->
<template>
  <header class="bg-area lg:bg-body text-font text-lg font-body clearfix">
    <div class="container mx-auto flex gap-1">
      <HeaderLogo />
      <HeaderNav />
      <Socials />
    </div>
  </header>
</template>

<script setup lang="ts">
  import HeaderLogo from "./HeaderLogo.vue";
  import HeaderNav from "./HeaderNav.vue";
  import Socials from "./Socials.vue";
</script>

<style scoped></style>
