<template>
  <div class="card">
    <!-- <img :src='posterInitialPath + movie.poster_path' class="card-img-top" alt="..."> -->
    <img :src='!movie.poster_path ? "https://img.icons8.com/ios/100/000000/no-image.png" : (posterInitialPath + movie.poster_path)' class="card-img-top" alt="...">
    <div class="card-body">
      <h2>title: {{movie.title}}</h2>
      <h3>original title: {{movie.original_title}}</h3>
      <!-- <img :src="require('@/assets/' + getFlagFromLanguage(movie.original_language) +'.png')" alt="" class="w-25"> -->
      <img :src="!flagsList[movie.original_language] ? flagsList.other : flagsList[movie.original_language]" :alt="movie.original_language" class="d-inline-block" :title="movie.original_language">
      <h5>vote: <i v-for="(star, i) in voteToStars(movie.vote_average)" :key="i" :class="star" aria-hidden="true"></i></h5>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>