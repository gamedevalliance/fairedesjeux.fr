<template>
    <nav class="local-sidebar mt-12 text-right">
        <a class="edit-the-page">Modifier la page</a><br />
        <span class="caption-toc">Sur cette page</span>
        <ul class="local-toc text-font-3">
            <li>Apprendre en vidéo</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
        </ul>
    </nav>
</template>

<style lang="postcss" scoped>
    & .edit-the-page {
        @apply mb-6 mt-3 leading-normal no-underline text-sm text-font-3 border-solid border-0;

        padding-bottom: 1px;
        transition: border-color 0.12s ease, color 0.12s ease;

        &:hover {
            @apply border-b text-font-2 border-font-2;
        }
    }

    & .caption-toc {
        @apply leading-normal no-underline text-base text-font border-solid border-0;
    }

    & .local-toc {
        & li {
            @apply leading-normal no-underline text-sm text-font-3 border-solid border-0;

            padding-bottom: 1px;
            transition: border-color 0.12s ease, color 0.12s ease;

            &:hover {
                @apply border-b text-font-2 border-font-2;
            }
        }
    }
</style>
