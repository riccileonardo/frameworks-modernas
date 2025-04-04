<template>
  <v-card
    class="mx-auto my-4"
    max-width="344"
    color="purple-lighten-4"
    style="border: 2px solid #6a1b9a; border-radius: 10px;"
  >
    <v-img :src="house.image" height="410px" cover></v-img>
    <v-card-title>{{ house.name }}</v-card-title>
    <v-card-text>
      <p>{{ house.description }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        :color="isFavorite ? 'yellow' : 'grey'"
        @click="toggleFavorite"
        icon
      >
        <v-icon>{{ isFavorite ? 'mdi-star' : 'mdi-star-outline' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <!-- Mensagem de Favorito -->
    <v-card-text v-if="isFavorite" class="favorite-message">
      Você se identifica com a <strong>{{ house.name }}</strong>. <br />
      Espero que consiga entrar nela!
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    house: {
      type: Object,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleFavorite() {
      this.$emit('toggle-favorite', this.house.name);
    },
  },
};
</script>

<style scoped>
.favorite-message {
  font-size: 0.9rem;
  color: #000000;
  text-align: center;
  margin-top: -10px;
}

.favorite-message strong {
  color: #000000;
}
</style>