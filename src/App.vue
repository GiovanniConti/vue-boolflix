<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <header>
      <div class="searchBar">
        <input type="text" placeholder="insert text" class="" v-model="searchText">
        <button class="btn btn-primary ms-2"
          @click="fetchData('movie', searchText)"
        >Search</button>
      </div>
    </header>
    <main>
      <div class="listContainer d-flex justify-content-center my-5">
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
      </div>
    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
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
