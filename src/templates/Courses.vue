
<template>
    <div>
        {{ $page.course.title }}
        -
        <div v-for="chapter in $page.course.chapters">
            --- {{ chapter.title }}
            <div v-for="section in chapter.sections">
                ------ {{ section.title }} - {{ section.fileInfo.name }}
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
            chapters(sort: {by: "id", order:ASC}) {
                id
                title
                sections(sort: {by: "fileInfo.name", order:ASC}) {
                    id
                    title
                    fileInfo {
                        name
                    }
                }
            }
        }
    }
</page-query>
