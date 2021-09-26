<!--
  Header of FaireDesJeux, display the logo, navigation and socials
-->
<template>
  <header class="bg-area lg:bg-body text-font text-lg font-body clearfix">
    <div class="container mx-auto flex gap-1">
      <HeaderLogo />
      <HeaderNav class="hidden lg:inline-flex" />
      <Socials class="hidden lg:inline-flex ml-auto" />
      <HeaderMobileSwitcher class="inline-flex lg:hidden ml-auto" />
    </div>
  </header>
</template>

<script lang="ts">
  import HeaderLogo from "./HeaderLogo.vue";
  import HeaderNav from "./HeaderNav.vue";
  import Socials from "./Socials.vue";
  import HeaderMobileSwitcher from "./HeaderMobileSwitcher.vue";
  import { defineComponent } from "vue";

  export default defineComponent({
    components: {
      HeaderLogo,
      HeaderNav,
      Socials,
      HeaderMobileSwitcher,
    },
    data() {
      return {
        mobileMenu: false,
      };
    },
    methods: {
      toggleMobileMenu(): void {
        if (!this.mobileMenu) this.mobileMenu = false;
        else this.mobileMenu = true;
        // NOTE: We add overflow: hidden; to the body in order to prevent scrolling it while the menu is open
        document.body.classList.toggle("overflow-hidden");
      },
    },
  });
</script>
