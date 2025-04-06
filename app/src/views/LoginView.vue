<template>
  <v-container fill-height fluid class="login-screen">
    <v-row justify="center" class="fill-height">
      <v-col cols="12" sm="8" md="5" lg="4">
        <v-card class="login-card" elevation="12">
          <v-card-text>
            <v-text-field
              v-model="username"
              label="Usuário"
              prepend-icon="mdi-account"
              outlined
            />
            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
              prepend-icon="mdi-lock"
              outlined
            />
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn color="accent-4" dark @click="login">
              ENTRAR NA MAGIA
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user?.loggedIn) {
      this.$router.push('/houses')
    }
  },
  methods: {
    login() {
      const validUsers = [
        { username: 'joao', password: '123' },
        { username: 'leo', password: '123' }
      ]

      const isValid = validUsers.some(
        (u) => u.username === this.username && u.password === this.password
      )

      if (isValid) {
        localStorage.setItem('user', JSON.stringify({
          loggedIn: true,
          username: this.username
        }))
        this.$router.push('/houses')
      } else {
        alert('Usuário ou senha inválidos!')
      }
    }
  }
}
</script>

<style scoped>
.login-card {
  width: 500px;
  height: 600px;
  background-image: url('@/assets/pictures/plataforma-34.png');
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  padding: 320px 32px 32px 32px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.login-card .v-card-title {
  font-weight: bold;
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 16px;
}

.login-card .v-card-text {
  border-radius: 12px;
  padding: 16px;
  background-color: #f2efc2;
  border: black 2px solid;
}

.login-card .v-btn {
  margin-top: 24px;
  font-weight: bold;
  background-color: red;
  color: white !important;
  border: black 2px solid;
}
</style>
