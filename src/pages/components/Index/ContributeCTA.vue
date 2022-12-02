<template>
    <div class="bg-area rounded text-font text-center flex justify-evenly flex-col py-3">
        <g-image src="~/assets/book.png" class="text-center mx-auto p-1 book" />
        <div class="px-4">
            À la recherche de plus de contenu ? N'hésitez pas à
            <g-link to="/contribuer" class="inline-block">
                contribuer
            </g-link> !
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContributeCTA',
    };
</script>

<style lang="postcss" scoped>
    .book {
        width: 125px;
    }

    @screen md {
        .book {
            width: 150px;
        }
    }

    @screen lg {
        .book {
            width: 160px;
        }
    }
</style>
