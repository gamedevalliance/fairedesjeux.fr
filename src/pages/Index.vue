<template>
    <Layout>
        <main class="px-4 lg:px-0">
            <div class="pt-4 flex flex-wrap flex-col lg:flex-row">
                <div v-for="featuredCourse in $page.featuredCourses.edges"
                     :key="featuredCourse.node.id"
                     class="featured-class h-featuredCourse relative overflow-hidden lg:mx-2 mb-4 lg:mb-0"
                     :title="featuredCourse.node.title"
                >
                    <g-link :to="featuredCourse.node.path" class="featured-class__link">
                        <g-image
                            :src="featuredCourse.node.cover_wide"
                            class="rounded-md h-full object-cover"
                        />
                        <div class="absolute inset-x-0 bottom-0 z-10 p-4">
                            <h2 class="text-white font-semibold leading-articleTitle mt-2 mb-0 text-2xl">
                                {{ featuredCourse.node.title }}
                            </h2>
                        </div>
                    </g-link>
                </div>
            </div>

            <h3 class="text-2xl text-white m-3 mt-4 ml-0 block container md:mt-5">
                Faire des jeux avec...
            </h3>

            <course-list :list="$page.gameEngineCourses.edges" class="flex flex-wrap gap-4">
                <contribute-c-t-a
                    class="cta"
                />
            </course-list>

            <h3 class="text-2xl text-white m-3 mt-1 ml-0 block container lg:mt-5">
                Autres compétences :
            </h3>

            <course-list :list="$page.skillCourses.edges" class="flex flex-wrap gap-4">
                <contribute-c-t-a
                    class="cta"
                />
            </course-list>
        </main>
    </Layout>
</template>

<script>
    import ContributeCTA from './components/Index/ContributeCTA.vue';
    import CourseList from './components/Index/CourseList.vue';

    export default {
        components: {
            ContributeCTA,
            CourseList,
        },
        metaInfo: {
            /* NOTE: On the index page we don't have a subtitle for the page, it's only the site title
               If we were to change title (instead of titleTemplate) we'd have the following structure: title - title
               which is not what we want - so we overide the titleTemplate for this page.
            */
            titleTemplate: '%s: Cours gratuits en ligne',
            meta: [
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: 'FaireDesJeux.fr: Cours gratuits en ligne',
                },
                {
                    key: 'og:description',
                    name: 'og:description',
                    content: 'Le site collaboratif pour apprendre à créer des jeux vidéo !',
                },
                {
                    key: 'twitter:card',
                    name: 'twitter:card',
                    content: 'summary_large_image',
                },
                {
                    key: 'twitter:image',
                    name: 'twitter:image',
                    content: 'https://fairedesjeux.fr/cover.png',
                },
                {
                    key: 'og:image',
                    name: 'og:image',
                    content: 'https://fairedesjeux.fr/cover.png',
                },
            ],
        },
    };
</script>

<style lang="postcss" scoped>
    /*  NOTE: Tailwind doesn't by default allow us to target ::before and ::after pseudo-elements. Weird.
        We'll make a custom plugin for this or add a package later on in the developpement I guess - erika, 2020-01-19
    */
    .featured-class {
        max-height: 250px;

        &:first-of-type {
            @apply ml-0;

            & h2 {
                @apply text-3xl;
            }

            flex-basis: calc(60% - 0.5rem);
        }

        &:last-of-type {
            @apply mr-0 mb-0;
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

    .cta {
        width: calc(50% - 0.5rem);
        max-height: 255px;
        min-height: 205px;
    }

    .cta:nth-child(2n+1) {
        width: 100%;
    }

    @screen md {
        .featured-class {
            & img {
                object-position: 50% 32%;
            }
        }
    }

    @screen lg {
        .featured-class {
            max-height: 325px;

            & img {
                object-position: 50% 45%;
            }
        }

        .cta {
            max-height: 280px;
        }

        /* We're forced to also use the odd selector here because otherwise the mobile rule also affect the desktop
           version. Normally, just putting the media query stuff after the normal rule would be enough but this doesn't
           work in this case because of Tailwind I believe - erika, 2020-07-31 */
        .cta, .cta:nth-child(2n+1) {
            width: calc(25% - 1rem);
        }

        .cta:nth-child(6n) {
            width: calc(16.666667% - 1rem);
        }
    }
</style>

<page-query>
    query {
        featuredCourses: allCourse(filter: { featured: { gt: 0 }}, sortBy: "featured", order: ASC) {
            edges {
                node {
                    id
                    name
                    featured
                    title
                    path
                    cover_wide
                }
            }
        }

        # TODO: Look if it'd be worth it to merge those two requests? We could filter them in Javascript instead.
        gameEngineCourses: allCourse(filter: { type: { eq: ENGINE }}) {
            edges {
                node {
                    id
                    name
                    title
                    short_title
                    path
                    cover_tall
                }
            }
        }

        skillCourses: allCourse(filter: { type: { eq: SKILL }}) {
            edges {
                node {
                    id
                    name
                    title
                    short_title
                    path
                    cover_tall
                }
            }
        }

    }
</page-query>
