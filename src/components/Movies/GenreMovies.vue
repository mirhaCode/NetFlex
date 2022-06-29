<script>
  import { defineComponent } from 'vue'
  import { fetchMoviesByGenre } from '@/apis/tmdb.api'
  import ListMovies from '@/ui/ListMovies.vue'

  export default defineComponent({
    props: ['genre'],
    data() {
      return {
        movies: []
      }
    },
    async created() {
      this.movies = await fetchMoviesByGenre(this.genre.id)
    },
    components: { ListMovies }
  })
</script>

<template v-if="movies.length > 0">
  <div class="genre-movies">
    <p>{{ genre.name }}</p>
    <ListMovies :movies="movies" maxVisible="4" />
  </div>
</template>

<style>
  .genre-movies {
    margin-bottom: 20px;
  }

  .genre-movies p {
    text-transform: uppercase;
  }
</style>
