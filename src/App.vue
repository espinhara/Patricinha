<template>
  <v-app id="app">
    <router-view>
      <Home />
    </router-view>
  </v-app>
</template>

<script>
/* eslint-disable */
import Home from "./views/pages/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>

</style>
