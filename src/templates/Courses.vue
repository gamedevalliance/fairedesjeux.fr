<template>
    <Layout>
        <article class="container mx-auto">
            <div class="grid grid-cols-cont gap-col">
                <!-- left nav -->
                <aside class="mt-12">
                    <div v-for="chapter in $page.course.chapters"
                         :key="chapter.id"
                         class="area text-font mb-6"
                    >
                        <Chapter :chapter="chapter" :isopen="true" />
                    </div>
                </aside>
                <!-- content -->
                <main>
                    <div>
                        <h2 v-html="$page.course.title"></h2>
                    </div>

                    <!-- medal start -->
                    <g-image
                        :src="require(`!!assets-loader?quality=100!@coursesCovers/${$page.course.name}/cover-wide.png`)"
                        class="rounded-md h-featuredClass w-full object-cover"
                    />
                    <div v-if="$page.course.medal === 'BRONZE'" class="bg-red-900 rounded-md mt-4">
                        <p class="px-4 py-2 text-sm">
                            <g-image
                                src="~/assets/medals/medal-bronze.png"
                                class="h-5 w-5 inline-block object-cover"
                            />
                            <span class="font-bold">
                                Cette formation ne correspond pas à
                                <g-link to="/contribuer/avant-propos/charte-de-qualite/">
                                    nos critères de qualité
                                </g-link> :
                            </span>
                            <br />
                            {{ $page.course.medal_message }}
                        </p>
                    </div>
                    <div v-if="$page.course.medal === 'SILVER'" class="bg-area text-base rounded-md mt-4">
                        <p class="px-4 py-2 text-sm">
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
                            {{ $page.course.medal_message }}
                        </p>
                    </div>
                    <div v-if="$page.course.medal === 'GOLD'" class="text-base mt-4">
                        <p class="px-4 py-2 text-sm">
                            <g-image
                                src="~/assets/medals/medal-or.png"
                                class="h-5 w-5 inline-block object-cover"
                            />
                            <span class="font-bold">
                                Vous lisez une formation de qualité.
                            </span>
                        </p>
                    </div>
                    <div v-if="$page.course.medal === 'PLATINUM'" class="text-base mt-4">
                        <p class="px-4 py-2 text-sm">
                            <g-image
                                src="~/assets/medals/medal-platine.png"
                                class="h-5 w-5 inline-block object-cover"
                            />
                            <span class="font-bold">
                                Vous lisez notre meilleure formation !
                            </span>
                        </p>
                    </div>
                    <!-- medal end -->

                    <p v-html="$page.course.content"></p>

                    <h3>Commencer la formation en mode..</h3>
                    <div class="flex justify-center">
                        <g-link :to="$page.course.chapters[0].video ? $page.course.chapters[0].sections[1].path : $page.course.chapters[0].sections[0].path"
                                class="mx-2 text-center text-font border-none font-bold hover:text-font"
                        >
                            <div class="bg-remi hover:bg-marvin rounded-md w-64 inline-block text-center px-4 py-3 duration-200">
                                Texte
                            </div>
                        </g-link>

                        <g-link v-if="$page.course.chapters[0].video"
                                :to="$page.course.chapters[0].video.path"
                                class="mx-2 text-center text-font border-none font-bold hover:text-font"
                        >
                            <div class="bg-remi hover:bg-marvin rounded-md w-64 inline-block text-center px-4 py-3 duration-200">
                                Vidéo
                            </div>
                        </g-link>
                        <div
                            v-else
                            class="mx-2 text-center text-font border-none font-bold opacity-75"
                            title="Vidéo indisponible pour le moment!"
                        >
                            <div class="bg-gray-800 rounded-md w-64 inline-block text-center px-4 py-3 text-gray-600">
                                Vidéo
                            </div>
                        </div>
                    </div>
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

<page-query>
    query ($path: String!) {
        course(path: $path) {
            id
            title
            name
            content
            medal
            medal_message
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
                    fileInfo {
                        name
                    }
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
