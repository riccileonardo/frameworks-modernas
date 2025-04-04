<template>
  <div>
    <v-container fluid class="result-screen pa-8">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-6 result-card" elevation="12">
            <v-card-title class="text-h4 font-weight-bold text-center mb-6">
              🧙‍♂️ Resultado:
            </v-card-title>

            <v-card-text v-if="result">
              <div class="text-subtitle-1 mb-4 text-center">
                Aqui está sua distribuição entre as casas mágicas da tecnologia:
              </div>

              <v-row dense>
                <v-col
                  v-for="item in result.percentages"
                  :key="item.house"
                  cols="12"
                  class="mb-3"
                >
                  <div class="d-flex justify-space-between font-weight-medium mb-1">
                    <span>{{ item.house }}</span>
                    <span>{{ item.percent }}%</span>
                  </div>
                  <v-progress-linear
                    :model-value="item.percent"
                    height="16"
                    rounded
                    :color="getHouseColor(item.house)"
                    bg-color="grey-lighten-2"
                  ></v-progress-linear>
                </v-col>
              </v-row>

              <v-divider class="my-6"></v-divider>

              <div class="text-h5 text-center mb-4">
                🏆 Sua casa predominante é:
                <span class="highlighted-house">{{ result.mainHouse }}</span>
              </div>

              <v-img
                v-if="result.mainHouse"
                :src="houseImages[result.mainHouse]"
                alt="Imagem da casa"
                class="house-image mt-4 mb-6"
                height="200"
                contain
              />

              <div class="text-subtitle-1 text-center mb-3">Orientadores dessa casa:</div>

              <v-list dense class="mentors-list">
                <v-list-item
                  v-for="(mentor, i) in mentors"
                  :key="i"
                  class="mentor-item"
                >
                  <v-list-item-icon>
                    <v-icon color="purple">mdi-star</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>{{ mentor }}</v-list-item-content>
                </v-list-item>
              </v-list>
              <div class="button-group">
                <v-btn color="deep-purple accent-4" @click="refazer" prepend-icon="mdi-refresh">
                  Refazer o Quiz
                </v-btn>
                <v-btn color="primary" @click="$router.push('/houses')" prepend-icon="mdi-home">
                  Ver as Casas
                </v-btn>
              </div>
            </v-card-text>

            <v-card-text v-else>
              <p class="text-center text-h6">Resultado não encontrado. Faça o quiz primeiro!</p>
              <div class="text-center mt-4">
                <v-btn color="primary" @click="refazer">Ir para o Quiz</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import housesData from '@/assets/housesData.js'

import Algoritmos from '@/assets/pictures/casas em png/casa_algoritmos.png'
import IA from '@/assets/pictures/casas em png/casa_ia.png'
import Dev from '@/assets/pictures/casas em png/casa_dev.png'
import Inovacao from '@/assets/pictures/casas em png/casa_inovacao.png'
import Jogadores from '@/assets/pictures/casas em png/casa_jogadores.png'

export default defineComponent({
  name: 'ResultsView',
  setup() {
    const result = ref(null)
    const mentors = ref([])

    const houseImages = {
      'Casa dos Algoritmos': Algoritmos,
      "Casa das IA's": IA,
      'Casa dos Devs': Dev,
      'Casa da Inovação': Inovacao,
      'Casa dos Jogadores': Jogadores
    }

    const getHouseColor = (house) => {
      switch (house) {
        case 'Casa dos Algoritmos':
          return 'red lighten-1'
        case "Casa das IA's":
          return 'blue lighten-1'
        case 'Casa dos Devs':
          return 'green lighten-1'
        case 'Casa da Inovação':
          return 'amber lighten-1'
        case 'Casa dos Jogadores':
          return 'purple lighten-1'
        default:
          return 'grey'
      }
    }

    const refazer = () => {
      localStorage.removeItem('quiz-result')
      window.location.href = '/quiz'
    }

    onMounted(() => {
      const saved = localStorage.getItem('quiz-result')
      if (saved) {
        const parsed = JSON.parse(saved)

        const max = Math.max(...parsed.percentages.map(p => p.percent))
        const empatadas = parsed.percentages.filter(p => p.percent === max)
        const sorteada = empatadas[Math.floor(Math.random() * empatadas.length)]
        parsed.mainHouse = sorteada.house

        result.value = parsed
        mentors.value = housesData[parsed.mainHouse] || []
      }
    })

    return {
      result,
      mentors,
      refazer,
      getHouseColor,
      houseImages
    }
  }
})
</script>

<style scoped>
.result-screen {
  margin-top: 64px; /* evita colar no Header */
}

.result-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
.highlighted-house {
  font-weight: bold;
  color: #673ab7;
}
.mentors-list {
  max-height: 200px;
  overflow-y: auto;
}
.mentor-item {
  background-color: #f3e5f5;
  border-radius: 8px;
  margin-bottom: 8px;
}
.mentor-item:hover {
  background-color: #e1bee7;
}
.mentor-item .v-list-item-icon {
  color: #673ab7;
}
.mentor-item .v-list-item-content {
  font-weight: 500;
  color: #000;
}
.mentor-item .v-list-item-content:hover {
  text-decoration: underline;
}
.mentor-item .v-list-item-icon:hover {
  color: #5e35b1;
}
.house-image {
  border-radius: 12px;
  max-width: 100%;
  object-fit: contain;
}
.button-group {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 24px;
  flex-wrap: wrap;
}
</style>
