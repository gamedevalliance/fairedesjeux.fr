<template>
    <Layout>
        <div class="container mx-auto pt-4 flex flex-wrap">
            <div v-for="featuredCourse in $page.featuredCourses.edges"
                 :key="featuredCourse.id"
                 class="featured-class relative m-2"
            >
                <g-link :to="featuredCourse.node.path" class="featured-class__link">
                    <g-image :src="require(`!!assets-loader?quality=100!@coursesCovers/${featuredCourse.node.id}/cover-wide.png`)" class="rounded h-full object-cover" />
                    <div class="absolute inset-x-0 bottom-0 z-10 p-4">
                        <h2 class="text-white font-bold leading-articleTitle mt-2">
                            {{ featuredCourse.node.title }}
                        </h2>
                    </div>
                </g-link>
            </div>
            <h3 class="text-2xl text-white">
                Faire des jeux avec :
            </h3>
        </div>
    </Layout>
</template>

<script>
    export default {
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
        @apply rounded absolute top-0 bottom-0 right-0 left-0;

        content: "";
        opacity: 0.45;
        background:
            linear-gradient(
                to bottom,
                transparent 0,
                rgba(0, 0, 0, 0) 30%,
                rgba(0, 0, 0, 0.1) 50%,
                rgba(0, 0, 0, 0.6) 80%,
                rgba(0, 0, 0, 0.7) 100%
            );
    }

    .featured-class {
        & h2 {
            @apply text-2xl;
        }

        max-height: 315px;

        &:first-of-type {
            & h2 {
                @apply text-3xl;
            }

            flex-basis: calc(60% - 0.5rem * 2);
        }

        &:nth-of-type(2) {
            flex-basis: calc(40% - 0.5rem * 2);
        }

        &:nth-of-type(3) {
            flex-basis: calc(55% - 0.5rem * 2);
        }

        &:nth-of-type(4) {
            flex-basis: calc(45% - 0.5rem * 2);
        }
    }
</style>

<page-query>
    query {
        featuredCourses: allCourse(filter: { featured: { gt: 0 }}, sortBy: "featured") {
            edges {
                node {
                    id
                    featured
                    title
                    path
                }
            }
        }
    }
</page-query>
