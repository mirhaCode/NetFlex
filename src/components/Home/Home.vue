<script lang="ts">
import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'
import { useMoviesStore } from '../../stores/movies'

export default defineComponent({
  mounted() {
    const store = useMoviesStore()
    if (store.movies.length === 0) store.fetchMovies()
  },

  setup() {
    const store = useMoviesStore()
    const { bestTrendingMovie, movies } = storeToRefs(store)

    return {
      bestTrendingMovie,
      movies
    }
  }
})
</script>

<template>
  <div id="background">
    <img :src="movies?.[0]?.backdrop_path" :alt="bestTrendingMovie?.title" />
  </div>
</template>
