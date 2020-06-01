<template>
    <Layout>
        <div class="grid grid-cols-cont gap-col">
            <!-- left nav -->
            <aside class="mt-12">
                <div v-for="chapter in $page.section.chapters" :key="chapter.id" class="area text-font mb-6">
                    <Chapter :chapter="chapter" :isopen="true" />
                </div>
            </aside>

            <main>
                <article>
                    <header>
                        <h2>{{ $page.section.title }}</h2>

                        <g-image
                            :src="require(`!!assets-loader?quality=100!@coursesCovers/${$page.section.name}/cover-wide.png`)"
                            class="rounded-md h-featuredClass w-full object-cover"
                        />
                    </header>

                    <Medal :rank="$page.section.medal" />

                    <section v-html="$page.section.content"></section>

                    <h3>Commencer la formation en mode..</h3>
                    <div class="flex justify-center mt-4">
                        <Button :src="$page.section.chapters[0].sections[0].path" class="w-64">
                            Texte
                        </Button>

                        <Button v-if="$page.section.chapters[0].video" :src="$page.section.chapters[0].video.path" class="w-64">
                            Video
                        </Button>
                        <Button v-else disabled class="w-64" title="Vidéo indisponible pour le moment!">
                            Vidéo
                        </Button>
                    </div>
                </article>
            </main>

            <!-- right nav -->
            <Toc />
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
    };
</script>

<page-query>
    query ($path: String!) {
        section: course(path: $path) {
            id
            title
            name
            content
            medal
            medal_message
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
                video {
                    path
                    title
                }
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
            @apply text-center text-sm text-font-2 mt-6 mb-0 block;
        }

        & pre, & code {
            @apply border-0 bg-area text-sm mb-6 mt-3 rounded-md font-display;

            text-shadow: none;
            box-shadow: none;
        }

        & p > code {
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
