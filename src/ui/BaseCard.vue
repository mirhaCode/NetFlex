<script>
  export default {
    props: ['img', 'title', 'id', 'onClick', 'selected']
  }
</script>

<template>
  <div
    class="base-card"
    :title="title"
    v-bind:key="id"
    v-on:click="onClick"
    v-bind:class="{ selected }"
  >
    <img :src="img" :alt="title" />
  </div>
</template>

<style>
  .base-card {
    width: 100%;
    cursor: pointer;
  }

  .base-card:hover {
    opacity: 0.7;
  }

  .base-card.selected {
    border: 1px solid white;
  }

  img {
    width: 100%;
  }
</style>