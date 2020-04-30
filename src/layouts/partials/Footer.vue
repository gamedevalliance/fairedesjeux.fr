<template>
    <footer class="bg-area mt-8">
        <div class="container mx-auto py-6 flex justify-between">
            <div class="flex">
                <div class="mr-8">
                    <h4 class="text-font text-lg font-bold">
                        À propos
                    </h4>
                    <ul class="mt-3">
                        <li class="my-2 text-font-3">
                            <g-link to="/contribuer/">
                                Contribuer
                            </g-link>
                        </li>
                        <li class="my-2 text-font-3">
                            Liste des contributeurs
                        </li>
                        <li class="my-2 text-font-3">
                            Information légales
                        </li>
                        <li class="my-2 text-font-3">
                            Code source
                        </li>
                    </ul>
                </div>

                <div class="mx-8">
                    <h4 class="text-font text-lg font-bold">
                        Moteurs de jeux
                    </h4>
                    <ul class="mt-3">
                        <li
                            v-for="course in $static.gameEngineCourses.edges"
                            :key="course.id"
                            :title="course.node.title"
                            class="my-2"
                        >
                            <g-link :to="course.node.path">
                                {{ course.node.engine_name }}
                            </g-link>
                        </li>
                        <li class="text-font-3">
                            Voir plus de formations
                        </li>
                    </ul>
                </div>

                <div class="ml-8">
                    <h4 class="text-font text-lg font-bold">
                        Autres compétences
                    </h4>
                    <ul class="mt-3">
                        <li
                            v-for="course in $static.otherCourses.edges"
                            :key="course.id"
                            :title="course.node.title"
                            class="my-2"
                        >
                            <g-link :to="course.node.path">
                                {{ course.node.short_title || course.node.title }}
                            </g-link>
                        </li>
                        <li class="text-font-3">
                            Voir plus de formations
                        </li>
                    </ul>
                </div>
            </div>
            <div class="float-right text-font">
                <h2 class="text-font text-2xl my-0 leading-none">
                    Game Dev Alliance
                </h2>
                Association loi 1901.
            </div>
        </div>
    </footer>
</template>

<style lang="postcss" scoped>
    a {
        @apply text-font-3 border-none;

        &:hover {
            @apply text-font-2 underline;
        }
    }
</style>

<script>
    export default {

    };
</script>

<static-query>
    query {
        gameEngineCourses: allCourse(filter: { engine_name: { ne: null }}, limit: 4) {
            edges {
                node {
                    id
                    title
                    engine_name
                    path
                }
            }
        }

        otherCourses: allCourse(filter: { engine_name: { eq: null }}, limit: 4) {
            edges {
                node {
                    id
                    title
                    short_title
                    path
                }
            }
        }
    }
</static-query>
