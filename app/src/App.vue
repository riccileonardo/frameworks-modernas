<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.v-application {
  background-color: #6a1b9a !important;
  color: #ffffff !important;
}
</style>