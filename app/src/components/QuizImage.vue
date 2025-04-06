<template>
    <div class="quiz-right">
      <img src="/src/assets/pictures/Ivan.png" alt="Imagem do Quiz" class="quiz-image" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'QuizImage'
  }
  </script>
  
  <style scoped>
  .quiz-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .quiz-image {
    max-width: 100%;
    max-height: 80vh;
    object-fit: cover;
  }
  
  @media (max-width: 960px) {
    .quiz-image {
      max-height: 300px;
      width: 100%;
    }
  }
  </style>