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
            }
        }
    }
</style>
