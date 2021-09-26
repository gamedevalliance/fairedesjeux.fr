<template>
  <section>
    <div class="w-full sm:w-180 mx-auto sm:my-20 px-4">
      <h2 class="text-6xl py-4 px-1 text-astride font-bold font-title tracking-title">Merci !</h2>
      <p class="text-justify text-font text-lg p-2 leading-normal">
        FaireDesJeux.fr ne serait rien sans l'aide de ces contributeurs et contributrices. Si vous
        voulez participer à cette aventure collective,
        <router-link to="/contribuer"> n'hésitez pas à contribuer. </router-link>
      </p>
      <ul>
        <!-- Gonna hydrate that with some Astro magic 🚀 -->
        <li v-for="contributor in contributors" :key="contributor.name" class="py-1">
          <a :href="contributor.profile">
            {{ contributor.name }}
          </a>
          - {{ contributor.commits }}
          <span v-if="contributor.commits > 1">contributions</span>
          <span v-else>contribution</span>
        </li>
      </ul>
    </div>
  </section>
</template>
