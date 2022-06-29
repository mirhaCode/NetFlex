<script>
  import { fetchMoviesByGenre } from '@/apis/tmdb.api'
  import { defineComponent } from 'vue'
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
  })
</script>

<template>
  <div class="genre-movies">
    <p>{{ genre.name }}</p>
    <ul>
      <li v-for="(movie, index) in movies" :key="movie.id" :title="movie.title">
        <img v-if="index < 4" :src="movie.backdrop_path" :alt="movie.title" />
      </li>
    </ul>
  </div>
</template>

<style>
  .genre-movies {
    margin-bottom: 20px;
  }

  p {
    text-transform: uppercase;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0;
  }

  li img {
    width: 100%;
  }
</style>
