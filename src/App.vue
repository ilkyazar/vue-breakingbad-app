<template>
  <div id="nav" class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/characters">Characters</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/episodes">Episodes</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "@/styles/styles.scss";
</style>
