<template>
    <nav class="inline-block absolute ml-6">
        <g-link v-for="headerCourses in $static.headerCourses.edges"
                :key="headerCourses.node.header"
                :to="headerCourses.node.path"
                class="font-semibold text-font border-none"
        >
            {{ headerCourses.node.engine_name || headerCourses.node.skill }}
        </g-link>
        <g-link to="/contribuer/" class="font-semibold text-font border-none">
            Contribuer
        </g-link>
        <a href="https://gamedevalliance.fr" class="font-semibold text-marvin border-none">GameDevAlliance</a>
        <a href="https://discord.gg/RrBppaj" class="font-semibold text-purple-600 border-none">Rejoindre Discord</a>
    </nav>
</template>

<style lang="postcss" scoped>
    nav {
        line-height: 55px;

        & a {
            @apply inline-block mr-6;

            &:hover {
                @apply text-marvin;
            }
        }
    }
</style>

<static-query>
    query {
        headerCourses: allCourse(filter: { header: { ne: null }}, limit: 3) {
            edges {
                node {
                    title
                    header
                    path
                    engine_name
                    skill
                }
            }
        }
    }
</static-query>
