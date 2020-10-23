<template>
    <Layout>
        <div class="grid grid-cols-mob lg:grid-cols-tab xl:grid-cols-cont gap-col px-4 lg:px-0">
            <!-- left nav -->
            <aside class="mt-12 hidden lg:block">
                <div class="area mb-6">
                    <g-link :to="$page.section.chapter.course.path" class="smola">
                        « Retour vers {{ $page.section.chapter.course.short_title || $page.section.chapter.course.title }}
                    </g-link>
                </div>

                <div v-for="chapter in $page.section.chapter.course.chapters" :key="chapter.id" class="area mb-6">
                    <Chapter :chapter="chapter" :isopen="chapter.id === $page.section.chapter.id" />
                </div>
            </aside>

            <!-- content -->
            <main>
                <article>
                    <header>
                        <h2>
                            {{ $page.section.title }}
                        </h2>
                    </header>

                    <section v-html="$page.section.content"></section>
                    <div class="flex justify-center mt-4">
                        <Button v-if="$page.section.next" :src="$page.section.next.path" class="w-64">
                            J'ai compris !
                        </Button>
                        <Button v-else :src="$page.section.chapter.course.path" class="w-64">
                            Retour à l'accueil
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

    export default {
        components: {
            Chapter,
            Toc,
            Button,
        },
        computed: {
            opengraph_image() {
                return this.$page.section.opengraph_image
                    || this.$page.section.chapter.opengraph_image
                    || this.$page.section.chapter.course.opengraph_image;
            },
            description() {
                return this.$page.section.description
                    || this.$page.section.chapter.description
                    || this.$page.section.chapter.course.description;
            },
        },
        metaInfo() {
            return {
                title: `${this.$page.section.title} · ${this.$page.section.chapter.course.short_title} · ${this.$page.section.chapter.title}`,
                meta: [
                    {
                        key: 'description',
                        name: 'description',
                        content: this.description,
                    },
                    {
                        key: 'og:title',
                        name: 'og:title',
                        content: `${this.$page.section.title} · ${this.$page.section.chapter.course.short_title} · ${this.$page.section.chapter.title}`,
                    },
                    {
                        key: 'og:description',
                        name: 'og:description',
                        content: this.description,
                    },
                    {
                        key: 'twitter:card',
                        name: 'twitter:card',
                        content: 'summary_large_image',
                    },
                    {
                        key: 'twitter:image',
                        name: 'twitter:image',
                        content: this.opengraph_image.src,
                    },
                    {
                        key: 'og:image',
                        name: 'og:image',
                        content: this.opengraph_image.src,
                    },
                ],
            };
        },
    };
</script>

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
            & .bubble::after {
                width: 75px;
                height: 75px;
                top: 5px;
            }
        }
    }
</style>

<page-query>
    query ($id: ID!) {
        section(id: $id) {
            title
            content
            description
            next {
                title
                path
            }
            fileInfo {
                path
            }
            headings {
                value
                anchor
                depth
            }
            opengraph_image
            chapter {
                id
                title
                description
                opengraph_image
                course {
                    name
                    title
                    short_title
                    description
                    path
                    opengraph_image
                    chapters(sort: {by: "name", order:ASC}) {
                        title
                        id
                        video {
                            path
                            title
                        }
                        sections(sort: {by: "fileInfo.name", order:ASC}) {
                            title
                            path
                          }
                        }
                      }
                    }
                  }
                }
</page-query>
