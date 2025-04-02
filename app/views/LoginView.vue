<template>
  <v-container fill-height fluid class="d-flex justify-center align-center background-purple">
    <v-card width="400" elevation="10" class="pa-6">
      <v-card-title class="text-center text-h5 font-weight-bold mb-4">Login</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="username"
          label="Usuário"
          prepend-icon="mdi-account"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Senha"
          type="password"
          prepend-icon="mdi-lock"
          outlined
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="primary" large @click="login">Entrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const validUsers = [
        { username: 'joao', password: '123' },
        { username: 'leo', password: '123' },
      ];

      const isValidUser = validUsers.some(
        (user) => user.username === this.username && user.password === this.password
      );

      if (isValidUser) {
        this.$router.push('/houses');
      } else {
        alert('Usuário ou senha inválidos!');
      }
    },
  },
};
</script>

<style scoped>

.background-purple {
  height: 100vh; 
  margin: 0; 
  padding: 0; 
}

.v-card {
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>