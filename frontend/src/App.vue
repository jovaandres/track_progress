<template>
  <div class="parent">
    <div class="title">Progress Peserta</div>
    <Table></Table>
  </div>
</template>

<script>

import Table from "./components/Table.vue";

export default {
  name: "App",
  components: {
    Table
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Glory&display=swap');
html, body {
  font-family: 'Glory', sans-serif;
}

#app {
  font-family: 'Glory', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3rem;
}

.title {
  margin: 1rem 2rem;
  font-size: x-large;
  font-weight: bold;
}
</style>
