<template>
  <v-container class="fill-height d-flex align-center justify-center full-page">
    <v-card class="quiz-card" elevation="10">
      <v-card-title class="text-center text-h4 font-weight-bold">
        Quiz para escolher seu Orientador
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="submitQuiz">
          <div v-for="(question, index) in questions" :key="index" class="question-container">
            <h2 class="question-text">{{ question.text }}</h2>
            
            <v-radio-group v-model="answers[index]" class="options-group">
              <v-radio
                v-for="(option, i) in question.options"
                :key="i"
                :label="option.text"
                :value="option.value"
                class="option-item"
                color="primary"
              ></v-radio>
            </v-radio-group>
          </div>
          
          <v-btn color="purple" block type="">Proxima Pergunta</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Quiz',
  setup() {
    const questions = ref([
      {
        text: 'Qual é a sua área de interesse?',
        options: [
          { text: 'Desenvolvimento Web', value: 'web' },
          { text: 'Inteligência Artificial', value: 'ai' },
          { text: 'Ciência de Dados', value: 'data_science' }
        ]
      },
      {
        text: 'Qual é o seu nível de experiência?',
        options: [
          { text: 'Iniciante', value: 'beginner' },
          { text: 'Intermediário', value: 'intermediate' },
          { text: 'Avançado', value: 'advanced' }
        ]
      }
    ]);

    const answers = ref([]);

    const submitQuiz = () => {
      console.log('Respostas:', answers.value);
    };

    return {
      questions,
      answers,
      submitQuiz
    };
  }
};
</script>

<style scoped>
.full-page {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-container {
  min-height: 100vh !important;
  min-width: 100vw !important;
  margin: 0 !important;
  padding: 0 !important;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 10s ease infinite;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.quiz-card {
  width: 600px;
  padding: 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8); /* Reduzindo opacidade para melhor integração */
  backdrop-filter: blur(10px);
}

.question-container {
  margin-bottom: 20px;
}

.question-text {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.options-group {
  margin-left: 20px;
}

.option-item {
  margin: 8px 0;
}
</style>
