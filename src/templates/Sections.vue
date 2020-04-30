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
                            « Retour vers
                            {{ $page.section.chapter.course.engine_name || $page.section.chapter.course.short_title }}
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
                <!-- TO DO !!! -->
            </div>
        </article>
    </Layout>
</template>

<script>
    import Chapter from './components/Chapter.vue';

    export default {
        components: {
            Chapter,
        },
    };
</script>

<style lang="postcss" scoped>
    article >>> {
        /*
            NOTE: This style is used for captions of images and videos. Very practical for the authors
            as they only have to do a line return and write in italics. - nev, 2020-04-24
        */
        & img + noscript + em {
            @apply text-center text-sm text-font-2 mt-6 mb-0 block;
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
    }

</style>

<page-query>
    query ($id: ID!) {
        section(id: $id) {
            title
            content
            chapter {
                id
                course {
                    title
                    path
                    engine_name
                    short_title
                    chapters(sort: {by: "name", order:ASC}) {
                        title
                        id
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
