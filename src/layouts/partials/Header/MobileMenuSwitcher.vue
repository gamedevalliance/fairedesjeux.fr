<template>
    <section class="md:hidden">
        <button @click="$emit('toggle-mobile-menu')">
            <g-image src="~/assets/menu.png"
                     immediate="true"
                     quality="100"
            />
        </button>
    </section>
</template>

<style lang="postcss" scoped>
    button {
        @apply relative p-3;

        height: 50px;
        width: 50px;
        top: 50%;
        transform: translateY(-50%);

        &:hover {
            @apply bg-area-2 cursor-pointer;

            border-radius: 24px;
        }
    }
</style>
