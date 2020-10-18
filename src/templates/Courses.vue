<template>
    <Layout>
        <div class="grid grid-cols-mob lg:grid-cols-tab xl:grid-cols-cont gap-col px-4 lg:px-0">
            <!-- left nav -->
            <aside class="mt-12 hidden lg:block">
                <div v-for="chapter in $page.section.chapters" :key="chapter.id" class="area text-font mb-6">
                    <Chapter :chapter="chapter" :isopen="true" />
                </div>
            </aside>

            <main>
                <article>
                    <header>
                        <h2>{{ $page.section.title }}</h2>

                        <g-image
                            :src="this.cover"
                            class="rounded-md h-courseCover w-full object-cover"
                        />
                    </header>

                    <Medal :rank="$page.section.medal" />

                    <section v-html="$page.section.content"></section>

                    <h3>Commencer la formation en mode...</h3>
                    <div class="flex justify-center mt-4">
                        <Button :src="$page.section.chapters[0].sections[0].path" class="w-64">
                            Texte
                        </Button>

                        <Button v-if="$page.section.video" :src="$page.section.video" class="w-64">
                            Vidéo
                        </Button>
                        <Button v-else disabled class="w-64" title="Vidéo indisponible pour le moment!">
                            Vidéo
                        </Button>
                    </div>
                </article>
            </main>

            <!-- right nav -->
            <div class="hidden xl:block">
                <Toc />
            </div>
        </div>
    </Layout>
</template>

<script>
    import Chapter from './components/Chapter.vue';
    import Toc from './components/Toc.vue';
    import Button from '../layouts/components/Button.vue';
    import Medal from './components/Medal.vue';

    export default {
        components: {
            Chapter,
            Toc,
            Button,
            Medal,
        },
        computed: {
            cover() {
                // eslint-disable-next-line global-require, import/no-dynamic-require
                return require(`!!assets-loader?quality=100!@coursesCovers/${this.$page.section.name}/cover-wide.png`);
            },
        },
        metaInfo() {
            return {
                title: this.$page.section.title,
                meta: [
                    {
                        key: 'description',
                        name: 'description',
                        content: this.$page.section.description,
                    },
                    {
                        key: 'og:title',
                        name: 'og:title',
                        content: this.$page.section.title,
                    },
                    {
                        key: 'og:description',
                        name: 'og:description',
                        content: this.$page.section.description,
                    },
                    {
                        key: 'og:image',
                        name: 'og:image',
                        content: this.cover.src,
                    },
                ],
            };
        },
    };
</script>

<page-query>
    query ($path: String!) {
        section: course(path: $path) {
            id
            title
            name
            content
            description
            medal
            medal_message
            video
            fileInfo {
                path
            }
            headings {
                anchor
                value
            }
            chapters(sort: {by: "name", order:ASC}) {
                id
                title
                sections(sort: {by: "fileInfo.name", order:ASC}) {
                    id
                    title
                    path
                }
            }
        }
    }
</page-query>

<style lang="postcss" scoped>
    article >>> {
        /*
                NOTE: This style is used for captions of images and videos. Very practical for the authors
                as they only have to do a line return and write in italics. - nev, 2020-04-24
            */
        & img + noscript + em, & video + p > em {
            @apply text-center text-sm text-font-2 mt-4 mb-0 block;
        }

        & ul {
            @apply list-disc list-inside;
        }

        & ol {
            @apply list-decimal list-inside;
        }

        & li {
            @apply my-2;
        }

        & li > code, & p > code {
            @apply px-2 py-1;
        }

        & pre, & code {
            @apply border-0 bg-area text-sm mb-6 mt-3 rounded-md font-display;

            text-shadow: none;
            box-shadow: none;
        }

        & blockquote {
            @apply border-solid border-l-4 border-astride;

            & p {
                @apply m-5 italic;
            }
        }

        /* TODO: Move this to tailwind.config.js - erika, 2020-09-04 */
        @media (max-width: 640px) {
            & .bubble-marvin::after,
            & .bubble-hypemarvin::after,
            & .bubble-oofmarvin::after,
            & .bubble-astride::after,
            & .bubble-winkastride::after,
            & .bubble-sighastride::after,
            & .bubble-remi::after,
            & .bubble-profremi::after,
            & .bubble-notlikethisremi::after {
                width: 75px;
                height: 75px;
                top: 5px;
            }
        }
    }
</style>
