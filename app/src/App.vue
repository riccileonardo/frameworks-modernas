<template>
  <v-app>
    <div class="app-background">
      <v-main>
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.app-background {
  background-color: #0d0d1f;
  background-image:
    url('@/assets/pictures/lua.png'),
    url('@/assets/pictures/hogwarts.png');
  background-repeat: no-repeat, no-repeat;
  background-position: top left, bottom right;
  background-size: 300px auto, 500px auto;
  background-attachment: fixed, fixed;
  min-height: 100vh;
  width: 100%;
  color: white;
}

@font-face {
  font-family: 'HarryP';
  src: url('./assets/fonts/HARRYP__.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.harry-font {
  font-family: 'HarryP';
  font-size: 2rem;
}

</style>
