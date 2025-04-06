<template>
    <v-card class="quiz-card" elevation="2">
      <slot></slot>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'QuizCard'
  }
  </script>
  
  <style scoped>
  .quiz-card {
    width: 100%;
    max-width: 800px;
    padding: 24px;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(12px);
    color: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
  </style>