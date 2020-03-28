<template>
  <div>
    <b-nav tabs align="center">
      <b-nav-item active>
        <router-link to="/movies">Movies</router-link>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>