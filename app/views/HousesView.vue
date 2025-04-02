<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>Todas as Casas</h1>
        <v-btn color="secondary" class="mt-4" to="/quiz">Iniciar Quiz</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col v-for="(house, index) in houses" :key="index" cols="12" sm="6" md="4" lg="3">
        <HouseCard
          :house="house"
          :isFavorite="currentFavorite === house.name"
          @toggle-favorite="handleToggleFavorite"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HouseCard from '@/components/HouseCard.vue';
import Algoritmos from '@/assets/Algoritmos.jpg';
import IA from '@/assets/IA.jpg';
import Dev from '@/assets/Dev.jpg';
import Inovacao from '@/assets/Inovacao.jpg';
import Jogadores from '@/assets/Jogadores.jpg';

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
    };
  },
  methods: {
    handleToggleFavorite(houseName) {
      this.currentFavorite = this.currentFavorite === houseName ? null : houseName;
    },
  },
};
</script>

<style scoped>

</style>