<script>
import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'
import { useMoviesStore } from '../../stores/movies'
import Background from './Background.vue'
import TrendingMovies from './TrendingMovies.vue'

export default defineComponent({
    mounted() {
        const store = useMoviesStore()
        if (store.movies.length === 0)
            store.fetchMovies()
    },
    setup() {
        const store = useMoviesStore()
        const { movies, selectedMovie } = storeToRefs(store)
        return {
            selectedMovie,
            movies
        }
    },
    components: { Background, TrendingMovies }
})
</script>

<template>
  <template v-if="movies.length > 0">
    <Background :movie="selectedMovie" />
    <TrendingMovies
      :movies="movies"
      :selectedMovie="selectedMovie"
    />
  </template>
</template>
