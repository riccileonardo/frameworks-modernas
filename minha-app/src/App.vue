<template>
    <h1> Olá {{nome}}, você tem {{ new Date().getFullYear() - anoNascimento }} anos!</h1>
    <br>
    <h2 style="color: {{color}}">Fonte da Juventude:</h2>
    <!--  V-ON liga o template com o script. -->
    <button @click="rejuvenescer">Clique Aqui</button>
    <input type="text" v-model="nome">  

</template>

<script setup>

import { ref } from 'vue';

const nome = ref('Leozin');
const anoNascimento = ref(2003);
const rejuvenescer = () => {
    anoNascimento.value += 10;
}
const color = ref('red');
</script>

<style>
    p{ color: red;}
    h1{ color: blue;}
</style>