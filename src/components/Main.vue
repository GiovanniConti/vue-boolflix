<template>
  <main>
    <main>
      <h2 class="mt-5">Movies</h2>
      <div class="container justify-content-center">
        <div class="row row-cols-5  d-flex gy-5">
          <div class="col d-flex"
            v-for="movie in movies" :key="movie.id"
          >
            <!-- TV Show card -->
            <Card
              :posterPath='movie.poster_path'
              :title='movie.title'
              :originalTitle='movie.original_title'
              :originalLanguage='movie.original_language'
              :voteAverage="movie.vote_average"
            ></Card>
          </div>
        </div>
      </div>
      <h2 class="mt-5">Tv Shows</h2>
      <div class="container justify-content-center mb-5">
        <div class="row row-cols-5  d-flex gy-5">
          <div class="col d-flex"
            v-for="tvSerie in tvSeries" :key="tvSerie.id"
          >
            <!-- TV Show card -->
            <Card
              :posterPath='tvSerie.poster_path'
              :title='tvSerie.name'
              :originalTitle='tvSerie.original_name'
              :originalLanguage='tvSerie.original_language'
              :voteAverage="tvSerie.vote_average"
            ></Card>
          </div>
        </div>
      </div>
    </main>
  </main>
</template>

<script>
import Card from './Card.vue';
export default {
  components: { Card },
  name: 'Main',
  props: {
    movies: Array,
    tvSeries: Array,
  },
  data() {
    return {
    };
  },
  methods: {
  }
}

</script>

<style>

</style>