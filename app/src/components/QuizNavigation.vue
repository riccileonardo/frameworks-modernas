<template>
    <div class="d-flex justify-space-between mt-6">
      <v-btn
        color="deep-purple darken-2"
        dark
        @click="prev"
        :disabled="isFirst"
      >
        Voltar
      </v-btn>
  
      <v-btn
        v-if="!isLast"
        color="deep-purple darken-2"
        dark
        @click="next"
      >
        Próxima Pergunta
      </v-btn>
  
      <v-btn
        v-else
        color="green darken-2"
        dark
        @click="submit"
      >
        Finalizar Quiz
      </v-btn>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isFirst: {
        type: Boolean,
        required: true
      },
      isLast: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      prev() {
        this.$emit('prev')
      },
      next() {
        console.log("Emitting 'next' event...")
        this.$emit('next')
      },
      submit() {
        this.$emit('submit')
      }
    }
  }
  </script>