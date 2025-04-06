<template>
    <div>
      <v-progress-linear
        :value="progress"
        height="10"
        color="purple lighten-2"
        class="mt-4"
      ></v-progress-linear>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      progress: {
        type: Number,
        required: true
      }
    }
  }
  </script>