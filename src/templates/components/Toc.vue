<template>
    <nav class="h-full mt-12">
        <a class="smola"
           :href="'https://github.com/gamedevalliance/fairedesjeux.fr/edit/master/content/courses/'+$page.section.fileInfo.path"
        >
            Modifier la page</a><br /><br />
        <span v-if="$page.section.headings.length > 0"
              class="leading-normal text-base font-bold text-font no-underline;"
        >Sur cette page :</span>
        <ul class="toc mt-0 sticky block top-20">
            <li v-for="heading in $page.section.headings"
                :key="heading.value"
                :class="{ ['nested nested_' + heading.depth]: heading.depth >= 4}"
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

<style lang="postcss" scoped>
    .toc {
        line-height: 1;

        & li {
            padding-top: 0.2rem;
            padding-bottom: 0.2rem;
        }

        & .nested {
            border-left: 1px solid #505263;
            padding-left: 15px;

            &_5 {
                margin-left: 15px;
            }

            &_6 {
                margin-left: 30px;
            }
        }
    }
</style>
