<template>
    <div>
        <div class="cursor-pointer" @click="isOpen = !isOpen">
            <span class="caption">{{ chapter.title }}</span>
        </div>
        <transition name="fade">
            <div class="chapter">
                <ul>
                    <li v-if="chapter.video">
                        <g-link :to="chapter.video.path"
                                class="smola leading-snug"
                        >
                            {{ chapter.video.title }}
                        </g-link>
                    </li>
                    <li v-for="section in chapter.sections"
                        :key="section.title"
                    >
                        <g-link :to="section.path"
                                class="smola leading-snug"
                        >
                            {{ section.title }}
                        </g-link>
                    </li>
                </ul>
            </div>
        </transition>
        <div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        name: 'Chapter',
        components: {},
        props: {
            isopen: {
                type: Boolean,
                default: false,
            },
            chapter: {
                type: Object,
            },
        },
        data() {
            return {
                isOpen: this.isopen,
            };
        },
    };
</script>

<style lang="postcss" scoped>
    aside {
        & .caption {
            @apply my-0 font-semibold text-base leading-normal text-font tracking-title;
        }

        /* NOTE: It's a Surprise Tool That Will Help Us Later - nev, 2020-04-26 */
        & .quizz {
            @apply text-astride;
        }

        & .chapter {
            & ul {
                @apply list-none list-inside mb-0 mt-3 font-semibold text-sm leading-none text-font-2;
            }

            & li {
                @apply mb-1

            }
        }
    }
</style>
