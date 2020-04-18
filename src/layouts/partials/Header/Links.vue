<template>
    <nav class="inline-block absolute ml-6">
        <a href="#" class="font-semibold text-font">Unity</a>
        <a href="#" class="font-semibold text-font">Ren'Py</a>
        <a href="#" class="font-semibold text-font">Formations</a>
        <a href="#" class="font-semibold text-font">Contribuer</a>
        <a href="#" class="font-semibold text-marvin">GameDevAlliance</a>
        <a href="#" class="font-semibold text-purple-600">Rejoindre Discord</a>
    </nav>
</template>

<style lang="postcss" scoped>
    nav {
        line-height: 55px;

        & a {
            @apply inline-block mr-6;

            &:hover {
                @apply text-marvin;
            }
        }
    }
</style>

<static-query>
</static-query>
