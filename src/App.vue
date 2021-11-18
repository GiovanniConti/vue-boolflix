<template>
  <div id="app">
    <header>
      <div class="searchBar">
        <input type="text" placeholder="insert text" class="" v-model="searchText" @keyup.enter="onBtnClick()">
        <button class="btn btn-primary ms-2"
          @click="onBtnClick()"
        >Search</button>
      </div>
    </header>
    <main>
      <!-- <div class="listContainer d-flex justify-content-center my-5">
        <ul class="list-group w-50">
          <li class="list-group-item"
            v-for="movie in moviesList" :key="movie.id"
          >
            title: {{movie.title}} <br>
            original title: {{movie.original_title}} <br>
            original language: {{movie.original_language}} <br>
            vote: {{movie.vote_average}}
          </li>
        </ul>
      </div> -->

      <h2 class="mt-5">Movies</h2>
      <div class="container justify-content-center">
        <div class="row row-cols-5  d-flex gy-5">
          <div class="col d-flex"
            v-for="movie in moviesList" :key="movie.id"
          >
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
          </div>
        </div>
      </div>

      <h2 class="mt-5">Tv Shows</h2>
      <div class="container justify-content-center mb-5">
        <div class="row row-cols-5  d-flex gy-5">
          <div class="col d-flex"
            v-for="tvSerie in seriesList" :key="tvSerie.id"
          >
            <div class="card">
              <img :src='posterInitialPath + tvSerie.poster_path' class="card-img-top" alt="...">
              <div class="card-body">
                <h2>title: {{tvSerie.name}}</h2>
                <h3>original title: {{tvSerie.name}}</h3>
                <img :src="!flagsList[tvSerie.original_language] ? flagsList.other : flagsList[tvSerie.original_language]" :alt="tvSerie.original_language" class="d-inline-block" :title="tvSerie.original_language">
                <h5>vote: <i v-for="(star, i) in voteToStars(tvSerie.vote_average)" :key="i" :class="star" aria-hidden="true"></i></h5>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import  axios from 'axios';

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      apiUrl: "https://api.themoviedb.org/3/search/",
      apiKey: "44892648a93082408df03e205628971e",
      listToSearch: "",
      moviesList: [],
      seriesList: [],
      searchText: "",
      // flagsList: [
      //   'en',
      //   'it',
      //   'es',
      //   'fr',
      //   'de',
      //   'pl',
      //   'ru',
      //   'ja',
      //   'other',
      // ],
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
    }
  },
  computed: {

  },
  methods: {
    fetchData(searchType, queryText){
      console.log("fetch called");
      axios.get(this.apiUrl + searchType, {
        params: {
          api_key: this.apiKey,
          query: queryText
        },
      }).then((resp) => {
        if(searchType === "movie"){
          this.moviesList = resp.data.results;
          this.listToSearch = "movies"
        } else{
          this.seriesList = resp.data.results;
          this.listToSearch = "series"
        }
      });
    },
    onBtnClick(){
      this.fetchData('movie', this.searchText)
      this.fetchData('tv', this.searchText)
    },
    // getFlagFromLanguage(lang){
    //   if(this.flagsList.includes(lang)){
    //     return lang;
    //   } else{
    //     return 'other';
    //   }
    // },
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
  },
  mounted() {
    this.fetchData("movie")
  }

}
</script>

<style lang="scss">
@import "@/styles/app"; 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
