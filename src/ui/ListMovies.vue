<script>
  import BaseCard from './BaseCard.vue'
  export default {
    props: ['movies', 'maxVisible', 'onClick', 'selectedMovie'],
    components: { BaseCard }
  }
</script>

<template>
  <div class="list-cards">
    <template v-for="(movie, index) in movies" :key="movie.id">
      <BaseCard
        :id="id"
        :img="movie.backdrop_path"
        :title="movie.title"
        :onClick="() => onClick(movie)"
        :selected="selectedMovie?.id === movie.id"
        v-if="index < maxVisible"
      />
    </template>
  </div>
</template>

<style>
  .list-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0;
  }
</style>