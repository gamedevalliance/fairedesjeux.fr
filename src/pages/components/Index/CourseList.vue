<template>
    <div>
        <div
            v-for="course in list"
            :key="course.node.id"
            class="course h-normalCourse relative mx-2 mb-4 lg:mb-0"
            :title="course.node.title"
        >
            <g-link :to="course.node.path" class="course__link">
                <g-image
                    :src="require(`!!assets-loader?quality=100!@coursesCovers/${course.node.name}/cover-tall.png`)"
                    class="rounded-md h-full object-cover"
                />
                <div class="absolute inset-x-0 bottom-0 z-10 p-4">
                    <h2 class="text-white font-semibold leading-articleTitle mt-2 mb-0 text-2xl">
                        {{ course.node.short_title || course.node.title }}
                    </h2>
                </div>
            </g-link>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            list: {
                type: Array,
                default: () => [],
            },
        },
    };
</script>

<style lang="postcss" scoped>
    .course__link::after {
        @apply rounded-md absolute top-0 bottom-0 right-0 left-0;

        content: "";
        background:
            linear-gradient(
                to bottom,
                transparent 0,
                rgba(0, 0, 0, 0) 30%,
                rgba(0, 0, 0, 0.3) 70%,
                rgba(0, 0, 0, 0.4) 80%,
                rgba(0, 0, 0, 0.6) 100%
            );
    }

    .course {
        width: calc(50% - 1rem);
        max-height: 255px;
    }

    @screen md {
        .course {
            & img {
                object-position: 50% 25%;
            }
        }
    }

    @screen lg {
        .course {
            width: calc(16.666667% - 1rem);
            max-height: 280px;
        }
    }
</style>
