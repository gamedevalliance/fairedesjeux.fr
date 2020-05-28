<template>
    <div class="layout bg-body font-body">
        <Header />
        <transition name="fade" appear>
            <div class="container mx-auto">
                <slot></slot>
            </div>
        </transition>
        <Footer />
    </div>
</template>

<script>
    import Header from './partials/Header.vue';
    import Footer from './partials/Footer.vue';

    export default {
        components: {
            Header,
            Footer,
        },
        props: {
            header: Boolean,

        },
    };
</script>

<style>
    .fade-enter-active {
        transition: opacity 0.5s;
    }

    .fade-enter {
        opacity: 0;
    }
</style>
