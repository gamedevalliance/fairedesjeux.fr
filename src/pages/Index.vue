<template>
    <Layout>
        <div class="container mx-auto">
            <div class="pt-4 flex flex-wrap">
                <div v-for="featuredCourse in $page.featuredCourses.edges"
                     :key="featuredCourse.node.id"
                     class="featured-class h-featuredClass relative mx-2"
                     :title="featuredCourse.node.title"
                >
                    <g-link :to="featuredCourse.node.path" class="featured-class__link">
                        <g-image :src="require(`!!assets-loader?quality=100!@coursesCovers/${featuredCourse.node.id}/cover-wide.png`)" class="rounded-md h-full object-cover" />
                        <div class="absolute inset-x-0 bottom-0 z-10 p-4">
                            <h2 class="text-white font-bold leading-articleTitle mt-2 mb-0 text-2xl">
                                {{ featuredCourse.node.title }}
                            </h2>
                        </div>
                    </g-link>
                </div>
            </div>

            <h3 class="text-2xl text-white m-3 mt-5 ml-0 block container">
                Faire des jeux avec...
            </h3>

            <div class="flex flex-wrap">
                <div
                    v-for="gameEngineCourse in $page.gameEngineCourses.edges"
                    :key="gameEngineCourse.node.id"
                    class="game-engine-class h-gameEngineClass relative mx-2"
                    :title="gameEngineCourse.node.title"
                >
                    <g-link :to="gameEngineCourse.node.path" class="game-engine-class__link">
                        <g-image :src="require(`!!assets-loader?quality=100!@coursesCovers/${gameEngineCourse.node.id}/cover-tall.png`)" class="rounded-md h-full object-cover" />
                        <div class="absolute inset-x-0 bottom-0 z-10 p-4">
                            <h2 class="text-white font-bold leading-articleTitle mt-2 mb-0 text-2xl">
                                {{ gameEngineCourse.node.engine_name }}
                            </h2>
                        </div>
                    </g-link>
                </div>
                <contribute-c-t-a v-if="$page.gameEngineCourses.edges.length < 5" />
            </div>

            <h3 class="text-2xl text-white m-3 mt-5 ml-0 block container">
                Autres compétences :
            </h3>

            <div class="flex flex-wrap">
                <div
                    v-for="otherCourse in $page.otherCourses.edges"
                    :key="otherCourse.node.id"
                    class="game-engine-class h-gameEngineClass relative mx-2"
                    :title="otherCourse.node.title"
                >
                    <g-link :to="otherCourse.node.path" class="game-engine-class__link">
                        <g-image :src="require(`!!assets-loader?quality=100!@coursesCovers/${otherCourse.node.id}/cover-tall.png`)" class="rounded-md h-full object-cover" />
                        <div class="absolute inset-x-0 bottom-0 z-10 p-4">
                            <h2 class="text-white font-bold leading-articleTitle mt-2 mb-0 text-2xl">
                                {{ otherCourse.node.skill }}
                            </h2>
                        </div>
                    </g-link>
                </div>
                <contribute-c-t-a v-if="$page.otherCourses.edges.length < 5" />
            </div>
        </div>
    </Layout>
</template>

<script>
    import ContributeCTA from './components/Index/ContributeCTA.vue';

    export default {
        components: {
            ContributeCTA,
        },
        metaInfo: {
            /* NOTE: On the index page we don't have a subtitle for the page, it's only the site title
               If we were to change title (instead of titleTemplate) we'd have the following structure: title - title
               which is not what we want - so we overide the titleTemplate for this page.
            */
            titleTemplate: '%s',
        },
    };
</script>

<style lang="postcss" scoped>
    /*  NOTE: Tailwind doesn't by default allow us to target ::before and ::after pseudo-elements. Weird.
        We'll make a custom plugin for this or add a package later on in the developpement I guess - erika, 2020-01-19
    */
    .featured-class__link::after {
        @apply rounded-md absolute top-0 bottom-0 right-0 left-0;

        content: "";
        background:
            linear-gradient(
                to bottom,
                transparent 0,
                rgba(0, 0, 0, 0) 30%,
                rgba(0, 0, 0, 0.1) 50%,
                rgba(0, 0, 0, 0.4) 75%,
                rgba(0, 0, 0, 0.55) 100%
            );
    }

    .featured-class {
        &:first-of-type {
            @apply ml-0;

            & h2 {
                @apply text-3xl;
            }

            flex-basis: calc(60% - 0.5rem);
        }

        &:last-of-type {
            @apply mr-0;
        }

        &:nth-of-type(2) {
            flex-basis: calc(40% - 0.5rem);
        }

        &:nth-of-type(3) {
            flex-basis: calc(55% - 0.5rem);
        }

        &:nth-of-type(4) {
            flex-basis: calc(45% - 0.5rem);
        }
    }

    .game-engine-class__link::after {
        @apply rounded-md absolute top-0 bottom-0 right-0 left-0;

        content: "";
        background:
            linear-gradient(
                to bottom,
                transparent 0,
                rgba(0, 0, 0, 0) 30%,
                rgba(0, 0, 0, 0.3) 70%,
                rgba(0, 0, 0, 0.4) 80%,
                rgba(0, 0, 0, 0.6) 100%
            );
    }

    .game-engine-class {
        flex-basis: 16%;
    }
</style>

<page-query>
    query {
        featuredCourses: allCourse(filter: { featured: { gt: 0 }}, sortBy: "featured", order: ASC) {
            edges {
                node {
                    id
                    featured
                    title
                    path
                }
            }
        }

        # TODO: Look if it'd be worth it to merge those two requests? We could filter them in Javascript instead.
        gameEngineCourses: allCourse(filter: { engine_name: { ne: null }}) {
            edges {
                node {
                    id
                    title
                    engine_name
                    path
                }
            }
        }

        otherCourses: allCourse(filter: { engine_name: { eq: null }}) {
            edges {
                node {
                    id
                    title
                    path
                    skill
                }
            }
        }

    }
</page-query>
