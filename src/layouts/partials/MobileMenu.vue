<template>
    <nav :class="{'hidden': !state}">
        <g-link v-for="menuCourse in $static.menuCourses.edges"
                :key="menuCourse.node.header"
                :to="menuCourse.node.path"
                class="font-semibold text-font border-none inline-block mr-6 none"
                :title="menuCourse.node.title"
        >
            {{ menuCourse.node.short_title || menuCourse.node.title }}
        </g-link>
    </nav>
</template>

<script>
    export default {
        props: {
            state: {
                type: Boolean,
                default: false,
            },
        },
    };
</script>

<static-query>
    query {
        menuCourses: allCourse(filter: { header: { gt: 0 }}, sortBy: "header", order: ASC) {
            edges {
                node {
                    title
                    short_title
                    header
                    path
                }
            }
        }
    }
</static-query>
