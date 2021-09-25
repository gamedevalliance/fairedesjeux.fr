<!--
  Display the logo of FaireDesJeux on the Header, and can be use as a "return home" button
-->
<template>
  <router-link to="/" class="inline-block relative">
    <img alt="Vue logo" class="h-14 mx-auto float-left" src="../assets/logo.png" />
    <h1
      class="
        h-14
        pl-2
        text-base
        font-title font-bold
        uppercase
        text-astride
        leading-none
        flex flex-col
        justify-center
      "
    >
      Faire des<br />
      <span class="tracking-logo">jeux .fr</span>
    </h1>
  </router-link>
</template>
