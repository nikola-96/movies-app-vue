<template>
  <div id="app">
    <div class="nav-margin">
      <nav-bar />
    </div>
    <router-view />
  </div>
</template>


<script>
import NavBar from "../src/components/NavBar";

export default {
  components: {
    NavBar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #010007;
  background-image: url("./assets/background1.png");
  background-size: cover;
}
.nav-margin {
  margin-top: 10px;
}
</style>
