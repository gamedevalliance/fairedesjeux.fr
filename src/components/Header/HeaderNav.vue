<template>
  <nav class="inline-flex gap-6 items-center ml-6 h-14 font-semibold text-base">
    <router-link to="/">PICO-8</router-link>
    <router-link to="/">Ren'Py</router-link>
    <router-link to="/">Pixel art</router-link>
    <router-link to="/">Contribuer</router-link>
    <a href="https://gamedevalliance.fr" aria-label="Game Dev Alliance" class="text-marvin">
      <span class="gda" aria-hidden="true">
        <!--The link to our main website got a little bounce animation letter by letter-->
        <!-- Tailwind doesn't support animationDelay for some reason, so annoying - erika, 2021-09-25 -->
        <span
          v-for="(letter, index) in 'GameDevAlliance.fr'.split('')"
          :key="letter"
          :style="`animation-delay: ${index * 0.05 - 0.05}s`"
        >
          {{ letter }}
        </span>
      </span>
    </a>
    <a class="text-purple-500">Rejoindre le Discord</a>
  </nav>
</template>

<style scoped>
  a {
    @apply hover:text-marvin cursor-pointer;
  }

  .gda span {
    @apply inline-block;
  }

  .gda:hover span {
    @apply animate-bounce;
  }
</style>
