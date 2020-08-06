<template>
    <a class="inline-block border-none relative" href="/">
        <g-image src="~/assets/logo.png"
                 width="200px"
                 class="float-left logo"
                 immediate="true"
                 quality="100"
        />
        <h1 class="logo__text font-title font-bold uppercase text-astride
            pl-2 leading-none flex flex-col justify-center"
        >
            Faire des<br />
            <span class="tracking-logo">jeux .fr</span>
        </h1>
        <span class="beta absolute bg-astride rounded-md text-font font-bold z-20">Bêta</span>
    </a>
</template>

<style lang="postcss" scoped>
    .logo {
        width: 63px;
    }
    .logo__text {
        height: 55px;
    }

    .beta {
        top: 38px;
        left: 123px;
        padding: 0.15rem;
        font-size: 0.6rem;
        transform: rotate(-10deg);
    }
</style>
