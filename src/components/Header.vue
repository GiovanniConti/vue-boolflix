<template>
  <header>
      <div class="searchBar">
        <input type="text" placeholder="insert text to search" class="" v-model="inputText" @change="filterSelected">
      </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      inputText: '',
    };
  },
  watch: {
    inputText: function(){
      this.filterSelected();
    }
  },
  methods: {
    filterSelected() {
      this.$emit("filterSelected", this.inputText)
    }
  }
}
</script>

<style>

</style>