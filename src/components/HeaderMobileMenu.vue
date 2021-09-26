<template>
  <nav :class="['mobile--menu', state ? 'open' : '']">
    <div class="p-4">
      <router-link to="/contribuer/" class="link text-font mt-2" @click.enter="closeMobileMenu">
        Contribuer
      </router-link>

      <a href="https://gamedevalliance.fr" class="link text-marvin"> Game Dev Alliance </a>

      <a href="https://discord.gg/RrBppaj" class="link text-purple-600">Rejoindre Discord</a>

      <hr class="my-3 border-body border-2 rounded-md border-opacity-75" />

      <router-link to="/contributeurs" class="link text-font mt-2">
        Liste des contributeurs
      </router-link>

      <router-link to="/informations" class="link text-font"> Informations légales </router-link>

      <a href="https://github.com/gamedevalliance/fairedesjeux.fr" class="link text-font">
        Code source
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
  import { getCurrentInstance } from "vue";
  export default {
    props: {
      state: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      closeMobileMenu(): void {
        const instance = getCurrentInstance();
        console.log(instance?.parent);
        if (instance?.parent) {
          instance.parent.toggleMobileMenu(false);
        }
      },
    },
  };
</script>

<style scoped>
  .link {
    @apply font-semibold text-mobileMenu border-none bg-body block mb-1 p-2 pl-3 rounded-md;
  }
  .mobile--menu {
    @apply fixed w-0 overflow-hidden whitespace-no-wrap bg-area border-t border-body;
    transition: width 0.1s linear;
    height: calc(100% - 55px);
    z-index: 15;
    &.open {
      width: 100%;
      overflow-y: scroll;
    }
  }
  @screen md {
    .mobile--menu.open {
      width: 50%;
    }
  }
  @screen lg {
    .mobile--menu.open {
      display: none;
    }
  }
</style>
