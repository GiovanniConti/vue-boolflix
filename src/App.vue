<template>
  <div id="app">
    <Header
      @filterSelected = "searchedQuery"
    ></Header>
    <Main
    :movies = 'moviesList'
    :tvSeries = 'seriesList'
    ></Main>
  </div>
</template>

<script>
import  axios from 'axios';
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
  data() {
    return {
      apiUrl: "https://api.themoviedb.org/3/search/",
      apiKey: "44892648a93082408df03e205628971e",
      listToSearch: "",
      moviesList: [],       // Array Sent to Main Component
      seriesList: [],       // Array Sent to Main Component
   // flagsList: ['en','it','es','fr','de','pl','ru','ja','other'],    USE TO GET FLAGS IMG FROM THE ASSETS
    }
  },
  computed: {

  },
  methods: {
    fetchData(searchType, queryText){
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


    searchedQuery(searchText){
      this.fetchData('movie', searchText)
      this.fetchData('tv', searchText)
    },
    /****** FUNCTION TO GET FLAGS IMG FROM THE ASSETS ******/
    // getFlagFromLanguage(lang){
    //   if(this.flagsList.includes(lang)){
    //     return lang;
    //   } else{
    //     return 'other';
    //   }
    // },
  },
  mounted() {
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
