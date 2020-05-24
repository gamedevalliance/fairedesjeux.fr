<template>
    <Layout>
        <article class="container mx-auto">
            <div class="grid grid-cols-cont gap-col">
                <!-- left nav -->
                <aside class="mt-12">
                    <div class="area text-font mb-6">
                        <g-link :to="$page.section.chapter.course.path"
                                class="text-font-2 border-transparent hover:border-font hover:text-font"
                        >
                            « Retour vers {{ $page.section.chapter.course.short_title || $page.section.chapter.course.title }}
                        </g-link>
                    </div>
                    <div v-for="chapter in $page.section.chapter.course.chapters"
                         :key="chapter.id"
                         class="area text-font mb-6"
                    >
                        <Chapter :chapter="chapter"
                                 :isopen="chapter.id == $page.section.chapter.id ? true : false"
                        />
                    </div>
                </aside>
                <!-- content -->
                <main>
                    <div>
                        <h2 v-html="$page.section.title"></h2>
                    </div>
                    <div class="content" v-html="$page.section.content"></div>
                </main>
                <!-- right nav -->
                <Toc />
            </div>
        </article>
    </Layout>
</template>

<script>
    import Chapter from './components/Chapter.vue';
    import Toc from './components/Toc.vue';

    export default {
        components: {
            Chapter,
            Toc,
        },
    };
</script>

<style lang="postcss" scoped>
    article >>> {
        & main {
            /*
                NOTE: This style is used for captions of images and videos. Very practical for the authors
                as they only have to do a line return and write in italics. - nev, 2020-04-24
            */
            & img + noscript + em {
                @apply text-center text-sm text-font-2 mt-6 mb-0 block;
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

            & pre, & code {
                @apply border-0 bg-area text-sm mb-6 mt-3 rounded-md font-display;

                text-shadow: none;
                box-shadow: none;
            }

            & code {
                @apply px-2 py-1;
            }

            & blockquote {
                @apply border-solid border-l-4 border-astride;

                & p {
                    @apply m-5 italic;
                }
            }

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
                    background-image: url("~@avatar/marvin.png");
                    content: "";
                    float: right;
                    width: 100px;
                    height: 100px;
                    bottom: 0;
                    position: relative;
                    display: inline-block;
                }
            }

            & .bubble-astride {
                @apply text-left;

                & h5 {
                    @apply text-astride;

                    left: 116px;
                }

                &::after {
                    background-image: url("~@avatar/astride.png");
                    content: "";
                    float: left;
                    width: 100px;
                    height: 100px;
                    bottom: 0;
                    position: relative;
                    display: inline-block;
                }
            }

            & .bubble-remi {
                @apply text-left;

                & h5 {
                    @apply text-remi;

                    left: 116px;
                }

                &::after {
                    background-image: url("~@avatar/remi.png");
                    content: "";
                    float: left;
                    width: 100px;
                    height: 100px;
                    bottom: 0;
                    position: relative;
                    display: inline-block;
                }
            }
        }
    }
</style>

<page-query>
    query ($id: ID!) {
        section(id: $id) {
            title
            content
            fileInfo {
                path
            }
            headings {
                value
                anchor
            }
            chapter {
                id
                course {
                    title
                    short_title
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
