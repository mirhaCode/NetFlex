<script>
import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'
import { useMoviesStore } from '@/stores/movies'
import Background from './Background.vue'
import TrendingMovies from './TrendingMovies.vue'

export default defineComponent({
    mounted() {
        const store = useMoviesStore()
        if (store.trendingMovies.length === 0)
            store.fetchTrendingMovies()
    },
    setup() {
        const store = useMoviesStore()
        const { trendingMovies, selectedMovie } = storeToRefs(store)
        return {
            selectedMovie,
            trendingMovies
        }
    },
    components: { Background, TrendingMovies }
})
</script>

<template>
  <template v-if="trendingMovies.length > 0">
    <Background :movie="selectedMovie" />
    <TrendingMovies
      :movies="trendingMovies"
      :selectedMovie="selectedMovie"
    />
  </template>
</template>
