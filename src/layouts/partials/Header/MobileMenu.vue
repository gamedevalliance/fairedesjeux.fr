<template>
    <nav
        :class="[state ? 'mobile--menu-open' : '', 'mobile--menu fixed w-0 overflow-hidden whitespace-no-wrap bg-area']"
    >
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

<style lang="postcss" scoped>
    .mobile--menu {
        transition: width 0.1s linear;
        height: calc(100% - 55px);
        z-index: 15;
    }

    .mobile--menu-open {
        width: 100%;
        overflow-y: scroll;
    }
</style>

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
