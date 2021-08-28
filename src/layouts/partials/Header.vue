<template>
    <div>
        <header class="bg-area lg:bg-body text-font font-semibold clearfix">
            <div class="container mx-auto flex justify-between lg:block pr-3 md:pr-0">
                <Logo />
                <Links class="hidden lg:inline-block " />
                <Socials class="float-right py-3 hidden lg:inline-block" />
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
            toggleMobileMenu(newState = !this.mobileMenu) {
                this.mobileMenu = newState;

                // NOTE: We add overflow: hidden; to the body in order to prevent scrolling it while the menu is open
                document.body.classList.toggle('overflow-hidden');
            },
        },
    };
</script>
