<template>
    <button class="md:hidden">
        <g-image src="~/assets/menu.png"
                 immediate="true"
                 quality="100"
        />
    </button>
</template>

<style lang="postcss" scoped>
    button {
        @apply relative p-3;

        height: 50px;
        width: 50px;
        margin-top: 2px;
        top: 50%;

        /* NOTE: This remove the imposed 300ms latency on touch events on mobile - erika, 2020-08-02  */
        touch-action: manipulation;

        &:hover {
            @apply bg-area-2 cursor-pointer;

            border-radius: 24px;
        }
    }
</style>
