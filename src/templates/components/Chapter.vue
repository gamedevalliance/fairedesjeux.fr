<template>
    <div>
        <div class="cursor-pointer" @click="isOpen = !isOpen">
            <span class="caption">{{ chapter.title }}</span>
        </div>
        <transition name="fade">
            <div v-if="isOpen" class="chapter">
                <ul>
                    <li v-for="section in chapter.sections"
                        :key="section.title"
                    >
                        <g-link :to="section.path">
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

        & .chapter   {
            & ul {
                @apply list-none list-inside mb-0 mt-3 font-semibold text-sm leading-none text-font-2;
            }

            & li {
                @apply mb-1
            }

            & a {
                @apply mb-6 mt-3 leading-normal text-marvin no-underline text-sm text-font-3 border-solid border-0;

                padding-bottom: 1px;
                transition: border-color 0.12s ease, color 0.12s ease;

                &:hover {
                    @apply border-b text-font-2 border-font-2;
                }
            }
        }
    }
</style>
