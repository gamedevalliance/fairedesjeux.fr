<template>
    <div class="inline-block text-xl text-font-2">
        <a href="https://twitter.com/gamedevalliance" class="twitter" title="Twitter" aria-label="Twitter">
            <font-awesome :icon="['fab', 'twitter']" />
        </a>
        <a href="https://www.facebook.com/GameDevAlliance" class="facebook" title="Facebook" aria-label="Facebook">
            <font-awesome :icon="['fab', 'facebook-f']" />
        </a>
        <a href="https://github.com/gamedevalliance/" class="github" title="GitHub" aria-label="GitHub">
            <font-awesome :icon="['fab', 'github']" />
        </a>
    </div>
</template>

<style lang="postcss" scoped>
    a:first-of-type {
        @apply ml-0;
    }

    a {
        @apply inline-block ml-4 border-none text-font align-middle;

        &.twitter:hover {
            @apply text-blue-400;
        }

        &.facebook:hover {
            @apply text-blue-800;
        }

        &.github:hover {
            @apply text-black;
        }
    }
</style>
