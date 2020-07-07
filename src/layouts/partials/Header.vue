<template>
    <header class="bg-body text-font font-semibold clearfix">
        <div class="container mx-auto">
            <MobileMenuSwitcher />
            <Logo />
            <Links />
            <Socials class="float-right py-3" />
            <!--
            <Search />
            <ThemesSwitcher />
            -->
        </div>
    </header>
</template>

<script>
    import MobileMenuSwitcher from './Header/MobileMenuSwitcher.vue';
    import Logo from './Header/Logo.vue';
    import Links from './Header/Links.vue';
    import Socials from '../components/Socials.vue';

    /*
    import Search from './Header/Search.vue'
    import ThemesSwitcher from './Header/ThemesSwitcher.vue'
    */

    export default {
        components: {
            MobileMenuSwitcher,
            Logo,
            Links,
            Socials,
        },
    };
</script>
