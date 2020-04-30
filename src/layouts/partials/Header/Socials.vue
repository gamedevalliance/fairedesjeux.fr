<template>
    <div class="nav--socials inline-block float-right text-xl text-font-2">
        <a href="https://twitter.com/gamedevalliance"><font-awesome :icon="['fab', 'twitter']" /></a>
        <a href="https://www.facebook.com/GameDevAlliance"><font-awesome :icon="['fab', 'facebook-f']" /></a>
        <a href="https://github.com/gamedevalliance/"><font-awesome :icon="['fab', 'github']" /></a>
    </div>
</template>

<style lang="postcss" scoped>
    .nav--socials {
        line-height: 55px;

        & a {
            @apply inline-block ml-4 border-none text-font;

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
