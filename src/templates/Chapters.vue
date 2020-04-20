
<template>
    <div>
        {{ $page.chapter.title }}
    </div>
</template>

<script>
    export default {

    };
</script>

<page-query>
    query ($id: ID!) {
        chapter(id: $id) {
            title
        }
    }
</page-query>
