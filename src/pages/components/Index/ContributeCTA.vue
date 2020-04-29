<template>
    <div class="bg-area rounded w-3/12 text-font text-center flex justify-evenly flex-col mx-2">
        <g-image src="~/assets/book.png" width="175" class="text-center mx-auto" />
        <div>
            À la recherche de plus de contenu ? N'hésitez pas à <g-link to="/contribuer">
                contribuer
            </g-link>!
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContributeCTA',
    };
</script>
