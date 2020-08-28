<template>
    <nav
        :class="['mobile--menu', state ? 'open' : '',]"
    >
        <div class="p-4">
            <g-link v-for="menuCourse in $static.menuCourses.edges"
                    :key="menuCourse.node.header"
                    :to="menuCourse.node.path"
                    class="link text-font"
                    :title="menuCourse.node.title"
            >
                {{ menuCourse.node.short_title || menuCourse.node.title }}
            </g-link>

            <g-link to="/contribuer/" class="link text-font mt-2">
                Contribuer
            </g-link>

            <a href="https://gamedevalliance.fr" class="link text-marvin">
                Game Dev Alliance
            </a>

            <a href="https://discord.gg/RrBppaj" class="link text-purple-600">Rejoindre Discord</a>

            <!-- <hr class="my-3 border-body border-2 rounded-md border-opacity-75" /> -->
        </div>
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
    .link {
        @apply font-semibold text-2xl border-none bg-body block mb-1 p-1 pl-3 rounded-md;
    }

    .mobile--menu {
        @apply fixed w-0 overflow-hidden whitespace-no-wrap bg-area border-t border-body;

        transition: width 0.1s linear;
        height: calc(100% - 55px);
        z-index: 15;

        &.open {
            width: 100%;
            overflow-y: scroll;
        }
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
