<template>
    <layout>
        <section>
            <div class="w-full sm:w-450 mx-auto my-32 px-2">
                <h2 class="text-center text-6xl sm:text-404">
                    Merci !
                </h2>
                <p class="text-justify">
                    FaireDesJeux.FR ne serait rien sans l'aide de ces contributeurs et contributrices.
                    Si vous voulez participer à cette aventure collective,
                    <g-link to="/contribuer">
                        n'hesitez pas à contribuer.
                    </g-link>
                </p>
                <ul>
                    <li v-for="contributor in $page.contributors.edges"
                        :key="contributor.node.name"
                        class="py-1"
                    >
                        <g-link :to="contributor.node.profile">
                            {{ contributor.node.name }}
                        </g-link>
                        - {{ contributor.node.commits }}
                        <span v-if="contributor.node.commits > 1">contributions</span>
                        <span v-else>contribution</span>
                    </li>
                </ul>
            </div>
        </section>
    </layout>
</template>

<page-query>
    query {
        contributors: allContributor(sortBy: "commits", order: DESC){
            edges {
                node {
                    name
                    profile
                    commits
                }
            }
        }
    }
</page-query>
