<template>
  <v-container class="fill-height quiz-layout mt-10" fluid>
    <div class="quiz-container">
      <div class="quiz-left">
        <QuizCard>
          <v-card-title class="text-center text-h4 font-weight-bold">
            Quiz para escolher sua Casa!
            <QuizProgress :progress="progress" />
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="nextQuestion">
              <QuizQuestion
                :question="currentQuestion.question"
                :answers="currentQuestion.answers"
                v-model="answers[currentIndex]"
              />

              <QuizNavigation
                :isFirst="currentIndex === 0"
                :isLast="currentIndex === questions.length - 1"
                @prev="prevQuestion"
                @next="nextQuestion"
                @submit="submitQuiz"
              />
            </v-form>
          </v-card-text>
        </QuizCard>
      </div>

      <QuizImage />
    </div>
  </v-container>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import questionsData from '@/assets/questions.json'
import QuizCard from '@/components/QuizCard.vue'
import QuizProgress from '@/components/QuizProgress.vue'
import QuizQuestion from '@/components/QuizQuestion.vue'
import QuizNavigation from '@/components/QuizNavigation.vue'
import QuizImage from '@/components/QuizImage.vue'

export default {
  name: 'Quiz',
  components: {
    QuizCard,
    QuizProgress,
    QuizQuestion,
    QuizNavigation,
    QuizImage
  },
  setup() {
    const router = useRouter()

    const questions = ref(questionsData)
    const currentIndex = ref(0)
    const answers = ref(Array(questionsData.length).fill(null))

    const currentQuestion = computed(() => questions.value[currentIndex.value])
    const progress = computed(() => {
      if (!questions.value.length) return 0
      return ((currentIndex.value + 1) * 100) / questions.value.length
    })

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

@media (max-width: 960px) {
  .quiz-container {
    flex-direction: column;
    gap: 20px;
  }

  .quiz-right {
    order: -1;
  }

  .quiz-card {
    max-width: 100%;
  }
}
</style>