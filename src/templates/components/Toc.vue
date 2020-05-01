<template>
    <nav class="local-sidebar mt-12">
        <a class="smola"
           :href="'https://github.com/gamedevalliance/fairedesjeux.fr/edit/master/content/courses/'+$page.section.fileInfo.path"
        >
            Modifier la page</a><br /><br />
        <span v-if="$page.section.headings.length > 0"
              class="leading-normal text-base font-bold text-font no-underline;"
        >Sur cette page :</span>
        <ul class="mt-0 sticky block top-20">
            <li v-for="heading in $page.section.headings"
                :key="heading.value"
            >
                <a :href="heading.anchor"
                   class="smola"
                >
                    {{ heading.value }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    module.exports = {
        name: 'Toc',
        components: {},
        props: {
            chapter: {
                type: Object,
            },
        },
        data() {
            return {
                isOpen: this.isopen,
            };
        },
    };
</script>
