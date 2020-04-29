
<template>
    <Layout>
        <article class="container mx-auto text-lg font-body">
            <div class="grid grid-cols-cont gap-col">
                <!-- left nav -->
                <aside class="mt-12">
                    <div v-for="chapter in $page.course.chapters"
                         :key="chapter.id"
                         class="bg-area text-font rounded-lg py-4 px-5 mb-6"
                    >
                        <Chapter :chapter="chapter" :isopen="true" />
                    </div>
                </aside>
                <!-- content -->
                <main>
                    <div>
                        <h2 class="my-4 font-bold text-5xl leading-tight
                            text-astride font-title tracking-title;"
                            v-html="$page.course.title"
                        ></h2>
                    </div>
                    <g-image
                        :src="require(`!!assets-loader?quality=100!@coursesCovers/${$page.course.id}/cover-wide.png`)"
                        class="rounded-md h-featuredClass w-full object-cover"
                    />
                    <div v-if="$page.course.medal === 'bronze'" class="bg-red-900 text-base rounded-md mt-4">
                        <p class="px-4 py-2">
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
                            {{ $page.course.message }}
                        </p>
                    </div>
                    <div v-if="$page.course.medal === 'argent'" class="bg-area text-base rounded-md mt-4">
                        <p class="px-4 py-2">
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
                            {{ $page.course.message }}
                        </p>
                    </div>
                    <div v-if="$page.course.medal === 'or'" class="text-base mt-4">
                        <p class="px-4 py-2">
                            <g-image
                                src="~/assets/medals/medal-or.png"
                                class="h-5 w-5 inline-block object-cover"
                            />
                            <span class="font-bold">
                                Vous lisez une formation de qualité.
                            </span>
                        </p>
                    </div>
                    <div v-if="$page.course.medal === 'platine'" class="text-base mt-4">
                        <p class="px-4 py-2">
                            <g-image
                                src="~/assets/medals/medal-platine.png"
                                class="h-5 w-5 inline-block object-cover"
                            />
                            <span class="font-bold">
                                Vous lisez notre meilleure formation !
                            </span>
                        </p>
                    </div>
                    <p v-html="$page.course.description"></p>
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
            title
            id
            description
            medal
            message
            chapters(sort: {by: "id", order:ASC}) {
                id
                title
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
    main >>> {
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
