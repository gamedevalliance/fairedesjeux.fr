<template>
    <div>
        <header class="bg-area md:bg-body text-font font-semibold clearfix">
            <div class="container mx-auto flex justify-between md:block px-3 md:px-0">
                <Logo />
                <Links class="hidden md:inline-block " />
                <Socials class="float-right py-3 hidden md:inline-block" />
                <!--
            <Search />
            <ThemesSwitcher />
            -->
                <MobileMenuSwitcher @click.native="toggleMobileMenu()" />
            </div>
        </header>
        <mobile-menu :state="mobileMenu" />
    </div>
</template>

<script>
    import Logo from './Header/Logo.vue';
    import Links from './Header/Links.vue';
    import Socials from '../components/Socials.vue';
    import MobileMenuSwitcher from './Header/MobileMenuSwitcher.vue';
    import MobileMenu from './Header/MobileMenu.vue';

    /*
    import Search from './Header/Search.vue'
    import ThemesSwitcher from './Header/ThemesSwitcher.vue'
    */

    export default {
        components: {
            Logo,
            Links,
            Socials,
            MobileMenuSwitcher,
            MobileMenu,
        },
        data() {
            return {
                mobileMenu: false,
            };
        },
        methods: {
            toggleMobileMenu() {
                this.mobileMenu = !this.mobileMenu;
                document.body.classList.toggle('overflow-hidden');
            },
        },
    };
</script>
