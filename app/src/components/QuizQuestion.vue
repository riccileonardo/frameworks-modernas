<template>
    <div class="question-container">
      <h2 class="question-text">{{ question }}</h2>
  
      <v-radio-group
        v-model="internalValue"
        class="options-group"
        :rules="[v => !!v || 'Por favor, selecione uma opção']"
        required
      >
        <v-radio
          v-for="(option, i) in answers"
          :key="i"
          :label="option.text"
          :value="option.value"
          class="option-item"
          color="primary"
        ></v-radio>
      </v-radio-group>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      question: {
        type: String,
        required: true
      },
      answers: {
        type: Array,
        required: true
      },
      modelValue: {
        type: [String, Number],
        default: null
      }
    },
    computed: {
      internalValue: {
        get() {
          return this.modelValue
        },
        set(value) {
          this.$emit('update:modelValue', value)
        }
      }
    }
  }
  </script>
  
  
  <style scoped>
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
  </style>