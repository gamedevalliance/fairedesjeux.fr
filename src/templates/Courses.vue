
<template>
    <div>
        {{ $page.course.title }}
        -
        <div v-for="chapter in $page.course.chapters">
            --- {{ chapter.title }}
            <div v-for="section in chapter.sections">
                ------ {{ section.title }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>

<page-query>
    query ($path: String!) {
        course(path: $path) {
            title
            chapters {
                title
                sections {
                    title
                }
            }
        }
    }
</page-query>
