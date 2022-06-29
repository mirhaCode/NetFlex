<script setup lang="ts">
import Movies from '@/components/Movies/Movies.vue'
</script>

<template>
  <main id="movies-view">
    <Movies />
  </main>
</template>

<style>
#movies-view {
  overflow-y: scroll;
}
</style>
