import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import HousesView from '@/views/HousesView.vue';
import QuizView from '@/views/QuizView.vue';
import ResultsView from '@/views/ResultsView.vue';

const routes = [
  { path: '/', component: LoginView, name: 'Login' },
  { path: '/houses', component: HousesView, name: 'Houses', meta: { requiresAuth: true } },
  { path: '/quiz', component: QuizView, name: 'Quiz', meta: { requiresAuth: true } },
  { path: '/results', component: ResultsView, name: 'Results', meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔐 Proteção das rotas
router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const isLoggedIn = user?.loggedIn === true;

  if (to.meta.requiresAuth && !isLoggedIn) {

    next({ name: 'Login' });
  } else if (to.name === 'Login' && isLoggedIn) {

    next({ name: 'Houses' });
  } else {
    next();
  }
});

export default router;
