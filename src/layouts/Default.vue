<template>
    <div class="layout bg-body font-body">
        <Header @toggle-mobile-menu="mobileMenu = !mobileMenu" />
        <mobile-menu :state="mobileMenu" />
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
    import MobileMenu from './partials/MobileMenu.vue';

    export default {
        components: {
            Header,
            Footer,
            MobileMenu,
        },
        props: {
            header: Boolean,

        },
        data() {
            return {
                mobileMenu: false,
            };
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
