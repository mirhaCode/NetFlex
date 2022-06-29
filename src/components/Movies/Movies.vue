<script>
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useMoviesStore } from '@/stores/movies'
import GenreMovies from './GenreMovies.vue'
export default defineComponent({
  mounted() {
    const store = useMoviesStore()
    if (store.genres.length === 0) store.fetchGenres()
  },
  setup() {
    const store = useMoviesStore()
    const { genres } = storeToRefs(store)
    return { genres }
  },
  components: { GenreMovies }
})
</script>

<template>
  <div id="container-movies">
    <div v-for="genre in genres" v-bind:key="genre.id" class="genre">
      <GenreMovies :genre="genre" />
    </div>
  </div>
</template>