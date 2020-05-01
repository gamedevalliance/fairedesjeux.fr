<template>
    <nav class="inline-block absolute ml-6">
        <g-link v-for="headerCourse in $static.headerCourses.edges"
                :key="headerCourse.node.header"
                :to="headerCourse.node.path"
                class="font-semibold text-font border-none"
                :title="headerCourse.node.title"
        >
            {{ headerCourse.node.short_title || headerCourse.node.title }}
        </g-link>
        <g-link to="/contribuer/" class="font-semibold text-font border-none">
            Contribuer
        </g-link>
        <a href="https://gamedevalliance.fr" class="font-semibold text-marvin border-none gda">
            <span>G</span><span>a</span><span>m</span><span>e</span><span>D</span><span>e</span><span>v</span>
            <span>A</span><span>l</span><span>l</span><span>i</span><span>a</span><span>n</span><span>c</span><span>e</span>
        </a>
        <a href="https://discord.gg/RrBppaj" class="font-semibold text-purple-600 border-none">Rejoindre Discord</a>
    </nav>
</template>

<style lang="postcss" scoped>
    nav {
        line-height: 55px;

        & a {
            @apply inline-block mr-6;

            &:hover {
                @apply text-marvin;
            }
        }
    }
    .gda span {
        @apply inline-block;
    }
    .gda:hover span { animation:bounce .45s; }
    @keyframes bounce {
      0%,100%{ transform:translate(0); }
      20%{ transform:rotateX(20deg) translateY(1px) rotate(-3deg); }
      40%{ transform:translateY(-5px) rotate(3deg) scale(1.1);  }
    }

    .gda span:nth-child(2){ animation-delay:.05s; }
    .gda span:nth-child(3){ animation-delay:.1s; }
    .gda span:nth-child(4){ animation-delay:.15s; }
    .gda span:nth-child(5){ animation-delay:.2s; }
    .gda span:nth-child(6){ animation-delay:.25s; }
    .gda span:nth-child(7){ animation-delay:.3s; }
    .gda span:nth-child(8){ animation-delay:.35s; }
    .gda span:nth-child(9){ animation-delay:.4s; }
    .gda span:nth-child(10){ animation-delay:.45s; }
    .gda span:nth-child(11){ animation-delay:.5s; }
    .gda span:nth-child(12){ animation-delay:.55s; }
    .gda span:nth-child(13){ animation-delay:.6s; }
    .gda span:nth-child(14){ animation-delay:.65s; }
    .gda span:nth-child(15){ animation-delay:.7s; }
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
