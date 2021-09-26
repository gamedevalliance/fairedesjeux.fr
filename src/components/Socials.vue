<!--
  Display links to our socials. Appears in the header & footer.
-->
<template>
  <div class="inline-flex gap-4 items-center ml-auto text-xl text-font-2">
    <a
      href="https://www.youtube.com/channel/UCCjlo6Ihet_T3X6bKLJzPsA"
      class="youtube"
      title="Youtube"
      aria-label="Youtube"
    >
      <font-awesome :icon="['fab', 'youtube']" />
    </a>
    <a
      href="https://twitter.com/gamedevalliance"
      class="twitter"
      title="Twitter"
      aria-label="Twitter"
    >
      <font-awesome :icon="['fab', 'twitter']" />
    </a>
    <a
      href="https://www.facebook.com/GameDevAlliance"
      class="facebook"
      title="Facebook"
      aria-label="Facebook"
    >
      <font-awesome :icon="['fab', 'facebook-f']" />
    </a>
    <a href="https://github.com/gamedevalliance/" class="github" title="GitHub" aria-label="GitHub">
      <font-awesome :icon="['fab', 'github']" />
    </a>
  </div>
</template>

<style scoped>
  a {
    @apply inline-block border-none text-font align-middle;
    &.youtube:hover {
      @apply text-red-600;
    }
    &.twitter:hover {
      @apply text-blue-400;
    }
    &.facebook:hover {
      @apply text-blue-700;
    }
    &.github:hover {
      @apply text-white;
    }
  }
</style>
