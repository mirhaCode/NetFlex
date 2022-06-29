<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['movie']
})
</script>

<template>
  <div id="background">
    <img :src="movie?.backdrop_path" :alt="movie?.title" />
    <div id="details">
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<style>
  #background {
    height: 500px;
    width: 100%;
    position: relative;
    overflow: hidden;
    flex: 2;
    display: flex;
  }

  #background img {
    top: -50px;
    bottom: 0;
    right: 0;
    position: absolute;
    width: 70%;
    opacity: 0.6;
  }

  #details {
    flex: 1;
    flex-direction: column;
    padding-left: 10px;
  }

  h1 {
    font-size: 1.8rem;
    color: #c6c6c6;
    text-transform: uppercase;
  }

  p {
    color: #989898;
    font-size: 1.2rem
  }

  p, h1 {
    max-width: 40%;
    min-width: 500px;
  }
</style>
