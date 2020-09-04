<template>
    <nav
        :class="['mobile--menu', state ? 'open' : '',]"
    >
        <div class="p-4">
            <div v-if="!$page.section">
                <g-link v-for="menuCourse in $static.menuCourses.edges"
                        :key="menuCourse.node.header"
                        :to="menuCourse.node.path"
                        class="link text-font"
                        :title="menuCourse.node.title"
                >
                    {{ menuCourse.node.short_title || menuCourse.node.title }}
                </g-link>
            </div>

            <div v-if="$page.section">
                <div v-if="$page.section.chapter" class="mb-3">
                    <g-link :to="$page.section.chapter.course.path" class="link text-font">
                        « Retour vers {{ $page.section.chapter.course.short_title || $page.section.chapter.course.title }}
                    </g-link>
                </div>

                <div v-for="chapter in $page.section.chapters || $page.section.chapter.course.chapters"
                     :key="chapter.id"
                     class="mb-4"
                >
                    <span class="text-font text-xl mb-1 block">{{ chapter.title }}</span>
                    <g-link v-for="section in chapter.sections"
                            :key="section.id"
                            :to="section.path"
                            class="link text-font whitespace-normal"
                            :title="section.title"
                    >
                        {{ section.title }}
                    </g-link>
                </div>
            </div>

            <hr class="my-3 border-body border-2 rounded-md border-opacity-75" />

            <g-link to="/contribuer/" class="link text-font mt-2">
                Contribuer
            </g-link>

            <a href="https://gamedevalliance.fr" class="link text-marvin">
                Game Dev Alliance
            </a>

            <a href="https://discord.gg/RrBppaj" class="link text-purple-600">Rejoindre Discord</a>
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
