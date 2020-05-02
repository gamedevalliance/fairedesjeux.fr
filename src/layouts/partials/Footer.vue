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
                            <g-link to="/contribuer/"
                                    class="smola"
                            >
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
                            <a href="https://github.com/gamedevalliance/fairedesjeux.fr"
                               class="smola"
                            >
                                Code source
                            </a>
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
                            <g-link :to="course.node.path"
                                    class="smola"
                            >
                                {{ course.node.short_title }}
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
                            <g-link :to="course.node.path"
                                    class="smola"
                            >
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

<script>
    export default {

    };
</script>

<static-query>
    query {
        gameEngineCourses: allCourse(filter: { type: { eq: ENGINE }}, limit: 4) {
            edges {
                node {
                    id
                    title
                    short_title
                    path
                }
            }
        }

        otherCourses: allCourse(filter: { type: { eq: SKILL }}, limit: 4) {
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
