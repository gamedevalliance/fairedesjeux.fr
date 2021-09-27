<template>
  <header class="bg-area lg:bg-body text-font text-lg font-body clearfix">
    <div class="container mx-auto flex gap-1">
      <HeaderLogo />
      <HeaderNav class="hidden lg:inline-flex" />
      <Socials class="hidden lg:inline-flex ml-auto" />
    </div>
  </header>
</template>

<script setup lang="ts">
  import HeaderLogo from "./Header/HeaderLogo.vue";
  import HeaderNav from "./Header/HeaderNav.vue";
  import Socials from "./Socials.vue";
</script>
