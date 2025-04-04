<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>Todas as Casas</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
        v-for="(house, index) in houses.slice(0, 3)"
        :key="'top-' + index"
        cols="12"
        sm="6"
        md="4"
      >
        <HouseCard
          :house="house"
          :isFavorite="currentFavorite === house.name"
          @toggle-favorite="handleToggleFavorite"
        />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
        v-for="(house, index) in houses.slice(3)"
        :key="'bottom-' + index"
        cols="12"
        sm="6"
        md="4"
      >
        <HouseCard
          :house="house"
          :isFavorite="currentFavorite === house.name"
          @toggle-favorite="handleToggleFavorite"
        />
      </v-col>
    </v-row>

    <!-- Botão abaixo dos cards -->
    <v-row justify="center" class="mt-6">
      <v-col cols="12" class="text-center">
        <v-btn color="deep-purple accent-4" dark to="/quiz" prepend-icon="mdi-school">
          Iniciar Quiz
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HouseCard from '@/components/HouseCard.vue'
import Algoritmos from '@/assets/pictures/casas em png/casa_algoritmos.png'
import IA from '@/assets/pictures/casas em png/casa_ia.png'
import Dev from '@/assets/pictures/casas em png/casa_dev.png'
import Inovacao from '@/assets/pictures/casas em png/casa_inovacao.png'
import Jogadores from '@/assets/pictures/casas em png/casa_jogadores.png'

export default {
  components: { HouseCard },
  data() {
    return {
      currentFavorite: null,
      houses: [
        {
          name: 'Casa dos Algoritmos',
          description: 'Rigor matemático, otimização, lógica implacável',
          image: Algoritmos,
        },
        {
          name: 'Casa das IAs',
          description: 'Inovação em IA, pensamento analítico, futurismo',
          image: IA,
        },
        {
          name: 'Casa dos Devs',
          description: 'Habilidade técnica, pragmatismo, impacto imediato',
          image: Dev,
        },
        {
          name: 'Casa da Inovação',
          description: 'Criatividade aplicada, interdisciplinaridade, empatia tecnológica',
          image: Inovacao,
        },
        {
          name: 'Casa dos Jogadores',
          description: 'Para os que transcendem as categorias tradicionais',
          image: Jogadores,
        },
      ],
    }
  },
  methods: {
    handleToggleFavorite(houseName) {
      this.currentFavorite = this.currentFavorite === houseName ? null : houseName
    },
  },
}
</script>

<style scoped>
.title {
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
}
h1 {
  font-size: 2.5rem;
  color: white;
  text-align: center;
  margin-bottom: 20px;
}
</style>
