<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="50" />
    </RouterLink>
    <RouterLink to="/movies">Movies</RouterLink>
    <RouterLink to="/my-list">My List</RouterLink>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  display: flex;
  flex-direction: column;
  background-color: black;
  padding: 20px;
  height: 100vh;
  overflow: hidden;
}

header {
  max-height: 150px;
  display: flex;
}

a {
  font-size: 22px;
  color: white;
  text-decoration: none;
  padding: 0 20px;
  line-height: 45px;
}

a:first-child {
  padding-left: 0;
}

@media (hover: hover) {
}
</style>
