<template>
  <div class="card">
    <!-- <img :src='posterInitialPath + movie.poster_path' class="card-img-top" alt="..."> -->
    <img :src='!posterPath ? "https://img.icons8.com/ios/100/000000/no-image.png" : (posterInitialPath + posterPath)' class="card-img-top" alt="...">
    <div class="card-body">
      <h2>{{title}}</h2>
      <h3>{{originalTitle}}</h3>
      <!-- <img :src="require('@/assets/' + getFlagFromLanguage(movie.original_language) +'.png')" alt="" class="w-25"> -->
      <img :src="!flagsList[originalLanguage] ? flagsList.other : flagsList[originalLanguage]" :alt="originalLanguage" class="d-inline-block" :title="originalLanguage">
      <h5>vote: <i v-for="(star, i) in voteToStars(voteAverage)" :key="i" :class="star" aria-hidden="true"></i></h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    posterPath: String,
    title: String,
    originalTitle: String,
    originalLanguage: String,
    voteAverage: Number,
  },
  data(){
    return {
      flagsList: {
        en: 'https://img.icons8.com/office/30/000000/great-britain.png',
        it: 'https://img.icons8.com/office/30/000000/italy.png',
        es: 'https://img.icons8.com/office/30/000000/spain.png',
        fr: 'https://img.icons8.com/office/30/000000/france.png',
        de: 'https://img.icons8.com/office/30/000000/germany.png',
        pl: 'https://img.icons8.com/office/30/000000/poland.png',
        ru: 'https://img.icons8.com/office/30/000000/russia-federation.png',
        ja: 'https://img.icons8.com/office/30/000000/japan.png',
        other: 'https://img.icons8.com/office/30/000000/globe.png'
      },
      posterInitialPath: 'https://image.tmdb.org/t/p/w342/',
    };
  },
  methods: {
    voteToStars(vote){
      let numberOfStars = Math.ceil(vote/2);
      let starsList= [];
      while(starsList.length < 5){
        if(starsList.length < numberOfStars){
          starsList.push('fa fa-star');
        } else{
          starsList.push('fa fa-star-o')
        }
      }
      return starsList
    }
  }
}
</script>

<style>

</style>