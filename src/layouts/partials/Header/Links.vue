<template>
    <nav class="inline-block absolute ml-6 py-4">
        <g-link v-for="headerCourse in $static.headerCourses.edges"
                :key="headerCourse.node.header"
                :to="headerCourse.node.path"
                class="font-semibold text-font border-none inline-block mr-6"
                :title="headerCourse.node.title"
        >
            {{ headerCourse.node.short_title || headerCourse.node.title }}
        </g-link>
        <g-link to="/contribuer/" class="font-semibold text-font border-none inline-block mr-6">
            Contribuer
        </g-link>
        <a href="https://gamedevalliance.fr" aria-label="Game Dev Alliance" class="font-semibold text-marvin border-none inline-block mr-6">
            <span class="gda" aria-hidden="true">
                <span>G</span><span>a</span><span>m</span><span>e</span><span>D</span><span>e</span><span>v</span>
                <span>A</span><span>l</span><span>l</span><span>i</span><span>a</span><span>n</span><span>c</span><span>e</span>
            </span>
        </a>
        <a href="https://discord.gg/RrBppaj" class="font-semibold text-purple-600 border-none inline-block">Rejoindre Discord</a>
    </nav>
</template>

<style lang="postcss" scoped>
    @keyframes bounce {
        0%, 100% { transform: translate(0); }
        20% { transform: rotateX(20deg) translateY(1px) rotate(-3deg); }
        40% { transform: translateY(-5px) rotate(3deg) scale(1.1); }
    }

    .gda span {
        @apply inline-block;

        backface-visibility: hidden;
    }

    .gda:hover span {
        animation: bounce 0.45s;
    }

    .gda span:nth-child(2) { animation-delay: 0.05s; }
    .gda span:nth-child(3) { animation-delay: 0.1s; }
    .gda span:nth-child(4) { animation-delay: 0.15s; }
    .gda span:nth-child(5) { animation-delay: 0.2s; }
    .gda span:nth-child(6) { animation-delay: 0.25s; }
    .gda span:nth-child(7) { animation-delay: 0.3s; }
    .gda span:nth-child(8) { animation-delay: 0.35s; }
    .gda span:nth-child(9) { animation-delay: 0.4s; }
    .gda span:nth-child(10) { animation-delay: 0.45s; }
    .gda span:nth-child(11) { animation-delay: 0.5s; }
    .gda span:nth-child(12) { animation-delay: 0.55s; }
    .gda span:nth-child(13) { animation-delay: 0.6s; }
    .gda span:nth-child(14) { animation-delay: 0.65s; }
    .gda span:nth-child(15) { animation-delay: 0.7s; }
</style>

<static-query>
    query {
        headerCourses: allCourse(filter: { header: { gt: 0 }}, sortBy: "header", order: ASC) {
            edges {
                node {
                    title
                    short_title
                    header
                    path
                }
            }
        }
    }
</static-query>
