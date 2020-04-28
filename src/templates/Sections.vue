<template>
    <Layout>
        <article class="container mx-auto text-lg font-body">
            <div class="grid grid-cols-cont gap-col">
                <!-- left nav -->
                <aside class="mt-12">
                    <div v-for="chapter in $page.section.chapter.course.chapters"
                         :key="chapter.id"
                         class="bg-area text-font rounded-lg py-4 px-5 mb-6"
                    >
                        <Chapter :chapter="chapter"
                                 :isopen="chapter.id == $page.section.chapter.id ? true : false"
                        />
                    </div>
                </aside>
                <!-- content -->
                <main>
                    <div>
                        <h2 class="my-4 font-bold text-5xl leading-tight
                text-astride font-title tracking-title;"
                            v-html="$page.section.title"
                        ></h2>
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
        & p, & ul {
            @apply text-font mb-6 mt-3 leading-normal;

            & a {
                @apply no-underline text-astride border-solid border-b border-astride;

                padding-bottom: 1px;
                transition: border-color 0.12s ease, color 0.12s ease;

                &:hover {
                    @apply text-marvin border-marvin;
                }
            }
        }

        & h3 {
            @apply mb-3 mt-10 font-semibold text-3xl leading-normal text-remi font-title tracking-title;
        }

        & h4 {
            @apply mx-auto mb-6 mt-3 font-semibold leading-normal text-font-2 font-title text-center tracking-title;
        }

        & table {
            @apply w-auto my-3 mx-auto table-fixed max-w-full text-font;
            border-spacing: 0;
        }

        & td, & th {
            @apply border-b border-font-2 border-solid py-2 px-4 align-text-top;
        }

        & .content {
            & img {
                @apply max-w-full mx-auto;
            }
            /*
                NOTE: This style is used for captions of images and videos. Very practical for the authors
                as they only have to do a line return and write in italics. - nev, 2020-04-24
            */
            & img + noscript + em {
                @apply text-center text-sm text-font-2 mt-6 mb-0 block;
            }
        }

        & pre, & code {
            @apply border-0 bg-area text-sm mb-6 mt-3 rounded-md;
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
                    chapters(sort: {by: "id", order:ASC}) {
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
