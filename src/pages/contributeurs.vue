<template>
  <div class="w-full sm:w-180 mx-auto sm:py-20 px-4 prose">
    <h2 class="text-6xl py-4 px-1 text-astride font-bold font-title tracking-title">Merci !</h2>
    <p>
      FaireDesJeux.fr ne serait rien sans l'aide de ces contributeurs et contributrices. Si vous
      voulez participer à cette aventure collective,
      <a href="/contribuer"> n'hésitez pas à contribuer. </a>
    </p>
    <ul>
      <li v-for="contributor in state.contributors" :key="contributor.login">
        <a href="{ contributor.html_url }">{{ contributor.login }}</a> -
        {{ contributor.contributions }}
        <span v-if="contributor.contributions > 1">contributions</span>
        <span v-else>contribution</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { onMounted, reactive } from "vue";

  interface Contributor {
    login: string;
    contributions: number;
  }

  export default {
    setup() {
      const state = reactive({
        contributors: null,
      });

      onMounted(async () => {
        const response = await fetch(
          "https://api.github.com/repos/gamedevalliance/fairedesjeux.fr/contributors",
        );
        state.contributors = await response.json();
      });

      return {
        state,
      };
    },
  };
</script>
