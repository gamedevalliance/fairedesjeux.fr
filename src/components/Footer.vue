<!--
    A simple footer with a site map, links to featured courses, a minimalist logo and our socials
-->
<template>
  <footer class="bg-area">
    <div class="container mx-auto py-5 sm:py-6 flex justify-center sm:justify-between">
      <div class="hidden sm:flex gap-14">
        <section>
          <h4>À propos</h4>
          <ul class="text-base text-font-3 flex flex-col gap-2 py-2">
            <li>
              <a href="/contribuer/"> Contribuer </a>
            </li>
            <li>
              <a href="/contributeurs"> Liste des contributeurs </a>
            </li>
            <li>
              <a href="/informations"> Informations légales </a>
            </li>
            <li>
              <a href="https://github.com/gamedevalliance/fairedesjeux.fr">Code source </a>
            </li>
          </ul>
        </section>

        <section>
          <h4>Moteurs de jeux</h4>
          <ul class="text-base text-font-3 flex flex-col gap-2 py-2">
            <li>Voir plus de formations</li>
          </ul>
        </section>

        <section>
          <h4>Autres compétences</h4>
          <ul class="text-base text-font-3 flex flex-col gap-2 py-2">
            <li>Voir plus de formations</li>
          </ul>
        </section>
      </div>
      <section class="text-center sm:text-left float-right text-font">
        <Socials />
        <h2 class="text-font text-2xl my-0 mt-2 leading-none">Game Dev Alliance</h2>
        Association loi 1901.
      </section>
    </div>
  </footer>
</template>

<script lang="ts" setup>
  import Socials from "./Socials.vue";
</script>

<style scoped>
  a {
    @apply hover:text-font hover:underline cursor-pointer;
  }
  h4 {
    @apply text-font text-lg font-bold;
  }
</style>
