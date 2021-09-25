<!--
    A simple navigation, leading to three featured courses, the contributing
    course, our main website, or to our Discord server
-->
<template>
  <nav class="inline-flex gap-6 items-center ml-6 h-14 font-semibold text-base">
    <a>PICO-8</a>
    <a>Ren'Py</a>
    <a>Pixel art</a>
    <a>Contribuer</a>
    <a href="https://gamedevalliance.fr" aria-label="Game Dev Alliance" class="text-marvin">
      <span class="gda" aria-hidden="true">
        <!--The link to our main website got a little bounce animation letter by letter-->
        <span>G</span><span>a</span><span>m</span><span>e</span><span>D</span><span>e</span
        ><span>v</span><span>A</span><span>l</span><span>l</span><span>i</span><span>a</span
        ><span>n</span><span>c</span><span>e</span><span>.</span><span>f</span><span>r</span>
      </span>
    </a>
    <a class="text-purple-500">Rejoindre le Discord</a>
  </nav>
</template>

<style scoped>
  a {
    @apply hover:text-marvin cursor-pointer;
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translate(0);
    }
    20% {
      transform: rotateX(20deg) translateY(1px) rotate(-3deg);
    }
    40% {
      transform: translateY(-5px) rotate(3deg) scale(1.1);
    }
  }

  .gda span {
    @apply inline-block;
    backface-visibility: hidden;
  }
  .gda:hover span {
    animation: bounce 0.45s;
  }
  @for $i from 2 to 18 {
    .gda span:nth-child($i) {
      animation-delay: calc($i * 0.05s - 0.05s);
    }
  }
</style>
