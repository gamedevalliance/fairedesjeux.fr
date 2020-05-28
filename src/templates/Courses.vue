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

                    <!-- medal start -->
                    <div v-if="$page.section.medal === 'BRONZE'" class="bg-red-900 rounded-md mt-4">
                        <div class="px-4 py-2 text-sm text-font">
                            <div class="font-bold">
                                <g-image src="~/assets/medals/medal-bronze.png" class="h-5 w-5 inline-block object-cover" />
                                Cette formation ne correspond pas à
                                <g-link to="/contribuer/avant-propos/charte-de-qualite/">
                                    nos critères de qualité
                                </g-link> :
                            </div>
                            <div v-html="$page.section.medal_message"></div>
                        </div>
                    </div>
                    <div v-if="$page.section.medal === 'SILVER'" class="bg-area text-base rounded-md mt-4">
                        <div class="px-4 py-2 text-sm text-font">
                            <g-image
                                src="~/assets/medals/medal-argent.png"
                                class="h-5 w-5 inline-block object-cover"
                            />
                            <span class="font-bold">
                                Cette formation ne correspond plus à
                                <g-link to="/contribuer/avant-propos/charte-de-qualite/">
                                    nos critères de qualité
                                </g-link> :
                            </span>
                            <br />
                            <span v-html="$page.section.medal_message"></span>
                        </div>
                    </div>
                    <div v-if="$page.section.medal === 'GOLD'" class="text-base mt-4">
                        <div class="px-4 py-2 text-sm text-font">
                            <g-image
                                src="~/assets/medals/medal-or.png"
                                class="h-5 w-5 inline-block object-cover"
                            />
                            <span class="font-bold">
                                Vous lisez une formation de qualité.
                            </span>
                        </div>
                    </div>
                    <div v-if="$page.section.medal === 'PLATINUM'" class="text-base mt-4">
                        <div class="px-4 py-2 text-sm text-font">
                            <g-image
                                src="~/assets/medals/medal-platine.png"
                                class="h-5 w-5 inline-block object-cover"
                            />
                            <span class="font-bold">
                                Vous lisez notre meilleure formation !
                            </span>
                        </div>
                    </div>
                    <!-- medal end -->

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

    export default {
        components: {
            Chapter,
            Toc,
            Button,
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
    section >>> {
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
