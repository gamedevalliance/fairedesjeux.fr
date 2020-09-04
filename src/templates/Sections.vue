<template>
    <Layout>
        <div class="grid grid-cols-mob lg:grid-cols-tab xl:grid-cols-cont gap-col px-2 lg:px-0">
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

        /*
            NOTE : Used for speech bubbles with our mascots - Nev, 14/08/2020
        */

        & .bubble {
            & .bubble-content {
                @apply inline-block text-left bg-area py-2 px-8 my-4 rounded-full;

                margin-left: -20px;
                margin-right: -20px;
                max-width: 89%;
            }

            & h5 {
                @apply inline-block text-right m-0 py-1 px-5 relative text-lg bg-area-2 rounded-lg;

                top: 2rem;
                margin-top: -2rem;
            }
        }

        & .bubble-marvin {
            @apply text-right;

            & h5 {
                @apply text-marvin;

                right: 116px;
            }

            &::after {
                background-image: url("~@avatars/marvin.png");
                content: "";
                float: right;
                width: 100px;
                height: 100px;
                bottom: 0;
                position: relative;
                display: inline-block;
                background-size: cover;
            }
        }

        & .bubble-hypemarvin {
            @apply text-right;

            & h5 {
                @apply text-marvin;

                right: 116px;
            }

            &::after {
                background-image: url("~@avatars/marvin-hehe.png");
                content: "";
                float: right;
                width: 100px;
                height: 100px;
                bottom: 0;
                position: relative;
                display: inline-block;
                background-size: cover;
            }
        }

        & .bubble-oofmarvin {
            @apply text-right;

            & h5 {
                @apply text-marvin;

                right: 116px;
            }

            &::after {
                background-image: url("~@avatars/marvin-oof.png");
                content: "";
                float: right;
                width: 100px;
                height: 100px;
                bottom: 0;
                position: relative;
                display: inline-block;
                background-size: cover;
            }
        }

        & .bubble-astride {
            @apply text-left;

            & h5 {
                @apply text-astride;

                left: 116px;
            }

            &::after {
                background-image: url("~@avatars/astride.png");
                content: "";
                float: left;
                width: 100px;
                height: 100px;
                bottom: 0;
                position: relative;
                display: inline-block;
                background-size: cover;
            }
        }

        & .bubble-winkastride {
            @apply text-left;

            & h5 {
                @apply text-astride;

                left: 116px;
            }

            &::after {
                background-image: url("~@avatars/astride-wink.png");
                content: "";
                float: left;
                width: 100px;
                height: 100px;
                bottom: 0;
                position: relative;
                display: inline-block;
                background-size: cover;
            }
        }

        & .bubble-sighastride {
            @apply text-left;

            & h5 {
                @apply text-astride;

                left: 116px;
            }

            &::after {
                background-image: url("~@avatars/astride-tss.png");
                content: "";
                float: left;
                width: 100px;
                height: 100px;
                bottom: 0;
                position: relative;
                display: inline-block;
                background-size: cover;
            }
        }

        & .bubble-remi {
            @apply text-left;

            & h5 {
                @apply text-remi;

                left: 116px;
            }

            &::after {
                background-image: url("~@avatars/remi.png");
                content: "";
                float: left;
                width: 100px;
                height: 100px;
                bottom: 0;
                position: relative;
                display: inline-block;
                background-size: cover;
            }
        }

        & .bubble-profremi {
            @apply text-left;

            & h5 {
                @apply text-remi;

                left: 116px;
            }

            &::after {
                background-image: url("~@avatars/remi-hum.png");
                content: "";
                float: left;
                width: 100px;
                height: 100px;
                bottom: 0;
                position: relative;
                display: inline-block;
                background-size: cover;
            }
        }

        & .bubble-notlikethisremi {
            @apply text-left;

            & h5 {
                @apply text-remi;

                left: 116px;
            }

            &::after {
                background-image: url("~@avatars/remi-ono.png");
                content: "";
                float: left;
                width: 100px;
                height: 100px;
                bottom: 0;
                position: relative;
                display: inline-block;
                background-size: cover;
            }
        }

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
        metaInfo() {
            return {
                title: this.$page.section.title,
                meta: [
                    {
                        key: 'og:description',
                        name: 'og:description',
                        content: this.$page.section.chapter.course.description,
                    },
                    {
                        key: 'og:image',
                        name: 'og:image',
                        content: 'http://fairedesjeux.fr/cover.png',
                    },
                ],
            };
        },
    };
</script>

<page-query>
    query ($id: ID!) {
        section(id: $id) {
            title
            content
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
            chapter {
                id
                course {
                    title
                    short_title
                    description
                    path
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
