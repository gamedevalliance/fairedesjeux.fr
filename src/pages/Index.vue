<template>
    <Layout>
        <p>Test</p>
    </Layout>
</template>

<script>
    export default {
        metaInfo: {
            /* NOTE: On the index page we don't have a subtitle for the page, it's only the site title
               If we were to change title (instead of titleTemplate) we'd have the following structure: title - title
               which is not what we want - so we overide the titleTemplate for this page.
            */
            titleTemplate: '%s',
        },
    };
</script>
