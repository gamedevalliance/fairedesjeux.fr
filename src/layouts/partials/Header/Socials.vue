<template>
    <div class="nav--socials inline-block mr-2 float-right text-xl text-font-2">
        <a href="#"><font-awesome :icon="['fab', 'twitter']" /></a>
        <a href="#"><font-awesome :icon="['fab', 'facebook-f']" /></a>
        <a href="#"><font-awesome :icon="['fab', 'github']" /></a>
    </div>
</template>

<style lang="postcss" scoped>
    .nav--socials {
        line-height: 55px;

        & a {
            @apply inline-block mr-4;

            & .fa-twitter:hover {
                @apply text-blue-400;
            }

            & .fa-facebook-f:hover {
                @apply text-blue-800;
            }

            & .fa-github:hover {
                @apply text-black;
            }
        }
    }
</style>
