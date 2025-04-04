<template>
  <v-container class="fill-height quiz-layout mt-10" fluid>
    <div class="quiz-container">
      <div class="quiz-left">
        <v-card class="quiz-card" elevation="2">
          <v-card-title class="text-center text-h4 font-weight-bold">
            Quiz para escolher sua Casa!
            <v-progress-linear
              v-model="progress"
              height="10"
              color="purple lighten-2"
              class="mt-4"
            ></v-progress-linear>
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="nextQuestion">
              <div class="question-container">
                <h2 class="question-text">{{ currentQuestion.question }}</h2>

                <v-radio-group
                  v-model="answers[currentIndex]"
                  class="options-group"
                  :rules="[v => !!v || 'Por favor, selecione uma opção']"
                  required
                >
                  <v-radio
                    v-for="(option, i) in currentQuestion.answers"
                    :key="i"
                    :label="option.text"
                    :value="option.value"
                    class="option-item"
                    color="primary"
                  ></v-radio>
                </v-radio-group>
              </div>

              <div class="d-flex justify-space-between mt-6">
                <v-btn
                  color="deep-purple darken-2"
                  dark
                  @click="prevQuestion"
                  :disabled="currentIndex === 0"
                >
                  Voltar
                </v-btn>

                <v-btn
                  color="deep-purple darken-2"
                  dark
                  type="submit"
                  v-if="currentIndex < questions.length - 1"
                >
                  Próxima Pergunta
                </v-btn>

                <v-btn
                  color="green darken-2"
                  dark
                  @click="submitQuiz"
                  v-else
                >
                  Finalizar Quiz
                </v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </div>

      <div class="quiz-right">
        <img src="/src/assets/pictures/Ivan.png" alt="Imagem do Quiz" class="quiz-image" />
      </div>
    </div>
  </v-container>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import questionsData from '@/assets/questions.json'

export default {
  name: 'Quiz',
  setup() {
    const router = useRouter()

    const questions = ref(questionsData)
    const currentIndex = ref(0)
    const answers = ref(Array(questionsData.length).fill(null))

    const currentQuestion = computed(() => questions.value[currentIndex.value])
    const progress = computed(() => (currentIndex.value + 1) * 100 / questions.value.length)

    const nextQuestion = () => {
      if (answers.value[currentIndex.value] !== null) {
        if (currentIndex.value < questions.value.length - 1) {
          currentIndex.value++
        }
      }
    }

    const prevQuestion = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--
      }
    }

    const submitQuiz = () => {
      if (answers.value.includes(null)) return

      const counts = {}
      answers.value.forEach(house => {
        if (!counts[house]) counts[house] = 0
        counts[house]++
      })

      const total = answers.value.length
      const percentages = Object.keys(counts).map(house => ({
        house,
        percent: Math.round((counts[house] / total) * 100)
      })).sort((a, b) => b.percent - a.percent)

      const mainHouse = percentages[0].house

      const resultPayload = {
        percentages,
        mainHouse
      }

      localStorage.setItem('quiz-result', JSON.stringify(resultPayload))
      router.push('/results')
    }

    return {
      questions,
      answers,
      currentIndex,
      currentQuestion,
      progress,
      nextQuestion,
      prevQuestion,
      submitQuiz
    }
  }
}
</script>

<style scoped>
.quiz-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.quiz-container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
}

.quiz-left {
  flex: 1;
  min-width: 0;
}

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

.question-container {
  margin-bottom: 24px;
}

.question-text {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #fff;
}

.options-group {
  margin-left: 16px;
}

.option-item {
  margin: 8px 0;
}

.v-label {
  color: #eee !important;
}

@media (max-width: 960px) {
  .quiz-container {
    flex-direction: column;
    gap: 20px;
  }

  .quiz-right {
    order: -1;
  }

  .quiz-image {
    max-height: 300px;
    width: 100%;
  }

  .quiz-card {
    max-width: 100%;
  }
}
</style>
